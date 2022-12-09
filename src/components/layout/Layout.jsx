import React from 'react'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'
import Topbar from '../common/Topbar'

const Layout = ({children}) => {
  return (
    <Sidebar>
        <div class='row mt-3'>
                <Topbar/>
        </div> 
        <div class='row mt-3'>
                <main>
                        {children}
                </main>
        </div>
        <div class='row mt-3'> 
                <Footer/>
        </div>        
    </Sidebar>
  )
}

export default Layout