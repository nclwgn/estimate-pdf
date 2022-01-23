import { ArrowLeftOutlined } from "@ant-design/icons";
import { PDFViewer } from "@react-pdf/renderer";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import DefaultVerticalSpace from "../../containers/DefaultVerticalSpace";
import { Estimate } from "../../documents/Estimate";
import { useEstimate } from "../../hooks/useEstimate";

const Preview = () => {
  const history = useHistory();
  const { estimate, cleanEstimate } = useEstimate();

  const onFinishClick = () => {
    cleanEstimate();

    history.push('/home');
  }

  return (
    <>
      <DefaultVerticalSpace size='small'>
        <Button
          type='primary'
          size='large'
          block
          onClick={() => history.push('/estimate')}
        >
          <ArrowLeftOutlined /> Voltar para a edição
        </Button>

        <div style={{backgroundColor: 'black', height: '25rem'}}>
          <PDFViewer width='100%' height='100%'>
            <Estimate estimate={estimate} />
          </PDFViewer>
        </div>

        <Button
          type='dashed'
          size='small'
          block
          onClick={onFinishClick}
        >
          Encerrar e voltar ao início
        </Button>
      </DefaultVerticalSpace>
    </>
  );
}

export default Preview;