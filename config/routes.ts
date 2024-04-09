export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name:'首页',
    path:'/home',
    routes:[
      {
        name:'首页',
        path:'/home',
        component:'@/pages/Home/model.tsx',
      },
      {
        name:'配置',
        path:'/home/config',
        component: './Home',
      }
    ]
  },
  {
    name: '地址',
    path: '/address',
    component: './Address',
  },
  {
    name: '箱子',
    path: '/box',
    component: './Box',
  },
  {
    name: '车信息',
    path: '/car',
    component: './car',
  },
];
