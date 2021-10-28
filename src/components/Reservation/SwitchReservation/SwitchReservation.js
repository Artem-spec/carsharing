import { useEffect } from "react";
import { useParams } from "react-router";
import Geolocation from "../Geolocation/Geolocation";
import Model from "../Model/Model";
import Additionally from "../Additionally/Additionally";
import Total from "../Total/Total";
import Order from "../../Order/Order";

const SwitchReservation = (props) => {
  const { id } = useParams();
  const { setDisabled, setParams } = props;

  useEffect(() => {
    setParams(id);
  }, [id, setParams]);

  switch (id) {
    case `geolocation`:
      return <Geolocation setButtonDisabled={setDisabled} />;
    case `model`:
      return <Model setButtonDisabled={setDisabled} />;
    case `additionally`:
      return <Additionally setButtonDisabled={setDisabled} />;
    case `total`:
      return <Total setButtonDisabled={setDisabled} />;
    default:
      return <Order orderId={id} setButtonDisabled={setDisabled} />;
  }
};
export default SwitchReservation;
