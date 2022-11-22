import Vue from "vue";
import Router from 'vue-router'
import Start from './components/Start.vue'

// import User from './components/user/User.vue'
// import UserList from './components/user/UserList.vue'
// import UserDetails from './components/user/UserDetails.vue'
// import UserEdit from './components/user/UserEdit.vue'

import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'


const User = () => import(/* webpackChunkName: "user" */ './components/user/User.vue');
const UserList = () => import(/* webpackChunkName: "user" */ './components/user/UserList.vue');
const UserDetails = () => import('./components/user/UserDetails.vue');
const UserEdit = () => import('./components/user/UserEdit.vue');



Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else if (to.hash) return { selector: to.hash }
    else return { x: 0, y: 1000 }
  },
  routes: [
    {
      name: 'start', path: '/',
      //component: Start 
      components: {
        default: Start,
        menu: Menu,
      }
    },
    {
      path: '/user/',
      //component: User,
      components: {
        default: User,
        menu: MenuAlt,
        menuDow: MenuAlt
      },
      props: true,
      children: [
        { path: '', component: UserList },
        { path: ':id', component: UserDetails, props: true },
        { path: ':id/edit', component: UserEdit, props: true, name: 'editUser' },
      ]
    },
    {
      path: '/redirect',
      redirect: '/user'
    }
    ,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('before routes');
  next();

})

export default router;