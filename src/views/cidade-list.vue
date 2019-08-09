<template>
  <div><br>
    <center><h1>Consulta de cidades</h1></center><br>
        <center>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label='Pesquisar cidade...'
          v-model='searchString'
          >
        </v-text-field>
        </v-flex>
      <v-btn
        flat
        :disabled="!dataAvailable"
        @click="searchCidade"
      >
       <span class="mr-2">Buscar</span>
      </v-btn><br><br>
          <v-btn router-link to="/cidade-form" class="botao" color="success" dark>Nova cidade</v-btn>
        </center>
        <br>
    <table>
      <tr>
        <th>ID</th>
        <th>Cidade</th>
        <th>Estado</th>
        <th></th>
      </tr>
      <tr v-for="cidade in cidades" :key="cidade.nome">
          <td>{{ cidade.id }}</td>
          <td>{{ cidade.nome }}</td>
          <td>{{ cidade.estado }}</td>
          <td class="acoes"><div id="alinha">
            <ul>
              <a v-bind:href="'/cidade-edit/'+ cidade.id" class="icon"><v-icon>mdi-account-edit</v-icon></a>
            </ul>
            <ul>
              <a v-bind:href="'/cidade-remove/'+ cidade.id" class="icon"><v-icon color="red">mdi-delete</v-icon></a>
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

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchCidade () {
      this.$router.push('/cidade?nome=' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
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

#alinha ul {
    display:inline;
}

td.acoes{
  width: 3%;
}
</style>



