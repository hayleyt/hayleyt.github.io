import React from 'react'

function CurrencyConverter() {
   return(
      <article className="project-page currency-converter">
         <h2>CURRENCY CONVERTER</h2>
         <p className="role">Designed and built by Hayley Tong</p>
         <a href="https://hayleyt.github.io/currency-converter/">
            <button>VIEW PROJECT</button>
         </a>
         <div className="lists">
            <div className="list">
               <h3>User stories</h3>
               <ul>
                  <li>Users can view today's exchange rates.</li>
                  <li>Users can switch between 33 currencies.</li>
                  <li>Users can search by currency name, country or code.</li>
                  <li>Users can enter any amount to be converted.</li>
                  <li>Users can use the app on mobile, table or desktop.</li>
                  <li>Users can access all functions with keyboard only.</li>
               </ul>
            </div>
            <div className="list">
               <h3>Technology</h3>
               <ul>
                  <li><strong>HTML</strong></li>
                  <li><strong>CSS: </strong>SASS, CSS Grid, Flexbox</li>
                  <li><strong>Javascript: </strong>Vue.js, Node.js, NPM</li>
                  <li><strong>API: </strong><a href="https://exchangeratesapi.io/">exchangeratesapi.io</a></li>
                  <li><strong>Module bundler: </strong>Webpack</li>
                  <li><strong>Deployment: </strong>Github pages</li>
                  <li>
                     <strong>Source code: </strong>
                     <a href="https://github.com/hayleyt/currency-converter">github.com/hayleyt/currency-converter</a>
                  </li>
                  <li><strong>Icons: </strong><a href="https://www.countryflags.com/">Country flags</a>, FontAwesome</li>
               </ul>
            </div>
         </div>
         <figure>
            <a href="https://hayleyt.github.io/currency-converter/">
               <img src="./currency-header.jpg" alt="currency-converter-header-image"/>
            </a>
            <figcaption>Project screen shots</figcaption>
         </figure>
      </article>
   )
}

export default CurrencyConverter
