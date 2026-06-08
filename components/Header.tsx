'use client'

import React, { useState } from 'react'
import TopBar from './TopBar'
import MainHeader from './MainHeader'
import Navbar from './Navbar'

export default function Header(){
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header>
      <TopBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MainHeader />
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </header>
  )
}
