<template>
  <a-spin :size="size" />
</template>

<script lang="ts">
import { Spin } from "ant-design-vue";

export default {
  name: "",
  components: {
    "a-spin": Spin,
  },
  props: {
    size: {
      type: String,
      required: true,
      validator(value: string) {
        return ["small", "large"].includes(value);
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
