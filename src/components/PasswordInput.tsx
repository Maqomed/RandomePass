import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

type PasswordInputProps = {
  password: string;
  copyToClipboard: () => void;
  refreshPassword: () => void;
  tooltip: boolean;
};

export default function PasswordInput({
  password,
  copyToClipboard,
  refreshPassword,
  tooltip,
}: PasswordInputProps): JSX.Element {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Generated password"
        value={password}
        readOnly
        className="w-full p-2 pr-12 rounded-xl focus:outline-none bg-customPurple-medium"
      />
      <FontAwesomeIcon
        icon={faCopy}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-customPurple-light cursor-pointer"
        onClick={copyToClipboard}
      />
      {tooltip && (
        <div className="absolute right-4 bottom-full mb-1">
          <div className="px-2 py-1 text-xs text-white bg-customPurple-darkLight rounded">
            Copied!
          </div>
        </div>
      )}
      <FontAwesomeIcon
        icon={faArrowsRotate}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-customPurple-light cursor-pointer"
        onClick={refreshPassword}
      />
    </div>
  );
}
