import { useEffect, useRef } from "react";
import Portal from "../Portal";

const defaultOverlayClass = `fixed inset-0 h-screen w-screen backdrop-filter backdrop-blur-sm	flex items-center justify-center`;
const defaultContentClass = "";

function Component({
  children,
  onClose,
  shouldCloseOnEsc,
  isVisible,
  closeOnOverlayPress,
  overlayClass,
  contentClass,
}) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isVisible && shouldCloseOnEsc) {
      document.body.addEventListener("keydown", closeOnEscapeKey);
    }
    return () => {
      document.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose, shouldCloseOnEsc, isVisible]);

  useEffect(() => {
    let overlayNode;
    const handleOverlayClick = (event) => {
      const contentNode = contentRef.current;
      if (!contentNode.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible && closeOnOverlayPress) {
      overlayNode = overlayRef.current;
      overlayNode.addEventListener("click", handleOverlayClick);
    }
    return () => {
      overlayNode &&
        overlayNode?.removeEventListener("click", handleOverlayClick);
    };
  }, [isVisible, closeOnOverlayPress, onClose]);

  const overlayClass_ = overlayClass || defaultOverlayClass;
  const contentClass_ = contentClass || defaultContentClass;

  return (
    <Portal selector="modal-root">
      {isVisible ? (
        <div id="modal-overlay" ref={overlayRef} className={overlayClass_}>
          <div ref={contentRef} id="modal-content" className={contentClass_}>
            {children}
          </div>
        </div>
      ) : null}
    </Portal>
  );
}

const Modal = Component;

export { Modal };
