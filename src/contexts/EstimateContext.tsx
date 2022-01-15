import { createContext, ReactNode, useState } from "react";
import { Estimate } from "../models/Estimate";

interface EstimateContextType {
  estimate: Estimate;
  setEstimate: React.Dispatch<React.SetStateAction<Estimate>>;
}

const EstimateContext = createContext({} as EstimateContextType);

interface EstimateContextProviderProps {
  children: ReactNode;
}

const EstimateContextProvider = (props: EstimateContextProviderProps) => {
  const [ estimate, setEstimate ] = useState<Estimate>({
    clientName: '',
    items: [],
    hasDiscount: false,
    discountPercentage: 5,
    extraInformation: ''
  });

  return (
    <EstimateContext.Provider value={{ estimate, setEstimate }}>
      {props.children}
    </EstimateContext.Provider>
  );
};

export { EstimateContextProvider, EstimateContext };