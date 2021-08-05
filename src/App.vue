<template>
  <Header />
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-size: 16px;
  color: #2c3e50;
  background: #f6f8fa;
}

.main {
  margin: auto;
  max-width: 1280px;
  padding: 16px;
}
</style>
