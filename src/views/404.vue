<template>
    <div>
        <br>
        <h1 class="erro">404</h1>
        <h3 class="erro">Página não encontrada</h3>
        <h4 class="erro">A página ... não foi encontrada ou se encontra em manutenção</h4>
        <br>
        <center><v-btn color="info" href="/">Voltar ao início</v-btn></center>
    </div>
</template>

<style>
h1.erro {
    font-size: 150px;
    text-align: center;
}

h3.erro {
    font-size: 40px;
    text-align: center;
}

h4.erro {
    text-align: center;
}
</style>

<script>
var currentUrl = window.location.pathname;
</script>



