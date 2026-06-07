import React from 'react'
import TopBar from './TopBar'
import MainHeader from './MainHeader'
import Navbar from './Navbar'

export default function Header(){
  return (
    <header>
      <TopBar />
      <MainHeader />
      <Navbar />
    </header>
  )
}
