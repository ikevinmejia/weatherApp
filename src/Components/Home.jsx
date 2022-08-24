import React from 'react'
import NavBar from './NavBar'
import {CgSearch} from 'react-icons/cg'

const Home = () => {
  return (
    <>
    <NavBar />
    <form className='w-full max-w-xl flex justify-center items-center mx-auto mt-4'>
      <div className='border border-primary rounded-2xl hover:border-primary hover:ring-0 bg-transparent text-center  transition-all w-1/2 duration-500 hover:w-10/12 outline-none flex justify-around items-center'>
      <input type="search" name="buscar" id="buscar" className='border border-transparent focus:border-transparent focus:ring-0 bg-transparent text-start outline-none w-3/5' />
      <CgSearch color='#333333' size='30'/>
      </div>
    </form>

    <div className='w-screen flex flex-col mt-7 gap-4 mx-auto'>
      <section className=' w-full overflow-scroll py-3 bg-greyColor'>
        <div className='w-max flex gap-4 justify-center items-center mx-auto'>
          <p><span className='font-semibold text-secondary'>Eólico:</span> 17kph</p>
          <p><span className='font-semibold text-secondary'>Humedad:</span>23%</p>
          <p><span className='font-semibold text-secondary'>Punto de rocío:</span>7°</p>
          <p><span className='font-semibold text-secondary'>Índice UV:</span>2</p>
          <p><span className='font-semibold text-secondary'>Visibilidad:</span>10+km</p>
          <p><span className='font-semibold text-secondary'>Presión:</span>1012hPa</p>
        </div>
      </section>

      <section className='w-full  flex flex-col gap-3'>
        <div className='w-full flex justify-center items-center gap-3'>
        <figure className='w-14 h-14'>
          <img src="https://darksky.net/images/weather-icons/partly-cloudy-day.png" alt="imagen del estado del clima" className='w-full h-full object-cover'/>
        </figure>
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl'>30˚ Mayormente Nublado</h2>
          <h3 className='text-base'>
            <span className='font-semibold text-secondary'>
              Se Siente Como:</span> 30˚
            <span className='font-semibold text-secondary'>
              Bajo:
            </span>17
            <span className='font-semibold text-secondary'>
            Alto:
            </span>  32˚</h3>
        </div>
        </div>
        <h2 className='text-center text-xl font-normal'>Parcialmente nublado</h2>
      </section>
    </div>
    </>

  )
}

export default Home