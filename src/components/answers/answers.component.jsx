import React from "react";
import './answers.styles.css';

export default function Answers(props) {
  return (
    <div className="answer-choices">
      <span className="answer">{props.answerText}</span>
    </div>
  )
}