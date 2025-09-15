import React from "react";

function HelpFeedback() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Help & Feedback</h1>
      <p style={{ fontSize: "1.1rem", marginTop: "10px", maxWidth: "600px" }}>
        Need help or want to share your feedback?  
        We’d love to hear from you!  
      </p>

      <p style={{ marginTop: "20px", fontSize: "1.2rem", fontWeight: "500" }}>
        📩 Contact us at:{" "}
        <a
          href="mailto:support@lunacloud.com"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          support@lunacloud.com
        </a>
      </p>
    </div>
  );
}

export default HelpFeedback;
