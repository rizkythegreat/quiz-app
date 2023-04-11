import React from "react";
import "./QuizView.css";

const QuizView = ({ questions, currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="font-black text-smalt-blue-500 text-xl">
          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5 w-72">
        {questions[currentQuestion].answers.map(({ text, isCorrect }) => (
          <button
            className="bg-monte-carlo-500 hover:bg-hippie-blue-500 active:bg-smalt-blue-700 focus:outline-none focus:ring focus:ring-violet-300"
            key={text}
            onClick={() => handleAnswerClick(isCorrect)}
          >
            <p className="text-white">{text}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default QuizView;
