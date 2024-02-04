
// Day 12 of #100Days Of Code
/*
Runtime Environment - where your program will be executed (browser’s runtime environment and the Node runtime environment).
Front-end JavaScript applications are executed in a browser’s runtime environment and have access to window object.
Back-end JavaScript applications are executed in the Node runtime environment and have access to file systems, databases, 
and networks attached to the server.

Implementing Modules in Node
Modules reusable pieces of code in a file that can be exported and then imported in another file.
Terms ‘file’ and ‘module’ are often interchangeable used.
Useful reasons to implement modules;
•	Find, fix, and debug easily
•	Reuse and recycle defined logic in different part of the application
•	Prevent pollution of the global namespace, potential naming collisions

Implementation of modules in JavaScript: Node.js vs ES6 – the 2 runtime environments
     1.	Node runtime and the module.exports object and require() syntax.
        Converters.js 
        function celciustoFahrenheit(celcius) {
            return celcius * (9/5) + 32;
        }

        module.exports.celciustoFahrenheit = celciustoFahrenheit;

        module.exports.fahrenheitToCelcius = fahrenheit => {
            return (fahrenheit -32) * (5/9);
        };
        // The code snippet above demonstrates two ways of exporting functions from a module.
        
        // The function require() accepts a string(filepath) as an argument.
        const converters = require('./converters.js');
        
        const freezingPointC = 0;
        const boilingPointC = 100;

        const freezingPointF = converters.celciustoFahrenheit(freezingPointC);
        const boilingPointF = converters.celciustoFahrenheit(boilingPointC);

        // Object Destructuring to be more selective with require()
        const { celciustoFahrenheit } = require('./converters.js');

        
     2.	Browser’s runtime environment and the ES6 import/export syntax
        ES6's Named Export Syntax - all resources have to be declared before being exported
         A: export { resourceToExportA, resourceToExportB}
         B: export const functionName = (param) => {
              //Function logic..
        }
       ES6's Import Syntax - 
        import { resourceExportedA, resourceExportedB } from '/path/to/module.js'
   Add the type = 'module' attribute to properly load a module without browser errors
 use the as keyword to rename imports to avoid naming collisions
        import { exportedResource as newlyNamedResource } from '/path/to/module'

 3.  Default Exports and Imports
*/


 //Day 13 of #100 Days of Code
/* 
  Asynchronous Programming -
  1. Definition: Promises are objects that represent the eventual outcome of an asynchronous operation
        ES6's Promise states;
        i. Pending: not completed
        2. Fulfilled: successfully returned a value.
        3. Rejected: Error

  -Once no longer pending, a Promise is considered settled.
  
  2. Constructing a Promise Object
        Syntax:
        const executerFunction = (resolve, reject) => {
                if (condition = true) {
                        resolve('It worked');
                } else {
                        reject('rejected');
                }
        };
        const myfirstPromise = new Promise(executorFunction);
  -Both resolve() takes one argument and reject() takes error as an argument, 

  3. Handling promises with the Node setTimeout()
        -Execute functions that returen Promises which settle after sometime.
        Syntax;
        const functionName = () => {
                logic...
        };

        setTimeout(callbackFunction, 2000);  <!- The callback function in this case is the functionName -!>

        OR
        -Constructing asynchronous promises from a function
        const returnPromiseFunction = () => {
                return new Promise((resolve, reject) => {
                        setTimeout(() => {resolve('Resolved')}, 1000)
                });
        };

        const prom = returnPromiseFunction();

  4. Consuming promises
        -the .then() - tells what should happen after a promise is settled. - returns a new Promise even when no handlers provided
        -then() is a higher order function as it takes two callback functions as arguments (handlers).
        -these handlers (onFulfilled, onRejected) are invoked once a Promise is settled.

        Success and Failure Callback Functions
        -When .then() is invoked on the promise, success and failure handler callback functions are passed.
        Syntax;
        const onFulfilled (resolvedValue) => {};
        const onRejected (rejectionReason) => {};
        promise.then(onFulfilled, onRejected);

*/


