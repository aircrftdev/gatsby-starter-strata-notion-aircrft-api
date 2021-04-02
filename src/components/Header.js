import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1>Aircrft blogging engine. A complete blogging system for startups<br />template <strong>powered by <a href="https://aircrft.com/" target="_blank">Aircrft</a></strong>,<br /> 
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
