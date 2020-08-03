import React from 'react'

function Skills() {
    return(
        <div className="skills" ID="SKILLS">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h1>Skills and experience</h1>
                        {/* <p className="large-text">
                            HTML, CSS, Sass, Bootstrap and other CSS frameworks,
                            Javascript, ES6, Babel, ReactJS, JSX, Formik, 
                            Git source control, learning Java, 
                            Wordpress, WooCommerce...
                        </p> */}
                        <div className="logos">
                            <img src="imgs/open-university.png"className="logo"/>
                            <img src="imgs/java.png"className="logo"/>
                            <img src="imgs/oop.png"className="logo"/>
                        </div>

                        <h2>Java and Object-oriented programming</h2>

                        <p>In June 2020, I completed the Open University module 
                            <a href="http://www.open.ac.uk/courses/modules/m250"> Object-oriented Java Programming </a>
                            as part of a degree in Computing and Statistics BSc.
                            I learned a lot from this course. Having mostly worked with Javascript 
                            in the past, this was my first experience with a strongly 
                            typed language. I was impressed by how much type checking improved my ability 
                            to read and understand code as well as the safety net it offers against 
                            runtime errors. This has led me to adopt typescript in an effort to 
                            bring these benefits to Javascript. The course has also given me a deeper 
                            understanding of Object-oriented design priciples such as, encapsulation, 
                            inheritance, and implementing interfaces.
                            </p>

                        <div className="logos">
                            <img src="imgs/js.png"className="logo"/>
                            <img src="imgs/react.png"className="logo"/>
                            <img src="imgs/git.png"className="logo"/>
                        </div>

                        <h2>Javascript, ReactJs, and Git source control </h2>

                        <p>I have been learning ReactJS over the past few weeks; I started with the 
                            <a href="https://reactjs.org/tutorial/tutorial.html"> Tic Tac Toe tutorial </a> 
                            on reactjs.org, which teaches you to build a basic 2 player game, I used this 
                            base and added the 'play the computer' feature and reworked the time travel buttons 
                            to create a 'cheat' button, I also added CSS to make it more attractive 
                            and mobile friendly. This tutorial gave me a good intoduction to React components  
                            and managing state. You can check it out in my 
                            <a href= "#PORTFOLIO"> recent projects </a> below and you can 
                            also view the code on <a href="https://github.com/hayleyt/">my github</a>.
                        </p>

                        <div className="logos">
                            <img src="imgs/html-css.jpg"className="logo"/>
                            <img src="imgs/sass.jpg"className="logo"/>
                            <img src="imgs/bootstrap.jpg"className="logo"/>
                        </div>

                        <h2>CSS, Sass, CSS Grid, Flexbox, and Bootstrap</h2>

                        <p>In the past I have used 
                            CSS frameworks like Bootstrap and Foundation to quickly pull 
                            together a project, but as someone who cares about product design 
                            I quickly found that these frameworks could become more of a 
                            hinderance when I needed to adapt the design. 
                            As a result I started to gravitate more towards lighter, less 
                            design opinionated frameworks like milligramCSS, 
                            however, with time I found that I was mostly 
                            using these frameworks for their grid, so lately, I've been making an effort 
                            to learn and use native CSS Grid layout and Flexbox to go framework free. 
                            This process has given me a much richer understanding of the workings of 
                            CSS. Combined with my knowledge of SASS and using a rational class
                            naming method like BEM, I'm finding CSS is becoming easier and more enjoyable 
                            to read, write and maintain.
                        </p>

                        <div className="logos">
                            <img src="imgs/figma.png"className="logo"/>
                            <img src="imgs/photoshop.png"className="logo"/>
                            <img src="imgs/illustrator.png"className="logo"/>
                        </div>

                        <h2>Figma, Photoshop, and Illustrator</h2>

                        <p>I use Figma to mock-up designs and work out my ideas before I build them.
                            I am also comfortable working with photo editing software like 
                            Adobe Photoshop and Affinty photo. I enjoy designing graphics for 
                            both web and print on illustrator and Affinty Designer.</p>

                        <div className="logos">
                            <img src="imgs/wordpress.jpg"className="logo"/>
                            <img src="imgs/woocommerce.jpg"className="logo"/>
                        </div>

                        <h2>Wordpress and woocommerce</h2>

                        <p>I started out in web development a few years ago by making websites in 
                            wordpress for small businesses, at first these were mainly 
                            brochure style sites with few pages, but eventually this work expanded to 
                            include building eccommerce websites with woocommerce and writing 
                            custom plugins.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills