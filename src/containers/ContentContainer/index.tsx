import { Col } from "antd";
import React from "react";
import Row from "./styles";

const ContentContainer = ({ children, ...rest }: React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) => {
  return (
    <div {...rest}>
      <Row align='middle'>
        <Col xs={{offset: 0, span: 24}} lg={{offset: 8, span: 8}}>
          {children}
        </Col>
      </Row>
    </div>
  )
};

export default ContentContainer;