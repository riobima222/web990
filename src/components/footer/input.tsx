interface Props {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
  id?: string;
}

export const Input = ({ type, placeholder, className, name, id }: Props) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`focus:outline-none rounded-lg text-xs py-3 px-4 w-full text-black ${className}`}
      name={name}
    />
  );
};
