// Polyfill is a soft of browser fallback 

let name = {
    firstName: 'Suman',
    secondName: 'Vastrakar',
}

let printName1 = function () {
   console.log(this.firstName, this.secondName);
}

Function.prototype.mybind = function(...args) {
    let obj = this
    params = args.slice(1);
    return function () {
        // obj.call(args[0], params);
        obj.apply(args[0], [...params, ...args]);
    }
}

let printName = printName1.bind(name);
printName();

let printMyName2 = printName.mybind(name);
printMyName2();