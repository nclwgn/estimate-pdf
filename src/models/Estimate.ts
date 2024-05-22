import { EstimateItem } from "./EstimateItem";

export interface Estimate {
  companyName: 'Atelier Vânia Wagner' | 'Atear Persianas';
  clientName: string;
  items: EstimateItem[];
  hasDiscount: boolean;
  discountPercentage: number;
  extraInformation: string;
}