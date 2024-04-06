import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: routes,
  npmClient: 'yarn',

  proxy: {
    '/api/': {
      target: 'http://10.100.143.33:8080/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
