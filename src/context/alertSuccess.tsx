import { createContext, useState } from "react";

export const AlertSuccessContext = createContext({});

const AlertSuccessProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertS, setAlertS] = useState<boolean>(false);

  return (
    <AlertSuccessContext.Provider value={{ alertS, setAlertS }}>
      {children}
    </AlertSuccessContext.Provider>
  );
};
export default AlertSuccessProvider;
