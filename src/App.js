import React from 'react'
import Menu from './components/Menu'
import NavOpenBtn from './components/NavOpenBtn'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Ou from './components/Ou'
import './css/normalize.css'
import './css/milligram/src/milligram.sass'
import './css/App.scss'

class App extends React.Component {
    state = {
        menuIsOpen: false
    }

    handleClick = () => {
        const navOpenBtn = document.getElementById('nav-open-btn')
        const nav = document.querySelector('.nav');
        if(this.state.menuIsOpen){
            nav.classList.add('nav-close')
            navOpenBtn.classList.remove('hidden')
            nav.classList.remove('nav-open')
        } else{
            nav.classList.remove('nav-close')
            navOpenBtn.classList.add('hidden')
            nav.classList.add('nav-open')
        }

        this.setState({menuIsOpen: !this.state.menuIsOpen})
    }

    render(){
        return(
            <div class="page" onClick={this.state.menuIsOpen ? this.handleClick : null}>
                    <Menu onClick={this.handleClick} />
                    <NavOpenBtn onClick={this.handleClick} />
                    <Header />
                    <Portfolio />
                    <Ou />
                    <Skills />
                    <Contact />

            </div>
          )
    }
}

export default App
