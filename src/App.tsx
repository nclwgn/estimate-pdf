import React from 'react';

import 'antd/dist/antd.css';
import Login from './pages/Login';
import ContentContainer from './containers/ContentContainer';

function App() {
  return (
    <ContentContainer style={{height: '100vh'}}>
      <Login />
    </ContentContainer>
  );
}

export default App;
