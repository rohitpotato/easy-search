export const FileType = ({ type, setFileType, selectedFileType }) => {
  const handleFileType = () => {
    setFileType(type);
  };
  return (
    <button
      onClick={handleFileType}
      className={`shadow font-titilium tracking-wide leading-7 font-semibold border-purple-100 text-purple-500 rounded px-2 py-2 ${
        selectedFileType === type ? "bg-purple-400" : "bg-purple-200 "
      }`}
    >
      {type}
    </button>
  );
};
