<template>
  <div class="about">
    <div class="about-box">
      <router-link class="back" to="/">
        Back
      </router-link>
      <div class="logo-box">
        <img class="logo" :src="twtLogo" />
      </div>
      <h1>TWT Editor</h1>
      <p>Version 0.1.0</p>
      <p>
        Made with Vue3.x + Electron
      </p>
      <div class="icons">
        <img :src="vueLogo" />
        +
        <img :src="electronLogo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const vueLogo = require("@/assets/vue.png");
    const electronLogo = require("@/assets/electron.png");
    const twtLogo = require("@/assets/logo.png");
    return { vueLogo, electronLogo, twtLogo };
  },
});
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .about-box {
    position: relative;
    background: #2f3241;
    width: 700px;
    height: 470px;
    border-radius: 10px;
    color: #74b1be;
    .back {
      position: absolute;
      top: 20px;
      left: 20px;
      line-height: 20px;
      text-decoration: none;
      font-weight: bold;
      color: #fff;
    }
    h1 {
      text-align: center;
      margin-top: 20px;
    }
    p {
      text-align: center;
      margin-top: 10px;
    }
    .icons {
      margin-top: 20px;
      line-height: 40px;
      font-size: 24px;
      display: flex;
      justify-content: center;
    }
    img {
      width: 40px;
      height: 40px;
      margin: 0 20px;
    }
    .logo-box {
      display: flex;
      justify-content: center;
      .logo {
        width: 120px;
        height: 120px;
        margin-top: 100px;
      }
    }
  }
}
</style>
