// src/components/CustomButton.jsx
const CustomButton = ({ children, theme, ...props }) => {
  return (
    <button
      className={theme === "dark" ? "btn" : "btn btn-primary"}
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(90deg, #818cf8, #f472b6)"
            : "linear-gradient(90deg, #4f46e5, #ec4899)",
        color: theme === "dark" ? "#1e293b" : "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer",
      }}
      {...props} // pass down extra props like onClick, type, etc.
    >
      {children}
    </button>
  );
};

export default CustomButton;
