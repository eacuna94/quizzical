import './App.css';
import React from 'react';
import Question from './components/question/question.component';

function App() {
  // State to keep track if game has started.
  const [start, setStart] = React.useState(false);

  // Get trivia data from API and save to state
  const [triviaData, setTriviaData] = React.useState({})

  React.useEffect(function () {
    const fetchData = async () => {
      const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
      const data = await res.json();
      setTriviaData(data);
    }

    fetchData()
      .catch(console.error)
  }, [])

  console.log(triviaData)

  function startGame() {
    setStart(true);
  }

  return (
    <div className="App">
      {start ?
        <Question
          question={triviaData.results.question}
          correctAnswer={triviaData.results.correct_answer}
          incorrectAnswers={triviaData.results.incorrect_answers}
        /> :
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
