import React from "react";
import { kelvinToCelsius } from "../helpers/kelvinToCelsius";
import { getIconWeather } from "../helpers/URL";

const HomeMainContent = ({ infoWeather }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
  } = infoWeather;

  const { weather } = infoWeather;
  const { main, description, icon } = weather[0];

  return (
    <section className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 ">
        <div className=" w-1/3 h-32 md:w-1/4 md:max-w-[218px] flex justify-center items-center ">
          <figure className="w-11/12 h-11/12">
            <img
              src={getIconWeather(icon)}
              alt="imagen del estado del clima"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl">{`${kelvinToCelsius(temp)}° ${main}`}</h2>
          <h3 className="text-base">
            <span className="font-semibold text-secondary">
              Feels like:
            </span>{" "}
            {`${kelvinToCelsius(feels_like)}°`}{" "}
            <span className="font-semibold text-secondary">Bajo:</span>{" "}
            {`${kelvinToCelsius(temp_min)}°`}{" "}
            <span className="font-semibold text-secondary">Alto:</span>{" "}
            {`${kelvinToCelsius(temp_max)}°`}{" "}
          </h3>
        </div>
      </div>
      <h2 className="text-center text-xl font-normal">{description}</h2>
    </section>
  );
};

export default HomeMainContent;
