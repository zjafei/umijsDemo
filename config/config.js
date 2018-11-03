import alias from './alias.config';
import browserslist from './browserslist.config';
import context from './context.config';
import define from './define.config';
import externals from './externals.config';
import plugins from './plugins.config';
import proxy from './proxy.config';
// import routes from './router.config';
import theme from './theme.config';
import webpage from './webpage.config';

/**
 umi.js 2.2 的全部配置参数
 chainWebpack, context, disableRedirectHoist, exportStatic, outputPath, plugins, routes, runtimePublicPath, singular, base, mountElementId, history, alias, babel, browserslist, chainConfig, copy, cssLoaderOptions, cssModulesExcludes, cssModulesWithAffix, cssnano, define, devServer, devtool, disableCSSModules, disableCSSSourceMap, disableDynamicImport, env, es5ImcompatibleVersions, externals, extraBabelIncludes, extraBabelPlugins, extraBabelPresets, extraPostCSSPlugins, hash, ignoreMomentLocale, lessLoaderOptions, manifest, proxy, publicPath, sass, theme, tsConfigFile, typescript, uglifyJSOptions, urlLoaderExcludes, mountElementId, targets
 */
console.log('.env文件的配置：', process.env.TEST);
export default {
  plugins: plugins,
  disableRedirectHoist: false, // 禁用 redirect 上提。布尔 默认值 false
  history: 'browser', // 是否使用hash路由 枚举 browser|hash 默认值 browser
  outputPath: './dist', // 产出路径 默认值 './dist'
  base: '/', // 指定 react-router 的 base，部署到非根目录时需要配置。默认值 '/'
  publicPath: '/', // 指定 webpack 的 publicPath，指向静态资源文件所在的路径。默认值 '/'
  runtimePublicPath: false, // 值为 true 时使用 HTML 里指定的 window.publicPath 布尔 默认值 false
  mountElementId: 'umijs', // 指定 react app 渲染到的 HTML 元素 id。默认值 'root'
  hash: true, // 是否开启产出文件 hash 文件后缀。布尔 默认值 false
  targets: { ie: 11 }, // 配置浏览器最低版本，会自动引入 polyfill 和做语法转换，与默认值做对象扩展。 默认值 { chrome: 49, firefox: 45, safari: 10, edge: 13, ios: 10 }
  context: context, // 模板页面会获取context的内容。
  exportStatic: false, // 每个路由都生成一个对应的静态页面 但是路由不能是动态路由(/a/:id)
  chainWebpack: webpage, // 通过 webpack-chain 的 API 扩展或修改 webpack 配置。
  proxy: proxy,
  theme: theme, // 配置全局的less变量 网站所有的less文件都可以使用
  define: define, // 通过 webpack 的 DefinePlugin 传递给代码，值会自动做 JSON.stringify 处理
  externals: externals, // 配置 webpack 的 externals 属性
  alias: alias, // 配置 webpack 的 resolve.alias 属性
  browserslist: browserslist, // 配置浏览器兼容情况 查询网址 https://browserl.ist,
  // routes: routes,
};
