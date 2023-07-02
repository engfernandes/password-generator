<template>
  <a-button :type="type" :loading="onLoading" :class="[type, 'button']">{{
    text
  }}</a-button>
</template>

<script lang="ts">
import { Button } from "ant-design-vue";

export default {
  name: "Button",
  components: {
    "a-button": Button,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value: any) {
        return ["primary", "default", "link"].includes(value);
      },
    },
    onLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";

.button {
  border-radius: 8px;
  width: 320px;

  @media only screen and (min-width: 768px) {
    width: 396px;
  }
}

.primary {
  background-color: @primary-color;
  border: none;
  color: @white;
}

.default {
  border: 1px solid @primary-color;
  color: @primary-color;
}

.link {
  color: @primary-color;
  width: min-content;
}
</style>
