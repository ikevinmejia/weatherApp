import React from 'react'
import imgLogin from '../assets/img/login.svg'

const ImageLogin = () => {
  return (
    <figure className='w-full h-1/3 lg:w-1/2 lg:h-2/5'>
        <img src={imgLogin} alt="" className='w-full h-full object-contain' />
    </figure>
  )
}

export default ImageLogin