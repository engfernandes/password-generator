<template>
  <a-typography-text :class="[type, 'typography']">{{
    text
  }}</a-typography-text>
</template>

<script lang="ts">
import { Typography } from "ant-design-vue";

export default {
  name: "Typography",
  components: {
    "a-typography-text": Typography,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(value: string) {
        return ["title", "body", "caption"].includes(value);
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";

.typography {
  color: @text-color;
}

.title {
  font-size: 20px;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
}

.body {
  font-size: 16px;
  font-weight: 400;
}

.caption {
  font-size: 14px;
  font-weight: 400;
}
</style>
