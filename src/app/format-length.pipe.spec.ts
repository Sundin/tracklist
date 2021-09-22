import { FormatLengthPipe } from './format-length.pipe';

describe('LengthCalculatorPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
