import React from 'react'

function Module(props) {
    return(
        <div className="module">
            <div className={props.circle}>
                <i className={props.i}></i>
            </div>
            <h3>{props.title}</h3>
            <div className="credits">30 credit module</div>
            <div className="completed">
            <i className={props.check}></i>
                {props.completed}
            </div>
            <p>{props.desc}</p>
        </div>
    )
}
export default Module