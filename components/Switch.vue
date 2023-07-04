<template>
  <a-switch :checked="checked" :id="checkedState" />
</template>

<script lang="ts">
import { Switch } from "ant-design-vue";

export default {
  name: "Switch",
  components: {
    "a-switch": Switch,
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    checkedState() {
      if (this.checked === true) {
        return "active";
      } else {
        return "deactivated";
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";

#active {
  background-color: @accent-color;
}
</style>
