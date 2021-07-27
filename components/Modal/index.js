import { useEffect, useRef, useState } from "react";
import Portal from "../Portal";

const Modal = ({
  children,
  onClose,
  shouldCloseOnEsc,
  isVisible,
  overlayRef,
  ...rest
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (isVisible && mounted) {
      const closeOnEscapeKey = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.body.addEventListener("keydown", closeOnEscapeKey);

      return () => {
        document.removeEventListener("keydown", closeOnEscapeKey);
      };
    }
  }, [onClose, shouldCloseOnEsc, isVisible, mounted]);

  return mounted && isVisible === true ? (
    <Portal selector="modal-root">
      <div
        className="fixed inset-0 h-screen w-screen backdrop-blur flex items-center justify-center"
        {...rest}
      >
        {children}
      </div>
    </Portal>
  ) : null;
};

export { Modal };
