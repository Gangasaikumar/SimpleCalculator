import React, { useState } from "react";
import "./App.css";

const specialChars = ["%", "*", "/", "-", "+", "="];

const App: React.FC = () => {
  const [output, setOutput] = useState<string>("");

  const calculate = (btnValue: string) => {
    if (btnValue === "=" && output !== "") {
      try {
        setOutput(eval(output.replace("%", "/100")));
      } catch {
        setOutput("Error");
      }
    } else if (btnValue === "AC") {
      setOutput("");
    } else if (btnValue === "DEL") {
      setOutput(output.slice(0, -1));
    } else {
      if (output === "" && specialChars.includes(btnValue)) return;
      setOutput(output + btnValue);
    }
  };

  return (
    <div className="container">
      <input type="text" className="display" value={output} readOnly />
      <div className="buttons">
        {[
          { value: "AC", className: "operator" },
          { value: "DEL", className: "operator" },
          { value: "%", className: "operator" },
          { value: "/", className: "operator" },
          { value: "7" },
          { value: "8" },
          { value: "9" },
          { value: "*", className: "operator" },
          { value: "4" },
          { value: "5" },
          { value: "6" },
          { value: "-", className: "operator" },
          { value: "1" },
          { value: "2" },
          { value: "3" },
          { value: "+", className: "operator" },
          { value: "0" },
          { value: "00" },
          { value: "." },
          { value: "=", className: "operator" },
        ].map((btn, index) => (
          <button
            key={index}
            className={btn.className || ""}
            onClick={() => calculate(btn.value)}
          >
            {btn.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;