import React from 'react'

function Footer () {
   return (
      <footer className="footer row">
         <div className="container">
            <div className="copyright">Copyright © Hayley Tong 2021</div>
            <div>hayleytong@gmail.com</div>
            <div className="social">
               <a href="https://github.com/hayleyt"><i className="fab fa-github"></i></a>
               {/* <a href="https://github.com/hayleyt"><i className="fab fa-medium-m"></i></a>
               <a href="https://github.com/hayleyt"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
         </div>
      </footer>
   )
}

export default Footer