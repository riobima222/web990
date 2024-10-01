import { createContext, useState } from "react";

export const ConfirmDeleteContext = createContext({});

const ConfirmDeleteProvider = ({ children }: { children: React.ReactNode }) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean | any>(false);

  return (
    <ConfirmDeleteContext.Provider value={{ confirmDelete, setConfirmDelete }}>
      {children}
    </ConfirmDeleteContext.Provider>
  );
};
export default ConfirmDeleteProvider;
