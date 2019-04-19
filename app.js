
require('./bootstrap');

window.Vue = require('vue');


import UsuariosIndex from './components/Usuarios/UsuariosIndex.vue';
import UsuariosCreate from './components/Usuarios/UsuariosCreate.vue';
import UsuariosEdit from './components/Usuarios/UsuariosEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            usuariosIndex: UsuariosIndex
        }
    },
    {path: '/admin/Usuarios/create', component: UsuariosCreate, name: 'createUsuario'},
    {path: '/admin/Usuarios/edit/:id', component: UsuariosEdit, name: 'editUsuarios'},
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')