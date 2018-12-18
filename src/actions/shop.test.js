import { startRequest, START_REQUEST } from './shop';

describe('Actions', () => {
  test('startRequest Action', () => {
    const result = startRequest();
    const expected = {
      type: START_REQUEST,
    };

    expect(result).toEqual(expected);
  });
});
