import React from 'react'
import Project from './Project'

function Portfolio() {
    return(
        <div className="portfolio" id="PORTFOLIO">
            <div className="portfolio-title">
                <h3>PORTFOLIO</h3>
                <h2>Recent Projects</h2>
            </div>
            <Project 
                img="todo-list.jpg"
                title="Todo List App"
                desc="Designed for mobile. Toggle for Dark and Light mode. Built with React."
                link="https://hayleyt.github.io/todo-list"
            />
            <Project 
                img="tictactoe.jpg"
                title="Tic Tac Toe game"
                desc="Based on the reactjs tutorial with added features"
                link="https://hayleyt.github.io/tic-tac-toe"
            />
        </div>
    )
}

export default Portfolio