<template>
  <div class="app">
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
          <Button
            text="Generate Password(s)"
            @click="onClickGeneratePassword()"
          />
          <Textarea :value="generatedPassoword" />
        </section>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script lang="ts">
import generatePassword from "@/utils/generatePassword";

export default {
  name: "index",
  data() {
    return {
      generatedPassoword: "",
      error: "",
    };
  },
  methods: {
    onClickGeneratePassword() {
      this.generatedPassoword = generatePassword();
    },
  },
};
</script>

<style lang="less">
@import "@/assets/variables.less";

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vh;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 140px);
  margin: 70px 0;
  width: 100%;
}

.left-content {
  align-items: flex-start;
  background-color: @text-color;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

#right-title {
  color: @text-color;
  width: 396px;
}

#right-caption {
  width: 396px;
}

.password-illustration {
  width: 320px;
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
