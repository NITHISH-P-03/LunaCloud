import { useContext } from "react";
import './Footer.css';
import { ThemeContext } from "../../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`foot ${theme}`}>
      <div className="left">
        © 2025 Luna. All rights reserved.
      </div>
      <div className="right">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms and Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
