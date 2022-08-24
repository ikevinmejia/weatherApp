import React from 'react'
import {Link} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import Button from './Button'

const Login = () => {
  return (
    <div className='w-screen h-screen bg-loginWavess bg-bottom bg-no-repeat bg-mainBgColor bg-cover'>

    <main className='w-full max-w-6xl h-[80vh] mx-auto flex flex-col justify-center items-center gap-7 lg:flex-row-reverse'>

        <figure className='w-full h-1/3 lg:w-1/2 lg:h-2/5'>
            <img src="../src/assets/img/login.svg" alt="" className='w-full h-full object-contain' />
        </figure>

        <form className=' w-full max-w-md flex flex-col gap-3 justify-around h-2/5 lg:w-1/2'>
            <div className=' flex flex-col gap-4 items-center lg:flex-row '>
                <div className='flex flex-col gap-1 items-center w-full '>
                <label htmlFor="email" className='text-lg font-medium text-secondary' >
                    Email
                </label>
                    <input type="email" id='email' name='email' placeholder='mail@mail.com' className='border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full' />
                </div>

                <div className='flex flex-col gap-1 items-center w-full'>

                <label htmlFor="password" className='text-lg font-medium text-secondary'>
                Password
                </label>
                    <input type="password" id='password' name='password' placeholder='****' className='border-transparent focus:border-transparent focus:ring-0 bg-transparent text-center focus:border-b-primary transition-all w-1/2 duration-500 focus:w-2/3 outline-none lg:w-full' />
                </div>
            </div>

            <div className='flex justify-center items-center'>
            <Button text={'Login'} type={'submit'} />
            </div>

            <div className=' flex justify-center items-center gap-4'>
                <button type='button'><FcGoogle size='30' /></button>
                <button type='button'><BsFacebook size='27' color='#0676E4'/></button>
            </div>

            <div className='flex justify-center items-center'>
                <Link to='createAccount' className='text-primary font-light'>Create a new account</Link>
            </div>

        </form>


    </main>

    </div>
  )
}

export default Login