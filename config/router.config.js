export default [
  {// 特殊的url都要写在前面
    path: '/user',
    Routes: ['src/pages/Auth'],
    authority: true,
    component: '../layouts/userLayout',
    routes: [
      {
        path: '/user/:id([0-9]+)',
        Routes: ['src/pages/Auth'],
        authority: false,
        component: './user'
      },
      { path: '/user/setting', component: './user' },
    ],
  },
  {
    path: '/test',
    Routes: ['src/pages/a','src/pages/b'],// 组件按数组顺序嵌套 后一个组件作为前一个组件的children
    component: './testPage',
  },
  {
    path: '/',
    component: '../layouts/baseLayout',
    routes: [
      {
        path: '/',
        component: './home',
      },
      {
        path: '/a',
        component: './404',
      },
      {
        component: '404',
      },
    ],
  },
];
