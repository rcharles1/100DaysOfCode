
// REACT
/* 
    Day 23 of 100 Days of Code
        1. Thinking in React.
           - Breaking UI pparts into pieces called components
           followed by describing the visual states for each one. and finally connect them so as data flows through them.

           Steps 
           a. Break the UI into a component hierarchy
                 .....

        2. JSX
            - JavaScript expressions, has to be compiled before reaching the browser.
            - they can be saved in a variable, passed to a function, stored in an object or array.

            JSX Elements - basic unit of JSX.
            eg: const greeting = <h1>Hello World</h1>;

            Attributes in JSX
             - same as in HTML
             Syntax; <a href='https/vercel.app'>My Portfolio</a>;
            
            Nested JSX
             - JSX Elements can be nested inside other JSX elements, just like in HTML
             Syntax: <a href='https/vercel.app'><h1>My Portfolio</h1></a>;
            JSX Outer Element
             - if a JSX expression has multiple outer elements, wrap the JSX in a <div> element.

           Rendering JSX
            a. Create a React root
                 // Get DOM element
                 const container = document.getElementbyId('app');
                 // Create a root
                 const root = createRoot(container);
                 // rendering
                 root.render(<p>Hi there!</p>);
            b. Passing a Variable to render()
                render() methods' argument doesn't need to be JSX, it should evaluate to s JSX expression.

        3. The Virtual DOM
                 - Only updates DOM elements that have changed. Reacts selling point.
                 - Through diffing, React compares the new virtual DOM with a previous one. it then does reconciliation based on the differences noticed.

                 In summary, 
                        entire virtual DOM gets updated.
                        virtual DOM is compared to what it lookd like before you updated, and React figures out which objects have changed.
                        only changed objects get updated in the real DOM.
                        Changes on the Real DOM cause the screen to change.

        4. Advanced JSX
           a. class vs className
             - use className instead of class as in HTML

           b. Self-Closing Tags
             - Self-Closing tags include; <br>, <hr>, <img>, <input>
             - in JSX, you have to include the slash i.e <br />
        
           c. JavaScript in JSX in a JavaScript file
               - Wrap code in curily brackets {}

           d. Variables in JSX
             - variables declared outside of JSX code can be accessed while inside a JSX expression

             Variable attributes in JSX 
             Syntax;
               const pics = {
                        panda: "http://bit.ly/1Tqltv5",
                        owl: "http://bit.ly/1XGtkM3",
                        owlCat: "http://bit.ly/1Upbczi"
                }; 

                const panda = (
                        <img 
                        src={pics.panda} 
                        alt="Lazy Panda" />
                );

                const owl = (
                        <img 
                        src={pics.owl} 
                        alt="Unimpressed Owl" />
                );

                const owlCat = (
                        <img 
                        src={pics.owlCat} 
                        alt="Ghastly Abomination" />
                ); 
        
           e. Event Listeners
               - In JSX,  event listener names are written in camelCase i.e onClick or onMouseClick
                        eg: <img onClick={clickAlert} />
        
           f. JSX Conditionals: If statements don't work 
                 only works when the if statement is written  oustide JSX

           g. Ternary operator in JSX
                import React from 'react';
                import { createRoot } from 'react-dom/client';

                const container = document.getElementById('app');
                const root = createRoot(container);
                function coinToss () {
                        // Randomly return either 'heads' or 'tails'.
                        return Math.random() < 0.5 ? 'heads' : 'tails';
                }

                const pics = {
                        kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
                        doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
                };

                const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

                root.render(img);

                // Using the && operator
                import React from 'react';
                import { createRoot } from 'react-dom/client';

                const container = document.getElementById('app');
                const root = createRoot(container);
                // judgmental will be true half the time.
                const judgmental = Math.random() < 0.5;

                const favoriteFoods = (
                        <div>
                            <h1>My Favorite Foods</h1>
                            <ul>
                                <li>Sushi Burrito</li>
                                <li>Rhubarb Pie</li>
                                { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
                                <li>Broiled Grapefruit</li>
                            </ul>
                        </div>
                );

                root.render(favoriteFoods);

          h. .map in JSX
            - creates a new array.
            Syntax;
                const people = ['Rowe', 'Prevost', 'Gare'];

                const peopleList = people.map((person,i) =>
                // expression goes here:
                <li>{person}</li>
                );

                // root.render goes here:
                root.render(<ul>{peopleList}</ul>);
         
         i. Keys
            - when creating a list in JSX, an attribute 'key' is included. Similar to an id.
            - it has no visual effect but rather React uses them internally to keep track of lists.

            Conditions; - list items have memory from one render to the next.
                        - list's order might be shuffled.

        5. Creating an element without JSX
            - createElement(type(div or span), props(object or null), ...children)

            function Greeting({name}) {
                return createElement(
                   'h1',
                   { className: 'greeting'},
                   'Hello'
                );
             }  
             
        6. React Components
             small, resusable chunk of code responsible for one job, to render some HTML and re-render it when some data changes.

             a. functional components
                 - naming convention must be PascalCase
                 - must return react elements in JSX.
                 
             b. Exporting and importing
                the entry point is where the components will be rendered to DOM.
            
             c. Using and Rendering a Component
                import MyComponent from './App';

                ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent/>);
*/


