// import { useState, useRef, useEffect } from "react";
// import OptionsMenu from "./OptionsMenu";

// export default function FileCard({ file }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const cardRef = useRef();

//   // Close menu when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (cardRef.current && !cardRef.current.contains(e.target)) {
//         setMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       style={{
//         width: 220,
//         background: "#222",
//         borderRadius: 10,
//         padding: 12,
//         position: "relative",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//         color: "#fff",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       {/* Top part: filename + options */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <span style={{ fontWeight: 500, fontSize: 16, wordBreak: "break-word" }}>{file.name}</span>
//         <button
//           onClick={() => setMenuOpen(v => !v)}
//           style={{
//             background: "none",
//             border: "none",
//             color: "#fff",
//             fontSize: 22,
//             cursor: "pointer"
//           }}
//         >
//           ⋮
//         </button>
//         {menuOpen && <OptionsMenu closeMenu={() => setMenuOpen(false)} file={file} />}
//       </div>

//       {/* Bottom part: file icon */}
//       <div style={{ marginTop: 16, fontSize: 48, textAlign: "center" }}>
//         {file.type === "pdf" && "📕"}
//         {file.type === "excel" && "📊"}
//         {file.type === "ppt" && "📈"}
//         {file.type === "image" && "🖼️"}
//         {file.type === "video" && "🎞️"}
//       </div>
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import OptionsMenu from "./OptionsMenu";

export default function FileCard({ file }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cardRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // File type icons
  const fileIcons = {
    pdf: "📕",
    excel: "📊",
    ppt: "📈",
    image: "🖼️",
    video: "🎞️",
    default: "📄"
  };
  const icon = fileIcons[file.type] || fileIcons.default;

  return (
    <div
      ref={cardRef}
      style={{
        width: 230,
        height: 200, // smaller height
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
    >
      {/* Top: file name + options */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontWeight: 500,
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: 140
          }}
          title={file.name}
        >
          {file.name}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            setMenuOpen((v) => !v);
          }}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
              marginBottom: "0px" // remove extra bottom margin
          }}
        >
          ⋮
        </button>
        {menuOpen && <OptionsMenu closeMenu={() => setMenuOpen(false)} file={file} />}
      </div>

      {/* Bottom: file icon */}
      <div style={{ marginTop: 8, fontSize: 48, textAlign: "center" }}>{icon}</div>
    </div>
  );
}
