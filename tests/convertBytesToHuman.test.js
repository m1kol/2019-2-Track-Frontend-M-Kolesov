/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from '../convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe("5 B")
  expect(convertBytesToHuman(1023)).toBe("1023 B")
  expect(convertBytesToHuman(2048)).toBe("2 KB")
  expect(convertBytesToHuman(536870912)).toBe("512 MB")
});

// другая группа проверок
