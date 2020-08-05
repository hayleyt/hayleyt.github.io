import React from 'react'
import Module from './Module'

function Ou() {
    return(
        <div className="ou" id="OU">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2>The Open Univesity</h2>
                        <h1>Computing and Statistics BSc. Hons</h1>
                        <div className="row">
                            <Module 
                                i="fas fa-laptop-code"
                                circle="circle-icon it"
                                title="Object-oriented Java programming"
                                check="fas fa-check"
                                completed="Completed"
                                desc="Fundamental object-oriented ideas including inheritance, 
                                abstract classes, interfaces, polymorphism, 
                                and static methods and variables"
                            />
                            <Module 
                                i="fas fa-laptop-code"
                                circle="circle-icon it"
                                title="Web technologies"
                                completed="Studying"
                                desc="HTML, CSS, Javascript, PHP, and 
                                accessibility and usability, mobile 
                                content and applications 
                                "
                            />
                            <Module 
                                i="fas fa-chart-line"
                                circle="circle-icon stats"
                                title="Analysing data"
                                completed="Studying"
                                desc="Skills to make 
                                sense of data. It covers models for data, estimation, 
                                confidence intervals, hypothesis testing and regression."
                            />
                            <Module 
                                i="fas fa-chart-line"
                                circle="circle-icon stats"
                                title="Practical modern statistics"
                                completed="Studying"
                                desc="Study in medical statistics, time series, 
                                multivariate analysis, and Bayesian statistics"
                            />
                        </div>
                        <div className="row">
                            <Module 
                                i="fas fa-calculator"
                                title="Essential mathematics"
                                circle="circle-icon maths"
                                check="fas fa-check"
                                completed="Completed"
                                desc="Study in functions, 
                                vectors, calculus, matrices, sequences, trigonometry, and complex numbers"
                            />
                            <Module 
                                i="fas fa-chart-line"
                                circle="circle-icon stats"
                                title="Introducing statistics"
                                check="fas fa-check"
                                completed="Completed"
                                desc="Introduces statistical analysis. Summarising 
                                data; examining relationships; randomness and sampling distributions; 
                                probability; testing hypotheses; and estimation "
                            />
                            <Module 
                                i="fas fa-laptop-code"
                                circle="circle-icon it"
                                title="Intro to computing and IT 1"
                                check="fas fa-check"
                                completed="Completed"
                                desc="Introduces basic programming and developing 
                                problem-solving skills. "
                            />
                            <Module 
                                i="fas fa-laptop-code"
                                circle="circle-icon it"
                                title="Intro to computing and IT 2"
                                check="fas fa-check"
                                completed="Completed"
                                desc="Introduces python to analyse data from the Office 
                                for National Statistics. Completed a small project building a 
                                flash cards app."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ou