import React from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  return (
    <div
      id="toast"
      className={`toast ${visible ? 'show' : ''}`}
      aria-live="polite"
      role="status"
    >
      <span className="toast-icon">✓</span>
      <span id="toast-message">{message}</span>
    </div>
  );
};
