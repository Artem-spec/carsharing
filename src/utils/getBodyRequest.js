import parseDateToNumber from "./parseDateToNumber";

const getBodyRequest = (orderStatus, order) => {
  return {
    orderStatusId: orderStatus,
    cityId: { id: order.squeezePoint.cityId },
    pointId: { id: order.squeezePoint.pointId },
    carId: { id: order.model.carId },
    color: order.color,
    dateFrom: parseDateToNumber(order.dateFrom),
    dateTo: parseDateToNumber(order.dateTo),
    rateId: { id: order.rate.rateId },
    price: order.price,
    isFullTank: order.fuel,
    isNeedChildChair: order.babyChair,
    isRightWheel: order.rightHandDrive,
  };
};
export default getBodyRequest;
