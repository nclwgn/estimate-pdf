import { createContext, ReactNode, useState } from "react";
import { Estimate } from "../models/Estimate";

interface EstimateContextType {
  estimate: Estimate;
  setEstimate: React.Dispatch<React.SetStateAction<Estimate>>;
  cleanEstimate: () => void;
}

const EstimateContext = createContext({} as EstimateContextType);

interface EstimateContextProviderProps {
  children: ReactNode;
}

const defaultEstimate: Estimate = {
  clientName: '',
  items: [],
  hasDiscount: false,
  discountPercentage: 5,
  extraInformation: ''
};

const EstimateContextProvider = (props: EstimateContextProviderProps) => {
  const [ estimate, setEstimate ] = useState<Estimate>(defaultEstimate);

  const cleanEstimate = () => {
    setEstimate(defaultEstimate);
  }

  return (
    <EstimateContext.Provider value={{ estimate, setEstimate, cleanEstimate }}>
      {props.children}
    </EstimateContext.Provider>
  );
};

export { EstimateContextProvider, EstimateContext };