/* Day 14 of !00 Days Of Code
  5. Using the .catch() with Promises
        -similar to the .then() with a failure handler callback function.
        Syntax;
        prom
         .then((resolvedValue) => {
                 console.log(resolvedValue);
         });
         .catch((rejectionReason) => {
                 console.log(resolvedValue);
         });

  6. Chaining Multiple Promises (promise Composition)
         
        firstPromiseFunction()
        .then((firstResolveVal) => {
          return secondPromiseFunction(firstResolveVal);
        })
          .then((secondResolveVal) => {
                console.log(secondResolveVal);
        });
         
        -For Promise chaining to work, the return value from the .then() has to be a new Promise to have an asynchronous operation

        -When we chain .then() functions, each one waits for the previous one to finish. If the previous one returns a Promise,
        it waits for that Promise to resolve. If the previous one returns a regular value or doesn’t return
        anything, it doesn’t wait and goes ahead right away.
        
        -Not every step in a Promise chain has to be asynchronous
   
        So, the key here is that the return value of one .then() function is passed as an argument to the next .then() function 
        in the chain. If a .then() function returns a Promise (like processPayment(resolvedValueArray) does), the next .then() function 
        will be called with the resolved value of that Promise.
 
  7. Common Mistakes
        Mistake 1: Nesting promises instead of chaining them.
        Mistake 2: Forgetting to return a Promise

  8. Using Promise.all() to take advantage of concurrency
        - With Promise.all() function, multiple asynchronous operations happen at the same time.
        - Accepts an array of promises as argument and returns a single promise that settles in two ways;
                i. If every promise in the argument array resolves, the single promise will resolve an array conainting the resolve value for each promise in
                   an argument array.
               ii. If any promise in the argument array rejects, the single returned promise will immmediately reject with the reason.
                  (failing fast) 
        Syntax;
        const myPromises = Promise.all([ARRAY]);

  .then() used with a success handler callback if a promise resolves.
  .catch() used with a failure handler callback if a promise rejects.

  PROMISE EXAMPLE;
          let firstSentence;

        promisifiedReadFile = ('./file.txt', 'utf-8')
           .then((data) => {
                firstSentence = data;
                return promisifiedReadFile('./file2.txt', 'utf-8');
           })
           .then((data) = > {
                   secondSentence = data;
                   console.log(firstSentence, secondSentence)
           })
           .catch((err) => {console.log(err)})

*/


/* Day 15 of 100 Days Of Code: ASYNC/AWAIT
  1. The async Keyword
        -this handles asynchronuous actions while moving on to another task - requests to networks, databases. 
        -JavaScript uses an event-loop which allows to execute other tasks while it awaits  ompletion of asynchronous tasks. 
        -The async...await only introduces a new syntax of using promises and generators. 
        -Callback function is a function that is passed as argument to another function, and executed only after the parent function has executed.
        -They are a way to make sure a certain code doesnot execute until another code has been executed.

        -Async automatically returns a Promise

        the async function declaration;
        async function myFunc() {
                ...
        };

        myFunc();

        function expression;
        const myFunc = async () => {
                ..
        };

  2. The await Operator
        -it halts the execution of an async function until a function that returns a promise is done.( the promise settles).
        -it returns the resolved value.

        Syntax;
        async function announceDinner() {
                let resolvedMeal = await brainstormDinner(); //brainstormDinner is function that returns a promise.
                console.log(`I\'m going to make ${resolvedMeal} for dinner.`);
        }

        announceDinner();

  3. Handling Dependent Promises
        -unlike the native promise syntax (chaining***), the async...await syntax reduces code length, improve readalbility and most of all
        makes it easier to store and refer to resolved values from promises.
        - Native Promise Syntax - refers to the original writing of asynchronous code with promises, involving chaining .then() functions and returning promises 
        inside callbacks

  4. Handling Errors
        -The async..await uses the try...catch statements, both synchronous and asynchronous errors can be spotted, unlike the .catch() in native promise chaining.
        -With the .catch() it does indicate where exactly the is from in a long promise chain.

        Syntax;
        async function hostDinnerParty() {
                try{
                        let resolvedMeal = await cookBeanSouffle();
                        console.log(`${resolvedMeal} is served!`)

                } catch (error) {
                        console.log(error);
                        console.log('Ordering a pizza!')
                }
        }

        hostDinnerParty();

  5. Handling Independent Promises - taking advantage of concurrency(performing asynchronous actions at the same time).
        Syntax;
        async function serveDinner() {
                let vegetablePromise = steamBroccoli();
                let starchPromise = cookRice();
                let proteinPromise = bakeChicken();
                let sidePromise = cookBeans();

                console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
        }
        serveDinner();

  6. The Await Promise.all()
        -another way to take advantage of concurrency when having multiple promises which can be executed simultaneously.

        async function serveDinnerAgain() {
                let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
                let foodArrayLength = foodArray.length;
                for (let i = 0; i < foodArrayLength; i++) {
                        let vegetable = foodArray[0];
                        let starch =  foodArray[1];
                        let protein =  foodArray[2];
                        let side =  foodArray[3];
                        console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
                }
        }

        serveDinnerAgain();
*/

