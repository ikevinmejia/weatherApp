import React from 'react'

const GeneralInformationSlider = ({infoWeather}) => {

  const {
    main: {humidity, pressure},
    visibility,
    wind: {speed},
    clouds: {all:cloud}

  } = infoWeather;

  return (

    <section className=' w-full overflow-scroll py-3 bg-greyColor'>
        <div className='w-max flex gap-4 justify-center items-center mx-auto'>
          <p><span className='font-semibold text-secondary'>Wind: </span>{speed} m/s</p>
          <p><span className='font-semibold text-secondary'>Humidity: </span>{humidity} %</p>
          <p><span className='font-semibold text-secondary'>Cloudiness: </span>{cloud} %</p>
          <p><span className='font-semibold text-secondary'>Visibility: </span>{visibility/1000} km</p>
          <p><span className='font-semibold text-secondary'>Pressure: </span>{pressure} hPa</p>
        </div>
      </section>

  )
}

export default GeneralInformationSlider