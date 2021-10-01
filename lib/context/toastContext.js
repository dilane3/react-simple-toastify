import React from 'react';
const ToastContext = /*#__PURE__*/React.createContext({
  message: "",
  status: false,
  displayToast: message => {},
  maskToast: () => {}
});
export default ToastContext;