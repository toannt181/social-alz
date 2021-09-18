<template>
  <div class="container">
    <!-- <div class="tab">
    <div class="tab__item active">Active</div>
    <div class="tab__item">Registered</div>
  </div> -->

    <h1>Task Queue</h1>

    <div class="actions">
      <el-input class="actions__input" placeholder="Please input" v-model="searchText"></el-input>
      <el-button type="primary" @click="onClickSearch">Search</el-button>
      <el-button type="primary" @click="onReload">Reload</el-button>
    </div>

    <div class="task-list">
      <div class="task-item" v-for="(hashtag, index) in hashtags" :key="index" @click="viewHashtag(hashtag.id)">
        <div class="task-item__title">Task ID #{{ hashtag.id }}</div>
        <div class="task-item__icon">
          <el-icon>
            <arrow-right-bold />
          </el-icon>
        </div>
        <div class="task-item__desc">
          {{ hashtag.text }}
          <el-tag type="info" v-if="hashtag.status === 0">Inprogress</el-tag>
          <el-tag type="success" v-if="hashtag.status === 1">Complete</el-tag>
          <el-tag type="error" v-if="hashtag.status === 2">Fail</el-tag>
        </div>
        <el-skeleton v-if="hashtag.status === 0" />
      </div>
    </div>
  </div>
</template>

<script>
import * as HashtagApi from "@/api/Hashtag";
import { ArrowRightBold } from "@element-plus/icons";
// import Colcade from "colcade";

export default {
  name: "Header",
  components: { ArrowRightBold },

  data: () => ({
    searchText: "",
    hashtags: []
  }),

  mounted() {
    this.fetchData();
    this.$socket.emit("hashtag:join", null);
    this.$socket.on("hashtag:updated", this.onHashtagSocketUpdated);
  },

  unmounted() {
    this.$socket.emit("hashtag:leave", null);
    this.$socket.off("hashtag:updated", this.onHashtagSocketUpdated);
  },

  methods: {
    async fetchData() {
      const result = await HashtagApi.fetchAll();
      this.hashtags = result.data.data;
    },

    async onReload() {
      this.fetchData();
    },

    async onClickSearch() {
      const payload = { text: this.searchText };
      this.searchText = "";
      await HashtagApi.create(payload);
      this.fetchData();
    },

    viewHashtag(id) {
      this.$router.push({ name: "Hashtag", params: { id } });
    },

    onHashtagSocketUpdated() {
      this.$notify({
        title: "Hashtag: Get data complete",
        message: "Reload to get new data",
        type: "success"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 16px 32px;
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
    background: $primary-1;
    border-radius: 4px 4px 0 0;

    &.active {
      color: $primary-1;
      background: #f8f8fa;
    }
  }
}

.task-list {
  margin-top: 32px;

  .task-item {
    @include box-shadow-1;
    @include radius-1;
    background: $transparent-1;
    margin-bottom: 32px;
    padding: 24px;
    cursor: pointer;
    position: relative;

    &__title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    &__desc {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 8px;
    }

    &__progress {
      margin-top: 16px;
    }

    &__code {
      max-height: 200px;
      overflow: auto;
      display: block;
      white-space: break-spaces;
      word-break: break-word;
    }

    &__icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.actions {
  display: flex;

  &__input {
    max-width: 500px;
    margin-right: 16px;
  }
}

.assets {
  margin: 0 -30px;
  padding: 0 15px;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry; */
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &__item {
    width: calc(33.33% - 30px);
    margin: 15px;
    border-radius: 12px;
    /* background: $white; */
  }
  &__caption {
    margin-top: 4px;
  }
}
</style>
