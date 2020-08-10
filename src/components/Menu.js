import React from 'react'

function Menu(props) {
    return(
        <nav className="nav nav-close">
            <button onClick={props.onClick}>X CLOSE</button>
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href="#HEADER" title="Top" onClick={props.onClick}>
                        Top of page</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#PORTFOLIO" title="Portfolio" onClick={props.onClick}>
                        Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#SKILLS" title="Skills" onClick={props.onClick}>
                        Skills and Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#OU" title="Open university" onClick={props.onClick}>
                        Open University</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#CONTACT" title="Contact" onClick={props.onClick}>
                        Contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Menu