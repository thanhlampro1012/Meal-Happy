import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const directory = await mkdtemp(join(tmpdir(), 'hen-wheel-'));
try {
  const result = await build({ entryPoints: ['app/lib/wheel.ts'], bundle: true, format: 'esm', platform: 'node', write: false });
  const path = join(directory, 'wheel.mjs');
  await writeFile(path, result.outputFiles[0].contents);
  const { randomWheelIndex, landingRotation, indexAtPointer, normalizeAngle, shortWheelLabel } = await import(path);
  const checks = [];
  function check(name, run) { run(); checks.push(name); console.log('PASS ' + name); }

  check('empty, negative, fractional or excessive counts fail without selection', () => {
    for (const count of [0, -1, 1.5, NaN, Infinity, 2 ** 32 + 1]) assert.throws(() => randomWheelIndex(count, () => 0), RangeError);
  });
  check('one dish is deterministic and does not consume randomness', () => {
    assert.equal(randomWheelIndex(1, () => { throw new Error('Should not be called'); }), 0);
  });
  check('modulo rejection discards the incomplete high tail', () => {
    const values = [4294967295, 4294967294, 4294967293, 14];
    assert.equal(randomWheelIndex(7, () => values.shift()), 0);
    assert.equal(values.length, 0);
    assert.equal(randomWheelIndex(500, () => 4294966999), 499);
  });
  check('valid zero and uint32 maximum map to expected indices', () => {
    assert.equal(randomWheelIndex(16, () => 0), 0);
    assert.equal(randomWheelIndex(16, () => 4294967295), 15);
    assert.equal(randomWheelIndex(2 ** 32, () => 4294967295), 4294967295);
  });
  check('bad random sources fail rather than hanging or returning out of range', () => {
    for (const value of [-1, 1.4, NaN, Infinity, 2 ** 32]) assert.throws(() => randomWheelIndex(4, () => value), RangeError);
    let tries = 0;
    assert.throws(() => randomWheelIndex(7, () => { tries++; return 4294967295; }), /quay lại/);
    assert.equal(tries, 128);
  });
  check('every sector lands under the top pointer for all supported list sizes', () => {
    for (let count = 1; count <= 500; count++) {
      for (let selected = 0; selected < count; selected++) {
        const start = (selected % 9) * 137.27 - 300;
        const end = landingRotation(start, count, selected);
        assert.equal(indexAtPointer(end, count), selected, `${count} dishes, selected ${selected}, rotation ${end}`);
        assert.ok(end >= start + 5 * 360);
        assert.ok(end < start + 6 * 360 + 1e-9);
      }
    }
  });
  check('consecutive spins remain correct across full turns and wraparound', () => {
    let rotation = 0;
    for (const index of [0, 6, 3, 3, 2, 0, 1, 5, 4]) {
      rotation = landingRotation(rotation, 7, index);
      assert.equal(indexAtPointer(rotation, 7), index);
    }
    assert.equal(indexAtPointer(0, 4), 0);
    assert.equal(indexAtPointer(-90, 4), 1);
    assert.equal(indexAtPointer(90, 4), 3);
    assert.equal(normalizeAngle(-360), 0);
  });
  check('invalid targets or rotations are rejected', () => {
    assert.throws(() => landingRotation(0, 4, 4), RangeError);
    assert.throws(() => landingRotation(NaN, 4, 2), RangeError);
    assert.throws(() => landingRotation(0, 4, 2, -1), RangeError);
  });
  check('short labels preserve Vietnamese Unicode without splitting surrogate pairs', () => {
    assert.equal(shortWheelLabel('Phở bò tái', 30), 'Phở bò tái');
    assert.equal(shortWheelLabel('Bánh tráng trộn nhiều topping', 12), 'Bánh tráng …');
    assert.equal(shortWheelLabel('🍜 Mì vịt tiềm', 3), '🍜 …');
  });
  console.log(`\n${checks.length} wheel checks passed.`);
} finally { await rm(directory, { recursive: true, force: true }); }
