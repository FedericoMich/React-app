import React from 'react'
import "./head.css"

export const Head = () => {
    return (
        <div className="head">
            <div className="logoContainer">
                <h4 className="logo">Logo</h4>
            </div>
            <div className="navbar">
                <a href="/" className="item">Visualizza repos</a>
                <a href="/" className="item">Nuovo utente</a>
            </div>
        </div>
    )
}
