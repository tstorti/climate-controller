<script>
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    home: Home
  },
}
</script>

<template>
  <div id="app">
    <home></home>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
