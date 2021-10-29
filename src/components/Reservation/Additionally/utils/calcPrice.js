const calcPrice = (dataFrom, dateTo, price, unit) => {
  const timeDiff = dateTo.getTime() - dataFrom.getTime();
  const hourDays = Math.trunc(timeDiff / (1000 * 3600));
  switch (unit) {
    case "мин":
      return hourDays * 60 * price;
    default:
      return null;
  }
};
export default calcPrice;
