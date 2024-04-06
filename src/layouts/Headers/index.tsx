import LogoImg from '@/assets/icon.png';
import type { FC } from 'react';
import styles from './index.less';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <img alt="hah" src={LogoImg} style={{ height: '30px', aspectRatio: 1, margin: '0 10px' }} />
        <span>装箱系统</span>
      </div>
      {/* todo:这里未生效 */}
      {/* <span>hahahha</span> */}
    </div>
  );
};

export default Header;
