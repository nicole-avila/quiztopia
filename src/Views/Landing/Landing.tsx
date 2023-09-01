import "./Landing.scss";
import { useNavigate } from "react-router-dom";
import Authentication from "../../components/Authentication/Authentication";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <Authentication />

      <div className="landing__hero-content">
        <hr />
        <h1 className="landing__hero-title">quiztopia</h1>
        <hr />
      </div>
      <button onClick={() => navigate("/game")}>Start Quiz</button>
    </div>
  );
}
