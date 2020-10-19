import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Blog from './blog/Blog'
import About from './components/About'
import Tictactoe from './components/projects/Tictactoe'
import CurrencyConverter from './components/projects/CurrencyConverter'
import TodoList from './components/projects/TodoList'
import Weather from './components/projects/Weather'

import './css/normalize.css'
import './css/milligram/src/milligram.sass'
import './css/App.scss'

class App extends React.Component {
    state = {
        menuIsOpen: false
    }

    componentDidMount () {
        //make navbar sticky on scroll
        window.onscroll = function() {myFunction()};
        const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;
        function myFunction() {
           if (window.pageYOffset >= sticky) {
              navbar.classList.add("sticky")
           } else {
              navbar.classList.remove("sticky");
           }
        }
    }

    render(){
        return(
            <div className="page" >
                <div className="make-footer-stick">
                    <Header />
                    <BrowserRouter>
                        <Nav />
                        <Switch>
                            <Route path="/" component={Portfolio} exact />
                            <Route path="/blog" component={Blog} />
                            <Route path="/about" component={About} />
                            <Route path="/tictactoe" component={Tictactoe} />
                            <Route path="/currency-converter" component={CurrencyConverter} />
                            <Route path="/todo-list" component={TodoList} />
                            <Route path="/weather" component={Weather} />
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer />
            </div>
          )
    }
}

export default App