/*
   Day 24 of 100 Days Of Code
        1. Components and Advanced JSX
             a. Function Components can return multiline JSX lines: wrap return value in parentheses
             b. using a variable attribute in a component with JavaScript injections
                Syntax;
                function Owl() {
                        return (
                                <div>
                                        <h1>{owl.title}</h1>
                                        <img src={owl.src} alt={owl.title}/>
                                </div>
                        );
                }
             c. Putting logic in function Component
             d. Components can conditionally return JSX elements by putting conditional statements inside components
             d. Event Listener and Event handlers in a Component
                 - components can respond to events by defining event handlers and passing them to the JSX elements
                 - event handler function are defined inside the function component and, by convention, start with the word "handle" followed by type of event it is handling.
                   Syntax;
                   function MyComponent(){
                        function handleHover() {
                                alert('Stop it.  Stop hovering.');
                        }
                        return <div onHover={handleHover}></div>;
                   }

        2. Creating a React App
            - this can be achieved through;
               a. create-react-app (CRA): standard procedure, performance dips with app size increase.
                     - Hence not suitable for large projects.
                     - creates local React Development environmnet
               b. vite
                     - creates a dev server
                     - platform agnostic


                c. Common scripts for the CRA - npx create-react-app myapp --use-npm;
                 npm start - starts the development server
                 npm run build - bundles app into static files for production
                 npm test - starts the test runner.
                 npm run eject - removes the tool.
                
                d. React App Structure
                   myapp
                   |-- node_modules (dependencies of packages used by the current React app, as specified by package.json)
                   |-- public (assets that will be served without processing by webpack)
                   |     manifest - configures how web app will behave if added to an Android users home screen)
                   |-- src ( contains JS that will be processed by webpack)
                   |-- .gitignore (used by git to determines files and directories to ignore when committing code.)
                   |-- package.json (outlines all settings for the React app)
                   |-- package-lock.json (history of changes to package.json, provides a way for teams working on private app to ensure that 
                   |     they have the same version of dependencies and sub dependencies)
                   |__ README.md
                
                e. Starting the React App Development Server : npm start // While inside app's directory

*/


