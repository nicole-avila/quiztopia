import "./UserQuizList.scss";
import { useEffect, useState } from "react";
import { fetchGetAllQuiz } from "../../api/fetchGetAllQuiz";
import { fetchDeleteQuiz } from "../../api/fetchDeleteQuiz";
import { Quiz } from "../../interfaces";

export default function UserQuizList({ username }: Quiz) {
  const [userQuizzes, setUserQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    async function fetchMyQuizzes() {
      try {
        const data = await fetchGetAllQuiz();

        const quizzes = data.filter((quiz) => quiz.username === username);
        setUserQuizzes(quizzes);
      } catch (error) {
        console.log(
          "An error occurred while retrieving the user's quiz:",
          error
        );
      }
    }
    fetchMyQuizzes();
  }, []);

  async function deleteUserQuiz(deleteQuizId: string) {
    try {
      await fetchDeleteQuiz(deleteQuizId);
      setUserQuizzes((prevQuizzes) =>
        prevQuizzes.filter((qui) => qui.quizId !== deleteQuizId)
      );
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  }

  return (
    <div className="user-quiz">
      {userQuizzes.length === 0 ? (
        <h3 className="user-quiz__title-empty">Let's create your first quiz</h3>
      ) : (
        <h2 className="user-quiz__title">
          {userQuizzes.length > 1 ? "your quizzes" : "your quiz"}
        </h2>
      )}

      <section>
        {userQuizzes.map((quiz) => (
          <article className="user-quiz__quiz-container" key={quiz.quizId}>
            <p> {quiz.quizId}</p>
            <img
              onClick={() => deleteUserQuiz(quiz.quizId)}
              className="user-quiz__delete-btn"
              src="../../src/assets/trash.svg"
              alt="
              a black dustbin with a lid"
            />
          </article>
        ))}
      </section>
    </div>
  );
}
