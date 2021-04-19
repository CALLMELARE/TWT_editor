<template>
  <div class="overall">
    <div class="func-tabs">
      <div
        class="tab"
        :class="state.tab === 1 ? 'active' : ''"
        @click="state.tab = 1"
      >
        Markdown
      </div>
      <div
        class="tab"
        :class="state.tab === 2 ? 'active' : ''"
        @click="state.tab = 2"
      >
        Monaco
      </div>
    </div>
    <div class="content" v-if="state.tab == 1">
      <Md />
    </div>
  </div>
</template>

<script>
import Md from "@/views/Markdown";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  components: {
    Md,
  },
  setup() {
    const state = reactive({
      tab: 1,
    });
    return { state };
  },
  methods: {
    switch() {},
  },
});
</script>

<style lang="scss" scoped>
.overall {
  .func-tabs {
    height: 22px;
    display: flex;
    .tab {
      cursor: pointer;
      color: #ffffff;
      width: 100%;
      text-align: center;
      background-color: #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
    }
    .active {
      color: #a9a9a9;
      background-color: #f6f6f6;
    }
  }
  .content {
    height: calc(100vh - 22px);
  }
}
</style>
