
function map(arr: number[], fn: (value: number, index: number) => number): number[] {
     const transformedArray: number[] = [];
     for (let i = 0; i < arr.length; i++) {
         transformedArray.push(fn(arr[i], i));
     }
     return transformedArray;
 }
 
 // Example Usage:
 const arr1 = [1, 2, 3];
 const plusOne = (n: number): number => n + 1;
 console.log(map(arr1, plusOne)); // Output: [2, 3, 4]
 
 const arr2 = [1, 2, 3];
 const plusIndex = (n: number, i: number): number => n + i;
 console.log(map(arr2, plusIndex)); // Output: [1, 3, 5]
 
 const arr3 = [10, 20, 30];
 const constant = (): number => 42;
 console.log(map(arr3, constant)); // Output: [42, 42, 42]
 