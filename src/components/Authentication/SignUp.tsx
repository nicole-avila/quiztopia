import "./Authentication.scss";
import { useState } from "react";
import { authSignUpJwc } from "../../features/authSignUpJwc";

export default function SignUp() {
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // navigera till login efter lyckad signering

  async function handleSignUp() {
    await authSignUpJwc(username, password, setMessage);
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
      <button className="auth__signup-btn" onClick={handleSignUp}>
        sign up
      </button>
    </div>
  );
}
