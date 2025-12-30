// TYPES AND INFRENCE

// 1. Declare a variable where TypeScript **infers** the type automatically. Try reassigning a wrong type.

let name = "Rajendra";
// name = 20

// 2. Create a variable that can hold **only** a number initially, then refactor it using inference.

let age:number = 20
// let age = 20

// 3. Declare a variable using `unknown` and safely access it as a string.
// 4. What happens if you try to call a string method on `unknown`?

let profession: unknown = "developer"

// profession.toUpperCase();

if(typeof profession === "string"){
    profession.toUpperCase();
}

// 5. Create a function that returns nothing. What type should it have?

function returnNothing():void{
    console.log("nothing")
}

// 6. Create a variable that should **never** have a value.
let nothing: never;

// nothing = "hello"