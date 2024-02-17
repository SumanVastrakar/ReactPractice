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



const betterFunction = debouncing(getData, 300)

