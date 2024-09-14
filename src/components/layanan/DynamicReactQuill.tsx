import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

interface DynamicReactQuillProps {
  value: string;
  onChange: (content: string) => void;
}

const DynamicReactQuill: React.FC<DynamicReactQuillProps> = ({
  value,
  onChange,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      className="border-[2px] border-[#990000] rounded-md"
    />
  );
};

export default DynamicReactQuill;
