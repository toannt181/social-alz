<template>
  <div class="sidebar">
    <div class="logo">INFLUENCER</div>

    <div class="user">
      <el-avatar :size="24" :src="circleUrl" class="avatar"></el-avatar>
      <span class="user__name">
        ToanHN
      </span>
    </div>

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
  background: $white-1;
  position: absolute;
  width: $width-sidebar;
  top: 0;
  left: 0;
  /* background: linear-gradient(90deg, rgba(255, 132, 103, 1) 35%, rgba(252, 89, 116, 1) 100%); */

  .logo {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 24px;
    width: 240px;
    display: inline-block;
  }

  .menu {
    margin-top: 24px;
    &__item {
      margin-right: 32px;
      font-size: 18px;
      padding-left: 16px;
      margin-bottom: 16px;
      &,
      a {
        color: $white;
        text-decoration: none;
      }

      i {
        vertical-align: middle;
        margin-right: 12px;
        display: inline;
      }
    }
  }

  .user {
    margin-left: 16px;
    margin-top: 24px;

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
</style>
