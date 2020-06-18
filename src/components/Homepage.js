import React, { useState } from 'react'
import Form from './Form'
import Header from './Header'
import geese from '../images/geese.svg'
import './styles/homepage.css'
import './styles/button.css'

export default () => {

    const [state, setState] = useState({})

    return (
        <>
        <Header />
        <div className="container">
            <div className="intro">
            <h1>The Honk Generator</h1>
            <p>Are you wondering if you can talk only using honks with your friends? Are you pretending to be a goose in a social media group? Are you looking for something impractical and not useful in any way?
            <br /><br />
            <b>Then this generator is for you!</b></p>
            <h2>How does it work?</h2>
            <p>It simply uses <a href="https://github.com/ozdemirburak/morsify">Morsify</a> to convert honks to Morse Codes to plain text.<br />
            <b>"Honk"</b> refers to dots (.),<br />
            <b>"Hoonk" (with 2 'o's)</b> refers to dashes (-), <br />
            <b>"Hooonk" (with 3 'o's)</b> refers to space to separate between parsed characters.</p>
            <h2>How to Use</h2>
            <p>Simply type in your plain text in the "Text" area or put your honks in the "Honks" area and it will automatically convert to each other!</p>
            </div>
            <Form state={state} setState={setState} />
            <footer>
            <b>If you want something more serious for your business, please contact me via my website <a href="https://barjuandavis.codes">here.</a> Thank you for visiting!</b>
            <br /><br />
            <a href="https://www.linkedin.com/in/barjuandavis">Barjuan Davis P.</a> &copy; 2020
            </footer>
        </div>
        <img src={geese} alt="" className="geese"></img>
        </>
    )
}



