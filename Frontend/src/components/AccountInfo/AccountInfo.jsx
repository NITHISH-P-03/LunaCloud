


import React, { useEffect, useState } from "react";
import { deleteAccount } from "../../services/api"; 
import CustomButton from "../../context/customButton";
import { useNavigate } from "react-router-dom";

const AccountInfo = ({ theme }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.id) {
      setUser(storedUser);
    }
  }, []);

  const handleDeleteAccount = async () => {
    if (!user || !user.id) {
      alert("User ID not found!");
      return;
    }

    if (!window.confirm("⚠️ Are you sure? This will delete your account and all files permanently.")) return;

    try {
      await deleteAccount(user.id);

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      alert("Your account and files have been deleted.");
      navigate("/");
    } catch (err) {
      console.error("Delete account error:", err);
      alert("Error deleting account. Please try again.");
    }
  };

  if (!user) return <p>Loading...</p>;

  const isDark = theme === "dark";

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "15px",
        backgroundColor: isDark ? "#1e1e1e" : "#fff",
        boxShadow: isDark
          ? "0px 6px 20px rgba(0,0,0,0.6)"
          : "0px 6px 20px rgba(0,0,0,0.1)",
        color: isDark ? "#cfd3dc" : "#333",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "1.8rem", fontWeight: "600" }}>
        Account Information
      </h2>

      <div style={{ marginBottom: "15px", textAlign: "left" }}>
        <p style={{ margin: "8px 0", fontSize: "1rem" }}>
          <b>Email:</b> {user.email}
        </p>
        <p style={{ margin: "8px 0", fontSize: "1rem" }}>
          <b>Username:</b> {user.username}
        </p>
      </div>

      <CustomButton
        theme={theme}
        style={{
          marginTop: "25px",
          backgroundColor: "#e74c3c",
          color: "#fff",
          width: "100%",
          padding: "12px 0",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onClick={handleDeleteAccount}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
      >
        Delete Account
      </CustomButton>
    </div>
  );
};

export default AccountInfo;
