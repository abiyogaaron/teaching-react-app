import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dataDummy = [
  {
    id: "1",
    name: "John",
    email: "john@gmail.com"
  },
  {
    id: "1",
    name: "frau",
    email: "frau@gmail.com"
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App data={dataDummy} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
