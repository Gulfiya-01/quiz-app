import "../css/ProgressBar.css";

type ProgressBarProps = {
  progress: number;
};

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-inner"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
