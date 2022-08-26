import React from 'react'
import { Navbar, Button } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

const NavBar = () => {

  const auth = getAuth();

  const logOut = () => {
    auth.signOut()
  }

  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/Home">
    <img
      src="../src/assets/img/Logo.png"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Weather App
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button color={'failure'} onClick={()=> logOut()} >
      LogOut
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <NavLink
      to="/Home"
      className={ ({isActive}) => (isActive ? 'text-primary' : '') }
    >
      Home
    </NavLink>
    <NavLink to="/Profile"
    className={ ({isActive}) => (isActive ? 'text-primary' : '') }>
      Profile
    </NavLink>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar