import "./FormQuiz.scss";
import { useEffect, useState } from "react";
import { QuestionData, FormQuizProps } from "../../interfaces";
import { fetchQuestionQuiz } from "../../api/fetchQuestionQuiz";
import Mapbox from "../Mapbox/Mapbox";

export default function FormQuiz(props: FormQuizProps) {
  const [message, setMessage] = useState<string>("");
  const [newLat, setNewLat] = useState<number>(0);
  const [newLon, setNewLon] = useState<number>(0);
  const lat = newLat.toString();
  const lon = newLon.toString();
  const [formData, setFormData] = useState<QuestionData>({
    name: props.quiz,
    question: "",
    answer: "",
    location: {
      latitude: lat,
      longitude: lon,
    },
  });

  useEffect(() => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        location: {
          latitude: lat,
          longitude: lon,
        },
      };
    });
  }, [lat, lon]);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const data = await fetchQuestionQuiz(formData);
      console.log(data);

      if (data.success) {
        setFormData({
          ...formData,
          question: "",
          answer: "",
          location: {
            latitude: "",
            longitude: "",
          },
        });
      }
      setMessage("quiestion add");
    } catch (error) {
      console.error("Something went wrong with your question:", error);
    }
  }

  const handleResetMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setFormData({
      ...formData,
      question: e.target.value,
    });
  };

  return (
    <div className="form">
      <h4 className="form__title">
        Quiz name, <u>{formData.name}</u>
      </h4>

      <form onSubmit={handleFormSubmit}>
        <div className="form__input-container">
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleResetMessage}
            placeholder="Your question here..."
          />
          <input
            type="text"
            name="answer"
            value={formData.answer}
            onChange={(e) =>
              setFormData({ ...formData, answer: e.target.value })
            }
            placeholder="Your answer here.."
          />
        </div>
        <Mapbox setNewLat={setNewLat} setNewLon={setNewLon} />

        <p className="form__message">{message}</p>
        <button className="form__btn" type="submit">
          Add Your Question
        </button>
      </form>
    </div>
  );
}
