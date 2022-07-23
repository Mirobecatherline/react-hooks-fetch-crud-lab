import React from "react";

function QuestionItem({ question, deleteclick,changed }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

function handledelete() {
  deleteclick(id);
}
function handlechangef(par) {
  changed((id, parseInt(par.target.value)))
}
  return (
   
   <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handlechangef}>{options}</select>
      </label>
      <button onClick={handledelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
