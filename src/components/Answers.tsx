import { AnswersProps } from "../../types";
import "../css/Answers.css";

function Answers({
  variants,
  onAnswer,
  selectedOption,
  isSubmitted,
  correctOption,
}: AnswersProps) {
  const letters = ["A", "B", "C", "D"];
  return (
    <section className="main-content">
      {variants.map((option, index) => {
        const isSelected = selectedOption === option;
        const isOptionCorrect = isSubmitted && option === correctOption;
        const isIncorrect = isSubmitted && isSelected && !isOptionCorrect;
        return (
          <label
            key={index}
            className={`answer-item ${isSelected ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={isSelected}
              onChange={() => onAnswer(option)}
              disabled={isSubmitted}
            />

            <div
              className={`option ${isSelected && !isSubmitted ? "selected" : isOptionCorrect ? "correct" : isIncorrect ? "incorrect" : ""}`}
            >
              <span className="center">
                <div className="option-rectangle">
                  <span className="letter">{letters[index]}</span>
                </div>
                <span className="answer-text">{option}</span>
              </span>
              {isOptionCorrect && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#26D782"
                    d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"
                  />
                </svg>
              )}
              {isIncorrect && (
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
              )}
            </div>
          </label>
        );
      })}
    </section>
  );
}

export default Answers;
