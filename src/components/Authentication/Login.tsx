import "./Authentication.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLoginJwc } from "../../fetchJWC/authLoginJwc";
import { ApiLoginResponse } from "../../interfaces";

export default function Login() {
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const data: ApiLoginResponse | undefined = await authLoginJwc(
        username,
        password,
        setMessage
      );

      if (data && data.success) {
        navigate("/profile", { state: { username } });
      } else {
        setUsername("");
        setPassword("");
      }
      if (data?.token) {
        sessionStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  }

  return (
    <div className="auth">
      <div className="auth__img-contianer">
        <img
          className="auth__profile-img"
          src="../../src/assets/profile-icon.svg"
          alt=""
        />
      </div>
      <p className="auth__message">{message}</p>
      <div className="auth__container">
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
    </div>
  );
}
