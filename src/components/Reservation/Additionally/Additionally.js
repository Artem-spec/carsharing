import { useEffect } from "react";

const Additionally = (props) => {
  const { setButtonDisabled, setActiveTotal } = props;

  useEffect(() => {
    setButtonDisabled(true);
    setActiveTotal(false);
  });
  return <h1>Здась будет "Дополнительно"</h1>;
};
export default Additionally;
