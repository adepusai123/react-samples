import React from "react";
import ReactDOM from "react-dom";

// React Element
const heading = React.createElement(
  "h1",
  {
    id: "header",
  },
  "Hello World from React"
);
// above code can be replaced by JSX code
// for multiline JSX use () to wrap the code ex: (<h1>Hi</h1>)

// React Element
const jsxHeader = (
  <div className="container">
    <h1 className="header">This is JSX heading</h1>
  </div>
);

// React Functional Component. Naming conversion should start with Upper case
// {} u can write any JS express or function
const HeaderComponent = ()=> {
    return <div className="header">
        {jsxHeader} 
        <h1> Hello World! </h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeader);
// Rendering the component 
root.render(<HeaderComponent/>)
