<template>
  <a-input-number
    :value="value"
    :min="minValue"
    :max="maxValue"
    class="input-number"
  />
</template>

<script lang="ts">
import { InputNumber } from "ant-design-vue";

export default {
  name: "InputNumber",
  components: {
    "a-input-number": InputNumber,
  },
  props: {
    value: {
      type: Number,
      required: true,
      default: 1,
    },
    minValue: {
      type: Number,
      required: true,
      default: 1,
    },
    maxValue: {
      type: Number,
      required: true,
      default: 10,
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";
.input-number {
  border: 1px solid @light-gray;
  color: @text-color;

  ::placeholder {
    color: @light-gray;
  }
}
</style>
