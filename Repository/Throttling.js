let counter = 0;
const getData =  () => {
console.log('Throttling function is called', counter++);
}

const throttle = (getData, limit) => {
    let flag = true;
   return function() {
    if(flag){
        getData();
        flag = false;
        setTimeout(() => {
            flag = true;
        }, limit)
    }

   }
}

const betterFunction = throttle(getData, 3000)

