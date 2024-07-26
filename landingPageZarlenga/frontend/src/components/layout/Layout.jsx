import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import { Footer } from './Footer'
import WhatsAppContact from './WhatsAppContact'
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <WhatsAppContact/>
    </>

  )
}

export default Layout