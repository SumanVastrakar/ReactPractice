let multiply = function(x, y) {
  console.log(x, y);
}

// this will work same as multiplyByTwo
// let multiplyByTwo = function(y) {
//     let x = 2;
//     console.log(x * y);
// }

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByTwo(5);

// we make a copy of multiply method and we create more methods out of this by presettings some arguments on it

//using function closures

// let multiply = function(x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }

// let multiplybyTwo = multiply(2);
// multiplybyTwo(5)

let sum = (x) => {
   return (p) => {
  return (q) => {
    return (r) => {
      return (s) => {
        return x + p + q + r + s;
      }
    }
  }
   }
}

console.log(sum(1)(2)(3)(4)(5));

let multiply = (x) => {
  return (p) => {
    return (r) => {
      return (s) => {
        return 
      }
    }
  }
}