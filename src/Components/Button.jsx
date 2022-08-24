import React from 'react'

const Button = ({text, event, type}) => {
  return (
    <button className='border-primary w-40 h-10 rounded-md bg-primary text-white hover:bg-rose-600' onClick={event} type={type}>{text}</button>
  )
}

export default Button