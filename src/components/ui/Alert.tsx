type AlertProps = {
  message: string;
};

export default function Alert({ message }: AlertProps): JSX.Element {
  return (
    <div className="absolute md:bottom-15  bottom-1 sm:w-1/5  w-full bg-customPurple-medium text-white text-center py-2 rounded-md">
      {message}
    </div>
  );
}
