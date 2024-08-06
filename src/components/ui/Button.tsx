type ButtonProps = {
  generatePassword: () => void;
};

export default function Button(props: ButtonProps): JSX.Element {
  const { generatePassword } = props;
  return (
    <div className="flex justify-center w-full">
      <button
        type="button"
        onClick={generatePassword}
        className="w-full mt-12 rounded-md bg-customPurple-darkLight px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customPurple-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Generate Password
      </button>
    </div>
  );
}
