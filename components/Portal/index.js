import ReactDOM from "react-dom";
const { useState, useRef, useEffect } = require("react");

const portalId = "portal-root";
const getPortlaNode = (selector) => {
  const id = selector || portalId;
  const portal = document.getElementById(id);
  if (!portal) {
    const newPortal = document.createElement("div");
    newPortal.id = id;
    document.body.appendChild(newPortal);
    return newPortal;
  }
  return portal;
};

const removePortal = (selector) => {
  const portal = document.getElementById(selector);
  if (document.body.contains(portal)) {
    document.body.removeChild(portal);
  }
};

const Portal = ({ children, selector }) => {
  const el = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    el.current = getPortlaNode(selector);
    setMounted(true);
    return () => {
      removePortal(selector);
    };
  }, [selector]);

  return mounted ? ReactDOM.createPortal(children, el.current) : null;
};

export default Portal;
