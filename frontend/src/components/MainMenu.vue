<template>
  <v-container>
    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-img
          alt="Aulas Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo.png')"
          transition="scale-transition"
          width="40"
        >
        </v-img>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Aulas Curza </v-list-item-title>
          <v-list-item-subtitle> FeI </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "MainMenu",

  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard", to: "/home" },
      { title: "Carreras", icon: "mdi-list-box-outline", to: "/carreras" },
      { title: "Profesor", icon: "mdi-list-box-outline", to: "/profesor" },
      { title: "Materias", icon: "mdi-list-box-outline", to: "/materias" },
      { title: "Aulas", icon: "mdi-list-box-outline", to: "/aulas" },
      { title: "Horario Materias", icon: "mdi-list-box-outline", to: "/horarioMaterias" },
      { title: "Reservas", icon: "mdi-list-box-outline", to: "/reservaaula" },
      { title: "Calendario", icon: "mdi-calendar-month", to: "/calendario" },
      /* { title: "About", icon: "mdi-view-dashboard", to: "/about" }, */
    ],
  }),
  mounted() {},
  computed: {},
};
</script>