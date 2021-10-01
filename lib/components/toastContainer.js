import React, { useState, useContext, useEffect } from 'react';
import Toast from './toast';
import ToastContext from '../context/toastContext';

const ToastContainer = ({
  options
}) => {
  let {
    position,
    timeout
  } = options;
  timeout = timeout && timeout > 1000 ? timeout : 1000;
  position = position === "center" || position === "top" ? position : "bottom";
  const {
    status,
    message
  } = useContext(ToastContext);
  const [show, setShow] = useState(status);
  useEffect(() => {
    setShow(status);
  }, [status]);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Toast, {
    status: show,
    position: position,
    timeout: timeout,
    message: message
  }));
};

export default ToastContainer;