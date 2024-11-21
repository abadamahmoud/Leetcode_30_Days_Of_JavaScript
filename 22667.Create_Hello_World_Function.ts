// Define the function that creates and returns a new function
function createHelloWorld(): (...args: any[]) => string {
     // The returned function always returns "Hello World" regardless of the input arguments
     return (...args: any[]): string => {
         return "Hello World";
     };
 }
 
 // Example usage:
 const f = createHelloWorld();
 console.log(f()); // Output: "Hello World"
 console.log(f({}, null, 42)); // Output: "Hello World"