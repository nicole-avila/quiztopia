export default function FormQuiz() {
  function handleAddQuiz(e) {
    e.preventDefault();
    console.log("klick");
  }

  return (
    <div>
      <h4>namnet på quizen</h4>
      <form onSubmit={handleAddQuiz}>
        <textarea name="question" id="question" cols="30" rows="10"></textarea>
        <textarea name="answer" id="answer" cols="30" rows="10"></textarea>

        <button>Add Your Quiz</button>
      </form>
    </div>
  );
}
