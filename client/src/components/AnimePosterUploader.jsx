// AnimePosterUploader.js
import React, { useState } from "react";

const AnimePosterUploader = ({ onUpload }) => {
  const [posterFile, setPosterFile] = useState(null);

  const handleFileChange = (e) => {
    setPosterFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("poster", posterFile);
    onUpload(formData); // Pass the file to the parent
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h3 className="text-white font-bold mb-2">Upload Poster</h3>
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-white mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
      >
        Upload Poster
      </button>
    </div>
  );
};

export default AnimePosterUploader;
