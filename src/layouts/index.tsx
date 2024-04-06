import ProLayout from '@ant-design/pro-layout';
import { Link, Outlet } from '@umijs/max';
import type { FC } from 'react';
import Header from './Headers';
// 侧边栏的默认关闭需要设置 breakpoint={false} ，如果只设置 defaultCollapsed 会无效
const BasicLayout: FC = ({ children }: any) => {
  console.log('children', children);
  return (
    <ProLayout
      layout="mix"
      fixSiderbar
      defaultCollapsed
      breakpoint={false}
      headerRender={() => <Header />}
      menuDataRender={() => [
        {
          key: 'home',
          name: '首页',
          path: '/home',
        },
        {
          key: 'model',
          name: 'model',
          path: '/model',
        },
        {
          key: 'box',
          name: 'box',
          path: '/box',
        },
      ]}
      menuItemRender={({ path, name }) => {
        return <Link to={path!}>{name}</Link>;
      }}
    >
      <Outlet />
      {/* <Outlet>{children}</Outlet> */}
    </ProLayout>
  );
};

export default BasicLayout;
