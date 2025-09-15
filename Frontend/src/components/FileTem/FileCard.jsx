

import React, { useState, useRef, useEffect } from "react";
import OptionsMenu from "./OptionsMenu";

export default function FileCard({ file, onDelete, onRename }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fileIcons = { pdf: "📕", excel: "📊", ppt: "📈", image: "🖼️", video: "🎞️", default: "📄" };
  const icon = fileIcons[file.type] || fileIcons.default;

  // Open file in new tab
  const handleOpenFile = () => {
  window.open(file.path, "_blank");
};

  return (
    <div
      ref={cardRef}
      style={{
        width: 230,
        height: 200,
        background: "#222",
        borderRadius: 8,
        padding: 12,
        position: "relative",
        boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onDoubleClick={handleOpenFile} // <-- double-click opens file
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          title={file.originalname}
          style={{
            fontWeight: 500,
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: 140,
          }}
        >
          {file.originalname}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
          }}
          style={{ background: "none", border: "none", color: "#fff", fontSize: 20, cursor: "pointer", marginBottom: "0px" }}
        >
          ⋮
        </button>
        {menuOpen && <OptionsMenu closeMenu={() => setMenuOpen(false)} file={file} onDelete={onDelete} onRename={onRename} />}
      </div>
      <div style={{ marginTop: 8, fontSize: 48, textAlign: "center" }}>{icon}</div>
    </div>
  );
}
