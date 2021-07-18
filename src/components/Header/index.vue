<template>
  <div class="container">
    <div class="header">
      <div class="logo">INFLUENCER</div>
      <div class="menu">
        <div class="menu__item">List</div>
        <div class="menu__item">FAQ</div>
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
      display: inline-block;
      margin-right: 32px;
      color: white;
      font-size: 0.9em;
    }
  }
}

.container {
  background: rgb(255, 132, 103);
  background: linear-gradient(
    90deg,
    rgba(255, 132, 103, 1) 35%,
    rgba(252, 89, 116, 1) 100%
  );
}
</style>
