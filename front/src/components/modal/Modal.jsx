import { useState } from "react";
import css from "./styles.module.css";

export const Modal = ({ isOpen, onClose, children, resetId }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    resetId();
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`${css.modal} ${isOpen ? css.open : ""} ${
        isClosing ? css.closing : ""
      }`}
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
