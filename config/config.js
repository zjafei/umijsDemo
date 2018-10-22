import pageRoutes from './router.config';

console.log(process.env.TEST);
export default {
  plugins: [
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
  define: {
    EVN: 'ok',
  },
}
