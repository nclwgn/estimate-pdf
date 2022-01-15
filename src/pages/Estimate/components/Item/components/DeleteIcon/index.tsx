import { CloseSquareFilled } from "@ant-design/icons";
import React from "react";
import { DeleteIconProps } from "./types";

const DeleteIcon = ({
  onDelete
}: DeleteIconProps) => {
  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
    // Prevents collapse expansion events
    e.stopPropagation();
    onDelete();
  }

  return (
    <CloseSquareFilled onClick={onClick} />
  );
}

export default DeleteIcon;