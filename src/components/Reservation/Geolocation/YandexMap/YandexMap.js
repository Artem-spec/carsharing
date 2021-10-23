import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

const YandexMap = (props) => {
  const { city, order, defCoords } = useSelector((state) => state);
  const { address, handleClickPlacemark } = props;
  const [ymaps, setYmaps] = useState(null);
  const [addressMap, setAddressMap] = useState([]);
  const [stateCoords, setStateCoords] = useState({
    center: city.center,
    zoom: city.zoom,
  });
  useEffect(() => () => setStateCoords({}), []);
  //-------------------------------------------------------
  //  Получение координат, массовая загрузка. Исполльзуется
  //  только в самом начале, когда получаем ymaps.
  //  Получаем метки на вывод (addressMap)
  //-------------------------------------------------------
  const getCoordsMass = async (ymaps, address) => {
    const result = [];
    for (let index = 0; index < address.length; index++) {
      await ymaps
        .geocode(`${address[index].cityId.name}, ${address[index].address}`)
        .then((result) => result.geoObjects.get(0).geometry.getCoordinates())
        .then((coords) => {
          const objGeo = {
            city: address[index].cityId.name,
            address: address[index].address,
            center: coords,
          };
          result.push(objGeo);
        });
    }
    setAddressMap(result);
  };
  //-------------------------------------------------------
  //  Получение координат. Исполльзуется только если есть
  //  изменение дефолтных координат
  //-------------------------------------------------------
  const getCoords = async (ymaps, address) => {
    let result;
    await ymaps
      .geocode(`${address}`)
      .then((result) => result.geoObjects.get(0).geometry.getCoordinates())
      .then((coords) => {
        result = coords;
      });
    return result;
  };

  useEffect(() => {
    const getAddressAll = async () => {
      if (ymaps) {
        await getCoordsMass(ymaps, address);
      }
    };
    getAddressAll();
  }, [ymaps, address]);

  useEffect(() => {
    const getCenter = async () => {
      if (ymaps) {
        if (!order.squeezePoint.description) {
          const center = await getCoords(ymaps, defCoords.name);
          setStateCoords({
            ...defCoords,
            center,
          });
        } else {
          const center = await getCoords(ymaps, order.squeezePoint.description);
          setStateCoords({
            ...defCoords,
            center,
          });
        }
      }
    };
    getCenter();
  }, [defCoords, ymaps, order]);

  return (
    <YMaps
      query={{
        load: "package.full",
        apikey: "ed7f0459-c60a-400a-be45-edddcc8258bc",
      }}
    >
      <Map
        state={stateCoords}
        width={"100%"}
        height={"100%"}
        onLoad={(ymaps) => {
          setYmaps(ymaps);
        }}
      >
        <Clusterer
          options={{
            preset: "islands#invertedVioletClusterIcons",
            groupByCoordinates: false,
          }}
        >
          {ymaps &&
            addressMap.map((address, index) => {
              return (
                <Placemark
                  key={index}
                  geometry={address.center}
                  onClick={(geometry) =>
                    handleClickPlacemark(address, geometry)
                  }
                />
              );
            })}
        </Clusterer>
      </Map>
    </YMaps>
  );
};
export default YandexMap;