// EventLoop('https://www.codecademy.com/courses/learn-intermediate-javascript/articles/javascript-concurrency-model-and-event-loop')
/* 
  Day 16 of 100 Days of Code: 
  1. HTTP Basics - Understanding basics of how a web browser communicates with the internet.
        HTTP - Hypertext Transfer Protocol: structure requests and responses iver the internet.
        TCP - Transmission Control Protocol: oversees the transfer of resources.
                -connection-oriented communication, error control, full duplex data transmission.

        HTTP & TCP: How It Works! - A
        HTTP/1.0 - every resource request requires a separate connection to the server Vs HTTP/1.1 - uses one connection more than once.
        HTTPS - short for HTTP Secure

  2. Introduction to Requests with ES6 - Fetch API
        Types of requests
            - GET
            - POST
            - PUT
            - DELETE

  3. GET Requests using fetch()
        -the fetch() function: 
                - creates a request object
                - sends the request object to the endpoint provided
                - returns a promise that resolves a response object(status & info from API)
        Syntax;
        // fetch to construct a GET request.
        fetch('endpoint').then(response => {
                if (response.ok) {
                        return response.json();
                }
                throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
                // logic...
        });
        
        -The second .then() handles a GET Request response.

  4. POST Requests using fetch()
        -constructing POST requests using fetch() involves supplying an options object;
        Syntax;
        fetch(endpoint, {
                method: 'POST',
                body: 'JSON.stringify({id:'200'})
        }).then(response => {
                if (response.ok) {
                        return response.json();
                }
                throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
                // logic...
        });

        Example
        //Information to reach api
        const apiKey = 'ade1d54c2b6a49259268738a55a37861';
        const url = 'https://api.rebrandly.com/v1/links';

        const shortenUrl = () => {
                const urlToShorten = inputField.value;
                const data = JSON.stringify({destination: urlToShorten});
                fetch(url, {
                        method: 'POST',
                        headers: {
                        'Content-type': 'application/json',
                        'apikey': apiKey
                        },
                        body: data
                }).then(response => {
                        if (response.ok) {
                        return response.json();
                        }
                        throw new Error('Request failed!')
                }, networkError => {console.log(networkError.message)})
                .then( jsonResponse => {
                        renderResponse(jsonResponse);
                })
        }
*/


/* Day 17 of 100 Days of Code 
  - Using fetch API = [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]
  1. async GET Requests
        - a much simpler way of performing requests with fetch API.
        Syntax;
        const getData = async () => {
                try {
                        const response = await fetch('endpoint'); // Sends request
                        if (response.ok) {                                      //
                                const jsonResponse = await response.json();       // handles response if successful
                                // Use response...                                       //
                        }
                        throw new Error('Request failed!')
                } catch(error) {
                        console.log(error);             // Handles response if unsuccessful
                }
        }

  2. async POST Requests 
        Syntax;
        const getData = async () => {
                try {
                        const response = await fetch('endpoint', {
                                method: 'POST',
                                body: JSON.stringify({id:'200'})
                        })
                        if (response.ok) {
                                 const jsonResponse = await response.json();
                                 // Use the response...
                        }
                        throw new Error('Request failed!')
                } catch(error) {
                        console.log(error);             // Handles response if unsuccessful
                }
        }
  3. Aborting incomplete fetch operations
        use AbortController and AbortSignal interfaces.
*/


