//scope means where you can access a particular variable in scope.
//scope is directly dependent on lexical environment
//lexical environment is the local memory along with the lexical environment of parent

//for example for for c, it will be access to its local variable as well as parent that is a
//for example a will be access top its parent that is window
//lexical environment is created when ever the scope chain is created
function a(){
    var b = 10;
    function c() {

    }
}

a();
console.log(b);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
const data = fetch('')
resolve(data);
    })
    promise.then((data) => {

    }).catch((err) => {

    })
})
promise.all([Promise1, Promise2, Promise3]).then(result) => {
    
}

const promise = new Promise((resolve) => {
    setTimeout(() => {

    }, 1000)
},(reject) => {

})