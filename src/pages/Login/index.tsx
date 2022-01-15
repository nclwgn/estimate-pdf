import { Alert, Button, Input } from "antd";
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import DefaultVerticalSpace from "../../containers/DefaultVerticalSpace";
import { Credential } from "../../models/Credential";

const Login = () => {
  const [credential, setCredential] = useState<Credential>({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const { signIn } = useAuth();
  const history = useHistory();

  const onLoginClick = async () => {
    setIsLoading(true);
    
    try {
      await signIn(credential.email, credential.password);
      history.push('/home');
    }
    catch (e: any) {
      setErrorMessage(`Não foi possível realizar o login na aplicação: ${e.message}`);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <DefaultVerticalSpace>
      { errorMessage && <Alert message={errorMessage} type='error' showIcon /> }
      <Input
        size='large'
        placeholder='Usuário'
        prefix={<UserOutlined />}
        value={credential.email}
        onChange={(e) => setCredential({...credential, email: e.target.value})}
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
    </DefaultVerticalSpace>
  )
};

export default Login;