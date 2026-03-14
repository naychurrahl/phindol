import React, { useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");
  if (!isOpen || !modalRoot) return null;

  // Lock background scroll and handle ESC key
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY); // restore scroll
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const modalContent = (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.close} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;

// Self-contained styles
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    width: "80%",
    maxWidth: "800px",
    maxHeight: "80vh", // ensures modal doesn't overflow screen
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    position: "relative",
    overflowY: "auto", // only modal content scrolls
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
};
