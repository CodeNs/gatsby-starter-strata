import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/face.jpeg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Maura</strong>, like Laura<br />
                   but with an M<br />
                    Strawberrrrrrrrrrries! <a href="http://html5up.net"></a></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
