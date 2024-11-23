type ExpectResult = {
     toBe: (val: any) => boolean;
     notToBe: (val: any) => boolean;
   };
   
   function expect(val: any): ExpectResult {
     return {
       toBe(expected: any): boolean {
         if (val === expected) {
           return true;
         }
         throw new Error("Not Equal");
       },
       notToBe(expected: any): boolean {
         if (val !== expected) {
           return true;
         }
         throw new Error("Equal");
       },
     };
   }
   
   // Example Usage
   try {
     const result1 = expect(5).toBe(5); // true
     console.log({ value: result1 });
   } catch (error) {
     console.error({ error: (error as Error).message });
   }
   
   try {
     const result2 = expect(5).toBe(null); // throws "Not Equal"
     console.log({ value: result2 });
   } catch (error) {
     console.error({ error: (error as Error).message });
   }
   
   try {
     const result3 = expect(5).notToBe(null); // true
     console.log({ value: result3 });
   } catch (error) {
     console.error({ error: (error as Error).message });
   }
   