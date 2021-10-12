import { useEffect } from "react";

const Model = (props) => {
  const { setButtonDisabled, setActiveAdditionally, setActiveTotal } = props;
  useEffect(() => {
    setButtonDisabled(true);
    setActiveAdditionally(false);
    setActiveTotal(false);
  });
  return <h1>Здась будет "Модель"</h1>;
};
export default Model;
