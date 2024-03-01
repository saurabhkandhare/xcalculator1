import { useState } from "react";
import "./Calculator.css";
export default function Calculator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setValue((prevValue) => prevValue + value);
  };

  const handleClear = () => {
    setValue("");
    setResult("");
  };

  const handleCalc = () => {
    try {
      setResult(eval(value).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      {/* <h1>React Calculator</h1> */}
      <div className="container">
        <div className="calculator">
          <h1>React Calculator</h1>
          <form action="">
            <div>
              <input type="text" value={value} />
            </div>
            <div className="result">{result}</div>
            <div>
              <button type="button" onClick={() => handleButtonClick("7")}>
                7
              </button>
              <button type="button" onClick={() => handleButtonClick("8")}>
                8
              </button>
              <button type="button" onClick={() => handleButtonClick("9")}>
                9
              </button>
              <button type="button" onClick={() => handleButtonClick("+")}>
                +
              </button>
            </div>
            <div>
              <button type="button" onClick={() => handleButtonClick("4")}>
                4
              </button>
              <button type="button" onClick={() => handleButtonClick("5")}>
                5
              </button>
              <button type="button" onClick={() => handleButtonClick("6")}>
                6
              </button>
              <button type="button" onClick={() => handleButtonClick("-")}>
                -
              </button>
            </div>
            <div>
              <button type="button" onClick={() => handleButtonClick("1")}>
                1
              </button>
              <button type="button" onClick={() => handleButtonClick("2")}>
                2
              </button>
              <button type="button" onClick={() => handleButtonClick("3")}>
                3
              </button>
              <button type="button" onClick={() => handleButtonClick("*")}>
                *
              </button>
            </div>
            <div>
              <button type="button" onClick={handleClear}>
                C
              </button>
              <button type="button" onClick={() => handleButtonClick("0")}>
                0
              </button>
              <button type="button" onClick={handleCalc}>
                =
              </button>
              <button type="button" onClick={() => handleButtonClick("/")}>
                /
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}