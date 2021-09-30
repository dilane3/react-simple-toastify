import React from 'react';
import ReactDOM from 'react-dom';
import ToastContainer from './components/toastContainer'
import reportWebVitals from './reportWebVitals';

const toastConfig = {
  position: "center",
  timeout: 20,
  messages: [
    {
      type: "ok",
      value: "hello dilane"
    }
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer config={toastConfig} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
