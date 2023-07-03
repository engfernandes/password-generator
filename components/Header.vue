<template>
  <div class="container">
    <img src="/img/logo-black-horizontal.png" class="logo" width="120" />
    <div class="navigation">
      <p type="body" class="navigation-text">Donate</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header",
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
  padding: 16px;
  position: fixed;
  top: 0%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 0px 128px;
  }
}

.navigation-text {
  font-size: 14px;
  margin: 0;
}
.navigation-text:hover {
  color: @primary-color;
  cursor: pointer;
}
</style>
