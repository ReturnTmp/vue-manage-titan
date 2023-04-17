<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
};
</script>

<style>
@import url(../src/assets/css/font.css);
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
