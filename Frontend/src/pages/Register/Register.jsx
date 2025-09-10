import { useState, useContext } from "react";
import CustomButton from "../../context/customButton";
import { ThemeContext } from "../../context/ThemeContext";
import cloudicon from "../../assets/images/cloudicon.png";
import './Register.css';

function Register() {
  const { theme } = useContext(ThemeContext);
  
  // Separate state for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checked) {
      alert("You must accept the Privacy and Policy to continue!");
      return;
    }

    console.log({ username, email, password, country, checked });
    alert("Registration submitted successfully!");
    // Connect to backend API here
  };

  return (
    <div className={`register-page d-flex justify-content-center align-items-center ${theme}`}>
      <div className={`card register-card p-4 shadow ${theme}`}>
        
        {/* Logo */}
        <div className="logo-container text-center mb-4">
          <img src={cloudicon} alt="Logo" width="70" height="70" />
        </div>

        {/* Heading */}
        <h2 className="text-center mb-3">Create Your Luna Account</h2>

        {/* Already have account */}
        <div className="text-center mb-4">
          Already have an account? <br /><a href="/login" style={{textDecoration:'none'}}>Sign In</a>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Country */}
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input
              type="text"
              id="country"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          {/* Privacy checkbox */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privacyCheck"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="privacyCheck">
              Privacy and Policy
            </label>
          </div>

          {/* Register button */}
          <CustomButton
            theme={theme}
            type="submit"
            className="w-100"
            disabled={!checked}
          >
            Register
          </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default Register;
