import { Quiz } from "../interfaces";

export async function fetchDeleteQuiz(quizId: string): Promise<Quiz> {
  const token = sessionStorage.getItem("token");
  console.log(quizId);

  try {
    const url = `https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz/${quizId}`;
    const settings = {
      method: "DELETE",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, settings);
    const data: Quiz = await response.json();
    console.log("RADERAR QUIZ", data);
    return data;
  } catch (error) {
    console.log("Något fel inträffade vid raderingen:", error);
    throw error;
  }
}
