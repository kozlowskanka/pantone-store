export const sumPrice = (array, prop) =>
  array.map(item => item[prop]).reduce((prev, curr) => prev + curr, 0);
