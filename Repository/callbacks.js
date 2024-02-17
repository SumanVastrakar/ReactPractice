//functions are first class citizens in javascript it means we can take a function and pass it into another 
// function in js amd when you do so this function which you have passed is called as callback function



//callback Hell

// one callback inside another call depending on each other apis and structure is called as pyramid of dome

//inversion of control
//  it means we loose the control of your code when ytou are using callbacks


async1(function(){
    async2(function(){

    })
})

new Promise((resolve, reject) =>{
   setTimeout(() => resolve(1), 1000);
}).then((result) => {})

Promise.all([Promise1, Promise2, Promise3]).then(result) => 