import React, {useState} from 'react'

const useToastState = () => {
  // this is the initial state of the toast
  const [toastState, setToastState] = React.useState({
    message: '',
    status: false
  })

  // this function display the toast for a given timeout
  const displayToast = (message) => {
    setToastState(state => ({message, status: true}))
  }
  // this function mask toast after a given timeout
  const maskToast = () => {
    setToastState(state => ({...state, status: false}))
  }

  return [toastState, displayToast, maskToast]
}

export default useToastState
