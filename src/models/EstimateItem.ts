import EstimateSubItem from "./EstimateSubItem";

export default interface EstimateItem {
  title: string;
  subItems: EstimateSubItem[];
}