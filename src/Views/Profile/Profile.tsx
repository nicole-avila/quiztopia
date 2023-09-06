import "./Profile.scss";
import CreateQuiz from "../../components/CreateQuiz/CreateQuiz";
import UserQuizList from "../../components/UserQuizList/UserQuizList";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const { state } = useLocation();
  const navigate = useNavigate();
  sessionStorage.getItem("token");

  function logOut() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="profile">
      <div className="profile__header">
        <button className="profile__header-logout" onClick={logOut}>
          log out
        </button>
        <h1 className="profile__header-title">welcome {state.username}</h1>
      </div>
      <hr />
      <div className="profile__container">
        <CreateQuiz />
        <UserQuizList username={state.username} />
      </div>
      <hr />
    </div>
  );
}
