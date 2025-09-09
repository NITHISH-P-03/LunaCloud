// import FileCard from "./FileCard";

// const files = [
//   { id: 1, name: "Assignment tracker.xlsx", type: "excel", thumbnail: "excel-icon.png" },
//   { id: 2, name: "Computer Networks.pdf", type: "pdf", thumbnail: "pdf-icon.png" },
//   { id: 3, name: "Presentation.pptx", type: "ppt", thumbnail: "ppt-icon.png" },
//   { id: 4, name: "Photo.png", type: "image", thumbnail: "image-icon.png" },
//   { id: 5, name: "Video.mp4", type: "video", thumbnail: "video-icon.png" },
// ];

// export default function FileGrid() {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
//       {files.map(file => (
//         <FileCard key={file.id} file={file} />
//       ))}
//     </div>
//   );
// }


import FileCard from "./FileCard";

const files = [
  { id: 1, name: "Assignment tracker.xlsx", type: "excel" },
  { id: 2, name: "Computer Networks.pdf", type: "pdf" },
  { id: 3, name: "Presentation.pptx", type: "ppt" },
  { id: 4, name: "Photo.png", type: "image" },
  { id: 5, name: "Video.mp4", type: "video" },
  { id: 6, name: "Video.mp4", type: "video" },
];

export default function FileGrid() {
  return    (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px",paddingLeft:"16px",paddingBottom:"16px" }}>
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}
