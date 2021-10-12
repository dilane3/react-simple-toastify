import React, {useEffect, useState, useContext} from 'react'
import '../../src/components/index.css'
import ToastContext from '../context/toastContext'

const Toast = ({status, timeout, position, message}) => {
  const [visible, setVisible] = useState(status)
  const [displayed, setDisplayed] = useState(status)
  const {maskToast} = useContext(ToastContext)

  useEffect(() => {
    if (status) {
      setVisible(status)
      setDisplayed(status)
    }
  }, [status])

  useEffect(() => {
    if (visible) {
      let timer = setTimeout(() => {
        setDisplayed(false)

        let timer2 = setTimeout(() => {
          setVisible(false)
          maskToast(false)

          clearTimeout(timer2)
        }, 1000)

        clearTimeout(timer)
      }, timeout > 1000 ? timeout:1000)
    }
  }, [visible, maskToast])

  return (
    <div className={`toast-item toast-${position} ${visible ? "toast-visible":""} ${displayed ? "toast-displayed":""}`}>
      {message}
    </div>
  )
}

export default Toast
