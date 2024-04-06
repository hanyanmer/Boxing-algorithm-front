export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home/',
    component: './Home',
  },
  {
    name: '模型展示',
    path: '/model',
    component: './Model',
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
];
