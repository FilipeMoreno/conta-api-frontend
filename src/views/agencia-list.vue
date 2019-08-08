<template>
  <div><br>
    <center><h1>Consulta de agências</h1></center><br>
        <center><v-btn router-link to="/agencia-form" color="success" dark>Nova agência</v-btn></center><br>
    <table>
      <tr>
        <th>Número</th>
        <th>Dígito</th>
        <th>Cidade</th>
        <th>UF</th>
      </tr>
      <tr v-for="agencia in agencias" :key="agencia.numero">
          <td>{{ agencia.numero }}</td>
          <td>{{ agencia.digito }}</td>
          <td>{{ agencia.cidade.nome }}</td>
          <td>{{ agencia.cidade.estado }}</td>
      </tr>

    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios';
@Component
export default class AgenciaList extends Vue {

    agencias = [];

    created() {
        axios
            .get('/api/agencia/todas-agencias')
            .then(response => this.agencias = response.data)
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