import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authSignUpJwc } from "../../features/authSignUpJwc";
import { authLoginJwc } from "../../features/authLoginJwc";

export default function Authentication() {
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();

  async function handleSignUp() {
    await authSignUpJwc(username, password, setMessage);
  }

  async function handleLogin() {
    try {
      const data = await authLoginJwc(username, password, setMessage);
      console.log("data från authLogin", data);

      if (data && data.success) {
        setMessage("Success Login!");
        navigate("/profile");
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
    <div>
      <p>{message}</p>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        value={password}
      />
      <button onClick={handleSignUp}>sign up</button>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
