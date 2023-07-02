<template>
  <a-input :value="value" :placeholder="placeholder" class="input" />
</template>

<script lang="ts">
import { Input } from "ant-design-vue";

export default {
  name: "Input",
  components: {
    "a-input": Input,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";
.input {
  border: 1px solid @light-gray;
  color: @text-color;
  width: 320px;

  ::placeholder {
    color: @light-gray;
  }

  @media only screen and (min-width: 768px) {
    width: 396px;
  }
}
</style>
