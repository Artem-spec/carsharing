import { useEffect } from "react";
import { useParams } from "react-router";
import Geolocation from "../Geolocation/Geolocation";
import Model from "../Model/Model";
import Additionally from "../Additionally/Additionally";
import Total from "../Total/Total";

const SwitchReservation = (props) => {
  const { id } = useParams();
  const {
    setDisabled,
    setActiveModel,
    setActiveAdditionally,
    setActiveTotal,
    setParams,
  } = props;

  useEffect(() => {
    setParams(id);
  }, [id, setParams]);

  switch (id) {
    case `geolocation`:
      return (
        <Geolocation
          setButtonDisabled={setDisabled}
          setActiveModel={setActiveModel}
          setActiveAdditionally={setActiveAdditionally}
          setActiveTotal={setActiveTotal}
        />
      );
    case `model`:
      return (
        <Model
          setButtonDisabled={setDisabled}
          setActiveAdditionally={setActiveAdditionally}
          setActiveTotal={setActiveTotal}
        />
      );
    case `additionally`:
      return (
        <Additionally
          setButtonDisabled={setDisabled}
          setActiveTotal={setActiveTotal}
        />
      );
    case `total`:
      return <Total setButtonDisabled={setDisabled} />;
    default:
      break;
  }
};
export default SwitchReservation;
