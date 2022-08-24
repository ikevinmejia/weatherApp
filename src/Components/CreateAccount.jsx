import React from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'

const CreateAccount = () => {
  return (
    <div className='w-screen h-screen bg-loginWavess bg-bottom bg-no-repeat bg-mainBgColor bg-cover'>

    <main className='w-full max-w-6xl h-[80vh] mx-auto flex flex-col justify-center items-center gap-7 lg:flex-row-reverse'>

        <figure className='w-full h-1/3 lg:w-1/2 lg:h-2/5'>
            <img src="../src/assets/img/login.svg" alt="" className='w-full h-full object-contain' />
        </figure>

        <form className=' w-full max-w-lg flex flex-col gap-3 justify-around h-2/5  '>
            <div className=' flex gap-4 items-center flex-row flex-wrap '>
                <div className='w-full flex'>

                <div className='flex flex-col gap-1 items-center w-full '>
                <label htmlFor="email" className='text-lg font-medium text-secondary' >
                    NickName
                </label>
                    <input type="email" id='email' name='email' placeholder='Gambito' className='border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full' />
                </div>
                <div className='flex flex-col gap-1 items-center w-full '>
                <label htmlFor="email" className='text-lg font-medium text-secondary' >
                    Email
                </label>
                    <input type="email" id='email' name='email' placeholder='mail@mail.com' className='border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full' />
                </div>
                </div>


                <div className='w-full flex'>

                <div className='flex flex-col gap-1 items-center w-full'>
                <label htmlFor="password" className='text-lg font-medium text-secondary'>
                Password
                </label>
                    <input type="password" id='password' name='password' placeholder='****' className='border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full' />
                </div>
                <div className='flex flex-col gap-1 items-center w-full'>

                <label htmlFor="confirmPassword" className='text-lg font-medium text-secondary'>
                Confirm password
                </label>
                    <input type="password" id='confirmPassword' name='confirmPassword' placeholder='****' className='border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full' />
                </div>
                </div>

            <div className='flex justify-center items-center w-full'>
            <Button text={'Create Account'} type={'submit'} />
            </div>
            </div>

            <div className='flex justify-center items-center'>
                <Link to='/' className='text-primary font-light'>Login</Link>
            </div>
        </form>


    </main>

    </div>
  )
}

export default CreateAccount