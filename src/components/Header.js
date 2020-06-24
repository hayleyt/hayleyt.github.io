import React from 'react'

function Header(){
    return (
        <div className="header" id="HEADER">
            <div className="container">
                <div className="row">
                    <div className="column header-content">
                        <h1 className="header-title">Hayley Tong</h1>
                        <p>
                            Full-stack developer based in London<br />
                            Looking for new opportunities
                        </p>
                        <a className="about-me-btn" href="#SKILLS">About me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header