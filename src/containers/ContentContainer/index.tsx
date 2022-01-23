import Layout, { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { UserBadge } from "../../components/UserBadge";
import { Container } from "./styles";

const ContentContainer = ({ children, ...rest }: React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) => {
  return (
    <div {...rest}>
    <Layout style={{ height: '100%' }}>
      <Header>
        <UserBadge />
      </Header>
      <Content style={{ height: '100%' }}>
        <Container>
          {children}
        </Container>
      </Content>
    </Layout>
    </div>
  )
};

export default ContentContainer;