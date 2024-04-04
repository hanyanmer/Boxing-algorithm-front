import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { AddModel } from './components/AddModel';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost style={{backgroundColor:'#dddad9',height:'100%'}}>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <AddModel/>
    </PageContainer>
  );
};

export default HomePage;
