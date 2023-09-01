import { QuestionData } from "../interfaces";

export async function fetchQuestionQuiz(
  formData: QuestionData
): Promise<QuestionData> {
  const token = sessionStorage.getItem("token");
  console.log(formData);

  try {
    const url =
      "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz/question";
    const settings = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, settings);
    const data: QuestionData = await response.json();
    console.log("LÄGGER TILL QUIZ", data);
    return data;
  } catch (error) {
    console.log("Något fel skedde med din QUIZ:", error);
    throw error;
  }
}
