import React from 'react';// this packages are directly coming from node_modules
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {
    id: 'title'
  }, 'Hello Suman');
  console.log('@@@heading', heading);



  const heading1 = React.createElement('h1',
   {
   id : 'title',
   key: 'h1'
  },
  "heading 1"
  )

  // heading1 => object => HTML() ==> going to render into DOM

  const heading2 = React.createElement('h2', 
  {
     id: 'title',
     key: 'h2'
  },
  'heading 2'
  )
  // equivalent to => <h1 id="title">Heading 2</h1>

  const div = React.createElement('div',  
  {
   id: 'container',
  },
  [heading1, heading2]
  )

  
  //equivalent to
  {/* <div id='conatiner'>
  <h1 id='title'>heading1</h1>
  <h1 id='title'>heading2</h1>
</div> */}


// how to create 
{/* <div>
<h1>Heading</h1>
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
</div> */}

const HeaderComponent =  () => {
<h1>Hello div</h1>
}

const AppComponent = () => {
   return (
      <>
      {HeaderComponent}
      </>
      )
   }

   
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppComponent/>);