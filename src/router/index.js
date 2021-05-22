import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/components/home';
import electricFan from '@/components/electricFan';
import notFfound from '@/components/404';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/electricFan',
      name: 'Electricfan',
      component: electricFan,
    },{
      path: '*',
      component: notFfound,
    }
  ]
})
