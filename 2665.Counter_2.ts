type Counter = {
     increment: () => number;
     decrement: () => number;
     reset: () => number;
   };
   
   function createCounter(init: number): Counter {
     let current = init;
   
     return {
       increment: () => ++current,
       decrement: () => --current,
       reset: () => (current = init),
     };
   }
   
   // Example Usage:
   const counter = createCounter(5);
   console.log(counter.increment()); // Output: 6
   console.log(counter.reset());     // Output: 5
   console.log(counter.decrement()); // Output: 4
   