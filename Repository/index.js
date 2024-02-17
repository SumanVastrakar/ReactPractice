// const heading = React.createElement('h1', {
//     id: 'title'
//   }, 'Hello Suman');
//   console.log('@@@heading', heading);
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(heading);

  const apiUrl = 'https://fakestoreapi.com/products';
// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Error');
//         }
//         return response.json();
//     }).then(data => {
//         console.log('Data', data);
//     }).catch(error => {
//         console.error('Error', error);
//     })

// fetch(apiUrl).then(response => {
//    if(!response.ok) {
//       throw new Error('Error');
//    }
//    return response.json();
// }).then((data) => {
//    console.log('Data', data);
// }).catch((err) => {
//    console.error('Error', error);
// })


// fetch(apiUrl).then((response) => {
//    if(!response.ok){
//       throw new Error('Error');
//    }
//    return response.json();
// }).then((data) => {
//    console.log('Data', data);
// }).catch(error => {
//    console.log('Error', error);
// })


// fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//         'authorization': 'bdbjc',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({key: 'value'})
// }).then(response => {
//     if(!response.ok){

//     }
// }
// ).then(data => {
 
// })

// fetch(apiUrl, {
//    method: 'POST',
//    headers: {
//       'authorization': 'Bearer token',
//       'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({key: 'value'})
// }).then((response)=> {

// })


// input - [1, 2, 3, [6, 7], [[[NaN, undefined]]]];
// output - [1, 2, 3, 6, 7, NaN, undefined];

// const test = [1, 2, 3, [6, 7], [[[NaN, undefined]]]];

// const flatten = (input) => {
// let result = [];

// if(!Array.isArray(input)){
//     return input;
// }

// for( let data of input){
//     result = result.concat(flatten(data));
// }

// return result;
// }

// console.log(flatten(test));

// const test = {1: 'a', 2: {3: 'b', 4: 'c', 5: {6: 'd', 7: 'e'}}};

// const flatten = (obj) => {
//     const result = {};

//     for( let key in obj){
//       if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
//          const temp = flatten(obj[key]);
//          for( const j in temp){
//             result[key + '.' + j] = temp[j];
//          }
//       }else {
//         result[key] = obj[key];
//       }
//     }

//     return result;
// }
// console.log(flatten(test));

// const flatten = (obj) => {
//     const result = {};
//  for( let i in obj){
//     if(typeof obj[i] === 'object'){
//         const temp = obj[i];
//         for( let j in temp){
//           result[i + '.' + j] = temp[j];
//         }
//     }else{
//         result[i] = obj[i]
//     }
//  }

//     return result;
// }

// const values = [1,2, 6, 7];
// const target = 9;
// let left = 0, right = values.length -1;
// let obj = {};

// for( let i  = 0; i< values.length; i++){
//    const sumValue = Math.abs(target - values[i])
//    if( sumValue in obj){
//       console.log(i, obj[sumValue]);
//    }else{
//     obj[i] = i;
//    }
// };

// const test = {1: 'a', 2: {3: 'b', 4: 'c', 5: {6: 'd', 7: 'e'}}};

// const objectFlatten = (obj) => {
//    const result = {};

//  for( let i in obj ) {
//     if( typeof obj[i] === 'object'){
//         const temp = objectFlatten(obj[i]);
//         for( let j in temp){
//           result[i+ '.'+ j] = temp[j];
//         }
//     }else{
//       result[i] = obj[i];
//     }
//  }

//  return result 
// }

// console.log(objectFlatten(test))
const test = {1: 'a', 2: {3: 'b', 4: 'c', 5: {6: 'd', 7: 'e'}}};

// const flattenObject = (obj) => {
//    let result = {};

//    for(let i in obj) {
//       if( typeof obj[i] === 'object'){
//          let temp = flattenObject(obj[i]);
//          for( let j in temp ){
//              result[i +'.'+ j] = temp[j]
//          }
//       }else{
//          result[i] = obj[i]
//       }
//    }
//    return result;
// }



// const flatten = (obj) => {
//     const result = {};

//     for( let key in obj){
//       if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
//          const temp = flatten(obj[key]);
//          for( const j in temp){
//             result[key + '.' + j] = temp[j];
//          }
//       }else {
//         result[key] = obj[key];
//       }
//     }

//     return result;
// }

// console.log(flattenObject(test))


// const operation = [1, 2, 3, 4];

// const mapData = operation.map((elem) => {
//    return elem*2;
// })

// console.log(mapData)

// const filterData = operation.filter((elem) => {
//    return elem%2 === 0;
// })

// console.log(filterData);

// const reduceData = operation.reduce((acc, currentValue) => {
//    return acc + currentValue;
// }, 0)

// console.log(reduceData);

let test1 = [1, 2, 3, [6, 7], [[[NaN, undefined]]]]

const arrayFlattening = (test1) => {
   let result = [];

      if(! Array.isArray(test1)){
         return test1;
      }

      for( let data of test1){
        result = result.concat(arrayFlattening(data))
      }
      return result;
}
console.log(arrayFlattening(test1));

const flattenObj = (obj) => {
   let result = {};

   for( let i in obj ){
      if(typeof obj[i] === 'object' ){
         let temp = flattenObj(obj[i]);
         for( let j in temp ){
            result[i+ '.'+ j] = temp[j];
         }
      }else{
         result[i] = obj[i]
      }
   }

   return result;
}
console.log(flattenObj(test))


// const flattenObject = (obj) => {
//    let result = {};

//    for(let i in obj) {
//       if( typeof obj[i] === 'object'){
//          let temp = flattenObject(obj[i]);
//          for( let j in temp ){
//              result[i +'.'+ j] = temp[j]
//          }
//       }else{
//          result[i] = obj[i]
//       }
//    }
//    return result;
// }