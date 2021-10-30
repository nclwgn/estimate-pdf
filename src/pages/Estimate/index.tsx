import { PlusOutlined } from "@ant-design/icons";
import { Button, Collapse, Form, Input } from "antd";
import { useState } from "react";
import DefaultVerticalSpace from "../../containers/DefaultVerticalSpace";
import Item from "./components/Item";
import EstimateModel from "../../models/Estimate";
import EstimateItem from "../../models/EstimateItem";

const Estimate = () => {
  const [estimate, setEstimate] = useState<EstimateModel>(new EstimateModel());

  const onChangeItem = (index: number, subItem: EstimateItem) => {
    // Removes specified element from array
    const newItems = estimate.items.filter((_, i) => i !== index);

    // Inserts modified element into the same array index
    newItems.splice(index, 0, subItem);

    setEstimate({...estimate, items: newItems});
  }

  const onAdd = () => {
    setEstimate({...estimate, items: [...estimate.items, new EstimateItem()]})
  }
  
  return (
    <DefaultVerticalSpace>
      <h1>Novo orçamento</h1>

      <Form size='large' layout='vertical'>
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
            onChange={item => onChangeItem(index, item)}
          />
        ))}
      </Collapse>

      <Button type='primary' onClick={() => onAdd()}>
        <PlusOutlined /> Novo ambiente
      </Button>
    </DefaultVerticalSpace>
  );
}

export default Estimate;