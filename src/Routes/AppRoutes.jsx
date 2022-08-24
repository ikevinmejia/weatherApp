import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from '../Components/CreateAccount';
import Home from '../Components/Home';
import Login from '../Components/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/createAccount' element={<CreateAccount/>} />
        <Route path='/Home' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes