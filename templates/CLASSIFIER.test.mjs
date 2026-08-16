/**
 * Red probe for a failure classifier.
 * First commit: these assertions fail (classifier missing or maps everything to retry).
 * Second commit: minimum implementation turns them green.
 *
 * Replace SAMPLE_* with real page / API text. Do not invent English enums.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { classify } from '../src/classify.mjs'; // you implement this

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

test('already sent → wait, do not resubmit', () => {
  const out = classify('我们已向该地址发送了一个一次性代码');
  assert.equal(out.action, 'wait');
});

test('infra timeout at pre-resource stage → none, do not retire', () => {
  const out = classify('fetch failed', { stage: 'pre-resource' });
  assert.equal(out.action, 'none');
});

test('infra timeout after resource held → retry-channel, keep resource', () => {
  const out = classify('ERR_PROXY_CONNECTION_FAILED', { stage: 'held' });
  assert.equal(out.action, 'retry-channel');
});
