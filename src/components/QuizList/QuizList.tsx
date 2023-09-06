import "./QuizList.scss";
import { fetchGetAllQuiz } from "../../api/fetchGetAllQuiz";
import { useEffect, useState } from "react";
import { Quiz, QuestionData } from "../../interfaces";
import { fetchGetUserQuiz } from "../../api/fetchGetUserQuiz";
import GameMapbox from "../GameMapbox/GameMapbox";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [locations, setLocations] = useState<QuestionData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const quizzes: Quiz[] = await fetchGetAllQuiz();
        console.log(quizzes);

        setQuizzes(quizzes);
      } catch (error) {
        console.log("Något fel har skett", error);
      }
    }
    fetchData();
  }, []);

  async function handleGetUserQuiz(quiz: Quiz) {
    const { username, quizId, userId } = quiz;

    try {
      const userData = await fetchGetUserQuiz(username, quizId, userId);
      const questions = userData.quiz.questions;
      setSelectedQuiz(quiz);
      setLocations(questions);
      console.log("userData:", userData);
    } catch (error) {
      console.log("något fel", error);
    }
  }

  return (
    <div className="quiz">
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
            <p className="quiz__user">made by, {quiz.username}</p>
          </article>
        ))}
      </section>

      <section className="quiz__map-container">
        {selectedQuiz &&
          selectedQuiz.questions.map((question, index) => (
            <p key={index} className="quiz__map-question">
              Fråga: {question.question}
              {/* <br />
              Svar: {question.answer} */}
            </p>
          ))}
        <div className="quiz__mapbox"></div>
      </section>
      <div>
        <GameMapbox locations={locations} />
      </div>
    </div>
  );
}
