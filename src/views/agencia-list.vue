<template>
  <div><br>
    <center><h1>Consulta de agências</h1></center><br>
        <center>
          <v-btn router-link to="/agencia-form" class="botao" color="success" dark>Nova agência</v-btn>
          <v-btn router-link to="#" class="botao" color="info" dark>Pesquisar agência</v-btn>
          <v-btn router-link to="#" class="botao" color="error" dark>Remover agência</v-btn>
        </center>
        <br>
    <table>
      <tr>
        <th>ID</th>
        <th>Número</th>
        <th>Dígito</th>
        <th>Cidade</th>
        <th>UF</th>
      </tr>
      <tr v-for="agencia in agencias" :key="agencia.numero">
          <td>{{ agencia.id }}</td>
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
</style>