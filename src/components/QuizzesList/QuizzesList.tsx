import "./QuizzesList.scss";
import { fetchGetAllQuiz } from "../../api/fetchGetAllQuiz";
import { useEffect, useState } from "react";
import { Quiz as QuizData, QuestionData } from "../../interfaces";
import { fetchGetUserQuiz } from "../../api/fetchGetUserQuiz";
import GameMapbox from "../GameMapbox/GameMapbox";

export default function QuizzesList() {
  const [quizzes, setQuizzes] = useState<QuizData[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizData | null>(null);
  const [locations, setLocations] = useState<QuestionData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const quizzes: QuizData[] = await fetchGetAllQuiz();

        setQuizzes(quizzes);
      } catch (error) {
        console.error(
          "An error occurred while retrieving the user's quiz:",
          error
        );
      }
    }
    fetchData();
  }, []);

  async function handleGetUserQuiz(quiz: QuizData) {
    const { username, quizId, userId } = quiz;

    try {
      await fetchGetUserQuiz(username, quizId, userId);

      const questions = quiz.questions;
      setSelectedQuiz(quiz);
      setLocations(questions);
    } catch (error) {
      console.error("An error occurred while processing your request.", error);
    }
  }

  return (
    <div className="quiz">
      <div className="quiz__mapbox">
        {locations.length > 0 && <GameMapbox locations={locations} />}
      </div>
      <section className="quiz__list-container">
        {quizzes.map((quiz, index) => (
          <article
            key={index}
            onClick={() => handleGetUserQuiz(quiz)}
            className={`quiz__user-list ${
              selectedQuiz === quiz ? "selected" : ""
            }`}
          >
            <b className="quiz__user">{quiz.quizId}</b>
            <p className="quiz__user-made-by">made by, {quiz.username}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
