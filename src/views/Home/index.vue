<template>
  <div class="wrapper">
    <div class="nav"><el-skeleton /></div>
    <div class="content">
      <div class="tab">
        <div class="tab__item active">Active</div>
        <div class="tab__item">Registered</div>
      </div>

      <div class="body">
        <div class="actions">
          <el-input
            class="actions__input"
            placeholder="Please input"
            v-model="searchText"
          ></el-input>
          <el-button type="primary" @click="onClickSearch">Search</el-button>
        </div>

        <div class="task-list">
          <div
            class="task-item"
            v-for="(hashtag, index) in hashtags"
            :key="index"
          >
            <div class="task-item__title">Task number {{ hashtag.id }}</div>
            <div class="task-item__desc">{{ hashtag.text }}</div>
            <el-skeleton v-if="hashtag.status === 0" />
            <template v-else>
              <a
                :href="hashtag.snapshot?.data?.profile_pic_url"
                target="_blank"
              >
                View profile
              </a>
              <!-- <code class="task-item__code">
                {{ hashtag.snapshot }}
              </code> -->
              <div class="assets">
                <div
                  v-for="mediaAsset in hashtag.mediaAssets"
                  :key="mediaAsset.id"
                  class="assets__item"
                >
                  <el-card>
                    <img :src="mediaAsset.url" class="image" />
                    <div>
                      <!-- <span>Yummy hamburger</span>
                      <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button"
                          >Operating</el-button
                        >
                      </div> -->
                    </div>
                  </el-card>
                </div>
              </div>
            </template>
            <el-progress
              :percentage="hashtag.status === 0 ? 0 : 100"
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
import * as HashtagApi from "@/api/Hashtag";

export default {
  name: "Header",
  props: {},

  data: () => ({
    searchText: "",
    hashtags: [],
  }),

  created() {
    this.fetchData();
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
    },
  },
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
    margin-bottom: 32px;

    &__title {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 8px;
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
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 20%;

    img {
      width: 100%;
    }
  }
}
</style>
