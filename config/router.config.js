export default [
  {// 特殊的url都要写在前面
    path: '/user',
    Routes: ['src/pages/Auth'],
    authority: true,
    component: '../layouts/userLayout',
    routes: [
      {
        path: '/user',
        Routes: ['src/pages/Auth'],
        authority: false,
        component: './user'
      },
      { path: '/user/setting', component: './user' },
    ],
  },
  {
    path: '/',
    routes: [
      { path: '/', component: './home' },
      {
        component: '404',
      },
    ],
  },

];
