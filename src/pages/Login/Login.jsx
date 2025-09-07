import { useState, useContext } from "react";
import CustomButton from "../../context/customButton";
import "./Login.css";
import { ThemeContext } from "../../context/ThemeContext";
import cloudicon from "../../assets/images/cloudicon.png";
function Login() {
  const { theme } = useContext(ThemeContext); // use current theme
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked) {
      alert("You must accept the Privacy and Policy to continue!");
      return;
    }
    console.log({ email, password, checked });
    alert("Form submitted successfully!");
    // Connect to backend API here
  };

  return (
    <div
      className={`login-page d-flex justify-content-center align-items-center ${theme}`}
    >
      <div className={`card login-card p-4 shadow ${theme}`}>
        <div className="logo-container text-center mb-4">
          <img src={cloudicon} alt="Logo" width="70" height="70" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="check">
              Privacy And Policy
            </label>
          </div>
          <div className="create-account text-center mb-3">
            <a href="/register">Create Luna Account</a>
          </div>

          {/* CustomButton with theme */}
          <CustomButton
            theme={theme}
            type="submit"
            className="w-100"
            disabled={!checked}
          >
            Sign In
          </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default Login;
