import Form from "./components/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <Form isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
