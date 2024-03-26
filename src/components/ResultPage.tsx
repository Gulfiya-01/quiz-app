import { ResultPageProps } from "../../types";
import "../css/ResultPage.css";

function ResultPage({
  correctAnswersCount,
  subjectTitle,
  onRestartQuiz,
  subjectIcon,
}: ResultPageProps) {
  const handlePlayAgain = () => {
    onRestartQuiz();
  };
  return (
    <div className="result-page">
      <div className="result-left">
        <p className="text-1">Quiz completed</p>
        <p className="text-2">You scored...</p>
      </div>
      <section className="result-right">
        <label className="result">
          <div className="result-option">
            <div className={`img-rectangle ${subjectTitle.toLowerCase()}`}>
              <img src={subjectIcon} alt="Subject Icon" />
            </div>
            <p className="subject-title">{subjectTitle}</p>
          </div>
          <p className="correct-answer-number">{correctAnswersCount}</p>
          <p className="text-3">out of 10</p>
        </label>
        <button className="btn-play-again" onClick={handlePlayAgain}>
          Play Again
        </button>
      </section>
    </div>
  );
}

export default ResultPage;
