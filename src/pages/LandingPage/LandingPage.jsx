import landingVideo from "../../assets/videos/landingPagevideo.mp4";
import CustomButton from "../../context/customButton"; // ✅ make sure this path is correct

const LandingPage = ({ theme }) => {
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
          width: "300px",       // medium size
          height: "300px",      // keep square for consistency
          borderRadius: "24px", // slightly rounded like iCloud’s design
          objectFit: "cover",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
          marginBottom: "24px",
        }}
      >
        <source src={landingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Replaced with CustomButton */}
      <CustomButton theme={theme} >
        Sign In
      </CustomButton>

      {/* Heading */}
      <h1 style={{marginTop:"40px"}}>LunaCloud</h1>
      <h2 style={{ fontSize: "2rem", fontWeight: "600", maxWidth: "600px", marginTop:"50px" }}>
        The best place for all your photos, files, notes, mail, and more.
      </h2>
    </div>
  );
};

export default LandingPage;
