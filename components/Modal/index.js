import Portal from "../Portal";

const Modal = ({ children, isVisible, overlayRef, ...rest }) => {
  return isVisible === true ? (
    <Portal selector="modal-root">
      <div
        className="fixed inset-0 h-screen w-screen backdrop-blur flex items-center justify-center"
        // ref={overlayRef}
        {...rest}
      >
        {children}
      </div>
    </Portal>
  ) : null;
};

export { Modal };
