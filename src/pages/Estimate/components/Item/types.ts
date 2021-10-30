import { CollapsePanelProps } from "antd";
import EstimateItem from "../../../../models/EstimateItem";

interface ItemProps extends Partial<CollapsePanelProps> {
  item: EstimateItem;
  onChange: (item: EstimateItem) => void;
  key: string | number;
}

export type { ItemProps };