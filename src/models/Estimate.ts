import EstimateItem from "./EstimateItem";

export default interface Estimate {
  clientName: string;
  items: EstimateItem[];
}