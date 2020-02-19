import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index';
// import tick from '../pages/tick';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      // redirect: '/tick',
    },
    // {
    //   path: '/tick',
    //   name: 'tick',
    //   component: tick,
    // },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
