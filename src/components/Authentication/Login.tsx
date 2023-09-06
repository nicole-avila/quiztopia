import "./Authentication.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLoginJwc } from "../../features/authLoginJwc";

export default function Login() {
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const data = await authLoginJwc(username, password, setMessage);
      console.log("data från authLogin", data);

      if (data && data.success) {
        setMessage("Success Login!");
        navigate("/profile", { state: { username } });
      }
      if (data.token) {
        setToken(data.token);
        sessionStorage.setItem("token", data.token);
        console.log(token);
      } else {
        setMessage("Failed login!");
      }
    } catch (error) {
      console.log("error during login", error);
    }
  }

  return (
    <div className="auth">
      <p className="auth__message">{message}</p>
      <input
        className="auth__input"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        value={username}
      />
      <input
        className="auth__input"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        value={password}
      />
      <button className="auth__login-btn" onClick={handleLogin}>
        login
      </button>
    </div>
  );
}
