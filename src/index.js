import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ilhom from './components/Ilhom'
import Islom from './components/Islom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const str = false
root.render(
  <React.StrictMode>
    <Ilhom />
    <Islom />
  </React.StrictMode>
);


// import React from "react";
// import  ReactDOM  from "react-dom";
// const title='hi react'
// ReactDOM.render(<h1>{title}</h1>, document.getElementById("root"))
// const title=<h1>hi react</h1>;
// ReactDOM.render(title, document.getElementById("root"))
