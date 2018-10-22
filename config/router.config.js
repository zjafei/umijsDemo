export default [
  {// 特殊的url都要写在前面
    path: '/user',
    component: '../layouts/userLayout',
    Routes: ['src/pages/Auth'],
    authority: false,
    routes: [
      { path: '/user', component: './user' },
      { path: '/user/setting', component: './user' },
    ],
  },
  {
    path: '/',
    component: '../layouts/baseLayout',
    authority: ['admin', 'user'],
    routes: [
      { path: '/', component: './home' },
      {
        component: '404',
      },
    ],
  },

];
