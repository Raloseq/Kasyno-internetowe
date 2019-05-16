import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import UserProfile from '@/views/UserProfile.vue';
import Main from '@/views/Main.vue';
import OneArmedBandit from '@/views/OneArmedBandit.vue';
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/OneArmedBandit',
      name: 'OneArmedBandit',
      component: OneArmedBandit
    }
  ],
});