/* 
   Day 18 of 100 Days of Code
  1. Debugging JavaScript Code
        transition from a frustrated coder to a bug squasher.
        Error stack trace - a printed message containing where the error occured (file & line), what type of error was thrown, and a description of the error
  
  2. JavaScript Error Types
        there are 3 common error types;
                a. Syntax Error: a typo creates invalid code. brackets, parentheses, included valid semicolons.
                b. Reference Error: accessing an undeclared variable.
                c. Type Error: performing an operation on a value of wrong type.

  3. Locating Silent Errors - Logical errors
        - using the console.log()
        - includes('DELL') -checks if a string contains the substring 'DELL'
 
  4. Introduction to Error Handling
        - Error handling a process of programmatically anticipating and addressing errors. 
        - In JavaScript we use try...catch keywords

        a. Runtime Errors - when we execute code and a line of code throws an error.
                eg ReferenceError, TypeError

  5. Constructing an Error
        -javaScript errors are objects that have a name and message property.
        Syntax;
        console.log(Error('Error message'));
        - unlike throwing an error, creating an error doesnot stop the program from running.

        # the throw keyword - halts the program.

        handle thrown error using the throw keyword

 */


 /* Day 19 of 100 Days Of Code 

  JavaScript Under The Hood
        1. Currying in JavaScript
                - a functional programming technique where a function with multiple arguments is broken down into a series of functions, each with one argument.
                - Functional programming a paradigm that emphasizes immutability and pure functions - side-effect free, for any input
                it will always return the same output.

                - all curried functions are higher-order functions but not all higher-order functions are curried

                - argument in the parent function is available to nested functions due to closure. 
                - Closure: nested function retains the scope of parent functions based on where the function is defined, even if the nested fn 
                is executed outside lexical scope.

                Syntax;
                        // traditional function
                        function add(a,b) {
                                return a + b;
                        }

                        // curried function
                        function curried_add(a) {
                                // has access to argument a
                                return function nested_add(b) {
                                        // has access to arguments a and b
                                        return a + b;
                                }
                        }
                        let add_one = curried_add(1);
                        let result = add_one(2);

                        console.log(result);  // Prints 3, a result of 1 + 2.

                Currying with arrow functions;
                Syntax;
                        const curried_add = a => b => a + b;

                Realisitic Currying example; 
                // Players Array
                const players = [
                        { age: 5, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-01-20') },
                        { age: 6, sport: "baseball", city: "Boulder", dateJoined: new Date('2019-12-30') },
                        { age: 10, sport: "soccer", city: "Chicago", dateJoined: new Date('2020-11-12') },
                        { age: 11, sport: "handball", city: "San Francisco", dateJoined: new Date('2020-08-21') },
                        { age: 6, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-07-06') },
                        { age: 8, sport: "softball", city: "Boulder", dateJoined: new Date('2019-02-27') },
                        { age: 7, sport: "tennis", city: "San Francisco", dateJoined: new Date('2019-05-31') },
                        { age: 4, sport: "handball", city: "San Francisco", dateJoined: new Date('2018-03-10') }
                ]

                // Traditional function filters by the city then filters the results by the key-value pair
                const filterPlayersByValueFromCity = (playersArr, city, filterKey, filterValue) => {
                        return playersArr.filter(player => {
                                return player.city === city;
                        }).filter(playersFromCity => playersFromCity[filterKey] === filterValue)
                }
                
                console.log(filterPlayersByValueFromCity(players, "San Francisco", "sport", "handball"));

                - The above traditional function, is not easy to read, upon filtering the callback fn is called upon every element
                this can be resource intense.

                // Using  a currying technique
                // Makes code ease to read and reuse.
                const setFilter = array => key => value => array.filter(x => x[key] === value);
                
                const filterPlayers = setFilter(players);
                const filerPlayersByCity = filterPlayers('city');
                const filterPlayersByChicago = filterPlayerByCity('Chicago');
                const filterPlayerBySport = filterPlayer('sport');
                const filterPlayerBySoccer = filterPlayerBySport('soccer');

                // Now to make it modular ie sort the players by the date they joined the sports league.
                // NOTE: sort() for arrays by defaults sorts into ascending order. You can pass a compare function to determine
                sort order just like in the example below.
                const sortArrayByValue = sortArray => sortKey => {
                        return sortArray.sort(function(a,b) {
                                if(a[sortKey] < b[sortKey]) {return -1;}
                                if(a[sortKey] > b[sortKey]) {return 1;}
                                return 0;
                        });
                }

                const sortSanFrancisco = sortArrayByValue(filteredPlayersBySanFrancisco);
                const sortSFByDateJoined = sortSanFrancisco("dateJoined");
                console.log(sortSFByDateJoined);
           
        2. Hoisiting in JavaScript - understanding how hoisting plays a role in variab;e and function declaration scope
                - moving declarations to the top of the current scope during compling, before the code is executed.
                - this enables calling afunction on a line of code that is before the line of code where the function is declared.

                key aspects, function declarations, function expressions, and variable declarations.
                
                i. function declarations: - hoisiting also occurs within nested functions.
                ii. function expressions: obey rules hoisting for variable declarations: one for var, another for let and const
                iii. var hoisting: only hoisted to the top of function blocks, not other types of blocks
                 Example;
                        console.log(myVarVariable);  // undefined
                        var myVarVariable = 1;
                   also,
                        var myVarVariable; // undefined
                        myVarVariable = 1;
                only declarations are hoisted, initializations are left in place
                iv. let and const hoisting: - hoisted to the top of their parent scope, any type block or function can be parent scope for these variables.
                        - let and const differ from var in how they initialize as well. while names are hoisted, thy are not initialized.
                        calling a variable before it is initialized results in a ReferenceError.

        3. Concurrency Model and Event Loop in JavaScript- 
                - javascript uses event loop to emulate concurrency.
                Event Loop -  a system for managing code eecution.
                Component of the Event Loop;
                a. The Heap - Block of memory, objects stored in unordered manner. (variables and objecte that are currently in use are stored in the heap)
                b. The Call Stack - tracks which function is currently being run. When you invoke a function, a frame is added to the stack.(last in, first out)
                c. The Event Queue - message corresponding to a list functions waiting to be processed. Enter in FIFO
*/


