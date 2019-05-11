<template>
  <div id="app">

    <h3 id="label1">Trabaja tus piernas </h3>

    <h2 id="label2">¡Cumple el reto!</h2>
    
    <h2 id="label3">Camina</h2>

    <input type="button" value="Empieza">

  </div>
</template>

<script>
export default {
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat:  -0.22, lng:  -78.52})
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

html{
  background: #DF0101;
}

#label1{
   font-size: 35px;
}

#label2{
   font-size: 65px;
}

#label3{
   font-size: 65px;
}




h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
