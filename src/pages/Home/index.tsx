import { Button } from "antd";
import { useHistory } from "react-router";
import DefaultVerticalSpace from "../../containers/DefaultVerticalSpace";

const Home = () => {
  const history = useHistory();
  
  return (
    <DefaultVerticalSpace>
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
        onClick={() => history.push('/estimate')}
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
    </DefaultVerticalSpace>
  )
};

export default Home;