/*  Day 20 of 100 Days Of Code
        1. Introduction to Memory Management in JavaScript
          Goal is to avoid memory leaks and performance issues with memory management.
          - allocating, using, and releasing memory - the memory life cycle.
          - Memory leaks is when memory that should be released is still in action.

          JavaScript data structures;
                a. Stack: stores primitive values, references to non-primitive values, function call frames
                b. Heap: stores non-primtive values (Objects, Arrays, Function) - values with no fixed size.
                       two or more object variables pointing at the same object in the heap have different references in the stack.
          
          Memory Life Cycle;
                a. Memory allocation: varaiables declared and stored in memory. 
                     - regular variable assignment, assigning properties to an object, declaring callable functions, calling functions.
                     - in calling functions, arguments can be passed by value or reference. Objects are passed via a reference, if uou pass an object and
                     modify the object within the function, the original object will be modified, since the original variable and function's internal variablea are
                     referencing the same object in memory(heap)
                     Syntax;
                        let aaliyah = {
                                name: "Aaliyah"
                        }

                        function nameObjectModification(obj, name) {
                                obj.name = name;
                                return obj;
                        }

                        let sarah = nameObjectModification(aaliyah, "Sarah");

                        console.log(aaliyah); // { name: 'Sarah' }
                        console.log(sarah); // { name: 'Sarah' }

                b. Memory In use: values are read or rewritten (variable reassignment, using variables, passsing arguments to functions). 
                c. Releasing Memory: values no longer in use and get removed from memory. Garbage Collection (reference counting, mark-and-sweep).
          
          Memory Leaks
           A few scenarios that can cause memory leaks;
                messy closures
                Un nullifying variables
                dangling timers and event listeners - not removing them
                circular references
                declaring variables on the Global object
        
        2. Debugging Memory Issues in JavaScript
                Basics of Memory Inspector;
                        a. Heap Snapshot
                        - shows what objects are memory, their constructor fns, how they reference, size of memory objects use.

                        Different Views of Heap Snapshot;
                                i. Summary view: groups objects by constructor. track DOM leaks.
                                ii. Comparison view: shows difference btn 2 or more Heap snapshots.
                                iii. Containment view: analyzing objects referenced in the global namespace.
                                iv. Statistics view: breakdown how memory is used on various categories.
                        
                        b. Allocation instrumentation on timeline
                        - shows memory allocations over time, and can be used to isolate memory leaks. also shows how often garbage collection is done
                        
                        c. Allocation sampling
                        - record memory allocations using sampling. for long-running operations

                How to use the Memory Inspector: Ms Edge
                        Layout thrashing - repeatedly calculating page layout.
                        Forced synchronous layout - browser has to calculate a layout calculation before it can execute a javascript function that depends on layout 
                        information.

                        possible solutions;
                         - batch DOM changes
                         - use transform and opacity properties.

*/


