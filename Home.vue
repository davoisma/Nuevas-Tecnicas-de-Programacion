<template>
  <v-container>
  <v-flex xs12 sm6 class="text-xs-center text-sm-right">
<img src="@/assets/fitlogo.png"/>
  </v-flex>
  <v-flex xs12 sm6 class="text-xs-center text-sm-right">
    <v-btn rounded color="primary" large router to="/meetups">RETOS</v-btn>
  </v-flex>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetup/new" class="info">CREAR RETOS</v-btn>
      </v-flex>
      </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Las dificultades no existen para hacerte renunciar, sino para hacerte mas fuerte!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>
