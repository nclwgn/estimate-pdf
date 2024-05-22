import { PlusOutlined, TableOutlined } from "@ant-design/icons";
import { Button, Collapse, Form, Input, Select, Space } from "antd";
import { useState } from "react";
import DefaultVerticalSpace from "../../containers/DefaultVerticalSpace";
import Item from "./components/Item";
import NewItemModal from "./components/NewItemModal";
import useList from "../../hooks/useList";
import { EstimateItem } from "../../models/EstimateItem";
import { useEstimate } from "../../hooks/useEstimate";
import { useHistory } from "react-router-dom";
import Checkbox from "antd/lib/checkbox/Checkbox";

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
          <Form.Item label='Empresa'>
            <Select
              value={estimate.companyName}
              onChange={(e) => setEstimate({...estimate, companyName: e})}
            >
              <Select.Option value="Atelier Vânia Wagner">Atelier Vânia Wagner</Select.Option>
              <Select.Option value="Atear Persianas">Atear Persianas</Select.Option>
            </Select>
          </Form.Item>

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

        <Form size='middle' layout='inline'>
          <Form.Item>
            <Checkbox checked={estimate.hasDiscount} onChange={e => setEstimate({...estimate, hasDiscount: e.target.checked})}>
              Desconto à vista
            </Checkbox>
          </Form.Item>
          <Form.Item label='%'>
            <Input
              type='number'
              value={estimate.discountPercentage}
              onChange={e => setEstimate({...estimate, discountPercentage: parseFloat(e.target.value)})}
              disabled={!estimate.hasDiscount}
            />
          </Form.Item>
        </Form>

        <Form layout='vertical' size='small'>
          <Form.Item label='Observações finais'>
            <Input.TextArea
              placeholder='Insira observações finais necessárias'
              rows={4}
              value={estimate.extraInformation}
              onChange={(e) => setEstimate({...estimate, extraInformation: e.target.value})}
            />
          </Form.Item>
        </Form>

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