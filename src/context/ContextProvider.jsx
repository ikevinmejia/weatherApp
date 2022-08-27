import React, { createContext, useState } from 'react'

const Contexto = createContext()

const ContextProvider = ({children}) => {

  const [cargando, setCargando] = useState(true);
  const [weatherData, setWeatherData] = useState(true);
  const [show, setShow] = useState(false);

  
  const onShow = () => {
    setShow(!show);
  };

  const data = {
    cargando,
    setCargando,
    weatherData,
    setWeatherData,
    show,
    onShow
  }


  return (
    <Contexto.Provider value={data}>{children}</Contexto.Provider>
  )
}

export {
  ContextProvider,
  Contexto
}