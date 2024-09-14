import { createContext, useState } from "react";

export const AlertFailedContext = createContext({});

const AlertFailedProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertF, setAlertF] = useState<boolean>(false);

  return (
    <AlertFailedContext.Provider value={{ alertF, setAlertF }}>
      {children}
    </AlertFailedContext.Provider>
  );
};
export default AlertFailedProvider;
