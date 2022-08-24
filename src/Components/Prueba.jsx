import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/CRUD'
import { getCoordsMapbox, getUrlWeather } from '../helpers/URL'

const Prueba = () => {

    const coords = {lat: "-74.08083", lon:"4.59889"}
    // const [prueba, setPrueba] = useState('')
    const [coordenadas, setCoordenadas] = useState("")

    useEffect(() => {

        // getData(setPrueba,getCoordsMapbox("bogota"))
        getData(setCoordenadas, getUrlWeather(coords))

    }, [])

    // https://api.openweathermap.org/data/3.0/onecall?lat=-74.08083&lon=4.59889&units=metric&lang=es&appid=42a661b3dda2f40d87ecdd10b6663a1f

    // console.log(prueba);
    console.log(coordenadas);


  return (
    <div>
        <form action="">
            <input type="text" />
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default Prueba