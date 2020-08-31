import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import logo from '../../assets/img/logo-12.svg'
import heroImg from '../../assets/img/hero-image.jpg'
import headphone from '../../assets/img/Headphone.svg'
import mixer from '../../assets/img/Mixer.svg'
import piano from '../../assets/img/Piano.svg'

const Landing = () =>{
    return(
        <div className="page-landing">
            <header>
                <div className="logo-container">
                    <img src={logo} alt="logotipo"/>
                </div>
                <Link to="/login" className="sign-in-button">
                    Sign In
                </Link>
            </header>
            <main>
                <section className="hero" style={{backgroundImage:`url(${heroImg})`}}>
                    <div className="blueish">
                        <h1 className="hero-title">Your Platform to discover new music!</h1>
                        <h2 className="hero-description">Jam, Sing, Dance to old, new, gooood music today!</h2>
                        <button className="sign-up-button">
                            Sign up now!
                        </button>
                    </div>
                </section>
                <section className="perks">
                    <div className="perk-item">
                        <img src={headphone} alt="fone de ouvido"/>
                        <h1>Listen to any music.</h1>
                        <h2>However you want wherever you want.</h2>
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Landing