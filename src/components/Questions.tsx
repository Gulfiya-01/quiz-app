import { useEffect, useState } from "react";
import "../css/Questions.css";
import data from "../../data.json";
import Answers from "./Answers";
import type { ICount, IQuestion, IVariants, QuestionsProps } from "../../types.ts";
import ProgressBar from "./ProgressBar.tsx";

function Questions({
  subjectTitle,
  onComplete,
}: QuestionsProps) {
  const [count, setCount] = useState<ICount>({ count: 0 });
  const [question, setQuestion] = useState<IQuestion>({
    question: "",
    answer: "",
  });
  const [variants, setVariants] = useState<IVariants>({ variants: [] });
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    function getQuestions() {
      const quiz = data.quizzes.find((subject) => subject.title === subjectTitle);
      if (!quiz) {
        console.error("No questions found for this subject.");
        return;
      }
      const currentQuestion = quiz.questions[count.count];
      setQuestion({
        question: currentQuestion.question,
        answer: currentQuestion.answer,
      });
      setVariants({ variants: currentQuestion.options });
    }

    getQuestions();
  }, [subjectTitle, count]);

  const totalQuestions = data.quizzes.find((subject) => subject.title === subjectTitle)?.questions.length || 0;
  const progress = ((count.count + 1) / totalQuestions) * 100;
  const handleSubmit = () => {
    if (!selectedOption) {
      setError("Please select an option.");
      setIsSubmitted(false);
      return;
    }

    if (selectedOption === question.answer) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
    setIsSubmitted(true);
    setError("");
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    setSelectedOption("");
    setError("");
    if (count.count + 1 === data.quizzes.find((subject) => subject.title === subjectTitle)?.questions.length) {
      onComplete(correctAnswersCount);
    } else {
      setCount((prevCount) => ({ count: prevCount.count + 1 }));
    }
  };

  const onAnswer = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <fieldset className="question-content">
      <section className="main-left">
        <Message count={count.count + 1} />
        <p className="question-text">{question.question}</p>
        <ProgressBar progress={progress} />
      </section>
      <section className="main-right">
        <Answers
          variants={variants.variants}
          onAnswer={onAnswer}
          selectedOption={selectedOption}
          correctOption={question.answer}
          isSubmitted={isSubmitted}
        />

        {isSubmitted ? (
          <button className="btn-next" onClick={handleNextQuestion}>
            Next question
          </button>
        ) : (
          <button className="btn-submit" onClick={handleSubmit}>
            Submit answer
          </button>
        )}
        <div className="error">
          {error && (
            <span className="error-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#EE5454"
                  d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
                />
              </svg>
              {error}
            </span>
          )}
        </div>
      </section>
    </fieldset>
  );
}

function Message(props: { count: number }) {
  return <p className="question-number">Question {props.count} of 10 </p>;
}

export default Questions;
