import { useEffect } from "react";

const Total = (props) => {
  const { setButtonDisabled } = props;
  useEffect(() => {
    setButtonDisabled(true);
  });
  return <h1>Здась будет "Итого"</h1>;
};
export default Total;
