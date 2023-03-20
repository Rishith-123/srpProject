import './UploadForm.css';
import { useState,useRef } from 'react';
import axios from 'axios';

const UploadForm = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);
  const [name, setName] = useState(props.name);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleFileSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", fileInputRef.current.files[0]);
      console.log(fileInputRef.current.files[0])
      const userId = localStorage.getItem("userId")
      const res = await axios.post(
        "http://localhost:5000/api/v1/items/"+userId,
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <h3>{props.displayName}</h3>
      <div className="upload-container">
        
        <label htmlFor="file-input">
          <div className="upload-icon"></div>
          <div className="upload-text">Drag and drop your file or click here</div>
        </label>
        <input id="file-input" type="file" ref={fileInputRef} onChange={handleChange} />
        <button type="submit" disabled={!selectedFile} onClick={handleFileSubmit}>
          Upload
        </button>
      </div>
      </>
    
  );
};

export default UploadForm;