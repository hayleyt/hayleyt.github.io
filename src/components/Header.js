import React from 'react'

class Header extends React.Component {

   componentDidMount () {
      const byline = document.getElementById('byline')
      byline.classList.add('type-effect')
   }

   render() {
      return (
         <header className="header">
            <div className="container">
               <div className="row">
                  <div className="column header-content">
                     <a href="/">
                        <h1 className="header-title">Hayley Tong</h1>
                        <p className="byline" id="byline" >
                           {'< Front End Engineer />'}
                        </p>
                     </a>
                  </div>
               </div>
            </div>
         </header>
      )
   }
}

export default Header