import React from 'react'
import Header from "./Header"
import WhatsAppContact from './WhatsAppContact'
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <WhatsAppContact/>
    </>

  )
}

export default Layout