<template>
  <div class="tab">
    <div class="tab__item active">Active</div>
    <div class="tab__item">Registered</div>
  </div>

  <div class="actions">
    <el-input class="actions__input" placeholder="Please input" v-model="searchText"></el-input>
    <el-button type="primary" @click="onClickSearch">Search</el-button>
  </div>

  <div class="task-list">
    <div class="task-item" v-for="(hashtag, index) in hashtags" :key="index">
      <div class="task-item__title">Task number {{ hashtag.id }}</div>
      <div class="task-item__desc">
        {{ hashtag.text }}
        <el-tag type="info" v-if="hashtag.status === 0">Inprogress</el-tag>
        <el-tag type="success" v-if="hashtag.status !== 0">Complete</el-tag>
      </div>
      <!-- <el-progress
              :percentage="hashtag.status === 0 ? 0 : 100"
              class="task-item__progress"
              :stroke-width="12"
            /> -->
      <el-skeleton v-if="hashtag.status === 0" />
      <template v-else>
        <!-- <a
                :href="hashtag.snapshot?.data?.profile_pic_url"
                target="_blank"
              >
                View profile
              </a> -->
        <!-- <code class="task-item__code">
                {{ hashtag.snapshot }}
              </code> -->
        <div class="assets">
          <div class="assets__item" v-if="hashtag.mediaAssets.length === 0" />
          <div v-for="mediaAsset in hashtag.mediaAssets" :key="mediaAsset.id" class="assets__item">
            <img :src="mediaAsset.url" class="image" />
            <div class="assets__caption">
              {{ mediaAsset.accessibilityCaption }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import * as HashtagApi from "@/api/Hashtag";
// import Colcade from "colcade";

export default {
  name: "Header",
  props: {},

  data: () => ({
    searchText: "",
    hashtags: []
  }),

  mounted() {
    this.fetchData();
    // new Colcade(".assets", {
    //   columns: ".grid-col",
    //   items: ".assets__item",
    // });
  },

  methods: {
    async fetchData() {
      const result = await HashtagApi.fetchAll();
      this.hashtags = result.data.data;
    },

    async onClickSearch() {
      const payload = { text: this.searchText };
      this.searchText = "";
      await HashtagApi.create(payload);
      this.fetchData();
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #cc473b;
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

.task-list {
  margin-top: 32px;

  .task-item {
    margin-bottom: 32px;

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
