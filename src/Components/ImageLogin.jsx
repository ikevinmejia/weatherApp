import React from 'react'

const ImageLogin = ({img}) => {
  return (
    <figure data-testid="test-figure" className='w-full h-1/3 lg:w-1/2 lg:h-2/5'>
        <img src={img} alt="" className='w-full h-full object-contain' />
    </figure>
  )
}

export default ImageLogin