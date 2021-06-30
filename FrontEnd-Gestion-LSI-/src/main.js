import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueInitialsImg from 'vue-initials-img';
import store from "./store"
//components 
import AdminVue from './components/AdminVue'
import EtudiantRegistre from './components/EtudiantRegistre'
import ProfRegistre from './components/ProfRegistre'
import Home from './components/Home'
import Login from './components/Login'
import EtudiantVue from './components/EtudiantVue'
import ProfVue from './components/ProfVue.vue'
import CrudM from "./components/Crud/Crud-M.vue";
import CrudEmploi from "./components/Crud/CrudEmploi.vue";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueInitialsImg);
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [{
    path: '/Admin',
    name: 'Admin',
    component: AdminVue,
    meta: {
        isAdmin: true
    }
},
{
    path: '/prof',
    name: 'prof',
    component: ProfVue
},
{
    path: '/etudiant',
    name: 'etudiant',
    component: EtudiantVue
},
{
    path: '/Login',
    name: 'Login',
    component: Login
},
{
    path: '/e_registre',
    name: 'Etudiant',
    component: EtudiantRegistre
},
{
    path: '/p_registre',
    name: 'Prof',
    component: ProfRegistre
},
{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/CrudM',
    name: 'CrudM',
    component: CrudM
},
{
    path: '/CrudEmploi',
    name: 'CrudEmploi',
    component: CrudEmploi
}

];

const router = new VueRouter({
    routes: routes,
    mode: 'history',
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')