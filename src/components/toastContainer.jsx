import React, {useState, useContext, useEffect} from 'react'
import Toast from './toast'
import ToastContext from '../context/toastContext'

const ToastContainer = ({options}) => {
  let {position, timeout} = options

  timeout = timeout && timeout > 1000 ? timeout : 1000
  position = (
    position === "center" ||
    position === "top"
  ) ? position : "bottom"

  const {status, message} = useContext(ToastContext)
  const [show, setShow] = useState(status)

  useEffect(() => {
    setShow(status)
  }, [status])


  return (
    <section>
      <Toast
        status={show}
        position={position}
        timeout={timeout}
        message={message}
      />
    </section>
  )
}

export default ToastContainer
