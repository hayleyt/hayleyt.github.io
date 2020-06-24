import React from 'react'
import Project from './Project'

function Portfolio() {
    return(
        <div className="portfolio" id="PORTFOLIO">
            <div className="container">
                <div className="row">
                    <div className="column portfolio-title">
                        <h3>PORTFOLIO</h3>
                        <h2>Recent Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="column portfolio-column">
                        <Project />
                        <Project />
                    </div>
                    <div className="column portfolio-column portfolio-last">
                        <Project />
                        <Project />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio