import { useEffect, useState } from 'react';

import { shuffleArray } from './helpers';

const QuizComponent = (props) => {
  const [questions, setQuestions] = useState(props.questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions([...shuffleArray(questions)]);
  }, []);

  const resetQuizz = () => {
    setQuestions([...shuffleArray(questions)]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderQuestion = (question) => {
    return (
      <div key={question.question}>
        <h3>{question.question}</h3>
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(index)} className={'answer-button'}>
            {answer}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <progress value={currentQuestionIndex} max={questions.length} className="progress-bar" />

      {currentQuestionIndex < questions.length ? (
        renderQuestion(questions[currentQuestionIndex])
      ) : (
        <div>
          <h3>Fin du Quizz</h3>
          <p className='hero'>Votre score : {score}/20</p>
          <button onClick={resetQuizz} className='cta-button'>Recommencer</button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
