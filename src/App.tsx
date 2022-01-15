import React from 'react';

import 'antd/dist/antd.css';
import ContentContainer from './containers/ContentContainer';
import Router from './pages/Router';
import { EstimateContextProvider } from './contexts/EstimateContext';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <EstimateContextProvider>
        <ContentContainer style={{height: '100vh'}}>
          <Router />
        </ContentContainer>
      </EstimateContextProvider>
    </AuthContextProvider>
  );
}

export default App;
