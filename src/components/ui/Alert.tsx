type AlertProps = {
  message: string;
};

export default function Alert({ message }: AlertProps): JSX.Element {
  return (
    <div className="absolute bottom-32 w-1/5 bg-customPurple-medium text-white text-center py-2 rounded-md">
      {message}
    </div>
  );
}
