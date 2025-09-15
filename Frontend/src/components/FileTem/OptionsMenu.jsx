import React from "react";
import { downloadFile, openFile } from "../../services/api";

const menuItemStyle = {
  padding: "8px 12px",
  cursor: "pointer",
  borderBottom: "1px solid #333",
  fontSize: 14,
};

export default function OptionsMenu({ closeMenu, file, onDelete, onRename }) {
 const handleOpen = () => {
  try {
    if (!file.path) throw new Error("File URL missing");
    window.open(file.path, "_blank", "noopener,noreferrer");
  } catch (err) {
    console.error("Open file error:", err);
    alert("Failed to open file");
  } finally {
    closeMenu();
  }
};



const handleDownload = async () => {
  try {
    const response = await fetch(file.path);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.originalname || "file");
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Download error:", err);
  }
};




  const handleRename = () => {
    const newName = prompt("Enter new file name:", file.originalname);
    if (newName && newName !== file.originalname) {
      onRename(file._id, newName);
    }
    closeMenu();
  };

  // const handleShare = () => {
  //   const baseUrl = "http://localhost:3000/uploads";
  //   const link = `${baseUrl}/${file.filename}`;
  //   if (navigator.share) {
  //     navigator.share({
  //       title: file.originalname,
  //       text: "Check out this file",
  //       url: link,
  //     })
  //       .then(() => console.log("Shared successfully"))
  //       .catch((err) => console.error("Error sharing:", err));
  //   } else {
  //     navigator.clipboard.writeText(link)
  //       .then(() => alert("Link copied to clipboard!"))
  //       .catch(() => alert("Failed to copy link"));
  //   }
  //   closeMenu();
  // };

  const handleShare = () => {
  const link = file.path; // Use Supabase public URL
  if (navigator.share) {
    navigator.share({
      title: file.originalname,
      text: "Check out this file",
      url: link,
    })
      .then(() => console.log("Shared successfully"))
      .catch((err) => console.error("Error sharing:", err));
  } else {
    navigator.clipboard.writeText(link)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy link"));
  }
  closeMenu();
};

  return (
    <div
      style={{
        position: "absolute",
        top: 28,
        right: 0,
        background: "#161616",
        minWidth: 160,
        boxShadow: "0 2px 8px rgba(0,0,0,0.32)",
        borderRadius: 6,
        zIndex: 10,
        color: "#fff",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={menuItemStyle} onClick={handleOpen}>
          Open
        </li>
      
        <li style={menuItemStyle} onClick={handleRename}>
          Rename
        </li>
        <li style={menuItemStyle} onClick={handleShare}>
          Share
        </li>
          <li style={menuItemStyle} onClick={handleDownload}>
          Download
        </li>
        <li
          style={{ ...menuItemStyle, color: "#ff4747" }}
          onClick={() => {
            onDelete(file._id);
            closeMenu();
          }}
        >
          Delete
        </li>
      </ul>
    </div>
  );
}
