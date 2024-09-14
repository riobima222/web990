import { createContext, useState } from "react";

export const ModalAppearContext = createContext({});

const ModalAppearProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ModalAppearContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalAppearContext.Provider>
  );
};

export default ModalAppearProvider;