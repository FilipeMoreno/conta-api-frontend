<template>
    <div><br>
        <center><h1>Cadastrar uma nova Agência</h1></center>

        <center>
            <v-text-field label="Número" class="form" width="50%" v-model="agencia.numero"></v-text-field>
            <v-text-field label="Dígito" class="form" width="50%" v-model="agencia.digito"></v-text-field>
            <v-text-field label="Cidade" class="form" width="50%" v-model="agencia.cidade"></v-text-field>
        </center>
        
        <center><v-btn color="success" class="botao" dark @click="salvar">Salvar</v-btn>
        <v-btn color="error" class="botao" dark @click="cancelar">Cancelar</v-btn></center>
   
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
@Component
export default class AgenciaForm extends Vue {

    agencia = {
        numero: '',
        digito: '',
        cidades: ''
    }

    salvar(){
        axios
            .post('/api/agencia', this.agencia)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));
    }

    cancelar(){
        this.$router.push('/agencias');
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