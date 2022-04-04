import React from "react";
import './answers.styles.css';

export default function Answers(props) {
  const styles = {
    backgroundColor: props.isSelected ? '#D6DBF5' : '#F5F7FB'
  }

  return (
    <span className="answer">{props.answerText}</span>
  )
}