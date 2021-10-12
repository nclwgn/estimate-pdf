import { Button, Col, Input, Space } from "antd";
import { KeyOutlined, UserOutlined } from '@ant-design/icons';

const Login = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}} size='large'>
      <Input size='large' placeholder='Usuário' prefix={<UserOutlined />}/>
      <Input.Password size='large' placeholder='Senha' prefix={<KeyOutlined />} />
      <Button type='primary' size='large' block>
        Acessar
      </Button>
    </Space>
  )
};

export default Login;