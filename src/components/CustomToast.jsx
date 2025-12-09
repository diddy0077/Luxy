
import React, { useState, useCallback, useEffect, createContext, useContext } from 'react';
import { Camera, CheckCircle, X } from 'lucide-react';


const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

const CustomToast = ({ message, type, id, removeToast, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => removeToast(id), 300); 
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, removeToast]);

  if (!visible) return null;

  let baseClass = "p-4 rounded-xl shadow-lg flex items-center space-x-3 transition-all duration-300 ease-in-out transform";
  let colorClass = "";
  let Icon = null;

  switch (type) {
    case 'success':
      colorClass = "bg-blue-600 text-white";
      Icon = CheckCircle;
      break;
    case 'error':
      colorClass = "bg-red-600 text-white";
      Icon = X;
      break;
    default:
      colorClass = "bg-gray-800 text-white";
  }

  return (
    <div className={`${baseClass} ${colorClass}`}>
      {Icon && <Icon size={20} />}
      <p className="font-semibold text-sm">{message}</p>
      <button 
        onClick={() => { setVisible(false); setTimeout(() => removeToast(id), 300); }}
        className="ml-2 p-1 rounded-full hover:bg-white/20 transition"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'default') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      <div className="fixed top-5 right-5 z-50 space-y-3">
        {toasts.map(toast => (
          <CustomToast 
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            removeToast={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};