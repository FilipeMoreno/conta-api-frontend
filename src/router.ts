import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import CidadeList from '@/views/cidade-list.vue';
import AgenciaList from '@/views/agencia-list.vue';
import ClienteList from '@/views/cliente-list.vue';
import CidadeForm from '@/views/cidade-form.vue';
import CidadeSearch from '@/views/cidade-search.vue';
import Erro404 from '@/views/404.vue';
import AgenciaForm from '@/views/agencia-form.vue'
import ClienteForm from '@/views/cliente-form.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cidades',
      component: CidadeList
    },
    {
      path: '/cidade-form',
      component: CidadeForm
    },
    {
      path: '/clientes',
      component: ClienteList
    },
    {
      path: '/cliente-form',
      component: ClienteForm
    },
    {
      path: '/agencias',
      component: AgenciaList
    },
    {
      path: '/agencia-form',
      component: AgenciaForm
    },
    {
      path: '*',
      component: Erro404
    }
  ],
});
