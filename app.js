import React from 'react';
import ReactDOM from 'react-dom'; 

const heading = React.createElement("h1",{
    id: 'header'
},"Hello World from React");
// above code can be replaced by JSX code 
const jsxHeader = <h1 className="header">This is JSX heading</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeader);