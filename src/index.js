import React from 'react'
import ToastContainer from './components/toastContainer'
import ToastContext from './context/toastContext'
import useToastState from './hooks/useToastState'

const ToastProvider = ({children, options}) => {
  const [
    toastState, // this contains data of current toast
    displayToast, // this function allows you to display toast
    maskToast // this function is used to mask toast
  ] = useToastState()

  const contextValue = {...toastState, displayToast, maskToast}

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      <ToastContainer options={options} />
    </ToastContext.Provider>
  )
}

export {
  ToastContainer,
  ToastContext,
  useToastState,
  ToastProvider
}
