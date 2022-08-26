import React from "react";
import { kelvinToCelsius } from "../helpers/kelvinToCelsius";
import { getIconWeather } from "../helpers/URL";

const Card = ({infoWeather, forecast}) => {

    // {icon, forecast, temp, description, wind, humidity, pressure}

    const {
        main: {humidity, pressure},
        wind: {speed},
      } = infoWeather;

      const {
        main: {temp}
      } = infoWeather;

      const { weather } = infoWeather;
      const { description, icon } = weather[0];
  return (
    <div
      className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-neutral-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >

      <img
        className="object-contain w-full h-40 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={getIconWeather(icon)}
        alt="weather icon"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`Forecast for ${forecast}`}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span>{`${kelvinToCelsius(temp)}°`}</span>{''} {description}
        </p>
        <div className=" flex flex-wrap gap-3">
         <p><span className="font-semibold text-secondary">Wind:</span>{''} {speed} m/s</p>
         <p><span className="font-semibold text-secondary">humidity:</span>{''} {humidity} %</p>
         <p><span className="font-semibold text-secondary">Pressure:</span>{''} {pressure} hPa</p>
      </div>
      </div>
    </div>
  );
};

export default Card;
