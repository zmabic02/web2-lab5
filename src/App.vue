<template>
  <div id="app">
    <top-bar></top-bar>
    
    <router-view />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
  components: {
    TopBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
