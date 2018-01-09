import React from 'react'; //This is for Step 1
import ReactDOM from 'react-dom'; //This is for Step 2

// Step 1: Create a new component. This component should produce some HTML.
const App = () => {
  return <div>Hi!</div>; //This is JSX
}

// Step 2: Take this components generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
