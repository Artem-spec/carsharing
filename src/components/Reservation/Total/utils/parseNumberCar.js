const parseNumberCar = (number) => {
  const numberUpperCase = number.toUpperCase();
  return `${numberUpperCase[0]} 
          ${numberUpperCase.slice(1, 4)} 
          ${numberUpperCase.slice(4, 6)} 
          ${numberUpperCase.slice(6, 9)}`;
};
export default parseNumberCar;
