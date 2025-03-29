import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const [showToast, setShowToast] = React.useState(false);

  const handleDismiss = () => {
    setShowToast(false);
  }

  const onChangeVariant = (event) => {
    setVariant(event.target.value);
  };

  const onUpdateMessage = (event) => {
    setMessage(event.target.value.trim());
  }

  const onButtonSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log({message})
    setShowToast(true);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (<Toast handleDismiss={handleDismiss} variant={variant} >
        {message}
      </Toast>)
}
      <form onSubmit={onButtonSubmit}>

        <div className={styles.controlsWrapper}>
         <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} placeholder="toast content text" value={message} onChange={onUpdateMessage} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => {
              const uniqueId = `variant-${option}`;
              return(<label key={uniqueId} htmlFor={uniqueId}>
              <input
                id={uniqueId}
                type="radio"
                name="variant"
                value={option}
                checked={option === variant}
                onChange={onChangeVariant}
              />
              {option}
            </label>)})}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
           >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
