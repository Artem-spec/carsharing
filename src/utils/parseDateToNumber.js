const parseDateToNumber = (date) => {
  const year = date.getFullYear();
  let month = String(date.getMonth());
  if (month.length === 1) month = "0" + month;
  let day = String(date.getDate());
  if (day.length === 1) day = "0" + day;
  let hours = String(date.getHours());
  if (hours.length === 1) hours = "0" + hours;
  let minutes = String(date.getMinutes());
  if (minutes.length === 1) minutes = "0" + minutes;
  return parseInt(`${year}${month}${day}${hours}${minutes}`);
};
export default parseDateToNumber;
