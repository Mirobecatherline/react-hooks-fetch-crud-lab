import { useEffect, useState } from "react";

import QuestionItem from "./QuestionItem";
import React from "react";

function QuestionList() {
  const [questions,setque]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res=>res.json())
    .then((questions)=>{setque(questions);
    });
  },[]);

  const queitem=questions.map((questions)=>{
    return(<QuestionItem
      key={questions.id}
      question={questions}
      deleteclick={handledelete}
      changed={handlechangef}
    />)
  })
  function handledelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() =>{
        const updated= questions.filter((que)=>que.id !== id);
          setque(updated);
      });
  }
  function handlechangef(id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((r) => r.json())
      .then((updated) => {
        const update = questions.map((que) => {
          if (que.id === updated.id) return updated;
          return que;
        });
        setque(update);
      });
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{queitem}</ul>
    </section>
  );
}

export default QuestionList;
