import { useState } from "react";
import { Switch } from "@headlessui/react";
import { faCopy, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./ui/Button";
import Toggle from "./ui/Toggle";
import Alert from "./ui/Alert";
import PasswordInput from "./PasswordInput";
import CharacterLengthSlider from "./CharacterLengthSlider";

export default function Card(): JSX.Element {
  const [length, setLength] = useState(16);
  const [upEnabled, setUpEnabled] = useState(false);
  const [lowerEnabled, setLowerEnabled] = useState(false);
  const [numbersEnabled, setNumbersEnabled] = useState(false);
  const [symbolsEnabled, setSymbolsEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [tooltip, setTooltip] = useState(false);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setLength(newValue);
  };

  const generatePassword = () => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";
    if (upEnabled) characters += upperCase;
    if (lowerEnabled) characters += lowerCase;
    if (numbersEnabled) characters += numbers;
    if (symbolsEnabled) characters += symbols;

    if (characters === "") {
      setAlert("Please select at least one character type.");
      setTimeout(() => setAlert(""), 3000); // Hide alert after 3 seconds
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        setTooltip(true);
        setTimeout(() => setTooltip(false), 2000); // Hide tooltip after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
        setAlert("Failed to copy password.");
        setTimeout(() => setAlert(""), 3000); // Hide alert after 3 seconds
      }
    );
  };

  const refreshPassword = () => {
    generatePassword();
  };
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center">
      {alert && <Alert message={alert}></Alert>}
      <div className="flex flex-col sm:w-1/4 md:w-1/2 lg:w-1/4  w-full pb-8 px-4 pt-4 bg-customPurple-dark rounded-xl text-white">
        <div className="p-2 text-white text-2xl">Generate Password</div>

        <div className="flex flex-col items-center">
          <div className="p-2 text-slate-500 mt-2 text-xs w-full">
            GENERATED PASSWORD
          </div>
          <PasswordInput
            password={password}
            copyToClipboard={copyToClipboard}
            refreshPassword={refreshPassword}
            tooltip={tooltip}
          ></PasswordInput>
        </div>

        <CharacterLengthSlider
          length={length}
          handleChange={handleChange}
        ></CharacterLengthSlider>

        <div className="flex flex-col items-center w-full">
          <div className="p-2 text-slate-500 mt-6 text-xs w-full">SETTINGS</div>

          <Toggle
            upEnabled={upEnabled}
            setUpEnabled={setUpEnabled}
            text="Include uppercase letters"
          ></Toggle>
          <Toggle
            upEnabled={lowerEnabled}
            setUpEnabled={setLowerEnabled}
            text="Include lowercase letters"
            className="mt-4"
          ></Toggle>
          <Toggle
            upEnabled={numbersEnabled}
            setUpEnabled={setNumbersEnabled}
            text="Include numbers"
            className="mt-4"
          ></Toggle>
          <Toggle
            upEnabled={symbolsEnabled}
            setUpEnabled={setSymbolsEnabled}
            text="Include symbols"
            className="mt-4"
          ></Toggle>
        </div>
        <Button generatePassword={generatePassword}></Button>
      </div>
    </div>
  );
}
