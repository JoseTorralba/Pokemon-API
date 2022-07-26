import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import { motion } from 'framer-motion';
import classes from './Alert.module.css';

const Alert = () => {
  const { alert, removeAlert } = useContext(AlertContext);
  const confirmHandler = () => removeAlert();

  return (
    alert !== null && (
      <div className={classes.error} onClick={confirmHandler}>
        <motion.div
          initial={{
            opacity: 0,
            top: '25%',
          }}
          animate={{ opacity: 1, top: '50%' }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={classes.modal}
        >
          <div className={classes.header}>
            <h2>{alert.type}</h2>
          </div>

          <div className={classes.message}>
            <p>{alert.msg}</p>
          </div>

          <div>
            <button className={classes.button} onClick={confirmHandler}>
              Understood
            </button>
          </div>
        </motion.div>
      </div>
    )
  );
};

export default Alert;
