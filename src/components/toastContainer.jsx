import React from 'react'
import Toast from './toast'

const ToastContainer = () => {
  return (
    <section>
      <Toast status={true} timeout={6000} onMaskToast={() => console.log("nothing")} />
    </section>
  )
}

export default ToastContainer
