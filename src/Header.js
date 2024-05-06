import React from 'react'
import './App.css';
import logo from './logo.svg';
import { Link } from "react-router-dom";
export default function Header
  () {
  return (
    <header className="App-header p-5">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXduYndqYnN5YmRveGttZmx6YnR0NGN0dmo3c2Vnejd5ZTFicjFheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ITiT2Xq3bdMYOrqTKa/giphy.gif" className=" App-logo" alt="logo" />
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className='p-1 hover/edit:text-indigo-500' to="/">Sign Up</Link>
        <Link className='p-4 hover/edit:text-indigo-500' to="/signin">Sign In</Link>
      </nav>
    </header>
  )
}
