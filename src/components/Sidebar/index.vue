<template>
  <div class="sidebar">
    <div class="logo">INFLUENCER</div>

    <div class="menu">
      <div class="menu__item" v-for="(item, i) in menu" :key="i">
        <router-link :to="item.link">
          <el-icon :size="24">
            <component :is="item.icon" />
          </el-icon>
          {{ item.name }}
        </router-link>
      </div>
    </div>

    <div class="user">
      <el-avatar :size="48" :src="circleUrl" class="avatar"></el-avatar>
      <span class="user__name">
        ToanHN
      </span>
    </div>
  </div>
</template>

<script>
import { Monitor, Cloudy, QuestionFilled } from "@element-plus/icons";

export default {
  name: "Sidebar",
  components: { Monitor, Cloudy, QuestionFilled },
  created() {
    this.menu = [
      {
        name: "Dashboard",
        icon: Monitor,
        link: "/"
      },
      {
        name: "Influencer",
        icon: Cloudy,
        link: "/influencer"
      },
      {
        name: "FAQ",
        icon: QuestionFilled,
        link: "/faq"
      }
    ];
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  margin: auto;
  height: 100%;
  padding: 32px 0;
  background: $white;
  position: fixed;
  width: $width-sidebar;
  top: 0;
  left: 0;
  /* background: linear-gradient(90deg, rgba(255, 132, 103, 1) 35%, rgba(252, 89, 116, 1) 100%); */

  .logo {
    text-align: center;
    color: white;
    font-size: 24px;
    width: 240px;
    display: inline-block;
    color: $primary-1;
    font-weight: 900;
  }

  .menu {
    margin-top: 24px;
    &__item {
      @include box-shadow-1;
      @include radius-1;
      margin: 16px;
      font-size: 18px;
      padding: 12px 20px;
      margin-bottom: 16px;
      &,
      a {
        color: $black-1;
        text-decoration: none;
      }

      i {
        color: $primary-1;
        vertical-align: middle;
        margin-right: 12px;
        display: inline;
      }
    }
  }

  .user {
    margin: 48px 32px;

    .avatar {
      vertical-align: middle;
    }

    &__name {
      margin-left: 4px;
      font-size: 16px;
    }
  }
}
</style>
