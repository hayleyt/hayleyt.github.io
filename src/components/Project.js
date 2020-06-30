import React from 'react'

function Project(props) {
    return(
        <div className="project">
            <a href={props.link} className="project-img">
                <img src={props.img} alt={props.title}/>
            </a>
            <div className="project-desc">
                <h3>{props.title}</h3>
                <div>{props.desc}</div>
            </div>
        </div>
    )
}
export default Project