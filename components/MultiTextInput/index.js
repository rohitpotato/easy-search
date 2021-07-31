import { useState, useEffect } from "react";

export const MultiTextInput = ({
  tags = [],
  inputValue = "",
  containerStyle = {},
  tagsContainerStyle = {},
  tagContainerStyle = {},
  tagStyle = {},
  inputContainerStyle = {},
  inputStyle = {},
  placeholder = "Enter a value",
  LeftComponent = null,
  RightComponent = null,
  onPressEnter,
  onBackSpace,
  onRemove,
  delimiters = ["Enter", ","],
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

  const handleOnKeyUp = () => {
    setIsKeyReleased(true);
  };

  const handleOnKeyDown = (event) => {
    const { key, code } = event;
    const sanitizedInput = term.trim().toLowerCase();
    if (
      (delimiters.indexOf(key) > -1 || delimiters.indexOf(code) > -1) &&
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

  const handleOnBlur = () => {
    const sanitizedInput = term.trim().toLowerCase();
    if (sanitizedInput && tags.indexOf(sanitizedInput) === -1) {
      onPressEnter(sanitizedInput);
      setTerm("");
    }
  };

  return (
    <>
      <div className="w-full overflow-hidden" style={containerStyle}>
        <div className="w-full rounded-lg flex gap-1 py-5  items-center relative shadow-md bg-[#e0e1eb] dark:filter-none dark:drop-shadow-none dark:bg-dark-mode-gray transparent text-dark-text-gray">
          {LeftComponent}
          <div style={inputContainerStyle} className=" px-4 w-full">
            <input
              className="outline-none w-full bg-transparent font-rubik tracking-wide text-dark-text-gray placeholder-dark-text-gray dark:placeholder-white dark:placeholder-opacity-30 dark:text-white"
              style={inputStyle}
              value={term}
              placeholder={placeholder}
              onChange={handleInputChange}
              onKeyUp={handleOnKeyUp}
              onKeyDown={handleOnKeyDown}
              onBlur={handleOnBlur}
            />
          </div>
          {RightComponent}
        </div>
        <div style={tagsContainerStyle} className="flex gap-2 mt-3 flex-wrap">
          {tags.map((tag, index) => (
            <div
              className="py-1 px-2 flex gap-3 font-rubik rounded bg-light-text-purple text-purple-700 font-medium"
              style={tagContainerStyle}
              key={tag}
            >
              <div style={tagStyle}>{tag}</div>
              <button
                onClick={() => onRemove(index)}
                className="cursor-pointer"
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
