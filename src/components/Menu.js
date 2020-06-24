import React from 'react'
function Menu(props) {
    return(
        <nav class="nav nav-close">
            <button onClick={props.onClick}>X close</button>
            <ul class="nav-list">
                <li class="nav-item">
                    <a className="nav-link" href="#PORTFOLIO" title="Portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#" title="Skills">Skills and Experience</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#" title="Open university">Open University</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#" title="Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Menu