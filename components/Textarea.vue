<template>
  <a-input :value="value" :placeholder="placeholder" class="textarea" />
</template>

<script lang="ts">
import { Textarea } from "ant-design-vue";

export default {
  name: "Textarea",
  components: {
    "a-input": Textarea,
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
.textarea {
  border: 1px solid @light-gray;
  color: @text-color;
  height: 44px;
  width: 320px;

  ::placeholder {
    color: @light-gray;
  }

  @media only screen and (min-width: 768px) {
    width: 396px;
  }
}
</style>
