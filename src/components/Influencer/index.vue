<template>
  <div class="wrapper">
    <div class="nav"><el-skeleton /></div>
    <div class="content">
      <div class="tab">
        <div class="tab__item active">Active</div>
        <div class="tab__item">Registered</div>
      </div>

      <div class="kol">
        <div
          class="kol__item"
          v-for="(i, index) in Array(10).fill()"
          :key="index"
        >
          <el-avatar :size="48" :src="circleUrl" class="avatar"></el-avatar>
          <el-skeleton />
        </div>
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
$primary: #cc473b;

.wrapper {
  display: flex;

  .nav {
    margin-top: 16px;
    padding-right: 16px;
    width: 240px;
  }

  .content {
    margin-top: -48px;
    flex: 1;
  }
}

.tab {
  &__item {
    cursor: pointer;
    display: inline-block;
    width: 120px;
    margin-right: 16px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: white;
    background: $primary;
    border-radius: 4px 4px 0 0;

    &.active {
      color: $primary;
      background: #f8f8fa;
    }
  }
}

.kol {
  margin-top: 16px;
  margin-left: -16px;
  margin-right: -16px;
  display: flex;
  flex-wrap: wrap;
  &__item {
    background: white;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    height: 240px;
    width: calc(33.33% - 16px);

    .avatar {
      margin-bottom: 8px;
    }
  }
}
</style>
