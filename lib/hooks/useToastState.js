import React, { useState } from 'react';

const useToastState = () => {
  const [toastState, setToastState] = React.useState({
    message: '',
    status: false
  });

  const displayToast = message => {
    setToastState(state => ({
      message,
      status: true
    }));
  };

  const maskToast = () => {
    setToastState(state => ({ ...state,
      status: false
    }));
  };

  return [toastState, displayToast, maskToast];
};

export default useToastState;