/* 
   Day 25 of 100 Days of Code
        1. Component render other Components
                - how components can reference other components
                - how this allow us to separate our components into separate files.

                a. Returning another component
                    Syntax;
                    function Picture() {
                            return <img src="..." />;
                    }

                    function Profile() {
                            return (
                                <>
                                    <Picture />
                                    <h1>Name: Robin</h1>
                                    <h2>Car: Audi A6 Avant</h2>
                                    <h2>Model Year: 2019</h2>
                                </>
                            )
                    }
                
                b. Apply Component in render function
                    - components can interact with each other by returning instances of each other.
                    - This allows them to be broken into smaller components, stored into separate files, and reused when necessary.

        2. props
            - one component passing information to another component.q
                  pass, access and display props.
                  use props to create conditional statements
                  define event handler in a component and pass them to other components.
                  work with a component's children
                  assign default values to props.

                  a. Access a components' props
                        syntax; props.name
                        i.e {props.firstName}
                  b. Passing props to a Component
                      i.e. <Greeting name="Robin" car="AUDI A6 AVANT" model={2019} favorite={true} />
                  c. Pass props from component to component
                     - they travel in one-direction, top to bottom, parent to child
                     - props passed down are immutable.
                     - components can not pass props to its siblings too.
                  d. Render Different UI Based on props
                     - in simpler terms make decisions using props.
                     Syntax;
                     function Greeting(props) {
                        if (props.signedIn == false) {
                                return <h1>Please login.</h1>;
                         } else {
                                return (
                                        <>
                                          <h1>Welcome back, {props.name}!</h1>
                                          <article>
                                                Latest Movie: A Computer Bug's Life
                                          </article>
                                        </>
                                );
                          }
                       }
                  e. Passing and receiving an Event handler as a prop
                       // This passes a prop named talk component 
                       function Talker() {
                        function talk() {
                                let speech = '';
                                for (let i = 0; i < 10000; i++) {
                                        speech += 'blah ';
                                  }
                                  alert(speech);
                                }
                        return <Button talk={talk}/>;
                       }

                       // This receives the handler and attaches it to the button
                       function Button(props) {
                                return (
                                        <button onClick={props.talk}>
                                             Click me!
                                        </button>
                                );
                        }

                        - Naming convention is guided by two things: - event handler named after event type
                                                                     - when naming the prop name, 'on' plus event type.
                  f. props.children 
                      - returns everything between a component's opening and closing tags.

                  g. Asssigning default values to props
                     Syntax;
                     function Button(props) {
  
                        return (
                        <button>{props.text}</button>
                        );
                     }
                     Button.defaultProps = {
                        text: 'Default Text of Big Button'
                     }

        3. React Developer Tools to debug React Apps

*/


