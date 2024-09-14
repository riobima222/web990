const Loading = ({ color }: { color?: string }) => {
  return (
    <span
      className={`loading loading-spinner loading-sm ${
        color ? color : "text-white"
      }`}
    ></span>
  );
};
export default Loading;
