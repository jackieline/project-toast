import React from 'react';
import {ToastContext} from '../ToastProvider/ToastProvider';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({id, variant, children}) {
  const {dismissToast} = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant} -
        </VisuallyHidden>
        {children}
      </p>
      <button aria-label="Dismiss message" aria-live="off" onClick={()=> dismissToast(id)} className={styles.closeButton}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
