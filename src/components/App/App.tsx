import React from "react";
import logo from "../../assets/images/logo.svg";
import { Text } from "../Text/Text";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

function App() {
  const [value, setValue] = React.useState("");
  const [processedInput, setProcessedInput] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  const getMiddleCharacter = () => {
    let position, length;

    if (value.length % 2 === 1) {
      position = value.length / 2;
      length = 1;
    } else {
      position = value.length / 2 - 1;
      length = 2;
    }

    setProcessedInput(value.substring(position, position + length));
  };

  const handleClick = () => {
    if (!value) return;

    getMiddleCharacter();
    setValue("");
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <main className="app-main">
        <div className="app-main__text">
          <Text />
        </div>
        <div className="app-main__stuff">
          <p>Add a word on the input field and click the button to be amazed</p>
          <form>
            <Input
              type="text"
              value={value}
              placeholder="Add word here"
              name="name"
              onChange={handleInputChange}
              testId={`app-input`}
            />
            <Button
              type="button"
              label={`Click Me`}
              onClick={handleClick}
              testId={`app-button`}
            />
          </form>
          <p data-testid="app-result">
            Result: {processedInput ? processedInput : `none so far`}
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
