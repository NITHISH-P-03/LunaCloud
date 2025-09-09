// export default function OptionsMenu({ closeMenu, file }) {
//   return (
//     <div style={{
//       position: "absolute",
//       top: 28,
//       right: 0,
//       background: "#161616",
//       minWidth: 180,
//       boxShadow: "0 2px 12px rgba(0,0,0,0.32)",
//       borderRadius: 8,
//       zIndex: 10,
//       color: "#fff"
//     }}>
//       <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//         <li style={menuItemStyle} onClick={closeMenu}>Open</li>
//         <li style={menuItemStyle} onClick={closeMenu}>Download</li>
//         <li style={menuItemStyle} onClick={closeMenu}>Rename</li>
//         <li style={menuItemStyle} onClick={closeMenu}>Share</li>
//         <li style={{...menuItemStyle, color: "#ff4747"}} onClick={closeMenu}>Delete</li>
//       </ul>
//     </div>
//   );
// }

// const menuItemStyle = {
//   padding: "10px 16px",
//   cursor: "pointer",
//   borderBottom: "1px solid #333"
// };


export default function OptionsMenu({ closeMenu }) {
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
        <li style={menuItemStyle} onClick={closeMenu}>Open</li>
        <li style={menuItemStyle} onClick={closeMenu}>Download</li>
        <li style={menuItemStyle} onClick={closeMenu}>Rename</li>
        <li style={menuItemStyle} onClick={closeMenu}>Share</li>
        <li style={{ ...menuItemStyle, color: "#ff4747" }} onClick={closeMenu}>Delete</li>
      </ul>
    </div>
  );
}

const menuItemStyle = {
  padding: "8px 12px",
  cursor: "pointer",
  borderBottom: "1px solid #333",
  fontSize: 14,
};
