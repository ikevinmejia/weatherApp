import { Spinner } from 'flowbite-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      
      <Spinner
      color="warning"
      aria-label="Warning spinner example"
      size="xl"
    />
    </div>
  )
}

export default Loading