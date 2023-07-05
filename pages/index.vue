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
          text="Feel free to use our password generator as many times as you need, it will always generate strong passwords that guarantee the security of your information or that of your users. To share this password, always use a single channel to ensure the protection of this information! An alternative to share the password uniquely is https://1ty.me/."
          id="left-text"
        />
        <Typography
          type="body"
          text="This site is a portfolio development and free tool for everyday use. If you want to know more about my work, click on the social media icon at the top of this page."
          id="left-text"
        />
      </div>
      <div class="right-content">
        <lock-outlined class="lock-icon" />
        <Typography type="title" text="Generate Password" id="right-title" />
        <Typography
          type="caption"
          text="Click the button below and let the magic happen. Passwords are generated almost instantly, and to generate more passwords just click the button again."
          id="right-caption"
        />
        <Button
          text="Generate Password(s)"
          @click="onClickGeneratePassword()"
        />
        <Textarea :value="generatedPassoword" />
      </div>
    </main>
  </div>
  <Footer />
</template>

<script lang="ts">
import generatePassword from "@/utils/generatePassword";
import { LockOutlined } from "@ant-design/icons-vue";

export default {
  name: "index",
  components: {
    "lock-outlined": LockOutlined,
  },
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

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: calc(100% - 140px);
    position: fixed;
    width: 100%;
  }
}

.left-content {
  align-items: center;
  background-color: @text-color;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: center;
  padding: 0px 128px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
}

#left-title {
  color: @background-color;

  @media only screen and (max-width: 768px) {
    width: 320px;
  }
}

#left-text {
  color: @background-color;
  @media only screen and (max-width: 768px) {
    width: 320px;
  }
}

.right-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.lock-icon {
  color: @primary-color;
  font-size: 120px;
}

#right-title {
  color: @text-color;
  width: 396px;

  @media only screen and (max-width: 768px) {
    width: 320px;
  }
}

#right-caption {
  text-align: left;
  width: 396px;

  @media only screen and (max-width: 768px) {
    width: 320px;
  }
}
</style>
