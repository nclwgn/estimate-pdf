import { Button, Space } from "antd";

const Home = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}} size='large'>
      <Button
        type='primary'
        size='large'
        block
      >
        Solicitações de acesso
      </Button>
      <Button
        type='primary'
        size='large'
        block
      >
        Novo orçamento
      </Button>
      <Button
        type='primary'
        size='large'
        block
      >
        Solicitar acesso ao sistema
      </Button>
    </Space>
  )
};

export default Home;