#!/usr/bin/env node
// Self-check. Locks SELF-3 / SELF-4 / SELF-6 / SELF-7 and LAND-3.
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const warnings = [];

const fail = (code, msg) => failures.push(`${code}: ${msg}`);
const warn = (code, msg) => warnings.push(`${code}: ${msg}`);

async function readText(p) {
  return readFile(join(ROOT, p), 'utf8');
}

async function listFiles(dir = '.', acc = []) {
  const entries = await readdir(join(ROOT, dir), { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const rel = dir === '.' ? e.name : `${dir}/${e.name}`;
    if (e.isDirectory()) await listFiles(rel, acc);
    else acc.push(rel);
  }
  return acc;
}

const catalog = JSON.parse(await readText('catalog.json'));
const gatesDoc = JSON.parse(await readText('gates.json'));
const pkg = JSON.parse(await readText('package.json'));
const dimensionIds = new Set(catalog.dimensions.map((d) => d.id));
const byId = new Map(gatesDoc.gates.map((g) => [g.id, g]));

for (const d of catalog.dimensions) {
  try {
    await stat(join(ROOT, d.path));
  } catch {
    fail('SELF-3', `catalog lists ${d.path} but the file does not exist`);
  }
}

if (catalog.version !== gatesDoc.version) {
  fail('LAND-3', `catalog.json ${catalog.version} != gates.json ${gatesDoc.version}`);
}
if (pkg.version !== catalog.version) {
  fail('LAND-3', `package.json ${pkg.version} != catalog.json ${catalog.version}`);
}

const changelog = await readText('CHANGELOG.md');
if (!changelog.includes(`## ${catalog.version}`)) {
  fail('LAND-3', `CHANGELOG.md has no section ## ${catalog.version}`);
}

const seen = new Set();
for (const g of gatesDoc.gates) {
  if (seen.has(g.id)) fail('SELF-3', `duplicate gate id ${g.id}`);
  seen.add(g.id);
  if (!dimensionIds.has(g.dimension)) {
    fail('SELF-3', `${g.id} points at unknown dimension "${g.dimension}"`);
    continue;
  }
  if (!gatesDoc.severities[g.severity]) fail('SELF-3', `${g.id} has unknown severity ${g.severity}`);
  if (!gatesDoc.stages[g.stage]) fail('SELF-3', `${g.id} has unknown stage ${g.stage}`);
  if (g.deprecated && !g.supersededBy) fail('SELF-3', `${g.id} is deprecated without supersededBy`);
  const doc = await readText(`dimensions/${g.dimension}.md`);
  if (!doc.includes(g.id)) {
    fail('SELF-3', `${g.id} is in gates.json but not written in dimensions/${g.dimension}.md`);
  }
}

for (const d of catalog.dimensions) {
  const doc = await readText(d.path);
  const items = doc.split('\n').filter((l) => /^- \[[ x]\]/.test(l));
  for (const line of items) {
    if (!/`[A-Z]+-\d+`/.test(line)) {
      fail('SELF-3', `${d.path}: checklist item without gate id -> ${line.trim().slice(0, 60)}`);
    } else {
      const id = line.match(/`([A-Z]+-\d+)`/)[1];
      if (!seen.has(id)) fail('SELF-3', `${d.path}: ${id} is not in gates.json`);
      if (byId.get(id)?.deprecated) {
        fail('SELF-3', `${d.path}: active checklist cites deprecated ${id}`);
      }
    }
  }
}

const allFiles = await listFiles();
const mdFiles = allFiles.filter((f) => f.endsWith('.md'));
const exampleFiles = allFiles.filter((f) => f.startsWith('examples/') && !f.includes('.template.'));

const localPrefixes = new Set([...seen].map((id) => id.split('-')[0]));
const cited = new Set();
for (const f of exampleFiles) {
  const text = await readText(f);
  for (const m of text.matchAll(/`([A-Z]+-\d+)`/g)) {
    const id = m[1];
    if (seen.has(id)) {
      cited.add(id);
      continue;
    }
    if (localPrefixes.has(id.split('-')[0])) {
      fail('SELF-7', `${f}: cites unregistered ${id}`);
    }
  }
}

for (const g of gatesDoc.gates) {
  if (g.deprecated) continue;
  if (g.severity !== 'block') continue;
  if (g.evidence === 'none') continue;
  if (!cited.has(g.id)) {
    fail('SELF-7', `${g.id} is an active block gate with no example citation`);
  }
}

const readme = await readText('README.md');
if (!/ship-standard/.test(readme) || !/build-standard/.test(readme)) {
  fail('SELF-6', 'README.md must name ship-standard and build-standard');
}
if (!catalog.related?.['ability-harness'] || !catalog.related?.['review-harness']) {
  fail('RELATED-MISSING', 'catalog.related must name ability-harness and review-harness');
}
if (!/ability-harness/.test(readme) || !/review-harness/.test(readme)) {
  fail('RELATED-MISSING', 'README.md must name ability-harness and review-harness');
}
if (!/战场/.test(readme) || !/不删优势/.test(readme)) {
  fail('SELF-6', 'README.md must state the four-factor thesis (战场 + 不删优势)');
}

for (const f of mdFiles) {
  if (/最新|latest-version|FINAL/i.test(f)) {
    fail('SELF-4', `file name suggests a moving target: ${f}`);
  }
  const text = await readText(f);

  const headings = text.split('\n').filter((l) => /^##\s+\S/.test(l)).map((l) => l.trim());
  const dupes = headings.filter((h, i) => headings.indexOf(h) !== i);
  if (dupes.length) fail('SELF-4', `${f}: repeated heading ${[...new Set(dupes)].join(', ')}`);

  for (const line of text.split('\n')) {
    if (/^#{1,6}\s.*最新/.test(line)) fail('SELF-4', `${f}: heading claims 最新 -> ${line.trim()}`);
  }

  for (const m of text.matchAll(/\[[^\]]*\]\((\.\.?\/[^)#\s]+)/g)) {
    const target = resolve(dirname(join(ROOT, f)), m[1]);
    try {
      await stat(target);
    } catch {
      fail('SELF-4', `${f}: dead relative link ${m[1]}`);
    }
  }

  if (/\b(sk-[A-Za-z0-9]{16,}|AKIA[0-9A-Z]{12,}|ghp_[A-Za-z0-9]{20,})\b/.test(text)) {
    fail('SELF-4', `${f}: looks like a credential`);
  }
  if (/\b\d{1,3}(\.\d{1,3}){3}\b/.test(text) && !/0\.0\.0\.0|127\.0\.0\.1/.test(text)) {
    warn('HOST-IN-DOC', `${f}: contains a bare IP address`);
  }
}

try {
  const status = await readText('STATUS.md');
  if (!/Generated by/.test(status)) fail('SELF-3', 'STATUS.md is missing the generated banner');
  if (!status.includes(catalog.version)) {
    fail('SELF-3', `STATUS.md does not show catalog version ${catalog.version} — run npm run status`);
  }
} catch {
  fail('SELF-3', 'STATUS.md is missing — run npm run status');
}

const rel = (p) => relative(process.cwd(), p) || '.';
const active = gatesDoc.gates.filter((g) => !g.deprecated);
console.log(`creativity-is-engineering self-check (${rel(ROOT)})`);
console.log(`  dimensions: ${catalog.dimensions.length}`);
console.log(`  gates:      ${gatesDoc.gates.length} (${active.length} active, ${gatesDoc.gates.length - active.length} deprecated)`);
console.log(`  markdown:   ${mdFiles.length}`);
console.log(`  cited:      ${cited.size} active ids in examples`);

for (const w of warnings) console.log(`  warn  ${w}`);
for (const f of failures) console.log(`  FAIL  ${f}`);

if (failures.length) {
  console.log(`\n${failures.length} blocking problem(s).`);
  process.exit(1);
}
console.log(`\nall gates green${warnings.length ? ` (${warnings.length} warning)` : ''}.`);
