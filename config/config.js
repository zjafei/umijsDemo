import pageRoutes from './router.config';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umijsDemo',
      dll: true,
      hardSource: true,
    }],
  ],
  routes: pageRoutes,
}
