/**
 * Red probe template for TAX-3 / TAX-6.
 * Copy this file. First commit: assertions fail.
 * Second commit: minimum classifier turns them green.
 * Replace the sample strings with real page / API text.
 * This template is not a passing test and is skipped by npm run verify.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
// import { classify } from '../src/classify.mjs';

function classify(_text, _ctx) {
  return { kind: 'unknown', action: 'retry' };
}

test('resource rejected → refund, never retry-submit', () => {
  const out = classify('该资源所属域已被拒绝，请更换');
  assert.equal(out.action, 'refund');
  assert.equal(out.kind, 'domain-rejected');
});

test('rate limit → cooldown, never retry-submit', () => {
  const out = classify('验证过于频繁，请 5 分钟后再试');
  assert.equal(out.action, 'cooldown');
  assert.ok(out.minutes >= 5);
});

test('infra timeout at pre-resource stage → none', () => {
  const out = classify('fetch failed', { stage: 'pre-resource' });
  assert.equal(out.action, 'none');
});
