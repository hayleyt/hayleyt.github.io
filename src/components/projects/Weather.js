import React from 'react'

function Weather() {
   return(
      <article className="project-page">
         <h2>WEATHER APP</h2>
         <p className="role">Designed and built by Hayley Tong</p>
         <a href="https://hayleyt.github.io/weather-app/" target="_blank">
            <button>VIEW PROJECT</button>
         </a>
         <div className="lists">
            <div className="list">
               <h3>User stories</h3>
               <ul>
                  <li>Users can view the weather at their current location.</li>
                  <li>Users can change location.</li>
                  <li>Users can view the current temperature.</li>
                  <li>Users can view 'feels like', humidity and wind speed.</li>
                  <li>Designed for mobile</li>
               </ul>
            </div>
            <div className="list">
               <h3>Technology</h3>
               <ul>
                  <li><strong>HTML: </strong>JSX</li>
                  <li><strong>CSS: </strong>Flexbox</li>
                  <li><strong>Javascript: </strong>React.js, Node.js, NPM</li>
                  <li><strong>API: </strong><a href="https://openweathermap.org/" target="_blank">openweathermap.org</a></li>
                  <li><strong>Module bundler: </strong>Webpack</li>
                  <li><strong>Deployment: </strong>Github pages</li>
                  <li>
                     <strong>Source code: </strong>
                     <a href="https://github.com/hayleyt/weather" target="_blank">github.com/hayleyt/weather</a>
                  </li>
               </ul>
            </div>
         </div>
         <figure>
            <a href="https://hayleyt.github.io/weather-app/" target="_blank">
               <img className="weather-screenshot" src="./weather-screenshot.jpg" alt="weather-app-screen-shot"/>
            </a>
            <figcaption>Project screen shot</figcaption>
         </figure>
      </article>
   )
}

export default Weather