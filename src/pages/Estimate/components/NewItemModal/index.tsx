import { Input, Modal } from "antd";
import { useState } from "react";
import { NewItemModalProps } from "./types";

const NewItemModal = ({
  visible,
  onSubmit,
  onDismiss
}: NewItemModalProps) => {
  const [newItemName, setNewItemName] = useState<string>('');

  const clean = () => setNewItemName('');

  const submitAndClean = () => {
    onSubmit(newItemName);
    clean();
  }

  const dismissAndClean = () => {
    clean();
    onDismiss();
  }

  return (
    <Modal
      title='Adicionar novo ambiente'
      visible={visible}
      onOk={submitAndClean}
      onCancel={dismissAndClean}
    >
      <Input
        placeholder='Insira o nome do novo ambiente'
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
    </Modal>
  );
}

export default NewItemModal;