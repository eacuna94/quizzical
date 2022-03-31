import React from "react";
import './answers.styles.css';

export default function Answers(props) {
  return (
    <span className="answer">{props.answerText}</span>
  )
}