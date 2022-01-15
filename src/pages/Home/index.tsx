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
        disabled
        >
        Solicitações de acesso (em breve)
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
        disabled
        type='primary'
        size='large'
        block
      >
        Solicitar acesso ao sistema (em breve)
      </Button>
    </DefaultVerticalSpace>
  )
};

export default Home;