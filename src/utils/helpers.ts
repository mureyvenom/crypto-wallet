export const numberWithCommas = (x: number) => {
  return x
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
