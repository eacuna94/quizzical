import React from "react";
import './question.styles.css';
import Answers from "../answers/answers.component";

export default function Question(props) {
  // const answerChoices = props.answers.map((answer, index) => (
  //   <Answers key={index} answerText={answer} />
  // ))

  return (
    <div>
      <h1 className="question">{props.questionText}</h1>
    </div>
  )
}

// for (let i = 0; i < triviaData.length; i++) {
//   console.log(triviaData[i].incorrect_answers)
// }