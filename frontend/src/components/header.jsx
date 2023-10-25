import Logo from '../assets/Logo.png'

import '../styles/header.css'

import { IoAdd, IoArrowBack } from 'react-icons/io5'

import { Button } from './button'

export function Header() {
  return (
    <div className="header">

      <img src={Logo} alt="" />
      {
        window.location.pathname === '/'?
        <Button href="/create" purple="false"><IoAdd /></Button>
        :
        <Button href="/"><IoArrowBack /></Button>
      }

    </div>
  )
}
