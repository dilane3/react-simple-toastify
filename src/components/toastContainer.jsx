import React, {useState} from 'react'
import Toast from './toast'

const ToastContainer = ({config}) => {
  let {position, timeout, messages} = config
  timeout = timeout && timeout > 1000 ? timeout : 1000

  const [toastMessage, setToastMessage] = useState(messages)

  return (
    <section>
      <Toast
        status={true}
        position={position}
        timeout={timeout}
        message={toastMessage[0]}
        onMaskToast={() => console.log("nothing")}
      />
    </section>
  )
}

export default ToastContainer
