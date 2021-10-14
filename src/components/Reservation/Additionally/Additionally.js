import { useEffect } from "react";

const Additionally = (props) => {
  const { setButtonDisabled } = props;

  useEffect(() => {
    setButtonDisabled(true);
  });
  return <h1>Здась будет "Дополнительно"</h1>;
};
export default Additionally;
