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

const Portal = ({ children, selector }) => {
  const el = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    el.current = document.createElement("div");
    const portalNode = getPortlaNode(selector);
    portalNode.appendChild(el.current);
    setMounted(true);
    return () => {
      const portalNode = getPortlaNode(selector);
      portalNode.removeChild(el.current);
    };
  }, [selector]);

  return mounted ? ReactDOM.createPortal(children, el.current) : null;
};

export default Portal;
