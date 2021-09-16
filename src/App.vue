<template>
  <div class="main">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700;900&display=swap");
* {
  box-sizing: border-box;
}

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-size: 16px;
  color: $black-1;
  background: #f6f8fa;
}

html,
body,
#app,
.main {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.content {
  margin-left: $width-sidebar;
  background: $white-1;
  min-height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>
