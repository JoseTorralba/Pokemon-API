import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    });
  };

  const removeAlert = () => dispatch({ type: 'REMOVE_ALERT' });

  return (
    <AlertContext.Provider value={{ alert: state, setAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
