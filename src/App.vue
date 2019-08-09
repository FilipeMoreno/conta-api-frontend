<template>
  <v-app>
    <div class="menu">
    <v-toolbar dark>
      <v-toolbar-title><b>Banco</b></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text class="btn-menu" router-link to="/"> <v-icon>mdi-home</v-icon></v-btn>
        <v-btn text class="btn-menu" router-link to="/cidades">Cidades</v-btn>
        <v-btn text class="btn-menu" router-link to="/agencias">Agências</v-btn>
        <v-btn text router-link to="/clientes">Clientes</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </div>
    <router-view></router-view>

  <br>
  <v-footer dark padless flat width="auto">
    <v-card
      flat
      tile
      class="dark lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn class="mx-4 white--text" icon href="#twitter">
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" icon href="#facebook">
          <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" icon href="#insagram">
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>
      </v-card-text>
      

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} <strong>&copy; Banco</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  </v-app>
</template>

<style scoped> 

</style>
