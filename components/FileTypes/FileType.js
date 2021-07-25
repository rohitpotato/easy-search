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

  const handleRemove = () => {
    handleRemoveCustomFileFormat(value);
  };

  return (
    <button
      onClick={handleFileType}
      className={`shadow font-titilium tracking-wide leading-7 font-semibold flex items-center justify-center gap-3 border-purple-100 text-purple-500 rounded px-2 py-2 ${
        selectedFileType === value ? "bg-purple-400" : "bg-purple-200 "
      }`}
    >
      {type}
      {isCustom && (
        <span onClick={handleRemove} className="text-lg cursor-pointer">
          &times;
        </span>
      )}
    </button>
  );
};
