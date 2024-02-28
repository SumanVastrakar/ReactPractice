//it is a technique of handling events in the web page in a better way
//Event delelgation says that instead of attaching events to each and every child elements, we will attach events to the parent element


document.querySelector('#category').addEventListener('click', (e) => {
   console.log(e);
   if(e.target.tagName === 'LI'){
       window.location.href = '/' + e.target.id 
   }
})

