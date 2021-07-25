import { memo } from "react";
import { FileType } from "./FileType";

function FileTypesContainer({ fileTypes, setFileType, selectedFileType }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.keys(fileTypes).map((type) => (
        <FileType
          key={type}
          type={type}
          setFileType={setFileType}
          selectedFileType={selectedFileType}
        />
      ))}
    </div>
  );
}

FileTypesContainer = memo(FileTypesContainer);
export { FileTypesContainer };
