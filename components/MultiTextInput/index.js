import { even } from "prelude-ls";
import { useState, useEffect } from "react";
import styles from "./MultiTextInput.module.css";

export const MultiTextInput = ({
  tags = [],
  inputValue = "",
  containerStyle = {},
  tagContainerStyle = {},
  tagStyle = {},
  inputContainerStyle = {},
  inputStyle = {},
  placeholder = "Enter a value",
  LeftIcon = null,
  onPressEnter,
  onBackSpace,
  onRemove,
}) => {
  const [term, setTerm] = useState("");
  const [isKeyReleased, setIsKeyReleased] = useState(true);

  if (!onPressEnter || !onBackSpace || !onRemove) {
    console.error(
      "Multi text input requires onPressEnter, onBackSpace and onRemove props to function properly"
    );
  }

  useEffect(() => {
    if (inputValue) {
      setTerm(input);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  const handleOnKeyUp = (event) => {
    setIsKeyReleased(true);
  };

  const handleOnKeyDown = (event) => {
    const { key } = event;
    const sanitizedInput = term.trim().toLowerCase();
    if (
      (key === "," || key === "Enter") &&
      sanitizedInput &&
      tags.indexOf(sanitizedInput) === -1 &&
      isKeyReleased
    ) {
      event.preventDefault();
      onPressEnter(sanitizedInput);
      setTerm("");
    }

    if (key === "Backspace" && tags.length && !term.length) {
      event.preventDefault();
      const tagsCopy = [...tags];
      const lastTerm = tagsCopy.pop();
      setTerm(lastTerm);
      onBackSpace(tagsCopy);
    }
    setIsKeyReleased(false);
  };

  return (
    <>
      <div className={styles.container} style={containerStyle}>
        <div className={styles.inputSectionContainer}>
          {LeftIcon}
          <div style={inputContainerStyle} className={styles.inputContainer}>
            <input
              className={styles.input}
              style={inputStyle}
              value={term}
              placeholder={placeholder}
              onChange={handleInputChange}
              onKeyUp={handleOnKeyUp}
              onKeyDown={handleOnKeyDown}
            />
          </div>
        </div>
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <div
              className={styles.tagContainer}
              style={tagContainerStyle}
              key={tag}
            >
              <div style={tagStyle} className={styles.tag}>
                {tag}
              </div>
              <button
                onClick={() => onRemove(index)}
                className={styles.removeTag}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
