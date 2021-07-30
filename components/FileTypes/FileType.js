export const FileType = ({
  type,
  setFileType,
  isCustom,
  value,
  selectedFileType,
  handleRemoveCustomFileFormat,
}) => {
  const handleFileType = () => {
    setFileType(value);
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    handleRemoveCustomFileFormat(value);
  };

  return (
    <button
      onClick={handleFileType}
      className={`shadow font-rubik tracking-wide leading-7 font-medium flex items-center justify-center gap-3 border-purple-100 rounded px-2 py-2 ${
        selectedFileType === value
          ? "bg-purple-700 text-light-bg-purple"
          : " bg-light-text-purple text-purple-700"
      }`}
    >
      {type}
      {isCustom && (
        <span onClick={handleRemove} className="text-lg cursor-pointer p-1">
          &times;
        </span>
      )}
    </button>
  );
};
