import React, { useState } from 'react'
import './styles/header.css'
import './styles/headerNavToggleLabel.css'


export default (props) => {


const [state, setState] = useState({
    mobileToggled: false,
    topHamburgerClassName: "nav-toggle-label__top",
    midHamburgerClassName: "nav-toggle-label__mid",
    botHamburgerClassName: "nav-toggle-label__bot",
    headerClassName: "header",
    headerNavClassName: "header__nav"
})

const handleClick = (e) => {
   const mobileToggled = state.mobileToggled
   if (!mobileToggled) {
       setState({
           ...state,
           mobileToggled: true,
           topHamburgerClassName: "nav-toggle-label__top nav-toggle-label__top--toggle",
           midHamburgerClassName: "nav-toggle-label__mid nav-toggle-label__mid--toggle",
           botHamburgerClassName: "nav-toggle-label__bot nav-toggle-label__bot--toggle",
           headerClassName: "header header--toggle",
           headerNavClassName: "header__nav header__nav--toggle"
        })
   } else {
    setTimeout(
        setState({
            ...state,
            mobileToggled: false,
            topHamburgerClassName: "nav-toggle-label__top",
            midHamburgerClassName: "nav-toggle-label__mid",
            botHamburgerClassName: "nav-toggle-label__bot",
            headerClassName: "header",
            headerNavClassName: "header__nav"
         })
    , 350)
   }
}

    
return (
    <header className={state.headerClassName}>
        <h1 className="header__logo">THG</h1>
        <input type="checkbox" className="header__nav-toggle" onClick={handleClick} id="nav-toggle" style={{
            display: "none"
        }}/>
        <nav className={state.headerNavClassName}>
            <button 
                className="header__projects"
                id="projects" 
                rel="noopener noreferrer"
                aria-label="See this on Github"
                onClick={() => {window.open("https://github.com/barjuandavis", "_blank")}}>More of my Projects <span role="img" aria-labelledby="projects">🔖</span></button>
            <button 
                className="header__coffee"
                id="coffee"
                rel="noopener noreferrer"
                aria-label="Buy Me a Coffee"
                onClick={() => {window.open("https://buymeacoffee.com/barjuandavis", "_blank")}}>Buy Me a Coffee <span role="img" aria-labelledby="coffee">☕</span></button>
        </nav>
        <label htmlFor="nav-toggle" className="header__nav-toggle-label">
                <span className={state.topHamburgerClassName}></span>    
                <span className={state.midHamburgerClassName}></span>    
                <span className={state.botHamburgerClassName}></span>    
        </label>
    </header>
)
}