/* Day 21 of 100 Days of Code:  Design Patterns in JavaScript
    1. Common design patterns in Js.
          thoughtful  codebase design reduces time spent on fixing bugs and updating duplex code 
         - Design patterns are solutions that are productive and efficient developed over years of experience and problem solving.
                they focus on challenges like increase maintainability of code, reduce defect rates.
                Eg: Pub/Sub....
    2. Anti-Patterns
         - Anti-Patterns: known solutions that are actually defective for certain kinds of problems. 
                they seem to be effective but can lead to negative outcomes.

        Some common anti-patterns;
          a. God Object: An object that does or knows too much - properties and methods in one place. 
          b. Spaghetti Code: code lacks architecture - hard to locate code for a specific functionality and what code depends on it.
          c. Yo-Yo Problem: moving from class definition to class definition to understand inheritance, and what is happening btn classes.
          d. Singleton: when improperly used can lead to negative outcomes.
          e. Polluting the global namespace: defining too many variables ar global scope.
          f. Altering protoype property of objects.

    2. Design pattern are grouped into;
          a. The Creational Category: control how objects are created or instantiated
             Creational patterns:- Factory, singleton, abstract factory, constructor, prototype, prototype. 
                i. Factory Pattern
                   functions that returns an object with properties and methods.

                   Implementation of the Factory Pattern
                   function createBook(title, author, read = false) {
                        return {
                                title: title,
                                author: author,
                                read: read,
                                getDescription() {
                                        console.log(`${this.title} was written by ${this.author}. I ${this.read ? "have" : "have not"} read it.`);                                   }
                                },
                                readBook() {
                                        this.read = true;
                                }, 
                        }
                   }

                   // Instantiate objects and call methods
                   const The100Days = createBook('100 Days Of Code', 'Robin Charles');
                   The100Days.readBook();

                ii. Singleton Pattern
                   used when exactly instance of a class is needed.
                   some real-world use cases;
                        - database connections: reusing existing connections instead of creating new ones.
                        - configuration settings
                        - logging options
                        - caches
                        - thread pools
                   a single instance restriction is established through the way the class is implemented. ie a method can be written to check if an instance already exists, and only return a new object if it doesn't already exist.

                   Implementation of singleton
                   class Singleton {
                        constructor() {
                                if (!Singleton.instance) {
                                Singleton.instance = this;
                                }
                                return Singleton.instance;
                        }
                        static getInstance() {
                                return this.instance;
                        }
                   }

                   const instance = new Singleton();
                   console.log(Singleton.getInstance()); // logs "Singleton {}"

         b. The Structural Category: (Facade, Proxy, Flyweight, Adapter, Decorator, Composite, Bridge)
             handle relationships btn objects. Define how objects and classes can be composed to provide a new functionality.
              or classes can inherit from super classes.

              i. The Proxy Pattern
                 - protects access to an object by acting as a placeholder that intercepts and redefines the operations of the target object
                 - useful for network requests to avoid redundant requests.

                 - An in built Proxy object can be used to implement this pattern.
                 It has 2 params: target (object being proxied) and handler(object that defines custom behavior of the proxy)
                 - function that defines the behavior for the corresponding obj method. ie set(), get(), has(), deleteProperty()
                 - get() handler, which intercepts to access properties in the target.
                
                 - Proxies are often used with the Reflect object, which provides methods with same names as the Proxy traps.
                 provides a reflective semantics for invoking corresponding object methods.

                 Syntax;
                 const target = {
                        message1: "hello",
                        message2: "everyone",
                 };

                 const handler3 = {
                        get(target, prop, receiver) {
                        if (prop === "message2") {
                        return "world";
                        }
                        return Reflect.get(...arguments);
                        },
                 };

                 const proxy3 = new Proxy(target, handler3);

                 console.log(proxy3.message1); // hello
                 console.log(proxy3.message2); // world

            ii. Facade Pattern
                 - a single class that simplifies interactions with APIs by taking all of the complexity of a subsystem.
                 - this creates a common interface
                 
                 Syntax;
                 class VideoConverter {
                        constructor() {}
                                convertNewVideo(...args) {
                                // This method can interact with `Audio`, `Video`, `Codec`, and `Compression`
                        }
                 }

                 class Audio {
                        constructor() {}
                        // complex subsystem code
                 }

                 class Video {
                        constructor() {}
                        // complex subsystem code
                 }

                 class Codec {
                        constructor() {}
                        // complex subsystem code
                 }

                 class Compression {
                        constructor() {}
                        // complex subsystem code
                 }
  
         c. The Behavioral Category: (Iterator, mediator, observer, visitor)
            - streamline messages between unrelated objects by delegating how they can communicate.
            - encapsulate communication behavior to decouple messages btn senders and receivers
            
             i. Observer Pattern
                 - just like on social media, users can follow me to stay posted with my activity. in the same vein, 
                 observer pattern, objects can have dependencies to view changes to another object.
                 - the flow can be one-to-many relationship

            ii. Mediator Pattern
                 - As it is with Bolt, where you don't directly call a driver to pick you rather you send a request through the app, then the app mediates abnd
                 assigns a driver to pick you. The mediator pattern encapsulate how different parts of your codebase can communicate.
                 - by preventing too many direct relationships btn classes or components.(Not tightly coupled)

                 Syntax;
                 class Passenger {
                    constructor(name) {
                        this.name = name;
                    }
                    sendRequest(rideshareapp) {
                        rideshareapp.receiveRequest(this.name);
                    }
                 }

                 class Driver {
                     constructor(name) {
                        this.name = name;
                     }
                     goOnline(rideshareapp) {
                        rideshareapp.addDriver(this.name);
                     }
                 }

                 class RideshareApp {
                     constructor() {
                        this.drivers = [];
                        this.riders = [];
                     }
                     addDriver(name) {
                        this.drivers.push(name);
                     }
                     updateDriverArray(name) {
                        this.drivers.splice(this.drivers.indexOf(name), 1);
                     }
                     assignDriver() {
                        // We will assume there are always more drivers than riders
                        return this.drivers[Math.floor(Math.random(this.drivers.length))].name;
                     }
                     receiveRequest(passenger) {
                        const driver = this.assignDriver();
                        console.log(driver);
                        this.sendNotification(passenger, driver);
                        this.updateDriverArray(driver);
                     }
                     sendNotification(passenger, driver) {
                        console.log(`${driver} is assigned to ${passenger}.`)
                     }
                 }
 
                 const rideshareapp = new RideshareApp();

                 const james = new Passenger("James");
                 const sarah = new Driver("Sarah");

                 rideshareapp.addDriver(sarah);
                 james.sendRequest(rideshareapp);

        4. Design Patterns in Architecture
           design patterns can be applied to system architectures
            - Using Proxy pattern to implement a Proxy server
            - Using the Facade pattern to implement microservices
        
*/

