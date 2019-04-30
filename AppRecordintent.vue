<template>
  <main>
    <h1>Cómo te sientes hoy para hacer deporte?</h1>
    <p class="big"><span>Algunas opciones... </span><br><br>
    <em></em></p>
    <p><span>Pulsa el botón y empieza a grabar</span></p>
    <app-recordinglogic />
  </main>
</template>
<script>
import AppRecordinglogic from './AppRecordinglogic.vue'
export default {
  components: {
    AppRecordinglogic
  },
  computed: {
    uiState () {
      return this.$store.state.uiState
    }
  }
}
</script>

<style scoped>
main {
  margin-top: 40px;
  padding: 20px 20px 40px;
  text-align: center;
  background: black;
  position: absolute;
  top: 20px;
  left: 50%;
  width: 500px;
  margin-left: -250px;
}
h1 {
  color: rgb(245, 245, 245);
}
p.big {
  font-size: 20px;
  line-height: 1.5;
}
span {
  color: rgb(168, 167, 167);
}
</style>
