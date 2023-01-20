export const convertPrice = (price: string) => {
  return parseInt(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
