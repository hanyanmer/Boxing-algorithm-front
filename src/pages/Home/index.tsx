import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { AddModel } from './components/AddModel';
import React from 'react';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer style={{ backgroundColor: '#dddad9', height: '100%' }}>
      <AddModel />
    </PageContainer>
  );
};

export default HomePage;
