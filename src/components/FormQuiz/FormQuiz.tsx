import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionData, FormQuizProps } from "../../interfaces";
import { fetchQuestionQuiz } from "../../api/fetchQuestionQuiz";
import Mapbox from "../Mapbox/Mapbox";

export default function FormQuiz(props: FormQuizProps) {
  const navigate = useNavigate();
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
        console.log(formData);
      }
    } catch (error) {
      console.log("Något fel skedde med din frågan:", error);
    }
  }

  return (
    <div className="form">
      <h4 className="form__title">Quiz name: {formData.name}</h4>
      <button onClick={() => navigate("/game")}>play the quiz game </button>
      <form onSubmit={handleFormSubmit}>
        <textarea
          name="question"
          value={formData.question}
          onChange={(e) =>
            setFormData({ ...formData, question: e.target.value })
          }
          placeholder="Your question here..."
          id="question"
          cols="30"
          rows="5"
        ></textarea>
        <textarea
          name="answer"
          value={formData.answer}
          onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
          placeholder="Your answer here.."
          id="answer"
          cols="30"
          rows="5"
        ></textarea>
        <Mapbox setNewLat={setNewLat} setNewLon={setNewLon} />

        <button type="submit">Add Your Question</button>
      </form>
    </div>
  );
}
