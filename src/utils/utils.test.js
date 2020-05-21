const { evaluateConditions } = require('./utils');

describe('evaluateConditions', () => {
  test('Returns true when conditions are empty', () => {
    expect(evaluateConditions({}, { wealth: 25 })).toBe(true);
  });
  test('Returns false when conditions are not met', () => {
    expect(evaluateConditions({ wealth: 50 }, { wealth: 25 })).toBe(false);
  });
  test('Returns true when conditions are met', () => {
    expect(evaluateConditions({ wealth: 50 }, { wealth: 50 })).toBe(true);
  });
  test('Works for any condition/value pair', () => {
    expect(evaluateConditions({ troops: 100 }, { troops: 1000 })).toBe(true);
    expect(evaluateConditions({ troops: 100 }, { troops: 50 })).toBe(false);
  });
  test('Works for multiple conditions', () => {
    const conditions = { wealth: 500, troops: 3000 };
    const values = { wealth: 1000, troops: 2500 };
    const values2 = { wealth: 500, troops: 3500 };

    expect(evaluateConditions(conditions, values)).toBe(false);
    expect(evaluateConditions(conditions, values2)).toBe(true);
  });
  test('Evaluates negative conditions as "less than"', () => {
    const conditions = { wealth: -50 };
    const values = { wealth: 25 };
    const values2 = { wealth: 75 };

    expect(evaluateConditions(conditions, values)).toBe(true);
    expect(evaluateConditions(conditions, values2)).toBe(false);
  });
});