/* 
    Day 26 of 100 Days of Code
        1. CodeyOverflow Forum Project

        2. React Hooks
            - functions that help manage internal state of components and handle post-rendering side effects.
            eg useState(), useEffect(), useContext(), useReducer() and useRef().

                a. Update function component State. The State Hook
                    - imported as: import React, { useState } from 'react';
                    - returns an array with 2 values; the current state-value of state, and state setter-a function that updates the value of this state.
                    - updating the state is simple as calling a state setter function.
                    Syntax;
                        import React, { useState } from 'react';

                        export default function ColorPicker() {
                                // call useState and assign its return values to `color` and `setColor`
                                const [ color, setColor] = useState();

                                const divStyle = {backgroundColor: color};

                                return (
                                    <div style={divStyle}>
                                        <p>The color is {color}</p>
                                        <button onClick={() => setColor("Aquamarine")}>
                                                Aquamarine
                                        </button>
                                        <button onClick={() => setColor("BlueViolet")}>
                                                BlueViolet
                                        </button>
                                        <button onClick={() => setColor("Chartreuse")}>
                                                Chartreuse
                                        </button>
                                        <button onClick={() => setColor("CornflowerBlue")}>
                                                CornflowerBlue
                                        </button>
                                    </div>
                                );
                        }
                b. Initialize State
                   Syntax; const [ color, setColor ] = useState('Tomato');
                   - State hook can be used to manage primitive data types as well as collections(arrays & objects).
                   - initializing affects code in 3 ways;
                        i. During first render, the initial argument is used. one that is initialized
                       ii. when state setter is called, the initial state argument is ignored and the new value is used.
                      iii. when component re-renders, react uses the same value from the previous render.

                    - explictly pass null instead of leaving the value as undefined, to avoid being unclear o humans.

                c. Use State Setter Outside of JSX
                    - separation of concerns. for complex event handlers
                    - put in the handle function.
                    Syntax;
                    export default function PhoneNumber() {
                        // declare current state and state setter 
                        const  [phone, setPhone]  = useState('');

                        const handleChange = ({ target })=> {
                                const newPhone = target.value;
                                const isValid = validPhoneNumber.test(newPhone);
                                if (isValid) {
                                        // update state 
                                        setPhone(newPhone);
                                }
                                // just ignore the event, when new value is invalid
                        };

                        return (
                                <div className='phone'>
                                        <label for='phone-input'>Phone: </label>
                                        <input id='phone-input' value={phone} onChange={handleChange}/>
                                </div>
                        );
                     }

                d. Set From Previous State
                     - we use a state setter callback function when next value depends on previous value.
                     Syntax;
                     import React, { useState } from 'react';

                     export default function QuizNavBar({ questions }) {
                        const [questionIndex, setQuestionIndex] = useState(0);

                        // define event handlers
                        const goBack = () => 
                        setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
                        const goToNext = () => 
                        setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);

                        const onFirstQuestion = questionIndex === 0;
                        const onLastQuestion = questionIndex === questions.length - 1;

                        return (
                        <nav>
                                <span>Question #{questionIndex + 1}</span>
                                <div>
                                        <button disabled={onFirstQuestion} onClick={goBack}>
                                                Go Back
                                        </button>
                                        <button disabled={onLastQuestion} onClick={goToNext}>
                                                Next Question
                                        </button>
                                </div>
                        </nav>
                        );
                     }

                g. Arrays in State
                     a new state is a complete new array.

                     Example
                     import React, { useState } from "react";
                     import ItemList from "./ItemList";
                     import { produce, pantryItems } from "./storeItems";

                     export default function GroceryCart() {
                        const [cart, setCart] = useState([]);

                        const addItem = (item) => {
                                setCart((prev) => {
                                return [item, ...prev];
                                });
                        };

                        const removeItem = (targetIndex) => {
                                setCart((prev) => {
                                return prev.filter((item, index) => index !== targetIndex);
                                });
                        };

                        return (
                                <div>
                                        <h1>Grocery Cart</h1>
                                        <ul>
                                                {cart.map((item, index) => (
                                                <li onClick={() => removeItem(index)} key={index}>
                                                {item}
                                                </li>
                                                ))}
                                        </ul>
                                        <h2>Produce</h2>
                                        <ItemList items={produce} onItemClick={addItem} />
                                        <h2>Pantry Items</h2>
                                        <ItemList items={pantryItems} onItemClick={addItem} />
                                </div>
                        );
                    }
                
                h. Objects in State
                   - use spread syntax on collections of dynamic data to copy the previous state into the next state. this prevents creating a new object with only the current state
                   eg: setProfile((prevProfile) => ({
                            ...prevProfile,
                            [key]: value
                        }))   
                arrays and objects are used to organizze and manage related data that tend to change together.    
*/


