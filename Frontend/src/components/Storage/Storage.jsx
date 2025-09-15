


// import { useEffect, useState } from "react";
// import { getFiles, deleteFile } from "../../services/api";
// import "./Storage.css";

// function Storage() {
//   const [files, setFiles] = useState([]);
//   const [used, setUsed] = useState(0);
//   const total = 100 * 1024 * 1024; // 100 MB

//   const fetchFiles = () => {
//     getFiles()
//       .then(res => {
//         const data = res.data;
//         setFiles(data);

//         const totalUsed = data.reduce((acc, file) => acc + (file.size || 0), 0);
//         setUsed(totalUsed);
//       })
//       .catch(err => console.error(err));
//   };

//   useEffect(() => {
//     fetchFiles();
//   }, []);

//   const percentUsed = (used / total) * 100;

//   const formatSize = (bytes) => {
//     if (bytes < 1024) return bytes + " B";
//     if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
//     if (bytes < 1024 * 1024 * 1024)
//       return (bytes / (1024 * 1024)).toFixed(2) + " MB";
//     return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this file?")) {
//       deleteFile(id)
//         .then(() => {
//           const updatedFiles = files.filter(file => file._id !== id);
//           setFiles(updatedFiles);

//           const totalUsed = updatedFiles.reduce((acc, file) => acc + (file.size || 0), 0);
//           setUsed(totalUsed);
//         })
//         .catch(err => console.error(err));
//     }
//   };

//   return (
//     <div className="storage-container">
//       <div className="storage-header">
//         <h2>
//           {formatSize(used)} <span className="storage-sub">of 100 MB used</span>
//         </h2>
//         <div className="storage-bar">
//           <div className="storage-bar-fill" style={{ width: `${percentUsed}%` }}></div>
//         </div>
//       </div>

//       <div className="files-section">
//         <h3>Files</h3>
//         <div className="files-grid">
//           {files.map(file => (
//             <div
//               key={file._id}
//               className="file-card"
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 padding: "10px 15px",
//                 borderBottom: "1px solid #ddd"
//               }}
//             >
//               <span className="file-name" style={{ flex: 1 }}>{file.originalname}</span>
//               <span className="file-size" style={{ width: "100px", textAlign: "right", marginRight: "10px" }}>
//                 {formatSize(file.size)}
//               </span>
//               <button
//                 onClick={() => handleDelete(file._id)}
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "none",
//                   color: "#ff4d4f",
//                   cursor: "pointer",
//                   fontSize: "1.2rem"
//                 }}
//                 title="Delete File"
//               >
//                 🗑️
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Storage;


import { useEffect, useState } from "react";
import { getFiles, deleteFile } from "../../services/api";
import "./Storage.css";

function Storage() {
  const [files, setFiles] = useState([]);
  const [used, setUsed] = useState(0);
  const total = 50 * 1024 * 1024; // 50 MB limit

  const fetchFiles = () => {
    getFiles()
      .then(res => {
        const data = res.data;
        setFiles(data);

        const totalUsed = data.reduce((acc, file) => acc + (file.size || 0), 0);
        setUsed(totalUsed);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchFiles();

    const handleFilesUpdated = () => fetchFiles();
    window.addEventListener("filesUpdated", handleFilesUpdated);
    return () => window.removeEventListener("filesUpdated", handleFilesUpdated);
  }, []);

  const percentUsed = (used / total) * 100;

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      deleteFile(id)
        .then(() => {
          const updatedFiles = files.filter(file => file._id !== id);
          setFiles(updatedFiles);

          const totalUsed = updatedFiles.reduce((acc, file) => acc + (file.size || 0), 0);
          setUsed(totalUsed);
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="storage-container">
      <div className="storage-header">
        <h2>
          {formatSize(used)} <span className="storage-sub">of 50 MB used</span>
        </h2>
        <div className="storage-bar">
          <div className="storage-bar-fill" style={{ width: `${percentUsed}%` }}></div>
        </div>
      </div>

      <div className="files-section">
        <h3>Files</h3>
        <div className="files-grid">
          {files.map(file => (
            <div
              key={file._id}
              className="file-card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
                borderBottom: "1px solid #ddd"
              }}
            >
              <span className="file-name" style={{ flex: 1 }}>{file.originalname}</span>
              <span className="file-size" style={{ width: "100px", textAlign: "right", marginRight: "10px" }}>
                {formatSize(file.size)}
              </span>
              <button
                onClick={() => handleDelete(file._id)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#ff4d4f",
                  cursor: "pointer",
                  fontSize: "1.2rem"
                }}
                title="Delete File"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Storage;
