interface Props {
  className?: string;
  message: string;
}

const AlertSuccess = ({ className, message }: Props) => {
  return (
    <div
      role="alert"
      className={`alert alert-success fixed z-50 bottom-0 right-0 flex items-center text-white justify-start max-w-[26em] absolute bottom-3 right-3 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current text-white"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};
export default AlertSuccess;
