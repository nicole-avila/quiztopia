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

  // function showSignUpComponent() {
  //   setShowSignUp(true);
  //   setShowLogin(false);
  // }

  // function showLoginComponent() {
  //   setShowSignUp(false);
  //   setShowLogin(true);
  // }

  function toggleAuthContent() {
    setShowAuthContent(!showAuthContent);
    setShowSignUp(false);
    setShowLogin(false);
  }
  return (
    <div className="landing">
      <div className="landing__header">
        <div className="landing__trott">
          <button
            className="landing__signup-btn"
            onClick={() => {
              toggleAuthContent();
              setShowSignUp(true);
            }}
          >
            sign up
          </button>
          <button
            className="landing__login-btn"
            onClick={() => {
              toggleAuthContent();
              setShowLogin(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="landing__hero-content">
        <hr />
        <div
          className={`landing__auth-content ${
            showAuthContent ? "visible" : "hidden"
          }`}
        >
          {showSignUp && <SignUp />}
          {showLogin && <Login />}
        </div>
        <h1 className="landing__hero-title">quiztopia</h1>
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