// End of JavaScript Revision


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

                        useEffect(() =>{
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
                                document.removeEventListener('click, increment);
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

/* Day 31 of 100 Days of Code 
        TAILWIND CSS: https://tailwindcss.com/docs/utility-first

        1. Utility-First Fundamentals
           - traditional styling approach requires the use of custom CSS for custom designs
           With tailwind, utility classes are used to build custom designs without writing CSS
           eg: flexbox, padding, max-width, margin, width, space-between, ...

           - no inventing class names
           - reusable code to stlye that you don't have to write new CSS
           - state variants to target states like hover of focus.
           
           a. Maintainability Concerns
                   i. managing commonly repeated utility combinations.
                       - solved by extracting components and partials, using editor and language features like mulit-cursor editing and simple loops.
        
        2. Handling Hover, Focus, and Other States
           using utilities to styles elements on hover, and other states
           eg: <button class="bg-sky-500 hover:bg-sky-700 ...">
                   Save Changes
                </button>

           Tailwind also includes modifiers;
              a. Pseudo-classes, like ':hover'. ':focus', ':first-child', and ':required'
                   - pseudo-class reference:
                        Form states: 'required', 'invalid' and 'disabled'
                        Styling based on parent state(group-{modifier}) -mark the parent with the group class ie
                        'group-focus', 'group-active'

                        Differentiating nested groups
                        styling a specific parent group by giving that parent a unique group name: group/{name} class
                        , and including that name in modifiers using classes like group-hover/{name}
                        
                        Arbitary groups

                        Styling based on sibling state (peer-{modifier})
                        Differentiating peers
                        Arbitary peers

                        Styling direct children (*-{modifier})
                        Styling based on descendants (has-{modifier})
                        Styling based on the descendants of a group (group-has-{modifier})
                        Styling based on the descendants of a peer (peer-has-{modifier})

              b. Pseudo-elements, like '::before', '::after', '::placeholder', and '::selection'
                   - placeholder text, file input buttons, list markers, highlighted text, dailog backdrops, first-line and first-letter.

              c. Media and feature queries like responsive breakpoints(md and md), dark mode and 'prefers-reduced-motion'
                   - Viewport orientation( portrait and lndscape), print 

              d. Attribute selectors, like '[dir="rtl"]' and '[open]'
                   - ARIA States: use aria-* modifier to conditionally style things based on ARIA attributes
  
*/

/* 
   Day 32 of 100 Days of Code
       1. Responsive Design
         => Utilize breakpoints;
               a. sm - 640px (minimum width: @media (min-width: 640px) { ... })
               b. md - 768px
               c. lg - 1024px
               d. xl - 1280px
               e. 2xl - 1536px
            Eg: <img class="w-16 md:w-32 lg:w-48" src="...">

         => Working mobile-first
                   Tailwind uses a mobile-first breakpoint system. Just like bootstrap.
                   That is unprefixed utilities like 'uppercase' take effect on all screen sizes, while prefixed like 'md:uppercase' only take effect at the specified breakpoint and above.
         
         => Targeting mobile screens
             Use unprefixe utilities to target mobile, and override them at larger breakpoints. 
              Syntax; <div class="text-center sm:text-left"></div> // Centers text on mibile, and left align it on screens 640px and wider.
             Avoid using sm as it will  center text on screens 640px and wider.
         
         => Targeting a breakpoint range
              Syntax; class="md:max-xl:flex"

         => Customizing theme in the tailwind.config.js
         
         => Arbitary values
            use min or max modifiers to generate a custom breakpoint by using any arbitary value.
            Syntax: min-[320px]:text-center max-[600px]:bg-sky-300

        2. Dark Mode
            With the dark variant, Tailwind lets you style a site differently when dark mode is enabled. Relies on the operating preference.
            For toggling dark mode manually use class strategy

        3. Reusing Styles - Managing duplication and creating reusable abstractions.
               Techniques;
               a. Using editor and language features
               b. Mulit-cursor editing- select & edit class list for each element at once
               c. Loops <div class="mt-3 flex -space-x-2 overflow-hidden">
                                {#each contributors as user}
                                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>
                                {/each}
                        </div>
                d. Extracting components and partials
                   If you need to reuse some styles across multiple files, the best strategy is to create a component and extract it with @apply

        4. Adding Custom Styles
           a. customizing your theme to  change color pallettes, spacing style, typography scale
           b. Using arbitary values: propeties, variants
           c. using CSS and @layer
              

        4. Functions & Direcives
            => Directives are custom Tailwind-specific at-rules. i.e statements that instruct CSS how to behave.
            These include;
                   a. @tailwind: inserts Tailwind's base, components, utilities and variants styles into your CSS
                   b. @layer: directive instructing tailwind how to group your own styles ie creating different sections in your CSS for different types of styles.
                   c. @apply: facilitates the use of your own custom CSS.

            => Functions 
                   theme() - access Tailwinds.config.js
                   screen() - creates meadia queries that refernces breakpoints by name. eg; @media screen(sm) {}
                   - use dot to access nested color values eg; theme(colors.blue.500)

        5.  Layout
            i. container class: set max width of an element to match the min-width of the current breakpoint.
                -A component for fixind an element's width to the current breakpoint.
                   a. container mx-auto - to center container, adjusts margin automatically
                   b. container px-{size} - adds horizontal padding.

            ii. Tailwind CSS Box Sizing
                   utilities for how the browser should calculate an element's total size.
                         box-border (includes content, paddding and borders) 
                         box-content- excludes borders and padding.
          
           iii. Display(display) class
                        defines how compnents are going to be placed on the web page.
                        a. block: block element, own line, and fills its parent.
                        b. inline-block: prevent text inside from extending beyod parent
                        c. inline: ignores height and width set by user
                        d. flex: block level flex container margin doesnot collapse with content margins
                        e. inline-flex
                        f. table
                        g. grid
                        h. content: disappear the container
                        i. hidden: remove the element, sets element display to none

            iv. Float Class
                        utilities for controlling the wrapping of content around an element.
                        a. float-right
                        b. float-left
                        c. float-none: floats elements at default place

             v. Clear
                   utilities for controlling the wrapping of content around an element.
                   Eg; left, right, both, none. controlwrapping of content around an element

             vi. Setting the aspect ratio of an element
                   aspect-{ratio} 
                   Syntax: <iframe class="w-full aspect-video md:aspect-square" src=""></iframe>
                   can apply aspect ratio conditionally on hover, focus, and others states, breakpoints, custom themes, arbitary values.

             vii. Columns 
                   utilities for controlling number of columns within an element
                   a. columns-{count}: sets number of columns that should be created within an element. w-full
                   b. columns-{width}: sets ideal column width for the content within an element, number of columns(the count) automatically adjusts
                   c. gap-x sets width between columns

             viii. Break After
                    controls how a column or page should break after an element
                    break-after-{value}
                    break-before-{value} opposite of break after.
                    break-inside-{value} specifies how a column should behave within an element.

               ix. Box Declaration break how element fragments should be rendered across multiple lines, columns or pages.
                     box-decoration-slice: renders as distinct blocks
                     boc-decoration-clone: renders as one continuous fragment.

                x. Isolation
                      utilities for controlling whether an element should explictly create a new stacking context.
                      isolate and isolation-auto
                      Syntax; <div class='isolate md:isolation-auto'>
                                <!-- ... -->
                              </div>

                xi. Object Fit
                        controlling how a replaced element's content should be resized.
                        contain, cover, fill, scale-down, object-none
                        Syntax; <div class='bg-indigo-300 ... '>
                                        <img class='object-cover h-48 w-95 ...'>
                                </div>
                        
*/