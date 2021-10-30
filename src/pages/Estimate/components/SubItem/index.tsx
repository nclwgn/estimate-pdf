import { Form, Input } from "antd";
import { SubItemProps } from "./types";

const SubItem = ({
  item,
  onChange
}: SubItemProps) => {
  return (
    <Form layout='vertical' size='small'>

      <Form.Item label='Descrição'>
        <Input.TextArea
          rows={4}
          placeholder='Insira a descrição do item'
          value={item.description}
          onChange={e => onChange({...item, description: e.target.value})}
        />
      </Form.Item>

      <Form.Item label='Valor'>
        <Input
          type='number'
          placeholder='Insira o valor do item'
          value={item.value}
          onChange={e => onChange({...item, value: parseFloat(e.target.value)})}
        />
      </Form.Item>

    </Form>
  );
}

export default SubItem;