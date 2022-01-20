import checkHandler from '../../../components/utils/check';

describe('Review the checkbox', () => {
  test('Review if the input is checked', () => {
    const inputCheck = document.createElement('input');
    const checked = {
      target: { checked: true },
    };
    const expected = checkHandler(checked, inputCheck);
    expect(expected).toBe('true');
  });

  test('Review if the input is not checked', () => {
    const inputCheck = document.createElement('input');
    const checked = {
      target: { checked: false },
    };
    const expected = checkHandler(checked, inputCheck);
    expect(expected).toBe(null);
  });
});
