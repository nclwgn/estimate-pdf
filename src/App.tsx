import React from 'react';

import 'antd/dist/antd.css';
import ContentContainer from './containers/ContentContainer';
import Router from './pages/Router';

function App() {
  return (
    <ContentContainer style={{height: '100vh'}}>
      <Router />
    </ContentContainer>
  );
}

export default App;
