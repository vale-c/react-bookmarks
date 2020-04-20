import React from 'react';
import ReactDom from 'react-dom';

// Create the app
const App = () => {
  return(
    <div>
        <h1>Hello World!</h1>
    </div>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
