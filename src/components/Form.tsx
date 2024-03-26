import React, { useState } from "react";
import Header from "./Header";
import { WelcomePage } from "./WelcomePage";
import Questions from "./Questions";
import ResultPage from "./ResultPage";
import "../css/Form.css";
import { FormProps } from "../../types";

function Form({ isDark, setIsDark }: FormProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedSubjectIcon, setSelectedSubjectIcon] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleRadioButtonChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setSelectedSubject(event.target.value);
  };

  const restartQuiz = () => {
    setSelectedSubject("");
    setIsCompleted(false);
    setCorrectAnswersCount(0);
  };
  const handleQuestionsCompletion = (correctAnswers: number) => {
    setCorrectAnswersCount(correctAnswers);
    setIsCompleted(true);
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Header
        subjectTitle={selectedSubject}
        subjectIcon={selectedSubjectIcon}
        isWelcomePage={!selectedSubject}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      {!selectedSubject && (
        <WelcomePage
          setSelectedSubjectIcon={setSelectedSubjectIcon}
          userChoise={selectedSubject}
          onRadioButton={handleRadioButtonChange}
        />
      )}
      {selectedSubject && !isCompleted && (
        <Questions
          subjectTitle={selectedSubject}
          onComplete={handleQuestionsCompletion}
        />
      )}
      {isCompleted && (
        <ResultPage
          subjectIcon={selectedSubjectIcon}
          correctAnswersCount={correctAnswersCount}
          subjectTitle={selectedSubject}
          onRestartQuiz={restartQuiz}
        />
      )}
    </form>
  );
}

export default Form;
