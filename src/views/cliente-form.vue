<template>
    <div><br>
        <center><h1>Cadastrar um novo Cliente</h1></center>

        <v-form>
        <center><v-text-field label="Nome" class="form" v-model="cliente.nome"></v-text-field></center>
        <center><v-text-field label="CPF" class="form" v-model="cliente.cpf"></v-text-field></center>
        </v-form>
        
        <center><v-btn color="success" class="botao" dark @click="salvar">Salvar</v-btn>
        <v-btn color="error" class="botao" dark @click="cancelar">Cancelar</v-btn></center>
   
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
@Component
export default class ClienteForm extends Vue {

    cliente = {
        nome: '',
        cpf: ''
    }

    status = '';

    salvar(){
        axios
            .post('/api/cliente', this.cidade)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));

    }

    cancelar(){
        this.$router.push('/clientes');
    }

}
</script>

<style>
.v-btn.botao{
    margin: 0 5px;
}

.v-text-field.form{
    width: 60%;
    text-align: center;
}
</style>