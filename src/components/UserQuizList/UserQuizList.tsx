import "./UserQuizList.scss";
import { useEffect, useState } from "react";
import { fetchGetAllQuiz } from "../../api/fetchGetAllQuiz";
import { fetchDeleteQuiz } from "../../api/fetchDeleteQuiz";
import { Quiz } from "../../interfaces";

export default function UserQuizList({ username }: Quiz) {
  const [myQuizzes, setMyQuizzes] = useState<Quiz[]>([]);
  const [deleteQuizId, setDeleteQuizId] = useState<string>("");

  useEffect(() => {
    async function fetchMyQuizzes() {
      try {
        const data = await fetchGetAllQuiz();

        const usersQuizzes = data.filter((quiz) => quiz.username === username);
        setMyQuizzes(usersQuizzes);
      } catch (error) {
        console.log("något fel", error);
      }
    }
    fetchMyQuizzes();
  }, []);
  console.log(deleteQuizId);

  async function deleteUserQuiz(deleteQuizId: string) {
    try {
      const deleteData = await fetchDeleteQuiz(deleteQuizId);
      console.log(deleteData);
    } catch (error) {}
    console.log("klick");
  }

  return (
    <div className="user-quiz">
      <h2 className="user-quiz__title">My Quiz List</h2>{" "}
      <section>
        {myQuizzes.map((quiz) => (
          <article
            onClick={() => setDeleteQuizId(quiz.quizId)}
            className="user-quiz__quiz-container"
            key={quiz.quizId}
          >
            <p> {quiz.quizId}</p>
            <img
              onClick={() => deleteUserQuiz(deleteQuizId)}
              className="user-quiz__delete-btn"
              src="../../src/assets/trash.svg"
              alt=""
            />
          </article>
        ))}
      </section>
    </div>
  );
}

// setMyQuizzes((prevMyQuizzes) =>
//   prevMyQuizzes.filter((quiz) => quiz.quizId !== quizId)
// );
