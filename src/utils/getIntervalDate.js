const getIntervalDate = (dateFrom, dateTo) => {
  let delta = Math.abs(dateTo - dateFrom) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  return `${days} д., ${hours} ч., ${minutes} мин.`;
};
export default getIntervalDate;
