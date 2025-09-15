


import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Storage from "./components/Storage/Storage.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import HelpFeedback from "./components/Help/HelpFeedback.jsx";
import AccountInfo from "./components/AccountInfo/AccountInfo.jsx";
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
          <Route path="/about" element={<AboutUs/>}/>
            <Route path="/help" element={<HelpFeedback />} />
            <Route path="/profile" element={<AccountInfo />} />

          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>  
          } />
          <Route path="/storage" element={
            <PrivateRoute>
              <Storage />
            </PrivateRoute>
          } />
        </Routes>
      </main>
      
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
