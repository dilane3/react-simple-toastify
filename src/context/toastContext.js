import React from 'react'

const ToastContext = React.createContext({
  message: "",
  status: false,
  displayToast: (message) => {},
  maskToast: () => {}
})

export default ToastContext
