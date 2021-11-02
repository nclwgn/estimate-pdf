import { PlusOutlined } from "@ant-design/icons";
import { Button, Collapse, Form, Input } from "antd";
import { useState } from "react";
import DefaultVerticalSpace from "../../containers/DefaultVerticalSpace";
import Item from "./components/Item";
import EstimateModel from "../../models/Estimate";
import EstimateItem from "../../models/EstimateItem";
import NewItemModal from "./components/NewItemModal";
import useList from "../../hooks/useList";

const Estimate = () => {
  const [estimate, setEstimate] = useState<EstimateModel>(new EstimateModel());
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const {
    add: addItem,
    change: changeItem,
    remove: removeItem
  } = useList<EstimateItem>(estimate.items);

  const onAdd = (newItemName: string) => {
    setEstimate({...estimate, items: addItem(new EstimateItem(newItemName))});
    setIsModalVisible(false);
  }
  
  return (
    <>
      <DefaultVerticalSpace size='small'>
        <h1>Novo orçamento</h1>

        <Form size='middle' layout='vertical'>
          <Form.Item label='Cliente'>
            <Input
              placeholder='Insira o nome do cliente'
              value={estimate.clientName}
              onChange={(e) => setEstimate({...estimate, clientName: e.target.value})}
            />
          </Form.Item>
        </Form>

        <Collapse defaultActiveKey={['1']}>
          {estimate.items.map((item, index) => (
            <Item
              key={index}
              item={item}
              onChange={item => setEstimate({...estimate, items: changeItem(index, item)})}
              onDelete={() => setEstimate({...estimate, items: removeItem(index)})}
            />
          ))}
        </Collapse>

        <Button type='primary' onClick={() => setIsModalVisible(true)}>
          <PlusOutlined /> Novo ambiente
        </Button>
      </DefaultVerticalSpace>
      <NewItemModal
        visible={isModalVisible}
        onSubmit={onAdd}
        onDismiss={() => setIsModalVisible(false)}
      />
    </>
  );
}

export default Estimate;