import { EstimateSubItem } from "../../../../models/EstimateSubItem";

export interface SubItemProps {
  subItem: EstimateSubItem;
  index: number;
  hasMany: boolean;
}