const getIntervalDate = (dateFrom, dateTo) => {
  const timeDiff = dateTo.getTime() - dateFrom.getTime();
  const diffDays = Math.trunc(timeDiff / (1000 * 3600 * 24));
  const hours = Math.abs(dateTo.getHours() - dateFrom.getHours());
  const minuts = Math.abs(
    dateTo.getMinutes() - dateFrom.getMinutes()
  );

  return `${diffDays} д., ${hours} ч., ${minuts} мин.`;
};
export default getIntervalDate;
