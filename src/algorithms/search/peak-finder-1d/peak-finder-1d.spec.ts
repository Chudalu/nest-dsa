import { PeakFinder1d } from './peak-finder-1d';

describe('PeakFinder1d', () => {
  let peakFinder = new PeakFinder1d();
  test.each([
    [[1, 2, 3, 4, 5, 6, 7, 8, 7, 6], 8],
    [[0, 1, 2, 3, 4], 4],
    [[9, 8, 7, 6, 5], 9],
    [[0, 0, 0, 0, 0], 0],
    [[0, 1, 0], 1],
    [[1, 5], 5],
    [[12], 12],
    [[], null],
    [null, null],
    [undefined, null],
  ])('a peak of [%p] is %p', (arr, peak) => {
    expect(peakFinder.find(arr)).toBe(peak);
  });
});
