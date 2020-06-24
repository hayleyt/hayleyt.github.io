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
                        <Project 
                            img="tictactoe.jpg"
                            title="Tic Tac Toe game"
                            desc="Based on the reactjs tutorial with added features"
                            link="https://hayleyt.github.io/tictactoe"
                        />
                        <Project 
                            img="https://hayleyt.github.io/img/portfolio-1.jpg"
                            title="Project"
                            desc="Some blurb about my project"
                            link="#"
                        />
                    </div>
                    <div className="column portfolio-column">
                        <Project 
                            img="https://hayleyt.github.io/img/portfolio-1.jpg"
                            title="Project"
                            desc="Some blurb about my project"
                            link="#"
                        />
                        <Project 
                            img="https://hayleyt.github.io/img/portfolio-1.jpg"
                            title="Project"
                            desc="Some blurb about my project"
                            link="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio