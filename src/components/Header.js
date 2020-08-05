import React from 'react'

function Header(){
    return (
        <div className="header" id="HEADER">
            <div className="container">
                <div className="row">
                    <div className="column header-content">
                        <h1 className="header-title">Hayley Tong</h1>
                        <p>Computing and Statistics Student at the Open University</p>
                        <p>Full stack developer</p>
                        <p>Keen to secure a place in a technology company with opportunities for progression</p>
                        <button className="about-me-btn">
                            <a href="#SKILLS">About me</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header