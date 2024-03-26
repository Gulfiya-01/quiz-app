import data from "../../data.json";
import { WelcomePageProps } from "../../types";
import "../css/WelcomePage.css";

export const WelcomePage = ({
  userChoise,
  onRadioButton,
  setSelectedSubjectIcon,
}: WelcomePageProps) => {
  return (
    <div className="welcome-page">
      <div className="greetings">
        <p className="titleRegular">Welcome to the</p>
        <p className="titleBold">Frontend Quiz!</p>
        <p className="subTitle">Pick a subject to get started.</p>
      </div>
      <div className="quizzesBlocks">
        {data.quizzes.map((subject) => (
          <label className="label" htmlFor={subject.title} key={subject.title}>
            <div
              className={`img-rectangle ${subject.title.toLocaleLowerCase()}`}
            >
              <img src={subject.icon} />
            </div>
            <div className="subjectContainer">
              <input
                type="radio"
                name="subject"
                className="subject"
                id={subject.title}
                value={subject.title}
                onClick={() => setSelectedSubjectIcon(subject.icon)}
                checked={userChoise === subject.title}
                onChange={onRadioButton}
                readOnly
              />
            </div>
            <p className="iconText">{subject.title}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;
