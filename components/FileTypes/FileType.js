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
      className={`shadow font-titilium tracking-wide leading-7 font-semibold flex items-center justify-center gap-3 border-purple-100 text-black rounded px-2 py-2 ${
        selectedFileType === value ? "bg-gray-700 text-white" : "bg-gray-200 "
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