/* 
    Day 27 of 100 Days of Code
        1. Seperate hooks for separate state
            - creating different state variable for data that change separately
            Syntax;
            function MusicalRefactored() {
                const [title, setTitle ] = useState("Best Musical Ever");
                const [actors, setActors] = useState(['George Wilson', 'Tim Hughes', 'Larry Clements']);
                const [locations, setLocations] = useState({
                        Chicago: {
                           dates: ["1/1", "2/2"],
                           address: "chicago theater"
                        },
                        SanFrancisco: {
                           dates: ["5/2"],
                           address: "sf theater"
                        }
                });
             }

        2. The Effect Hook, useEffect
            - executes some JS code right after a component has rendered.
            subsequently allowing a component to perform side effects such as data fetching, subscriptions, or manually changing the DOM.

            Key moments when Effect hook can be utilized;
              a. When a component is first added, or mounted to the DOM and renders.
              b. when state or props change, causing component to re-render.
              c. when component is removed, or unmounted from DOM.

              a. Function Component Effects
                 - effect hooks tell a component what to do everytime it's re-rendered.
                 Syntax;

                 import React, { useState, useEffect } from 'react';

                  export default function Counter() {
                        const [count, setCount] = useState(0);

                        useEffect(() => {
                            alert(`Count: ${count}`);
                        });

                        const handleClick = () => {
                            setCount((prevCount) =>  prevCount + 1);
                        };

                        return (
                            <div>
                                <p>You clicked {count} times</p>
                                <button onClick={handleClick}>
                                        Click me
                                </button>
                            </div>
                        );
                  }

              b. Clean Up Effects
                 For instance, removing event listeners to avoid memory leaks because each time a component re-renders an event listener would be added to the DOM's document object.
                 - with just a few clicks and rerenders, a lot of event listeners are attached to the DOM. Clean Up is crucial as HELLL!!

                 Syntax;
                  useEffect(() => {
                          document.addEventListener('click', increment);
                        return () => {
                                document.removeEventListener('click', increment);
                        }
                  })

               c. Control When Effects run.
                  - by passing a second argument to the useEffect(), an array of dependencies.
                  mount - renders for the first time.

                  Focus is on using an empty dependency array to call an effect.

               d. Fetch Data
                   - more attention is when the effect is called. Unnecessry callings can be costly in terms of processing, performance, data usage for mobile users, API services.
                   An empty dependency array signals to the Effect Hooks that the result of the effect won't change and calling the effect once is enough.
                   A dependency array that is not empty signals to the Effect Hook a value of a dependency has changed, then the Effect Hook will call our effect again.

                   Syntax;
                   const [data, setData] = useState();
                   const [notes, setNotes] = useState({});
                   const [forecastType, setForecastType] = useState('/daily');

                   useEffect(() => {
                        alert('Requested data from server...');
                        get(forecastType).then((response) => {
                                alert('Response: ' + JSON.stringify(response,'',2));
                                setData(response.data);
                        });
                        }, [forecastType]);

                        const handleChange = (index) => ({ target }) =>
                                setNotes((prev) => ({
                                ...prev,
                                [index]: target.value
                        }));

                        if (!data) {
                               return <p>Loading...</p>;
                        }

                e. Rules of Hooks
                   only call hooks at the top level:- never inside of loops, conditions, or nested functions
                   only call hooks from React functionc. and in Custom Hooks
                   Syntax;
                       useEffect(() => {
                                if (selectedCategory && !items[selectedCategory]) {
                                        get(`/items?category=${selectedCategory}`).then((response) => {
                                                setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
                                        });}
                                }, [items, selectedCategory ])
                        }
                
                f. Separate Hooks Effects
                   - take a look at D:\Career\Career-Development\100-Days-Of-Code\code\React JS\test.js

                   Dependency Array 1 undefined - effect called after first render & every re-render.
                                    2. Empty array - after first render & no re-renders.
                                    3. Non-empty array - when any value on the dependency array changes. 

*/


/* 
    Day 28 of 100 Days of Code
        1. React Context Hook
            - manages state globally.
            - in conjunction with useState Hook, deeply nested components can share state more easily than with usestate alone (props).

            Fistly, create context. import createContext from react library and initialize it
            i.e import { React, useState, createContext, useContext } from 'react';
                const UserContext = createContext()

            Then, Wrap the tree of components that need the state Context with Context Provider and supply state value.
            eg: function Component1() {
                    const [ user, setUser] = useState('Robin');

                    return (
                            <UserContext.Provider value={user}>
                                <h1>{`Hello ${user}!`}</h1>
                                <Component2 user={user} />
                            </UserContext.Provider>
                    );
            }

            Accessing the context from a child component.
            function Component5() {
                    const user = useContext(UserContext);

                    return (
                            <>
                               <h1>Comopent 5</h1>
                               <h2>{`Hello ${user} again!`}</h2>
                            </>
                    )
            }

        2. Custom Hooks
           - allows to extract and reuse stateful logic across different components.
           - are simply JavaScript functions that start with the word use and can call other hooks.
           - best created in  a separate file for better resusability.
           eg 
           import ( useState, useEffect ) from 'react';

           const useFetch = (url) => {
                   const [data, setData] = useState(null);

                   useEffect(() => {
                           fetch(url)
                                .then((res) => res.json())
                                .then((data) => setData(data));
                   }, [url]);

                return [data];
           }

*/


