//function along with its lexical scope bundled together forms a closure is called as closure

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100
    y();
}
var z = x();
console.log(Z);
z() // 7 (as even though x is vanished y knows where it came from and it has access to its parent scope)
//when y() function is return not only fucntion get returned but whole the lexical env is returned
z() // 100 reference points to 100;

const promise = new Promise((resolve) => {

}, (reject) =>{
    
})