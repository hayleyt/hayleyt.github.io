import React from 'react'

function NavOpenBtn(props){
    return (
        <div className="row">
            <div>
                <button id="nav-open-btn" className="" onClick={props.onClick}>Menu</button>
            </div>
        </div>
    )
}

export default NavOpenBtn