/*
   Day 29 of 100 Days of Code

        3. React Programming Patterns
               a. Separate Container Components from presentational Components
                  Stateful - manage complex state or logic while Stateless components only render JSX.

                  i. create container component- incharge of maintaining the state (creating and updating) and passing it on to any component it renders through props.
                  ii. create presidential component - its job is to only contain JSX. it should be an exported component and should not render itself.
                      presentational component will always get rendered by a container.

                  Container components communicate with presentational components by passing state through props. Meanwhile the container component must define and provide a way for the presentational component to communicate with it
                  using a change handler function passed as a prop.

                  Eg: 
                  function Container() {
                        const [isActive, setIsActive] = useState(false);                              
                                                        
                        return (
                                <>
                                        <Presentational active={isActive} toggle={setIsActive}/>
                                        <OtherPresentational active={isActive}/>
                                </>
                        );                          
                   }
                                                
                   function Presentational(props) {
                        return (
                                <h1>Engines are {props.active}</h1>
                                <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
                        );
                   }
                                                
                    function OtherPresentational(props) {
                        // render...
                   }

                   this patternm indirectly results in communication bewtween sibling component. through state update

                b. Render Presentational Component in Container

        3. React Router v6
                a. What Is Routing? - a process by which a web application uses the current browser URL to determine what content to show a user.
                        - the general concern here is organizing an application's content and displaying only whats requested by the user.

                        Basics of structure of URL;
                                Protocal:- HTTP, HTTPS, mailto, ... Mandatory
                                Domain:- specifies the website that hosts the resource. the entry point for your application.
                                Path: specific resource to be loaded
                                The optional query string: appear after a '?'

                        React Router a popular front-end routing solution for React apps.
                           - it provides multiple routers, createBrowserRouter being the most common one.
                           - views are also called routes (React component)
                           - Use the RouterProvider to make the created router available to the entire application

                b. Basic Routing with <Route>
                   - static routing: render a consistent view(component)
                c. Linking to Routes
                    - We use the URL bar to navigate to a path that matched one on the app's routes.
                    how about navigating from within the app itself? 
                    React Router offers two solutions: the Link and NavLink components.
                     Eg: <Link to="/about">About</Link>
                         <NavLink to="/about" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>About</NavLink>
                
                d. Dynamic Routes
                   - syntax;
                   <Route path='articles/:title' element={ <Article />} />

                e. useParams Hook
                   - provided by React router provides a hooks, useParams() for accessing the value if URL parameters.
                   When called, useParams() returns an ibject that maps names of URL parameters to their values in the current URL

                   - also imported from react-router-dom
                
                f. Nested Routes
                   - a route within a route. A child Route's path is relative to the parent Route's path. Thus do not include the parent path in its prop.
                   - upon nesting a route element, we need to make use of the React Router Outlet component in the parent component to tell the parent component where to render its child route element.
                   - An index route: uses the index prop instead of a path prop

                g. <Navigate>
                   - ideal for redirecting just like the Link and NavLink, it also has a 'to' prop. However, Link and NavLink must be clicked to navigate the user, once Navigate is rendered the user will automatically
                   be taken to location specified.
                   - redirect declaratively
                   - imported from react-router-dom

                h. useNavigate
                   - an imperative mechanism for updating the browser's location.
                   - imported from the react-router-dom
                   - ideal for navigating users through their hostory stack.
                   eg; navigate(-1) - previous URL
                       navigate(1) - next URL
                       navigate(-3) - navigate 3 URLs back.

                   Syntax;
                   import { useNavigate } from `react-router-dom`;

                    export const ExampleForm = () => {

                        const navigate = useNavigate()

                        const handleSubmit = e => {
                        e.preventDefault();
                        navigate('/')
                        }

                        return (
                                <form onSubmit={handleSubmit}>
                                        // { form elements }
                                </form>
                        )
                    }

                i. Query Parameters
                   - prepended by a '?' followed by a parameter name assigned to a value.
                   most used to search, sort and/or filter resources.
                   Eg; const [ searchParams, setSearchParams ] = useSearchParams(); 

                   - React router provides the useSearchParams() hook that will return a URLSearchParams object
                   - works well only when we want to access or alter the current paths's query parameters
                    but to navigate to a path and include query parameters createSearchParams() is used in conjunction with the useNavigate.

        4.  Styling React Apps
                a. Inline Styles and Style Object variables
                  eg: <h1 style={{ color: 'red' }}>Hello World</h1>

                  style object variable is suitable when applying more than one style
                   eg: const darkMode = {
                           color: 'white',
                           background: 'black';
                   };
                   <h1 style={darkMode}>Hello World</h1>
                
                b. Style Syntax
                   CSS property names use camelCase in React

                c. Multiple Stylesheets
                   best to be modular by creating a separate stylesheet for each component
                   - implemented by using modules
*/

