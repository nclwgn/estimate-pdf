import { EstimateSubItem } from "../../../../models/EstimateSubItem";

interface SubItemProps {
  item: EstimateSubItem;
  onChange: (item: EstimateSubItem) => void;
}

export type { SubItemProps };