import React from 'react'

export const Home = () => {
    return (
        <div>
            <div className="header">
                <a href="#default" className="logo">Freelance</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
            <div className="container">
                <img src={require('./assets/icons/cover.png')} alt='' />
            </div>
        </div>
    )
}
