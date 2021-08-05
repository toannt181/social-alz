<template>
  <div class="wrapper">
    <div class="nav"><el-skeleton /></div>
    <div class="content">
      <div class="tab">
        <div class="tab__item active">Active</div>
        <div class="tab__item">Registered</div>
      </div>

      <div class="body">
        <el-input placeholder="Please input" v-model="input"></el-input>
        <div class="task-list">
          <div
            class="task-item"
            v-for="(i, index) in Array(10).fill()"
            :key="index"
          >
            <div class="task-item__title">Task number 1</div>
            <el-skeleton />
            <el-progress
              :percentage="50"
              class="task-item__progress"
              :stroke-width="12"
            ></el-progress>
          </div>
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
    margin-right: 16px;
    width: 240px;
    flex: 0 0 240px;
  }

  .content {
    margin-top: -64px;
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

.body {
  margin-top: 16px;
}

.task-list {
  margin-top: 32px;

  .task-item {
    margin-bottom: 16px;
    min-height: 320px;

    &__title {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 8px;
    }

    &__progress {
      margin-top: 16px;
    }
  }
}
</style>
