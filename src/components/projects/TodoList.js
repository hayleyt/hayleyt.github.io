import React from 'react'

function TodoList() {
   return(
      <article className="project-page">
         <h2>TODO LIST APP</h2>
         <p className="role">Designed and built by Hayley Tong</p>
         <a href="https://hayleyt.github.io/todo-list/">
            <button>VIEW PROJECT</button>
         </a>
         <div className="lists">
            <div className="list">
               <h3>User stories</h3>
               <ul>
                  <li>Users can toggle between light and dark mode.</li>
                  <li>Users can add a new task.</li>
                  <li>Users can edit a task.</li>
                  <li>Users can mark a task as completed.</li>
                  <li>Users can delete a task</li>
                  <li>Designed for mobile.</li>
               </ul>
            </div>
            <div className="list">
               <h3>Technology</h3>
               <ul>
                  <li><strong>HTML: </strong>JSX</li>
                  <li><strong>CSS: </strong>SASS, CSS Grid, Flexbox</li>
                  <li><strong>Javascript: </strong>React.js, Node.js, NPM</li>
                  <li><strong>Module bundler: </strong>Webpack</li>
                  <li><strong>Deployment: </strong>Github pages</li>
                  <li>
                     <strong>Source code: </strong>
                     <a href="https://github.com/hayleyt/todo-list">github.com/hayleyt/todo-list</a>
                  </li>
               </ul>
            </div>
         </div>
         
         <figure>
            <a href="https://hayleyt.github.io/todo-list/">
               <img src="./todo-screenshots.png" alt="todo-list-app-screen-shots"/>
            </a>
            <figcaption>Project screen shots</figcaption>
         </figure>
      </article>
   )
}

export default TodoList