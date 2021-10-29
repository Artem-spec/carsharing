const parseNumberToDate = (number) => {
  const numberDate = String(number);
  const year = numberDate.slice(0, 4);
  const month = numberDate.slice(4, 6);
  const day = numberDate.slice(6, 8);
  const hours = numberDate.slice(8, 10);
  const minutes = numberDate.slice(10, 12);
  return new Date(year, month, day, hours, minutes);
};
export default parseNumberToDate;
