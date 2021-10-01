import React from 'react'

const ToastContext = React.createContext({
  message: "succes",
  status: false,
  changeMessage: (message) => {},
  maskToast: () => {}
})

export default ToastContext
