<template>
  <div class="container">
    <img src="/img/logo-black-horizontal.png" class="logo" width="120" />
    <div class="navigation">
      <NuxtLink to="https://github.com/engfernandes" target="_blank">
        <github-outlined class="icon" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/engfernandes/" target="_blank">
        <linkedin-outlined class="icon" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons-vue";

export default {
  name: "Header",
  components: {
    "github-outlined": GithubOutlined,
    "linkedin-outlined": LinkedinOutlined,
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";

.container {
  align-items: center;
  background-color: @background-color;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 32px;
  position: fixed;
  top: 0%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 0px 128px;
  }
}

.navigation {
  align-items: center;
  display: flex;
  gap: 16px;
}

.icon {
  font-size: 20px;
}

.icon:hover {
  color: @primary-color;
  cursor: pointer;
}
</style>
