<template>
  <div id="func-bar">
    <span class="count">共{{ count }}字 &nbsp;</span>
    <span class="version">
      <router-link to="/About"> TWT Studio {{ getYear() }} </router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, Prop, reactive } from "vue";
export default defineComponent({
  name: "FuncBar",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const state = reactive({});
    function getYear() {
      const now = new Date();
      return now.getFullYear();
    }
    return { state, getYear };
  },
});
</script>

<style lang="scss" scoped>
#func-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 24px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  cursor: default;
  
  // Glassmorphism
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.658);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  .count {
    color: #808080;
    padding: 0 10px;
    font-size: 14px;
  }
  .version {
    padding: 0 10px;
    cursor: pointer;
    color: #d9d9d9;
    font-size: 12px;
    a {
      color: #808080;
      text-decoration: none;
    }
  }
}
</style>
