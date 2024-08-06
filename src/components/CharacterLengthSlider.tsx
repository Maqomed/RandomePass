import React from "react";

interface CharacterLengthSliderProps {
  length: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CharacterLengthSlider({
  length,
  handleChange,
}: CharacterLengthSliderProps): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between text-slate-500 mt-6 text-xs w-full">
        <span>CHARACTER LENGTH</span>
        <span className="text-customPurple-darkLight">{length}</span>
      </div>
      <div className="flex w-full mt-2 items-center bg-customPurple-medium rounded-xl p-2">
        <span className="text-gray-500 text-sm">12</span>
        <input
          type="range"
          id="range"
          min="12"
          max="32"
          value={length}
          onChange={handleChange}
          className="w-full mx-2 h-2 bg-customPurple-light rounded-lg appearance-none cursor-pointer range-lg focus:outline-none"
        />
        <span className="text-gray-500 text-sm">32</span>
      </div>
    </div>
  );
}
