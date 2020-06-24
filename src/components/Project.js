import React from 'react'

function Project(props) {
    return(
        <div className="portfolio-item">
            <a href="#">
                <span className="caption">
                    <h2>{props.title}</h2>
                    <h3>{props.desc}</h3>
                </span>
                <img src={props.img} alt={props.title}/>
            </a>
        </div>
    )
}
export default Project