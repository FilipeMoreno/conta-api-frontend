<template>
  <div><br>
    <center><h1>Consulta de Clientes</h1></center><br>
        <center>
          <v-btn router-link to="#" class="botao" color="info" dark>Pesquisar cliente</v-btn>
          <v-btn router-link to="/cliente-form" class="botao" color="success" dark>Novo cliente</v-btn>
        </center>
        <br>
    <table>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>CPF</th>
        <th></th>
      </tr>
      <tr v-for="cliente in clientes" :key="cliente.nome">
          <td>{{ cliente.id }}</td>
          <td><a v-bind:href="'?nome='+ cliente.nome" class="link-client">{{ cliente.nome }}</a></td>
          <td>{{ cliente.cpf }}</td>
          <td><div id="alinha">
            <ul>
              <a v-bind:href="'/cliente-edit/'+ cliente.id" class="icon"><v-icon>mdi-account-edit</v-icon></a>
            </ul>
            <ul>
              <a v-bind:href="'/cliente-remove/'+ cliente.id" class="icon"><v-icon color="red">mdi-delete</v-icon></a>
            </ul></div>
            </td>
      </tr>

    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios';
@Component
export default class ClienteList extends Vue {

    clientes = [];

    created() {
        axios
            .get('/api/cliente/todos-clientes')
            .then(response => this.clientes = response.data)
            .catch(error => console.log(error));
    }
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color:#616161;
  color: white;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.v-btn.botao{
    margin: 0 5px;
}

a.icon{
  text-decoration: none;
}

a.link-client{
  text-decoration: none;
  color: black;
}

a.link-client:link{
  color: black;
}

#alinha {
  width: 45%;
  height:auto;
  margin:0px auto;
  padding: 0%;
}

#alinha ul {
    width:60px;
    display:inline-block;
    height:auto;
    margin:0;
    padding:0;
}
</style>