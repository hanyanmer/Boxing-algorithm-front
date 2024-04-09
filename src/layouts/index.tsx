import ProLayout from '@ant-design/pro-layout';
import { Link, Outlet } from '@umijs/max';
import type { FC } from 'react';
import Header from './Headers';
import React from 'react';

const menuData = [
  {
    name:'首页',
    path:'/home',
    children:[
      {
        name:'首页',
        path:'/home',
        key:'home',
        hideInMenu:true
      },
      {
        name:'配置',
        path:'/home/config',
        key:'config',
        hideInMenu:true
      },
    ]
  },
  {
    name: '地址',
    path: '/address',
    key:'address'
  },
  {
    name: '箱子',
    path: '/box',
    key:'box'
  },
  {
    name: '车信息',
    path: '/car',
    key:'car'
  },
]

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
      menuDataRender={() =>menuData }
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
