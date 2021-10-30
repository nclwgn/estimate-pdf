import { PlusOutlined } from "@ant-design/icons";
import { Button, Collapse, Divider } from "antd";
import EstimateSubItem from "../../../../models/EstimateSubItem";
import SubItem from "../SubItem";
import { ItemProps } from "./types";

const Item = ({
  item,
  onChange,
  ...rest
}: ItemProps) => {
  const onChangeSubItem = (index: number, subItem: EstimateSubItem) => {
    // Removes specified element from array
    const newSubItems = item.subItems.filter((_, i) => i !== index);

    // Inserts modified element into the same array index
    newSubItems.splice(index, 0, subItem);

    onChange({...item, subItems: newSubItems});
  }

  const onAdd = () => {
    onChange({...item, subItems: [...item.subItems, new EstimateSubItem()]})
  }

  return (
    <Collapse.Panel {...rest} header={rest.header ?? item.title}>
      {item.subItems.map((subItem, index) => (
        <>
          { item.subItems.length >= 2 && <Divider orientation='left'><small>Opção {index + 1}</small></Divider> }
          <SubItem
            item={subItem}
            onChange={subItem => onChangeSubItem(index, subItem)}
          />
        </>
      ))}

      <Divider orientation='left' />
      <Button size='small' onClick={() => onAdd()}>
        <PlusOutlined /> Nova opção
      </Button>
    </Collapse.Panel>
  );
}

export default Item;