import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import {CgSearch} from 'react-icons/cg'
import GeneralInformationSlider from './GeneralInformationSlider'
import HomeMainContent from './HomeMainContent'
import { getData } from '../helpers/CRUD'
import { getUrlWeather } from '../helpers/URL'
import { infoWeather } from '../Redux/features/weatherSlice'
import { useDispatch } from "react-redux";
import Loading from './Loading'
import * as Yup from "yup";
import { useFormik } from "formik";
import { searchWeather } from '../helpers/searchWeather'


const Home = () => {

  const [weather, setWeather] = useState(null)
  const [cargando, setCargando] = useState(true)
  const dispatch = useDispatch()

  const initialState = {
    lon: "-74.08083",
    lat: "4.59889",
  }

  useEffect(() => {

    const resolvePromise = async () => {
       await getData(setWeather, getUrlWeather(initialState))
       setCargando(false)
       if (weather) {
        dispatch(infoWeather(weather))
      }
    }
    resolvePromise()
  },[cargando])

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string()
    }),
    onSubmit: ({search}) => {
       searchWeather(setWeather, search)
      dispatch(infoWeather(weather))
    },
  });

  return (
    <>
    <NavBar />
    <form className='w-full max-w-xl flex justify-center items-center mx-auto mt-4' onSubmit={formik.handleSubmit}>
      <div className='border border-primary rounded-2xl hover:border-primary hover:ring-0 bg-transparent text-center  transition-all w-1/2 duration-500 hover:w-10/12 outline-none flex justify-around items-center'>
      <input type="search" name="search" id="search" className='border border-transparent focus:border-transparent focus:ring-0 bg-transparent text-start outline-none w-3/5'
      autoComplete='off'
      onChange={formik.handleChange}
      value={formik.values.search}
      />
      <CgSearch color='#333333' size='30'/>
      </div>
    </form>

    <div className='w-screen flex flex-col mt-7 gap-4 mx-auto'>
      {
        cargando
        ?  <Loading/> :
        <>
        <GeneralInformationSlider infoWeather={weather.list[0]} />
        <HomeMainContent infoWeather={weather.list[0]}/>
        </>
      }
    </div>
    </>

  )
}

export default Home