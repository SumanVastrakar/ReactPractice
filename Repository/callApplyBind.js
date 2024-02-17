// you can think of call, apply, and bind as mechanisms for borrowing methods from one 
// object and applying them to another. These methods allow you to explicitly set the this
//  value in a function call, which can be useful for invoking a function with the context
//   of a different object.

let name  = {
    firstName: 'Suman',
    lastName: 'Vastrakar',
    printFullName: function (hometown, state) {
       console.log(this.firstName + '' + this.lastName, 'from', hometown, state);
    }
 }
 
 // name.printFullName();
 
 let name2 = {
    firstName: 'Shradha',
    lastName: 'Vastrakar',
 }
 
 //function borrowing
 name.printFullName.call(name2, 'Bilaspur', 'chhattisgarh');
 
 name.printFullName.apply(name2, ['Bilaspur', 'chhattisgarh']);
 //the ony difference between apply and call is the way we call them;
 
 //bind method binds the function and returns a copy of function which can be invoked later
 let printMyName = name.printFullName.bind(name2, 'Bilaspur', 'chhattisgarh');
 console.log(printMyName)