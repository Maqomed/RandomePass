import { Switch } from "@headlessui/react";

type ToggleProps = {
  upEnabled: boolean;
  setUpEnabled: (arg: boolean) => void;
  text: string;
  className?: string;
};

export default function Toggle(props: ToggleProps): JSX.Element {
  const { upEnabled, setUpEnabled, text, className } = props;
  return (
    <div
      className={`flex justify-between bg-customPurple-medium w-full p-2 rounded-xl text-slate-500 ${className}`}
    >
      <span>{text}</span>
      <Switch
        checked={upEnabled}
        onChange={setUpEnabled}
        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-500 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-offset-2 data-[checked]:bg-customPurple-darkLight"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
    </div>
  );
}
