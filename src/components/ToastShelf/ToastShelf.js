import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({handleDismiss, toasts}) {

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({id, variant, message}) => (
        <li key={id} className={styles.toastWrapper}>
        <Toast variant={variant} handleDismiss={() => handleDismiss(id)}>{message}</Toast>
      </li>
      ))}
   
      
      {/* <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
    </ol>
  );
}

export default ToastShelf;
