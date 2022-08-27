import React, { useState } from 'react'

const Prueba = ({initialValue}) => {

  const [counter, setCounter] = useState(initialValue);

  const sumar = () => {
    setCounter(prev => prev + 1)
  }
  const restar = () => {
    setCounter(prev => prev - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div>

      <h1>Contador</h1>
      <h2>La cuenta va en</h2>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={sumar}>Sumar</button>

    </div>
  )
}

export default Prueba