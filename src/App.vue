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
  },
  mounted() {
    this.$socket.on("connect", () =>
      this.$notify({
        title: "Server connected",
        type: "success"
      })
    );
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
  @include radius-2;
  margin-left: $width-sidebar;
  background: $white-1;
  min-height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px -7px 100px 0px;
}
</style>
