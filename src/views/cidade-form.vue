<template>
    <div><br>
        <center><h1>Cadastrar uma nova cidade</h1></center>

        <v-text-field label="Nome" width="50%" v-model="cidade.nome"></v-text-field>
        <v-text-field label="UF" width="50%" v-model="cidade.estado"></v-text-field>
        

        <center><v-btn color="success" dark @click="salvar">Salvar</v-btn>
        <v-btn color="error" dark @click="cancelar">Cancelar</v-btn></center>
   
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
@Component
export default class CidadeForm extends Vue {

    cidade = {
        nome: '',
        estado: ''
    }

    salvar(){
        axios
            .post('/api/cidades', this.cidade)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));

    }

    cancelar(){
        this.$router.push('/cidades');
    }

}
</script>
