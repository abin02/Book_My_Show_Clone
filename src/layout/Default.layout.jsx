import React from 'react'
import Footer from '../Components/Footer/Footer.Component';
import Navbar from '../Components/Navbar/Navbar.Component'

const DefaultLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <Footer />
        </div>
    )
}

export default DefaultLayoutHoc;