/* 
     DAY 61 of 100 Days of Code
        1. Introduction to Redux
            Redux is a state management library that follows the Flux architecture.ie shared information is consolidated within a single object instead of being scattered across individual components.

                a. One-Way Data Flow
                   redux seprates the state, the view, and actions by requiring that the state be managed by a single source.
                   requests to change are sent to this single source by view components in form of actions.

                   Actions - State - View -back to Actions

                b. State
                   current information that drives the app's behaviour and appearance.
                   - can be of any JS type: number,, string, boolean, array, and object.
                   Syntax: const state = [ 'Take 5', 'Scourge', 'GENeRAL-REX'];

                c. Actions (requests to change state)
                    describe an event or an action that has occured and provide information about what needs to be updated in the application's state.
                    - simply actions are how Redux manages and update the state
                    Syntax:
                        const addName = {
                                type: 'names/addName',
                                payload: 'Decepticon Barricade'
                        }

                d. Reducers(how changes are carried out)
                    a plain JS function that defines how current state and action are used in combination to create a new state.

                    Facts about reducers
                        i. a js function.
                        ii. defines app's next state given current state and specific action
                        iii. returns default initial state in no action provided
                        iv. returns current state if the action isnot recognized

                   Syntax;
                        // Define reducer here
                        const reducer = (state = initialState, action) => {
                                switch (action.type) {
                                        case 'songs/addSong': {
                                          return [ ...state, action.payload];
                                        }
                                        case 'songs/removeSong': {
                                        const currentState = [...state];
                                        const newState = currentState.filter(song => song !== action.payload);
                                          return newState;
                                        }
                                        default: {
                                          return state;
                                        }
                                }
                        }

                        const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

                        const addNewSong = {
                                type: 'songs/addSong',
                                payload: 'Halo'
                        };

                        const removeSong = {
                                type: 'songs/removeSong',
                                payload: 'Take Five'
                        };

                        const removeAll = {
                                type: 'songs/removeAll'
                        }

                e. Rules of Reducers
                        i. only calculate the new stat value based on the state and action arguments
                        ii. not allowed to modify the existing state, instead they must copy the existing state and make changes to the copied values.
                        iii. must not do asynchronous logic or have side effects.

                f. immutable updates and pure functions
                        reducers must perform immutable updates and be pure functions.
                        Being immutable means the function doesn't alter original arguments
                        Syntax: mutable 
                                const mutableUpdater = (obj) => {
                                        obj.completed = !obj.completed;
                                        return obj;
                                }

                                immutable
                                const immutableUpdater = (obj) => {
                                        return {
                                                ...obj,
                                                completed: !obj.completed
                                        }
                                }
                
                g. Store
                   serves as a container for state, initializes state with default value. it also contains the reducer

        2. Redux API
                a. createStore() method
                                store.getState()
                                store.dispatch(action)
                                store.subscribe(listener)
                                store.replaceReducer(nextReducer)
                  i. create store
                        Syntax: // Create the store here
                                export const store = createStore(countReducer);

                  ii. Dispatch actions to store     
                       indicating that you wish to update the state.
                       Syntax: store.dispatch({ type: 'decrement'});
                                console.log(store.getState());     

                  iii. Action creators
                         - function that returns an action object with a type property.
                         after which they are called and passed directly to the store through store.dispatch()
                         - reduce repition of dispatching actions of the same type multiple times or from multiple places.
                         Syntax: export const increment = () => {
                                        return { type: 'increment' };
                                }
                                store.dispatch(increment());

                  iv. Respond to state changes
                        Syntax: // Listener function
                                const printCountStatus = () = {
                                        console.log(`The count is ${store.getState}`)
                                }
                                // Subscribe listener function to store
                                store.subscribe(printCountStatus);

                  v. Connecting a Redux Store to a UI
                        > Create a Redux store
                        > Render the initial state of the application.
                        > Subscribe to updates. Inside the subscription callback:
                               - Get the current store state
                               - Select the data needed by this piece of UI
                               - Update the UI with the data
                        > Respond to UI events by dispatching Redux actions
                
        //////////// Day 61
                b. Strategies for Complex State
                        Redux is best for complex applications with large data

                   i. Slices
                      top-level state properties, they typically represent a different feature of the entire application.
                      can be of any data value: string, array of objects.

                   ii. Actions & Payloads For Complex state.
                       define which changes can occur to the app's state
                        -identify type of actions that will be dispatched
                        -what payload they will carry
                        -lastly make action creators.
                
                   iii. Immutable Updates & Complex State
                         - same rules apply to the reducer function.
                         - consider utilizing filter() and map(). 

                   iv. Reducer Composition
                         as application's state becomes complex a single reducer becomes impractical, a pattern is used to manage it all.
                         in which individual slice reducers - responsible for updating only one slice of the application's state.
                         their results are recombined by a rootRedcuer.

                         InitialState obj replaced by individual initialSliceName. the default values for each slice reducer's slice of state
                         all slice reducers are called.

                         Syntax;
                         // Reducers
                        ////////////////////////////////////////

                        const initialAllRecipes = [];
                        const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
                                switch(action.type) {
                                        case 'allRecipes/loadData':
                                                return action.payload
                                        default:
                                                return allRecipes;
                                }
                        }

                        const initialSearchTerm = '';
                        const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
                                switch(action.type) {
                                        case 'searchTerm/setSearchTerm':
                                                return action.payload;
                                        case 'searchTerm/clearSearchTerm':
                                                return '';
                                        default: 
                                                return searchTerm;
                                }
                        }

                        // Create the initial state for this reducer.
                        const initialFavoriteRecipes = [];
                        const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
                                switch(action.type) {
                                        // Add action.type cases here.
                                        case 'favoriteRecipes/addRecipe':
                                                return [...favoriteRecipes, action.payload];
                                        case 'favoriteRecipes/removeRecipe':
                                                return favoriteRecipes.filter(element => element.id !== action.payload.id);
                                        default:
                                                return favoriteRecipes
                                }
                        }


                        const rootReducer = (state = {}, action) => {
                                const nextState = {
                                        allRecipes: allRecipesReducer(state.allRecipes, action),
                                        searchTerm: searchTermReducer(state.searchTerm, action),
                                        // Add in the favoriteRecipes slice using the 
                                        // favoriteRecipesReducer function. 
                                        favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action)
                                } 
                                return nextState;
                        }

                        export const store = createStore(rootReducer);
                
                  v. combineReducers
                        // Create your `rootReducer` here using combineReducers().
                        const reducers = {
                                allRecipes: allRecipesReducer,
                                favoriteRecipes: favoriteRecipesReducer,
                                searchTerm: searchTermReducer
                        };

                        const rootReducer = combineReducers(reducers);
                        export const store = createStore(rootReducer);

                 vi. File strucuture for Redux
                      Redux Ducks pattern
                        src/
                        |-- index.js
                        |-- app/
                        |-- store.js
                        |-- features/
                        |-- featureA/
                                |-- featureASlice.js
                        |-- featureB/
                                |-- featureBSlice.js

                        

                        
                        

                
*/
