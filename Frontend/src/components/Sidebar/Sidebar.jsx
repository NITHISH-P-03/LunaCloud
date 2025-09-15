import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import CustomButton from "../../context/customButton";
import { uploadFile, getFiles } from "../../services/api.js";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const { theme } = useContext(ThemeContext);
  const fileInputRef = React.useRef();
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true); // start loading
      await uploadFile(formData);

      // Refresh file grid
      window.dispatchEvent(new Event("filesUpdated"));
      alert("File uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className={`sidebar ${theme}`}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={onFileChange}
      />

      <ul>
        <CustomButton
          className="custom-button"
          theme={theme}
          onClick={handleUpload}
          disabled={loading} // disable button while loading
        >
          {loading ? (
            "Uploading..."
          ) : (
            <>
              <b>+</b>&nbsp; New
            </>
          )}
        </CustomButton>

        <li>
          <a className="dropdown-item" href="/storage">
            Storage
          </a>
        </li>
        {/* <li>Bin</li> */}
        <li>
          <Link to="/help" style={{ textDecoration: "none", color: "inherit" }}>
            Help & Feedback
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
