import 'antd/dist/antd.css';
import ContentContainer from './containers/ContentContainer';
import Router from './pages/Router';
import { EstimateContextProvider } from './contexts/EstimateContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <EstimateContextProvider>
          <ContentContainer style={{height: '100vh'}}>
            <Router />
          </ContentContainer>
        </EstimateContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
