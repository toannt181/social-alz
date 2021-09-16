<template>
  <div class="container">
    <div class="kol">
      <div class="kol__item" v-for="(i, index) in Array(10).fill()" :key="index">
        <el-avatar :size="48" :src="circleUrl" class="avatar"></el-avatar>
        <el-skeleton />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Influencer",
  props: {}
};
</script>

<style lang="scss" scoped>
.container {
  padding: 16px 32px;
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
