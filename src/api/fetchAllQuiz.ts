export async function fetchAllQuiz() {
  try {
    const url = "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz";
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
  } catch (error) {}
}
