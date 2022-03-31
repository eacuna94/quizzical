import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import Question from './components/question/question.component';
// import Answers from './components/answers/answers.component';

function App() {
  // State to keep track if game has started.
  const [start, setStart] = React.useState(false);

  // Get trivia data from API and save to state
  const [triviaData, setTriviaData] = React.useState([])

  React.useEffect(function () {
    const fetchData = async () => {
      const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
      const data = await res.json();
      setTriviaData(data.results);
    }

    fetchData()
      .catch(console.error)
  }, [])

  console.log(triviaData)

  // Knuth Shuffle algorith found here:
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // Generate answers array for all questions, and shuffle answer choices within each array of question answers
  let answers = [];
  for (let i = 0; i < triviaData.length; i++) {
    let choices = [...triviaData[i].incorrect_answers];
    choices.push(triviaData[i].correct_answer)
    shuffle(choices);
    answers.push(choices);
  }
  console.log(answers)

  // Generate questions array
  const questions = triviaData.map((el, index) => (
    <Question questionText={el.question} answerChoices={answers[index]} />
  ))

  function startGame() {
    setStart(true);
  }

  return (
    <div className="App">
      {start ?
        <div className='question-container'>
          {questions}
        </div>
        :
        <div className='intro-page'>
          <h1>Quizzical app</h1>
          <p>Enter and test your knowledge!</p>
          <button onClick={startGame}>Start Quiz</button>
        </div>
      }
    </div>
  );
}

export default App;
