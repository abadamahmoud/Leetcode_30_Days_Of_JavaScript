function createCounter(n: number): () => number {
     let count = n;
 
     // Return a function that increments and returns the count
     return function (): number {
         return count++;
     };
 }
 
 /**
  * Example Usage
  */
 const counter = createCounter(10);
 
 console.log(counter()); // Output: 10
 console.log(counter()); // Output: 11
 console.log(counter()); // Output: 12
 