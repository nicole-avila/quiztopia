import CreateQuiz from "../../components/CreateQuiz/CreateQuiz";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  sessionStorage.getItem("token");
  const navigate = useNavigate();

  function logOut() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h3>Hi Nicole</h3>
      <button onClick={logOut}>log out</button>
      <hr />
      <section>
        <CreateQuiz />
      </section>
      <section>
        <h2>My Quiz List</h2>
        <hr />
        <p>empty</p>
        <li>en lista</li>
        <li>en lista</li>
        <li>en lista</li>
      </section>
    </div>
  );
}
