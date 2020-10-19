import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
   return(
      <main className="portfolio" id="PORTFOLIO">
         <nav className="portfolio-gallery">
            <ul className="portfolio-grid">

               <li className="portfolio-item">
                  <Link to="/tictactoe">
                     <div className="project-box">
                        <div className="project-img img-tictactoe">
                           <div className="project-title">
                              <h3>Tic Tac Toe</h3>
                           </div>
                        </div>
                     </div>
                  </Link>
               </li>

               <li className="portfolio-item">
                  <Link to="/currency-converter">
                     <div className="project-box">
                        <div className="project-img img-currency-converter">
                           <div className="project-title">
                              <h3>Currency converter</h3>
                           </div>
                        </div>
                     </div>
                  </Link>
               </li>

               <li className="portfolio-item">
                  <Link to="/todo-list">
                     <div className="project-box">
                        <div className="project-img img-todo-list">
                           <div className="project-title">
                              <h3>Todo list</h3>
                           </div>
                        </div>
                     </div>
                  </Link>
               </li>

               <li className="portfolio-item">
                  <Link to="/weather">
                     <div className="project-box">
                        <div className="project-img img-weather">
                           <div className="project-title">
                              <h3>Weather app</h3>
                           </div>
                        </div>
                     </div>
                  </Link>
               </li>
            </ul>

         </nav>
      </main>
   )
}

export default Portfolio