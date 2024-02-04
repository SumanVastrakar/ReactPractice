import React from 'react';// this packages are directly coming from node_modules
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {
    id: 'title'
  }, 'Hello Suman');
  console.log('@@@heading', heading);



  const heading1 = React.createElement('h1',
   {
   id : 'title'
  },
  "heading 1"
  )

  const heading2 = React.createElement('h2', 
  {
     id: 'title'
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

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(div);

  //equivalent to
{/* <div id='conatiner'>
   <h1 id='title'>heading1</h1>
   <h1 id='title'>heading2</h1>
</div> */}
