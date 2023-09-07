import "./Landing.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "../../components/Authentication/SignUp";
import Login from "../../components/Authentication/Login";

export default function Landing() {
  const navigate = useNavigate();
  const [showAuthContent, setShowAuthContent] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  function toggelSignUpComponent() {
    setShowSignUp(!showSignUp);
    setShowLogin(false);
  }

  function toggelLoginComponent() {
    setShowLogin(!showLogin);
    setShowSignUp(false);
  }

  function closeAuthContent() {
    setShowAuthContent(false);
    setShowSignUp(false);
    setShowLogin(false);
  }

  return (
    <div className="landing">
      <div className="landing__header">
        <button
          className="landing__signup-btn"
          onClick={() => {
            if (showSignUp) {
              setShowSignUp(false);
            } else {
              toggelSignUpComponent();
            }
          }}
        >
          <u>sign up</u>
        </button>
        <button
          className="landing__login-btn"
          onClick={() => {
            if (showLogin) {
              setShowLogin(false);
            } else {
              toggelLoginComponent();
            }
          }}
        >
          <u>login</u>
        </button>
      </div>
      <div className="landing__hero-container">
        <hr />
        <div
          className={`landing__auth-container ${
            showAuthContent ? "visible" : "hidden"
          }`}
        >
          {showSignUp && <SignUp />}
          {showLogin && <Login />}
        </div>
        <h1 className="landing__hero-title" onClick={closeAuthContent}>
          quiztopia
        </h1>
        <button
          className="landing__quiz-btn"
          onClick={() => navigate("/quiz-game")}
        >
          Start Quiz
        </button>
        <hr />
      </div>
    </div>
  );
}
