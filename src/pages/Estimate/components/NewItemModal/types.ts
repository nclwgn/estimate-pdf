interface NewItemModalProps {
  visible: boolean;
  onSubmit: (newItemName: string) => void;
  onDismiss: () => void;
}

export type { NewItemModalProps };