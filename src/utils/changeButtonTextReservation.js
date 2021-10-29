const changeButtonText = (params, setButtonText) => {
  switch (params) {
    case `geolocation`:
      setButtonText("Выбрать модель");
      break;
    case `model`:
      setButtonText("Дополнительно");
      break;
    case `additionally`:
      setButtonText("Итого");
      break;
    case `total`:
      setButtonText("Заказать");
      break;
    default:
      setButtonText("Отменить");
      break;
  }
};
export default changeButtonText;
