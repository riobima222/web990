import { createContext, useState } from "react";

export const DataJurnalContext = createContext({});


const DataJurnalProvider = ({children}: {children: React.ReactNode}) => {
    const [dataJurnal, setDataJurnal] = useState<boolean | any>(false)

    return (
        <DataJurnalContext.Provider value={{dataJurnal, setDataJurnal}}>
            {children}
        </DataJurnalContext.Provider>
    )
}
export default DataJurnalProvider;