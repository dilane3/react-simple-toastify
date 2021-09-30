import React, {useEffect, useState} from 'react'
import './index.css'

const Toast = ({status, onMaskToast}) => {
  const [visible, setVisible] = useState(status)
  const [displayed, setDisplayed] = useState(status)

  useEffect(() => {
    if (visible) {
      let timer = setTimeout(() => {
        setDisplayed(false)

        let timer2 = setTimeout(() => {
          setVisible(false)
          onMaskToast(false)

          clearTimeout(timer2)
        }, 1000)

        clearTimeout(timer)
      }, 2000)
    }
  }, [visible, onMaskToast])

  return (
    <div className={`toast ${visible ? "toast-visible":""} ${displayed ? "toast-displayed":""}`}>
      Hello
    </div>
  )
}

export default Toast
