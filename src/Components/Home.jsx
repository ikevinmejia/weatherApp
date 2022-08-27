import React, { useEffect, useState } from 'react'
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
import Card from './Card'
import ContainerSimpleCards from './ContainerSimpleCards'

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
       const localStore = JSON.parse(localStorage.getItem('weather'))

       if (localStore != null) {
        console.log(localStore + 'STOREEEEEEEEE');
        setWeather(localStore)
        setCargando(false)
       } else {
        dispatch(infoWeather(weather))
        console.log('por defecto');
        setCargando(false)
      }
      //  if (weather) {
      //   dispatch(infoWeather(weather))
      // }
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
      localStorage.setItem('weather', JSON.stringify(weather))
      dispatch(infoWeather(weather))
    },
  });

  return (
    <>
    <form className='w-full max-w-xl flex justify-center items-center mx-auto mt-4' onSubmit={formik.handleSubmit}>
      <div className='border border-primary rounded-2xl hover:border-primary hover:ring-0 bg-transparent text-center  transition-all w-1/2 duration-500 hover:w-10/12 outline-none flex justify-around items-center'>
      <input type="search" name="search" id="search" className='border border-transparent focus:border-transparent focus:ring-0 bg-transparent text-start outline-none w-3/5'
      autoComplete='off'
      onChange={formik.handleChange}
      value={formik.values.search}
      />
      <button type='submit'>

      <CgSearch color='#333333' size='30'/>
      </button>
      </div>
    </form>

    <div className='w-screen flex flex-col mt-7 gap-4 mx-auto bg-gradient-to-b from-zinc-200 to-mainBgColor'>
      {
        cargando
        ?  <Loading/> :
        <>
        <GeneralInformationSlider infoWeather={weather.list[0]} />
        <HomeMainContent infoWeather={weather.list[0]} city={weather.city.name}/>
      <ContainerSimpleCards >
        <Card infoWeather={weather.list[1]} forecast='the next three hours'/>
        <Card infoWeather={weather.list[8]} forecast='tomorrow'/>
        <Card infoWeather={weather.list[16]} forecast='two days'/>
        <Card infoWeather={weather.list[24]} forecast='three days'/>
        <Card infoWeather={weather.list[32]} forecast='four days'/>
        <Card infoWeather={weather.list[39]} forecast='five days'/>
      </ContainerSimpleCards>
        </>
      }
    </div>
    </>

  )
}

export default Home