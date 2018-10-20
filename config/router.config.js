export default [
  {// 特殊的url都要写在前面
    path: '/user', component: '../layouts/userLayout',
    routes: [
      { path: '/user', component: './user' },

    ],
  },
  {
    path: '/', component: '../layouts/baseLayout',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './home' },
      {
        component: '404',
      },
    ],
  },

];
