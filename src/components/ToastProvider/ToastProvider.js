import React from 'react';

export const ToastContext = React.createContext();

const ToastProvider = ({children}) => {
    const [toasts, setToasts] = React.useState([]);

    React.useEffect(() => {
        const handleKeyDown = (event) => {
          if(event.key === "Escape") {
            setToasts([]);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return() => {
          window.removeEventListener('keydown', handleKeyDown);
        }
      }, []);

    const addToast = (message, variant) => {
        const nextToasts = [
            ...toasts,
            {id: crypto.randomUUID(),
            message,
            variant
            }
        ];
        setToasts(nextToasts);
    };

    const dismissToast = (toastIdToClose) => {
        const filteredToasts = toasts.filter(toast => toast.id !== toastIdToClose);
        setToasts(filteredToasts); 
    }

    return (
        <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;