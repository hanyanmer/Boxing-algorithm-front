import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '装箱系统',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限管理',
      path: '/access',
      component: './Access',
    },
    {
      name: '箱子',
      path: '/box',
      component: './Box',
    },
  ],
  npmClient: 'yarn',
});
