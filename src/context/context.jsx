import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NetLib from '../utils/api/APIs';
import { usePromiseTracker } from "react-promise-tracker";

export const Context = React.createContext();

const ContextProvider = ({children, ...props}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) ?? null);
  const history = useNavigate();
  const toast = useToast();
  const NetComLib = NetLib;
  const { promiseInProgress } = usePromiseTracker();
  

  // values to export on other files
  let value = {
    user,
    setUser,
    history,
    toast,
    NetComLib,
    promiseInProgress
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;