
import React, { useState, useEffect } from "react";
import FileCard from "./FileCard";
import { getFiles, deleteFile, renameFile } from "../../services/api.js"; // import renameFile API

export default function FileGrid() {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    try {
      const res = await getFiles();
      setFiles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFiles();

    const handleFilesUpdated = () => fetchFiles();
    window.addEventListener("filesUpdated", handleFilesUpdated);
    return () => window.removeEventListener("filesUpdated", handleFilesUpdated);
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFile(id);
      fetchFiles();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Add this handleRename
  const handleRename = async (id, newName) => {
    try {
      await renameFile(id, newName); // call API
      // update local state
      setFiles(prevFiles =>
        prevFiles.map(f => (f._id === id ? { ...f, originalname: newName } : f))
      );
    } catch (err) {
      console.error("Rename failed", err);
    }
  };

  return (
    <div style={{ display:"flex", flexWrap:"wrap", gap:"16px", paddingLeft:"16px", paddingBottom:"16px" }}>
      {files.map(file => (
        <FileCard
          key={file._id}
          file={file}
          onDelete={handleDelete}
          onRename={handleRename} // ✅ pass it here
        />
      ))}
    </div>
  );
}
