import QuizComponent from './QuizComponent';
import questions from './questions';
import { useState } from 'react';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <main className="container quizz appear">
      <h1>Testez votre niveau en IT !</h1>

      {quizStarted ? (
        <QuizComponent questions={questions} />
      ) : (
        <>
          <p className="description">Le quizz qui vous permettra de tester vos connaissances en IT !</p>{' '}
          <button className="cta-button" onClick={handleStartQuiz}>
            Démarrer
          </button>
        </>
      )}
    </main>
  );
};

export default App;
