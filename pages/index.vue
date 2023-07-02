<template>
  <Header />
  <main class="content">
    <div class="left-content">
      <Typography
        type="title"
        text="Welcome to the Password Generator by SecurePass"
        id="left-title"
      />
      <Typography
        type="body"
        text="This is a free tool, our mission is to help you generate secure passwords and provide them in a unique way to avoid leaks. If you want to help us maintain this project and its improvements, visit our donation page."
        id="left-text"
      />
    </div>
    <div class="right-content">
      <Typography type="title" text="Generate Password" id="right-title" />
      <Typography
        type="caption"
        text="Below you can generate your passwords according to the selected options, you can generate up to 3 passwords at once. Make good use of our tool!"
        id="right-caption"
      />
      <section class="options-section">
        <Typography
          type="body"
          text="Fill in the information below and click generate password:"
          id="right-caption"
        />
        <div class="switch-group">
          <InputNumber
            :min-value="1"
            :max-value="3"
            v-model:value="numberPasswordsValue"
            @change="handleChangeNumberPasswords"
          />
          <Typography type="body" text="Number of Passwords" />
        </div>
        <div class="switch-group">
          <Switch
            :checked="checkedCapitalLetters"
            @change="handleChangeCheckedCapitalLetters"
          /><Typography type="body" text="Should it have capital letters?" />
        </div>
        <div class="switch-group">
          <Switch
            :checked="checkedLowercaseLetters"
            @change="handleChangeCheckedLowercaseLetters"
          /><Typography type="body" text="Should it have lowercase letters?" />
        </div>
        <div class="switch-group">
          <Switch
            :checked="checkedSpecialChars"
            @change="handleChangeCheckedSpecialChars"
          /><Typography
            type="body"
            text="Must have special characters? (!.@[])"
          />
        </div>
        <Button text="Generate Password(s)" @click="undefined" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "index",
  data() {
    return {
      checkedCapitalLetters: true,
      checkedLowercaseLetters: true,
      checkedSpecialChars: true,
    };
  },
  setup() {
    const numberPasswordsValue = ref<number>(1);
    const handleChangeNumberPasswords = (value: number) => {
      numberPasswordsValue.value = value;
    };

    return {
      numberPasswordsValue,
      handleChangeNumberPasswords,
    };
  },
  methods: {
    handleChangeCheckedCapitalLetters() {
      this.checkedCapitalLetters = !this.checkedCapitalLetters;
    },
    handleChangeCheckedLowercaseLetters() {
      this.checkedLowercaseLetters = !this.checkedLowercaseLetters;
    },
    handleChangeCheckedSpecialChars() {
      this.checkedSpecialChars = !this.checkedSpecialChars;
    },
  },
};
</script>

<style lang="less">
@import "@/assets/variables.less";

.content {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
}

.left-content {
  align-items: flex-start;
  background-color: @text-color;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 0px 128px;
  width: 100%;
}

#left-title {
  color: @background-color;
  padding: 32px 0px;
}

#left-text {
  color: @background-color;
}

.right-content {
  align-items: center;
  background-color: @background-color;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: center;
  width: 100%;
}

#right-title {
  color: @text-color;
  width: 396px;
}

#right-caption {
  width: 396px;
}

.options-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 396px;
}

.switch-group {
  align-items: center;
  display: flex;
  gap: 8px;
}
</style>
