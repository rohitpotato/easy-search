import { memo } from "react";
import { noop } from "../../utils";
import { FileType } from "./FileType";

function FileTypesContainer({
  fileTypes,
  setFileType,
  selectedFileType,
  handleRemoveCustomFileFormat = noop,
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.keys(fileTypes).map((type) => {
        const { format, isCustom } = fileTypes[type];
        return (
          <FileType
            key={type}
            type={type}
            value={format}
            isCustom={isCustom}
            setFileType={setFileType}
            selectedFileType={selectedFileType}
            handleRemoveCustomFileFormat={handleRemoveCustomFileFormat}
          />
        );
      })}
    </div>
  );
}

FileTypesContainer = memo(FileTypesContainer);
export { FileTypesContainer };
