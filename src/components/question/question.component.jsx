import React from "react";
import './question.styles.css';

export default function Question(props) {
  return (
    <div className="question-container">
      <h1 className="question">How would one say goodbye in Spanish?</h1>
      <div className="answer-choices">
        <span className="answer">Adios</span>
        <span className="answer">Au Revoir</span>
        <span className="answer">Tschuss</span>
        <span className="answer">Anyeong</span>
      </div>
    </div>
  )
}