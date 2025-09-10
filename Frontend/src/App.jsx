import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import './App.css';

function App() {
  const location = useLocation();

  // Hide navbar/footer on dashboard
  const hideNavAndFooter = location.pathname === "/dashboard";

  return (
    <div className="app-container">
      {!hideNavAndFooter && <Navbar />}
      
      <main className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
