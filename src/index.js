import React from 'react';
import ReactDOM from 'react-dom';
import ToastContainer from './components/toastContainer'
import reportWebVitals from './reportWebVitals';
import ToastContext from './context/toastContext'

const toastConfig = {
  position: "center",
  timeout: 20
}

const App = () => {
  const [toastManagement, setToastManagement] = React.useState({
    message: '',
    status: false
  })
  const [message, setMessage] = React.useState("")

  const changeMessage = (message) => {
    setToastManagement(state => ({message, status: true}))
  }

  const maskToast = () => {
    setToastManagement(state => ({...state, status: false}))
  }

  return (
    <ToastContext.Provider value={{...toastManagement, changeMessage, maskToast}} >
      <ToastContainer config={toastConfig} />

      <button onClick={() => changeMessage(message)}>Display toast</button>
      <input value={message} type="text" placeholder="type a toast message" onChange={(e) => setMessage(e.target.value)} />
    </ToastContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
