import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pony from './Pony'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <h1>I'm a pony!</h1> */}
//     <Pony />
//   </React.StrictMode>,
//   document.getElementById('pony')
// );

const newroot = ReactDOM.createRoot(document.getElementById('pony'));
newroot.render(
  <React.StrictMode>
    <Pony />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//might get rid of error:

// import React from 'react';
// import {createRoot} from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab="home" />);
