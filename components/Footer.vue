<template>
  <div class="container">
    <Typography type="body" text="Developed by Gabriel Fernandes - 2023" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";
.container {
  align-items: center;
  background-color: @white;
  bottom: 0%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  height: 70px;
  justify-content: center;
  position: fixed;
  width: 100%;
}
</style>
