import React from 'react'
import Toast from './toast'

const ToastContainer = () => {
  return (
    <section>
      <Toast status={true} onMaskToast={() => console.log("nothing")} />
    </section>
  )
}

export default ToastContainer
