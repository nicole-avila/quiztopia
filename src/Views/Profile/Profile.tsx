import { useNavigate } from "react-router-dom";
import CreateQuiz from "../../components/CreateQuiz/CreateQuiz";

export default function Profile() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h3>Hi Nicole</h3>
      <hr />
      <section>
        <CreateQuiz navigate={navigate} token={token} />
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
