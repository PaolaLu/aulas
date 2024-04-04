<template>
  <v-app>
    <MainMenu></MainMenu>
    <MainBar></MainBar>
    <v-main>
<v-container fluid>

 hola aca sale

</v-container>
</v-main>

  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import MainBar from './components/MainBar.vue';

export default {
  name: 'App',

  components: {
    MainMenu,
    MainBar
  },

  data: () => ({
    showMenu: true,
    items: [
    { title: 'Home', icon: 'mdi-view-dashboard' }
    ],
  }),
};
</script>

