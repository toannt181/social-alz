<template>
  <div class="container">
    <div class="header">
      <div class="logo">INFLUENCER</div>
      <div class="menu">
        <div class="menu__item">
          <router-link to="/">Home</router-link>
        </div>
        <div class="menu__item">
          <router-link to="/influencer">Influencer</router-link>
        </div>
        <div class="menu__item">FAQ</div>
      </div>
      <div class="user">
        <el-avatar :size="24" :src="circleUrl" class="avatar"></el-avatar>
        <span class="user__name">
          ToanHN
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style lang="scss" scoped>
.header {
  margin: auto;
  height: 120px;
  max-width: 1280px;
  padding: 16px 0;
  display: flex;

  .logo {
    color: white;
    font-weight: bold;
    font-size: 24px;
    width: 240px;
    display: inline-block;
  }

  .menu {
    display: inline-block;
    &__item {
      margin-right: 32px;
      font-size: 0.9em;
      display: inline-block;
      &, a {
        color: white;
        text-decoration: none;
      }
    }
  }

  .user {
    margin-left: auto;

    .avatar {
      vertical-align: middle;
    }

    &__name {
      margin-left: 4px;
      color: white;
      font-size: 0.9em;
    }
  }
}

.container {
  padding: 16px 8px;
  background: rgb(255, 132, 103);
  background: linear-gradient(
    90deg,
    rgba(255, 132, 103, 1) 35%,
    rgba(252, 89, 116, 1) 100%
  );
}
</style>
