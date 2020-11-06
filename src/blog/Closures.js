import React from 'react'
import { Link } from 'react-router-dom'

function Closures () {
   return(
      <article className="closures blog post">
         <div className="post">
            <h2>Execution Context, Encapsulation and Closures in JavaScript</h2>
            <h3>Using the backpack analogy to understand closures.</h3>
            <div>By <Link to="/about">Hayley Tong</Link></div>
            <time datetime="2020-10-19 20:11">October 19, 2020</time>
            <img src="../backpack.jpg" alt="woman-carrying-backpack-on-hike"/>
            <main>
               <section>
                  <p>
                     Today, it’s easy to start learning JavaScript, there are hundreds of good quality, free resources online. However, these resources often gloss over how the JavaScript engine works and how JavaScript programs are executed. 
                  </p>
                  <p>
                     Properly understanding the concept of execution context and the execution stack will make you a much better JavaScript developer. But not only that, it is vital to understanding other concepts such as Scope and Closures.
                  </p>
               </section>
               <section>
                  <h4>So what is execution context?</h4>
                  <p>
                     Simply put, an execution context is the environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context. 
                  </p>
                  <p>
                     There are 3 types of execution context in JavaScript: Global, Functional, and Eval Function. Eval Function Execution Context isn’t usually used by JavaScript developers so I will not be discussing it here.
                  </p>
                  <h5>Global Execution Context</h5>
                  <p>
                     This is the default or base execution context. Any code that is not inside a function is in the global execution context. It is created when the program first starts running it lasts until the program ends or the window is closed.
                  </p>
                  <p>
                     There can only be one global execution context in a program.
                  </p>
                  <p>
                     A couple of things worth noting:
                     <ul>
                        <li>It creates a global object. This is the window object in the case of browsers.</li>
                        <li>It assigns the value of this to the global object.</li>
                     </ul>
                  </p>
                  <h5>Functional Execution Context</h5>
                  <p>
                     Every time a function is invoked a new execution context is created for that function. Each function has its own local execution context, but this execution context is only created when the function is invoked or called. It is then destroyed when the function ends or returns a value.
                  </p>
                  <p>
                     There can be multiple functional execution contexts in a program.
                  </p>
               </section>
               <section>
                  <h4>The Execution Stack</h4>
                  <p>
                     The Execution stack, also known as the “calling stack”, is a stack with a last in first out structure. It is used to store all the execution contexts created during the program execution
                  </p>
                  <p>
                     When the JavaScript engine first encounters your code, it creates the global execution context and pushes it into the execution stack. Whenever the engine runs into a function invocation, it creates a new execution context for that function and pushes it onto the top of the stack.
                  </p>
                  <p>
                     The engine then executes the function whose execution context is at the top of the stack. When this function completes, its execution context is popped off the top of the stack, and the next execution context is then run, and so on until we back at the global execution context at the bottom of the stack.
                  </p>
               </section>
               <section>
                  <h4>What is Scope?</h4>
                  <p>
                     Scope in JavaScript defines the area from which your variables are accessible. Where each variable is declared determines where that variable can be accessed within your code. There are two types of scope: Global Scope and Local Scope. But I’m also going to talk about Lexical Scope.
                  </p>
                  <h5>Global Scope</h5>
                  <p>
                     Global scope is a term used when variables are declared in the global execution context, ie. outside of any functions. Global variables can be accessed within any execution context. So if you declare a variable in the global execution context you can also access it in any local execution context.
                  </p>
                  <p>
                     Global variables are available for the lifetime of your application and are only deleted when the application ends (or when you close the browser window).
                  </p>
                  <h5>Local Scope</h5>
                  <p>
                     When a variable is declared inside a function (or a functional execution context) it only exists within that function. Code in the global execution context and code inside other execution contexts cannot access this local variable.
                  </p>
                  <p>
                     This is because local variables are created inside the local execution context and they are destroyed when that function is completed and the local execution context is popped off the execution stack. Therefore, local variables cannot be accessed outside of the local scope as they do not exist there.
                  </p>
               </section>
               <section>
                  <h4>Closures; A simple example</h4>
                  <p>
                     An understanding of execution context, the execution stack and scope is essential to understanding closures in JavaScript. So with this in mind let’s look at the following piece of code. First, I will break down in detail <strong>what we expect to happen</strong> and then we will discuss <strong>what actually happens</strong>:
                  </p>
                  <pre>
                     <code>
                           {'function createNewScore() {'} <br />
                           {'   let score = 0'} <br />
                           {'   function adjustScoreBy(x) {'} <br />
                           {'      score = score + x'} <br />
                           {'      return score'} <br />
                           {'   }'} <br />
                           {'   return adjustScoreBy'} <br />
                           {'}'} <br />
                           {'const scoreBoard = createNewScore()'} <br />
                           {'const round1 = scoreBoard(10)'} <br />
                           {'const round2 = scoreBoard(10)'} <br />
                           {'const round3 = scoreBoard(10)'} <br />
                           {'console.log(round1, round2, round3)'}
                     </code>
                  </pre>
                  <h5>What we expect to happen</h5>
                  <ul className="steps">
                     <li>
                        Lines 1 - 8. On line 1 we declare a variable named <code>createNewScore</code> in the global execution context. We then assign a function definition to it. That means, everything on lines 2 to 7 is assigned to <code>createNewScore</code>. However at this point, the code is not yet evaluated or executed, just stored into the variable for future use.
                     </li>
                     <li>
                        Line 9. We declare a new variable named <code>scoreBoard</code> in the global execution context. This is temporarily assigned to undefined.
                     </li>
                     <li>
                        Still on Line 9. We see the brackets <code>()</code>, this means we need to execute or call a function named <code>createNewScore</code>. Now let’s look inside the global scope for a variable with that name. We see it was created on line 1. Great, let’s call it.
                     </li>
                     <li>
                        Calling a function. Now we are at line 1. As the function is executed a new local execution context is created.
                     </li>
                     <li>
                        Line 2. We create a new variable named <code>score</code> inside the local execution context and assign it to the value <code>0</code>.
                     </li>
                     <li>
                        Lines 3 - 6. We see a new function declaration so we create a variable named <code>adjustScoreBy</code> in the local execution context. This part is important — <code>adjustScoreBy</code> exists only in the local execution context. As before, we store a function definition in the variable named <code>adjustScoreBy</code>, the function is just stored not executed yet.
                     </li>
                     <li>
                        Now we move to line 7. We have to return the content of the variable <code>adjustScoreBy</code>. We look for a variable called <code>adjustScoreBy</code> in the local scope and we find it declared on line 3. It's assigned to a function definition. So we return the definition of <code>adjustScoreBy</code> — that is everything between the brackets <code>{'{}'}</code> on lines 4 and 5.
                     </li>
                     <li>
                        Upon return everything inside the local scope is destroyed. The <code>score</code> variable and <code>adjustScoreBy</code> variable are now gone. The function definition still exists though, it is returned from the function <code>createNewScore</code> and assigned to <code>scoreBoard</code>, the variable we created in step 2.
                     </li>
                     <li>
                        Line 10. We declare a new variable named <code>round1</code>, it is temporarily assigned to <code>undefined</code>. We see the brackets <code>(10)</code>, so we need to execute the function named <code>scoreBoard</code>. We look for the function <code>scoreBoard</code> in the global scope and find it on line 9. It contains the function definition as defined earlier on lines 4-5.
                     </li>
                     <li>
                        We call the function <code>scoreBoard</code>. A new local execution context is created. A variable <code>x</code> is created in the local execution context. We retrieve the parameter <code>10</code> and assign it to <code>x</code>.
                     </li>
                     <li>
                        Line 4. <code>score = score + x</code>. We look for the variable <code>score</code> in the local scope. It’s not there. We look for it in the global scope and it’s not there either. So JavaScript will declare a new variable named <code>score</code> and assign it to <code>undefined</code>. Then it will evaluate <code>score + x</code> as <code>undefined + 10</code>. In Javascript <code>undefined</code> is treated as <code>0</code> so score is assigned to <code>10</code>.
                     </li>
                     <li>
                        Line 5. We return the content of <code>score</code> which is the number <code>10</code>. The local executions context is destroyed along with the local variables, <code>x</code> and <code>score</code>.
                     </li>
                     <li>
                        Back to Line 10. The returned value <code>(10)</code> is assigned to <code>round1</code>.
                     </li>
                     <li>
                        Line 11. We repeat steps steps 9-13, <code>round2</code> is assigned to <code>(10)</code> also.
                     </li>
                     <li>
                        Line 12. We repeat steps steps 9-13, <code>round3</code> is assigned to <code>(10)</code> also.
                     </li>
                     <li>
                        Line 13. We log the content of <code>round1</code>, <code>round2</code>, and <code>round3</code>.
                     </li>
                  </ul>
                  <p>
                     You can try this out for yourself. Notice that it is not logging <code>10, 10, 10</code> as we expected. Instead it’s logging <code>10, 20, 30</code>. How come?
                  </p>
                  <p>
                     Somehow the <code>scoreBoard</code> function is storing the <code>score</code> value. How is this happening? Is the <code>score</code> variable somehow part of the global scope? Try <code>console.log(score)</code> and we get <code>undefined</code>. So that’s not it. So something else must happening here. 
                  </p>
                  <h6>The Closure, finally we get to it.</h6>
                  <p>
                     Here’s how it works. In JavaScript every time a new function is created, the function definition is bundled together with all the variables in its Lexical scope. What is the Lexical scope? It is the surrounding state of the function. This includes all the variables of its parent function. 
                  </p>
                  <p>
                     This bundle, made up of a function definition and the variables from its lexical scope, is called a closure.
                  </p>
                  <p>
                    The best analogy I’ve seen is that of a backpack. A function definition is created with a little backpack. Inside this backpack is stored all the variables that were accessible to the function when it was initially created. When that function is passed around or returned from another function it carries its backpack with it. 
                  </p>
                  <p>
                     So with this new knowledge, let’s have another go at explaining what actually happens!
                  </p>
                  <h5>What actually happens</h5>
                  <pre>
                     <code>
                           {'function createNewScore() {'} <br />
                           {'   let score = 0'} <br />
                           {'   function adjustScoreBy(x) {'} <br />
                           {'      score = score + x'} <br />
                           {'      return score'} <br />
                           {'   }'} <br />
                           {'   return adjustScoreBy'} <br />
                           {'}'} <br />
                           {'const scoreBoard = createNewScore()'} <br />
                           {'const round1 = scoreBoard(10)'} <br />
                           {'const round2 = scoreBoard(10)'} <br />
                           {'const round3 = scoreBoard(10)'} <br />
                           {'console.log(round1, round2, round3)'}
                     </code>
                  </pre>
                  <ul className="steps">
                     <li>
                        Lines 1 - 8. On line 1 we declare a variable named <code>createNewScore</code> in the global execution context. We then assign a function definition to it. That means, everything on lines 2 to 7 is assigned to <code>createNewScore</code>. However at this point, the code is not yet evaluated or executed, just stored into the variable for future use. Same as above.
                     </li>
                     <li>
                        Line 9. We declare a new variable named <code>scoreBoard</code> in the global execution context. This is temporarily assigned to <code>undefined</code>. Same as above.
                     </li>
                     <li>
                        Still on Line 9. We see the brackets <code>()</code>, this means we need to execute or call a function named <code>createNewScore</code>. Now let’s look inside the global scope for a variable with that name. We see it was created on line 1. Great, let’s call it. Same as above.
                     </li>
                     <li>
                        Calling a function. Now we are at line 1. As the function is executed a new local execution context is created. Same as above.
                     </li>
                     <li>
                        Line 2. We create a new variable named <code>score</code> inside the local execution context and assign it to the value <code>0</code>. Same as above.
                        <br/>
                        <br/>
                           <strong>
                              Here is where closures come in:
                           </strong>
                        <br/>
                     </li>
                     <li>
                        Lines 3 - 6. We see a new function declaration so we create a variable named <code>adjustScoreBy</code> in the local execution context. <code>adjustScoreBy</code> is assigned to a closure. This closure consists of the function definition as defined on lines 4-5 and a little backpack of variables that are in the lexical scope, in this case the variable <code>score</code> (with the value of <code>0</code>).
                     </li>
                     <li>
                        Line 7. Returning the content of <code>adjustScoreBy</code>. The local execution context is destroyed. <code>adjustScoreBy</code> and score no longer exist. The closure — the function definition along with its backpack of variables — is returned to the calling context.
                     </li>
                     <li>
                        Line 9. Back in the global execution context, the closure returned by <code>createNewScore</code> is assigned to <code>scoreBoard</code>. The closure contains both the function definition and its backpack of variables.
                     </li>
                     <li>
                        Line 10. Declare a new variable <code>round1</code>.
                     </li>
                     <li>
                        Look up the variable <code>scoreBoard</code>, it’s a closure — remember a closure consists of the function definition and its backpack of variables. We call the function.
                     </li>
                     <li>
                        Create a new execution context. The argument <code>10</code> is passed to the function. We create a new variable named <code>x</code> and assign it to the number <code>10</code>.
                     </li>
                     <li>
                        Line 4. <code>score = score + x</code>. We need look for the variable <code>score</code>. But before looking in the local or global scope, let’s look in our backpack. Et voila! The backpack contains a variable named <code>score</code>, its value is set to <code>0</code>. 
                     </li>
                     <li>
                        <code>score + x</code> is evaluated to <code>0 + 10</code> and <code>score</code> is set to the number <code>10</code>. We put the variable <code>score</code> back into the backpack. The closure now contains the function definition and its backpack with a variable <code>score</code> set to 10.
                     </li>
                     <li>
                        Line 5. We return the content of <code>score</code>, the number <code>10</code>. The local execution context is destroyed.
                     </li>
                     <li>
                        Back to line 10. The returned value <code>10</code> is assigned to <code>round1</code>.
                     </li>
                     <li>
                        Line 11. We repeat steps 9-14. However, this time when we look in our backpack the <code>score</code> variable has a value of <code>10</code>. <code>score + x</code> is evaluated to <code>10 + 10</code> and <code>score</code> is set to the value <code>20</code>. It is stored back in the backpack. And <code>round2</code> is assigned to the value <code>20</code>.
                     </li>
                     <li>
                        Line 12. We repeats steps 9-14, and <code>round3</code> is assigned to <code>30</code>.
                     </li>
                     <li>
                        Line 13. We log the content of the variables, <code>round1</code>, <code>round2</code>, and <code>round3</code>.
                     </li>
                  </ul>
                  <p>
                     So now we understand how a closure works. The key point to take away is that a closure is the combination of a function definition bundled together with all the variables in its surrounding state (the lexical environment) at the time it was declared. The backpack analogy is useful when trying to visualize this.
                  </p>
                  <h5>So does every function a create a closure?</h5>
                  <p>
                     Yes, indeed they do. However, we already know functions declared in the global context have access to the variables in the global scope so the concept of closures is not really relevant here.
                  </p>
                  <p>
                     The concept of closures is mostly useful when a function returns another function. The returned function will have access to variables that exist solely within the closure and thus are hidden to code anywhere else. 
                  </p>
                  <p>
                     Closures are an example of the term encapsulation in computer programming. It encapsulates the body of code together with its lexical scope.
                  </p>
               </section>
            </main>
         </div>
      </article>
   )
}

export default Closures