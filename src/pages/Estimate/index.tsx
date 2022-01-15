import { PlusOutlined, TableOutlined } from "@ant-design/icons";
import { Button, Collapse, Form, Input, Space } from "antd";
import { useState } from "react";
import DefaultVerticalSpace from "../../containers/DefaultVerticalSpace";
import Item from "./components/Item";
import NewItemModal from "./components/NewItemModal";
import useList from "../../hooks/useList";
import { EstimateItem } from "../../models/EstimateItem";
import { useEstimate } from "../../hooks/useEstimate";
import { useHistory } from "react-router-dom";

const Estimate = () => {
  const history = useHistory();

  const { estimate, setEstimate } = useEstimate();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const {
    add: addItem,
    change: changeItem,
    remove: removeItem
  } = useList<EstimateItem>(estimate.items);

  const onAdd = (newItemName: string) => {
    setEstimate({...estimate, items: addItem({
      title: newItemName,
      subItems: [ {description: ''} ]
    })});
    setIsModalVisible(false);
  }

  const onGenerate = () => {
    history.push('/preview');
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

        <Space direction='horizontal'>
          <Button type='primary' onClick={() => setIsModalVisible(true)}>
            <PlusOutlined /> Novo ambiente
          </Button>
          <Button type='primary' onClick={onGenerate}>
            <TableOutlined /> Gerar orçamento
          </Button>
        </Space>
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