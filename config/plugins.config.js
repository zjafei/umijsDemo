export default [
  ['umi-plugin-react', {
    antd: true,
    dva: {
      immer: true,// 开启 dva-immer 高效的深层拷贝对象 https://segmentfault.com/a/1190000013088373
    },
    dynamicImport: true,
    title: {
      defaultTitle: '默认标题', // 必填，当配置项为 String 时直接配置项作为 defaultTitle
      format: '{parent}{separator}{current}', // default {parent}{separator}{current}, title format
      separator: ' - ',// 间隔符 默认 ' - '
    },
    dll: true,// 预打包一份 dll 文件来达到二次启动提速的目的
    hardSource: true,// webpack 缓存，减少二次启动时间
    fastClick: true,// 移动端的 fastClick
    routes: {
      exclude: [/models\//],
    },
    polyfills: ['ie9'],
    // locale: {},
    // library: 'react',
    // dynamicImport: {
    //   webpackChunkName: true,
    //   loadingComponent: './components/Loading.js',
    // },
    // pwa: true,// 作为 pwa(Progressive Web App 渐进式网络应用)
    // hd: true,// 开启高清方案
  }],
];
