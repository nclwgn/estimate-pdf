import React from 'react';

import 'antd/dist/antd.css';
import ContentContainer from './containers/ContentContainer';
import Router from './pages/Router';
import { EstimateContextProvider } from './contexts/EstimateContext';

function App() {
  return (
    <EstimateContextProvider>
      <ContentContainer style={{height: '100vh'}}>
        <Router />
      </ContentContainer>
    </EstimateContextProvider>
  );
}

export default App;
