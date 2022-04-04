import React from "react";
import './question.styles.css';
import Answers from "../answers/answers.component";

export default function Question(props) {
  const answerChoices = props.answerChoices.map((answer, index) => (
    <Answers key={index} answerText={answer} />
  ))

  // function selectAnswer(id) {
  //   const index = props.answerChoices.findIndex(object => {
  //     return object.id === id;
  //   });
  //   props.setTriviaData(prevData => prevData.map(el => {
  //     if (el.id === id) {
  //       const selectedAnswerObj = prevData[index].map(obj => ({...obj, }))
  //       return 
  //     }
  //   }))
  // }

  return (
    <div>
      <h1 className="question" dangerouslySetInnerHTML={{ __html: props.question }} />
      <div className="answer-container">
        {answerChoices}
      </div>
    </div>
  )
}

// for (let i = 0; i < triviaData.length; i++) {
//   console.log(triviaData[i].incorrect_answers)
// }