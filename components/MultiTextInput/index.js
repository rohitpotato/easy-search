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

  return (
    <>
      <div className="w-full overflow-hidden" style={containerStyle}>
        <div className="w-full rounded-md flex gap-3 bg-gray-200 dark:bg-dark-mode-black py-3 border-[1] shadow items-center relative">
          {LeftComponent}
          <div style={inputContainerStyle} className=" px-4 w-full">
            <input
              className="outline-none w-full bg-gray-200 dark:bg-dark-mode-black text-black font-titilium tracking-wider dark:text-white"
              style={inputStyle}
              value={term}
              placeholder={placeholder}
              onChange={handleInputChange}
              onKeyUp={handleOnKeyUp}
              onKeyDown={handleOnKeyDown}
            />
          </div>
          {RightComponent}
        </div>
        <div style={tagsContainerStyle} className="flex gap-2 mt-3 flex-wrap">
          {tags.map((tag, index) => (
            <div
              className="py-1 px-2 flex gap-3 rounded bg-gray-700 text-white dark:text-white dark:bg-gray-700 font-titilium font-semibold"
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
