


import React from "react";
import landingVideo from "../../assets/videos/landingPagevideo.mp4";
import CustomButton from "../../context/customButton";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ theme }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Check if logged in

  // Reusable style for feature cards
  const cardStyle = {
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: theme === "dark" ? "#1c1c1c" : "#f9f9f9",
    color: theme === "dark" ? "#f9f9f9" : "#1c1c1c", // ✅ proper contrast
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Medium Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "24px",
          objectFit: "cover",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
          marginBottom: "24px",
        }}
      >
        <source src={landingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Button logic */}
      {user ? (
        <CustomButton theme={theme} onClick={() => navigate("/dashboard")}>
          Admin
        </CustomButton>
      ) : (
        <CustomButton theme={theme} onClick={() => navigate("/register")}>
          Sign Up
        </CustomButton>
      )}

      {/* Heading */}
      <h1 style={{ marginTop: "40px" }}>LunaCloud</h1>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          maxWidth: "600px",
          marginTop: "20px",
        }}
      >
        The best place for all your photos, files, notes, mail, and more.
      </h2>

      {/* Features Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "50px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <div style={cardStyle}>
          <h3>☁️ Cloud Storage</h3>
          <p>Upload and access your files securely from anywhere, anytime.</p>
        </div>

        <div style={cardStyle}>
          <h3>🔒 Secure Access</h3>
          <p>Protect your data with encryption and account authentication.</p>
        </div>

        <div style={cardStyle}>
          <h3>⚡ Fast Uploads</h3>
          <p>Lightning-fast uploads and downloads with reliable performance.</p>
        </div>

        
      </div>

      {/* Call to Action */}
      <div
        style={{
          marginTop: "60px",
          maxWidth: "700px",
          color: theme === "dark" ? "#f9f9f9" : "#1c1c1c", // ✅ text contrast fix
        }}
      >
      </div>
    </div>
  );
};

export default LandingPage;
