<template>
  <div class="about">
    <div class="about-box">
      <router-link class="back" to="/">
        Back
      </router-link>
      <h1>TWT Editor</h1>
      <p>Version 0.1.0</p>
      <p>
        Made with Vue3.x + Electron
      </p>
      <div class="icons">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
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
      top: 10px;
      left: 10px;
      text-decoration: none;
      font-weight: bold;
      color: #fff;
    }
    h1 {
      text-align: center;
      margin-top: 30px;
    }
    p {
      text-align: center;
      margin-top: 10px;
    }
    .icons {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
