import { useContext } from "react";
import { EstimateContext } from "../contexts/EstimateContext";

const useEstimate = () => {
  const value = useContext(EstimateContext);

  return value;
}

export { useEstimate };