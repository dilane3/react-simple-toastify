import React, {useEffect, useState} from 'react'
import './index.css'

const Toast = ({status, timeout, position, onMaskToast}) => {
  const [visible, setVisible] = useState(status)
  const [displayed, setDisplayed] = useState(status)
  position = (
    position === "center" ||
    position === "top"    ||
    position === "bottom"
  ) ? position : "bottom"

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
      }, timeout > 1000 ? timeout:1000)
    }
  }, [visible, onMaskToast])

  return (
    <div className={`toast toast-${position} ${visible ? "toast-visible":""} ${displayed ? "toast-displayed":""}`}>
      Hello
    </div>
  )
}

export default Toast
