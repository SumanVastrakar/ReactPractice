// Debouncing in javascript
let counter = 0;
const getData = () => {
    // calls an API and get the data
    console.log('Fetching data', counter++);

}

const debouncing = function (getData, delay) {
    let timer
    return function () {
        clearTimeout(timer);
      timer =  setTimeout(() => {
        getData();
      }, delay);
    }
}
const debouncing1 = (getData, delay) => {
   let interval;
   return function () {
    clearTimeout(interval);
     interval = setTimeout(() => {
      getData();
     }, delay)
   }
}

const betterFunction = debouncing(getData, 300)


// const pollingFn = (apiFn, delay, condition) => {
//   let interval;

//       let response = null;
//       condition(response);
      
//           interval = setInterval(() => {
//              response =  apiFn();
//              if(condition){
//               clearInterval(interval);
//              }
//           }, delay)

// }
// pollingFn(apiFn, delay, condition)


