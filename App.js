
import React from "react";
import ReactDOM from "react-dom/client";


const ReactHeading = React.createElement('h1',{},"Hello World From React!")
const ReactRoot=ReactDOM.createRoot(document.getElementById('root'))
ReactRoot.render(ReactHeading);
