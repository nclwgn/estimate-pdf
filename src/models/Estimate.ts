import { EstimateItem } from "./EstimateItem";

export interface Estimate {
  clientName: string;
  items: EstimateItem[];
}