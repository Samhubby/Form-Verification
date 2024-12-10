import { useState, useRef } from "react";
/**
 * Dropzone component allows users to drag and drop files or click to upload.
 * It provides visual feedback for drag events and handles file size validation.
 *
 * @component
 * @example
 * return (
 *   <Dropzone />
 * )
 *
 * @returns {JSX.Element} The rendered Dropzone component.
 *
 * @function
 * @name Dropzone
 *
 * @description
 * - Uses `useState` to manage drag state, file upload state, and file size validation.
 * - Uses `useRef` to reference the hidden file input element.
 * - Handles drag events (`dragenter`, `dragleave`, `dragover`, `drop`) to provide visual feedback.
 * - Validates file size (maximum 50MB) and updates state accordingly.
 * - Displays appropriate messages based on file upload status and size validation.
 */
const Dropzone = () => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(null);
  const [isFileSize, setIsFileSize] = useState(false);
  const ref = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    setIsDragActive(e.type === "dragenter");
  };

  const handleLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDrop = (e) => {
    const file = e.dataTransfer.files[0];
    e.preventDefault();

    if (file.size / 1024 / 1024 > 50) {
      setIsDragActive(false);
      setIsFileSize(true);
      setIsImageUploaded(file);
      return;
    }
    setIsDragActive(false);
    setIsFileSize(false);
    setIsImageUploaded(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file.size / 1024 / 1024 > 50) {
      setIsFileSize(true);
      setIsImageUploaded(file);
      return;
    }
    setIsFileSize(false);
    setIsImageUploaded(file);
  };
  return (
    <div
      className={`${
        isDragActive ? "border-[#E50101] opacity-40" : "border-[#D7DADC]"
      } border-2 border-dashed h-48  rounded-md  flex flex-col items-center justify-center`}
      onDragEnter={handleDrag}
      onDragLeave={handleLeave}
      onDragOver={handleOver}
      onDrop={handleDrop}
    >
      {!isImageUploaded ? (
        <div>
          <div className="bg-[#F6F6F6] w-12 h-12 mb-2 mx-auto rounded-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8182 12.1134H14.6364C14.4194 12.1134 14.2113 12.0256 14.0578 11.8693C13.9044 11.713 13.8182 11.5011 13.8182 11.2801C13.8182 11.059 13.9044 10.8471 14.0578 10.6908C14.2113 10.5345 14.4194 10.4467 14.6364 10.4467H22.8182C23.0352 10.4467 23.2433 10.5345 23.3967 10.6908C23.5501 10.8471 23.6364 11.059 23.6364 11.2801C23.6364 11.5011 23.5501 11.713 23.3967 11.8693C23.2433 12.0256 23.0352 12.1134 22.8182 12.1134Z"
                fill="#636567"
              />
              <path
                d="M14.6364 15.4467H22.8182C23.0352 15.4467 23.2433 15.3589 23.3967 15.2026C23.5501 15.0464 23.6364 14.8344 23.6364 14.6134C23.6364 14.3924 23.5501 14.1804 23.3967 14.0241C23.2433 13.8679 23.0352 13.7801 22.8182 13.7801H14.6364C14.4194 13.7801 14.2113 13.8679 14.0578 14.0241C13.9044 14.1804 13.8182 14.3924 13.8182 14.6134C13.8182 14.8344 13.9044 15.0464 14.0578 15.2026C14.2113 15.3589 14.4194 15.4467 14.6364 15.4467Z"
                fill="#636567"
              />
              <path
                d="M14.6364 18.7801H22.8182C23.0352 18.7801 23.2433 18.6923 23.3967 18.536C23.5501 18.3797 23.6364 18.1677 23.6364 17.9467C23.6364 17.7257 23.5501 17.5138 23.3967 17.3575C23.2433 17.2012 23.0352 17.1134 22.8182 17.1134H14.6364C14.4194 17.1134 14.2113 17.2012 14.0578 17.3575C13.9044 17.5138 13.8182 17.7257 13.8182 17.9467C13.8182 18.1677 13.9044 18.3797 14.0578 18.536C14.2113 18.6923 14.4194 18.7801 14.6364 18.7801Z"
                fill="#636567"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 23.7801H12.4545C11.6591 23.7795 10.8963 23.4574 10.3339 22.8845C9.77138 22.3116 9.45512 21.5347 9.45454 20.7245V5.7245C9.45512 4.9143 9.77138 4.13745 10.3339 3.56455C10.8963 2.99165 11.6591 2.66953 12.4545 2.66895H21.736C22.8127 2.66895 23.8676 3.11339 24.628 3.89006L26.8011 6.10339C27.1823 6.48941 27.4845 6.94861 27.6903 7.4544C27.8961 7.9602 28.0014 8.50255 28 9.05006V20.7245C27.9994 21.5347 27.6832 22.3116 27.1207 22.8845C26.5582 23.4574 25.7955 23.7795 25 23.7801ZM12.4545 4.33561C11.7029 4.33561 11.0909 4.95895 11.0909 5.7245V20.7245C11.0909 21.4901 11.7029 22.1134 12.4545 22.1134H25C25.7516 22.1134 26.3636 21.4901 26.3636 20.7245V9.05006C26.3636 8.38228 26.1083 7.7545 25.6447 7.28228L23.4716 5.06895C23.0108 4.60073 22.3869 4.33712 21.736 4.33561H12.4545Z"
                fill="#636567"
              />
              <path
                d="M20.0909 29.3356H7C6.20453 29.335 5.4418 29.0129 4.87932 28.44C4.31683 27.8671 4.00058 27.0903 4 26.2801V8.50228C4.00058 7.69208 4.31683 6.91523 4.87932 6.34233C5.4418 5.76942 6.20453 5.44731 7 5.44672H7.54545C7.76245 5.44672 7.97056 5.53452 8.12399 5.6908C8.27743 5.84708 8.36363 6.05904 8.36363 6.28006C8.36363 6.50107 8.27743 6.71303 8.12399 6.86931C7.97056 7.02559 7.76245 7.11339 7.54545 7.11339H7C6.24836 7.11339 5.63636 7.73672 5.63636 8.50228V26.2801C5.63636 27.0456 6.24836 27.6689 7 27.6689H20.0909C20.8425 27.6689 21.4545 27.0456 21.4545 26.2801V25.7245C21.4545 25.5035 21.5407 25.2915 21.6942 25.1352C21.8476 24.979 22.0557 24.8912 22.2727 24.8912C22.4897 24.8912 22.6978 24.979 22.8513 25.1352C23.0047 25.2915 23.0909 25.5035 23.0909 25.7245V26.2801C23.0903 27.0903 22.7741 27.8671 22.2116 28.44C21.6491 29.0129 20.8864 29.335 20.0909 29.3356Z"
                fill="#636567"
              />
            </svg>
          </div>

          <div>
            <span className="text-[#636567] text-sm">
              <span
                className="underline text-black cursor-pointer"
                onClick={() => ref.current.click()}
              >
                Click to upload
              </span>{" "}
              or drag and drop
            </span>
            <br />
            <span className="text-[#636567] text-sm ml-4 items-center">
              Maximum file size is 50MB
            </span>
          </div>
        </div>
      ) : (
        <div>
          {!isFileSize ? (
            <div>
              <p className="text-sm text-green-500">
                Successfully uploaded: {isImageUploaded.name}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm cursor-pointer text-red-500">
                File size exceeded. Please drag a file less than 50MB.
              </p>
              <button
                className="text-sm underline"
                onClick={() => ref.current.click()}
              >
                Retry
              </button>
            </div>
          )}
        </div>
      )}
      <input
        ref={ref}
        onChange={handleFileChange}
        type="file"
        id="file"
        hidden
        required
      />
    </div>
  );
};

export default Dropzone;
