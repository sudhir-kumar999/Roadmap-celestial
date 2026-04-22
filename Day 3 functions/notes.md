Today I have assigned some tasks to cover, like a pure function, immutability, higher order function, function currying, composition, and write code for array methods like map, filter and reduce manually.

Start from a pure function - a function that gives the same output on entering the same input. Pure functions are not dependent on any external factor.

Immutability – immutability means that when we create data or store a value into a variable, and then try to change the value of that variable, it does not modify the value of that variable that was created before; it creates a new copy of the variable instead of modifying the same variable. In JavaScript, primitive data types like int, float, boolean, etc.
Mutable - means it does not pass the value, it just passes the reference of the variable, which means when we create a copy of that variable and try to change it in the copied variable, the original variable also gets changed.

Higher-order function – A function which is passed inside another function or a function that returns a new function.
Example-array methods, callback

Function currying – it is a type of higher-order function which breaks a function that has multiple parameters into a sequence of functions.
In real project when we have call a api with multiple endpoints then instead of calling that function multiple times we just make that normal function to curry function where first argument is fixed and later called it with multiple argument or endpoint, currying function uses the concept of closure which remember the variable of outer function because that variable is used inside the inner function even when the execution of outer is completed and garbage collected.

Composition function – the process of combining multiple functions into a single function. When we have to apply multiple operations on a single input instead of using more than one function, just make a composition function which perform all the operations and returns the final output.

After this theory with normal coding practice, I have to write the code of map, filter and reduce methods of the array manually.

For the map and filter methods, I use the approach by iterating over the array and running a callback function on each element of the array and storing the result of that operation into a new array, so that it does not modify the original array.

For the reduce method, I also run a callback on each element of the array and store the result of each iteration into a variable because the reduce method only returns a single output.
