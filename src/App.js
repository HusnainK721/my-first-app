import { useState } from "react";
import "./App.css";
import { Landing } from "./Component/HomePage/LandingPage/Landing";
function App() {
  const [button, setButton] = useState();
  const handleClick = () => {
    setButton(!button);
  };
  return (
    <div>
      <div className="App">
        <Landing />
      </div>
      <div>
        <button
          className={button ? "buttonTrue" : "buttonFalse"}
          onClick={handleClick}
        >
          onCick Changing Style
        </button>
      </div>
    </div>
  );
}

export default App;
