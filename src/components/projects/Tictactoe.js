import React from 'react'

function Tictactoe() {
   return(
      <article className="project-page">
         <h2>TIC TAC TOE GAME</h2>
         <p className="role">Designed and built by Hayley Tong</p>
         <a href="https://hayleyt.github.io/tictactoe-app/" target="_blank">
            <button>VIEW PROJECT</button>
         </a>
         <div className="lists">
            <div className="list">
               <h3>User stories</h3>
               <ul>
                  <li>Users can play the computer.</li>
                  <li>Users can choose 2 player mode.</li>
                  <li>Users can start a new game.</li>
                  <li>Users can "cheat" by moving back 1 move.</li>
                  <li>Users can play on mobile, tablet or desktop.</li>
               </ul>
            </div>
            <div className="list">
               <h3>Technology</h3>
               <ul>
                  <li><strong>HTML: </strong>JSX</li>
                  <li><strong>CSS: </strong>SASS, CSS Grid, Flexbox</li>
                  <li><strong>Javascript: </strong>React.js, Node.js, NPM</li>
                  <li><strong>Module bundler: </strong>Webpack</li>
                  <li><strong>Deployment: </strong>Github pages</li>
                  <li>
                     <strong>Source code: </strong>
                     <a href="https://github.com/hayleyt/tictactoe-app" target="_blank">github.com/hayleyt/tic-tac-toe</a>
                  </li>
               </ul>
            </div>
         </div>
         <figure>
            <a href="https://hayleyt.github.io/tictactoe-app/" target="_blank">
               <img src="./tictactoe-screenshots.jpg" alt="tic-tac-toe-screen-shots"/>
            </a>
            <figcaption>Project screen shots</figcaption>
         </figure>
      </article>
   )
}

export default Tictactoe