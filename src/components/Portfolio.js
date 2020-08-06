import React from 'react'
import Project from './Project'

function Portfolio() {
    return(
        <div className="portfolio" id="PORTFOLIO">
            <div className="portfolio-title">
                <h3>PORTFOLIO</h3>
                <h2>Recent Projects</h2>
            </div>
            <div className="projects">
                <Project 
                    img="todo-list1.jpg"
                    title="Todo List App"
                    desc="Designed for mobile. Toggle for Dark and Light mode. Built with React."
                    link="https://hayleyt.github.io/todo-list"
                />
                <Project 
                    img="tictactoe1.jpg"
                    title="Tic Tac Toe game"
                    desc="Based on the reactjs tutorial with added CSS and features: Play the computer and Cheat!"
                    link="https://hayleyt.github.io/tic-tac-toe"
                />
                <Project 
                    img="weather-app.jpg"
                    title="Weather app"
                    desc="Fetches data from Open Weather Map API. Built with React."
                    link="https://hayleyt.github.io/weather-app"
                />
            </div>
        </div>
    )
}

export default Portfolio