import React from 'react'
import { Link } from 'react-router-dom'

function Blog () {
   return (
      <div className="blog">
         <div className="post">
            <Link to="/blog/execution-context-encapsulation-and-closures-in-javascript">
               <h2>Execution Context, Encapsulation and Closures in JavaScript</h2>
            </Link>
            <h3>Using the backpack analogy to understand closures.</h3>
            <div>By <Link to="/about">Hayley Tong</Link></div>
            <time datetime="2020-10-19 20:11">October 19, 2020</time>
            <Link to="/blog/execution-context-encapsulation-and-closures-in-javascript">
               <img src="./backpack.jpg" alt="woman-carrying-backpack-on-hike"/>
            </Link>
            <p>
               Today, it’s easy to start learning JavaScript, there are hundreds of good quality, free resources online. However, these resources often gloss over how the JavaScript engine works and how JavaScript programs are executed. 
            </p>
            <p>
               Properly understanding the concept of execution context and the execution stack will make you a much better JavaScript developer. But not only that
               <Link to="/blog/execution-context-encapsulation-and-closures-in-javascript">
               […]
               </Link>
            </p>
         </div>

         {/* <div className="post">
            <a href="https://hayleyt.github.io/todo-list/">
               <h2>What are Javascript promises?</h2>
            </a>
            <h3>Byline for my first blog post</h3>
            <time datetime="2020-10-19 20:11">October 19, 2020</time>
            <a href="https://hayleyt.github.io/todo-list/">
               <img src="./promises.jpg" alt="todo-list-app-screen-shots"/>
            </a>
            <p>
               On March 18, 2019, I launched my side project on Product Hunt for the 
               first time. It reached #7 on March 19 and stayed on the home page for 
               the whole day. To add more context, Product Hunt is the #1 worldwide 
               community for makers, entrepreneurs, journalists, and tech enthusiasts 
               to discover new products. There 
               <a href="https://hayleyt.github.io/todo-list/">
               […]
               </a>
            </p>
         </div>

         <div className="post">
            <a href="https://hayleyt.github.io/todo-list/">
               <h2>A refresher on Javascript .map, .reduce, and .filter functions</h2>
            </a>
            <h3>Byline for my first blog post</h3>
            <time datetime="2020-10-19 20:11">October 19, 2020</time>
            <a href="https://hayleyt.github.io/todo-list/">
               <img src="./todo-screenshots.png" alt="todo-list-app-screen-shots"/>
            </a>
            <p>
               On March 18, 2019, I launched my side project on Product Hunt for the 
               first time. It reached #7 on March 19 and stayed on the home page for 
               the whole day. To add more context, Product Hunt is the #1 worldwide 
               community for makers, entrepreneurs, journalists, and tech enthusiasts 
               to discover new products. There 
               <a href="https://hayleyt.github.io/todo-list/">
               […]
               </a>
            </p>
         </div>

         <div className="post">
            <a href="https://hayleyt.github.io/todo-list/">
               <h2>Accessibility: why it matters</h2>
            </a>
            <h3>Some easy tools and quicks changes to make your website more accessbile</h3>
            <time datetime="2020-10-19 20:11">October 19, 2020</time>
            <a href="https://hayleyt.github.io/todo-list/">
               <img src="./accessibility.jpg" alt="todo-list-app-screen-shots"/>
            </a>
            <p>
               On March 18, 2019, I launched my side project on Product Hunt for the 
               first time. It reached #7 on March 19 and stayed on the home page for 
               the whole day. To add more context, Product Hunt is the #1 worldwide 
               community for makers, entrepreneurs, journalists, and tech enthusiasts 
               to discover new products. There 
               <a href="https://hayleyt.github.io/todo-list/">
               […]
               </a>
            </p>
         </div>

         <div className="post">
            <a href="https://hayleyt.github.io/todo-list/">
               <h2>Why I'm avoiding CSS frameworks</h2>
            </a>
            <h3>To hell with Bootstrap, Foundation, Material and all the rest</h3>
            <time datetime="2020-10-19 20:11">October 19, 2020</time>
            <a href="https://hayleyt.github.io/todo-list/">
               <img src="./todo-screenshots.png" alt="todo-list-app-screen-shots"/>
            </a>
            <p>
               On March 18, 2019, I launched my side project on Product Hunt for the 
               first time. It reached #7 on March 19 and stayed on the home page for 
               the whole day. To add more context, Product Hunt is the #1 worldwide 
               community for makers, entrepreneurs, journalists, and tech enthusiasts 
               to discover new products. There
               <a href="https://hayleyt.github.io/todo-list/">
               […]
               </a>
            </p>
         </div> */}
      </div>
   )
}

export default Blog