import { Button, Input, Space } from "antd";
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [credential, setCredential] = useState({username: '', password: ''});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {login} = useAuth();
  const history = useHistory();

  const onLoginClick = async () => {
    setIsLoading(true);
    
    await login('any', 'any');

    setIsLoading(false);
    history.push('/home');
  }

  return (
    <Space direction='vertical' style={{width: '100%'}} size='large'>
      <Input
        size='large'
        placeholder='Usuário'
        prefix={<UserOutlined />}
        value={credential.username}
        onChange={(e) => setCredential({...credential, username: e.target.value})}
      />
      <Input.Password
        size='large'
        placeholder='Senha'
        prefix={<KeyOutlined />}
        value={credential.password}
        onChange={(e) => setCredential({...credential, password: e.target.value})}
      />
      <Button
        type='primary'
        size='large'
        block
        loading={isLoading}
        onClick={onLoginClick}
      >
        {isLoading ? 'Autenticando...' : 'Acessar'}
      </Button>
    </Space>
  )
};

export default Login;