interface Props {
  className?: string;
  message: string;
}

const AlertFailed = ({ className, message }: Props) => {
  return (
    <div
      role="alert"
      className={`alert alert-error fixed z-50 bottom-0 right-0 bg-[#990000] text-white flex items-center justify-start max-w-[26em] absolute bottom-3 right-3 ${className}`}
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
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};
export default AlertFailed;
