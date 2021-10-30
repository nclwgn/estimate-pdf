import { Space } from "antd";
import { DefaultVerticalSpaceProps } from "./types";

const DefaultVerticalSpace = ({
  direction,
  style,
  size,
  children,
  ...rest
}: DefaultVerticalSpaceProps) => {
  return (
    <Space
      {...rest}
      direction={ direction ?? 'vertical' }
      style={{ width: '100%', ...style }}
      size={ size ?? 'large' }
    >
      {children}
    </Space>
  )
}

export default DefaultVerticalSpace;