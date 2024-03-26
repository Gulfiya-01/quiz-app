import "../css/DarkModeSwitcher.css";

type DarkModeSwitcherProps = {
  isDark: boolean;
  setIsDark: (newValue: boolean) => void;
};

function DarkModeSwitcher({ isDark, setIsDark }: DarkModeSwitcherProps) {
  const handleChange = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={isDark} />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default DarkModeSwitcher;
