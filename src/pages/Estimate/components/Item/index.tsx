import { CloseSquareFilled, CloseSquareOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Collapse, Divider, Space } from "antd";
import useList from "../../../../hooks/useList";
import EstimateSubItem from "../../../../models/EstimateSubItem";
import SubItem from "../SubItem";
import DeleteIcon from "./components/DeleteIcon";
import { ItemProps } from "./types";

const Item = ({
  item,
  onChange,
  onDelete,
  key,
  ...rest
}: ItemProps) => {
  const {
    add: addSubItem,
    change: changeSubItem,
    remove: removeSubItem
  } = useList<EstimateSubItem>(item.subItems);

  return (
    <Collapse.Panel
      {...rest}
      key={key}
      header={rest.header ?? item.title}
      extra={<DeleteIcon key={key} onDelete={onDelete}/>}
    >
      {item.subItems.map((subItem, index) => (
        <>
          { item.subItems.length >= 2 &&
          <Divider orientation='left'>
            <Space>
              <small>Opção {index + 1}</small>
              <small><DeleteIcon key={index} onDelete={() => onChange({...item, subItems: removeSubItem(index)})} /></small>
            </Space>
          </Divider> }
          <SubItem
            item={subItem}
            onChange={subItem => onChange({...item, subItems: changeSubItem(index, subItem)})}
          />
        </>
      ))}

      <Divider orientation='left' />
      <Button size='small' onClick={() => onChange({...item, subItems: addSubItem({description: ''})})}>
        <PlusOutlined /> Nova opção
      </Button>
    </Collapse.Panel>
  );
}

export default Item;