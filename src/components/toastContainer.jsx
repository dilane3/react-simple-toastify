import React, {useState, useContext, useEffect} from 'react'
import Toast from './toast'
import ToastContext from '../context/toastContext'

const ToastContainer = ({config}) => {
  let {position, timeout} = config
  const {status, message} = useContext(ToastContext)
  const [show, setShow] = useState(status)

  useEffect(() => {
    setShow(status)
  }, [status])

  timeout = timeout && timeout > 1000 ? timeout : 1000

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
