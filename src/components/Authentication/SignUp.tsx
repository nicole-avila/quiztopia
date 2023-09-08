import "./Authentication.scss";
import profile from "../../../public/assets/profile-icon.svg";
import { useState } from "react";
import { authSignUpJwc } from "../../fetchJWC/authSignUpJwc";
import { ApiSignUpResponse } from "../../interfaces";

export default function SignUp() {
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSignUp() {
    try {
      const data: ApiSignUpResponse = await authSignUpJwc(username, password);
      if (data.success) {
        setMessage("Sign up success! You can now Login");
      } else {
        setMessage("Sorry, choose another username");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during sign up", error);
    }
  }

  return (
    <div className="auth">
      <div className="auth__img-contianer">
        <img className="auth__profile-img" src={profile} alt="man icon blue" />
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
        <button className="auth__signup-btn" onClick={handleSignUp}>
          sign up
        </button>
      </div>
    </div>
  );
}
