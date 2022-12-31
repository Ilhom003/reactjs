import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Department,App as NewApp} from './App'
// import Ilhom from './components/Ilhom'
// import Islom from './components/Islom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Ilhom />
    <Islom /> */}
    {/* <Department/> */}
    {/* <App status='active' title = 'React'/> */}
    {/* <App data={{status:'active' ,title:'React'}}/>
    <App title = 'React'/>
    <App title = 'React'/> */}
    <App title = 'Angular'>
      <h1>I'm the child</h1>
    </App>
  </React.StrictMode>
);


// import React from "react";
// import  ReactDOM  from "react-dom";
// const title='hi react'
// ReactDOM.render(<h1>{title}</h1>, document.getElementById("root"))
// const title=<h1>hi react</h1>;
// ReactDOM.render(title, document.getElementById("root"))
