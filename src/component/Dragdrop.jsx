import React, { useState } from "react";

export const Dragdrop = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setFiles([...files, ...droppedFiles]);
    
    // const formData = new FormData();
    // formData.append("image", droppedFiles);

    // console.log("submit====",files);

  };

  const handleInputChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);

  };

  const submitFunc = (e)=>{
    e.preventDefault();
    console.log("submit====",files);
  }

  return (
    <div>
      <form onSubmit={submitFunc}>
        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            style={{ width: "300px", height: "200px", border: "1px solid black" }}
        >
            <input type="file" onChange={handleInputChange} multiple />
            <div>
            {files.map((file, index) => (
                <div key={index}>{file.name}</div>
            ))}
            </div>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};
