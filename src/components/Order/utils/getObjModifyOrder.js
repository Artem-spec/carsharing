import parseNumberToDate from "../../../utils/parseNumberToDate";
import getIntervalDate from "../../../utils/getIntervalDate";

const getObjModifyOrder = (responseOrder, rateDescr = null) => {
  const dateFrom = parseNumberToDate(responseOrder.dateFrom);
  const dateTo = parseNumberToDate(responseOrder.dateTo);
  return {
    squeezePoint: {
      description: `${responseOrder.cityId.name}, ${responseOrder.pointId.address}`,
      cityId: responseOrder.cityId.id,
      pointId: responseOrder.pointId.id,
    },
    model: {
      description: responseOrder.carId.name,
      carId: responseOrder.carId.id,
      carPrice: "",
    },
    color: responseOrder.color,
    duration: getIntervalDate(dateFrom, dateTo),
    dateFrom,
    dateTo,
    rate: {
      description: rateDescr,
      rateId: null,
      unit: "",
      price: "",
    },
    fuel: responseOrder.isFullTank,
    babyChair: responseOrder.isNeedChildChair,
    rightHandDrive: responseOrder.isRightWheel,
    price: responseOrder.price,
    id: responseOrder.id,
    status: responseOrder.orderStatusId.name,
  };
};
export default getObjModifyOrder;
