<template>
  <div class="home">
    <div ref="editor"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  components: {},
  data() {
    return {
      monacoEditor: {},
    };
  },
  setup() {
    const state = reactive({
      content: "javascript",
    });
    const monacoEditor = monaco.editor.create(this.$ref.editor, {
      value: state.content,
      theme: "vs-dark",
    });
    return { state };
  },
});
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
