<template>
  <div><br>
    <center><h1>Consulta de cidades</h1></center><br>
        <center><v-btn router-link to="/cidade-form" color="success" dark>Nova cidade</v-btn></center><br>
    <table>
      <tr>
        <th>Cidade</th>
        <th>Estado</th>
      </tr>
      <tr v-for="cidade in cidades" :key="cidade.nome">
          <td>{{ cidade.nome }}</td>
          <td>{{ cidade.estado }}</td>
      </tr>

    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios';
@Component
export default class CidadeList extends Vue {

    cidades = [];

    created() {
        axios
            .get('/api/cidades/todas-cidades')
            .then(response => this.cidades = response.data)
            .catch(error => console.log(error));
    }

}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
    width:90%; 
    margin-left:5%; 
    margin-right:15%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>



