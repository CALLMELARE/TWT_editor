<template>
  <div id="home">
    <textarea class="edit" :value="state.content" @input="update"></textarea>
    <div class="preview" v-html="compiledMd()"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import marked from "marked";
import _ from "lodash";
import "@/style/md.css";

export default defineComponent({
  name: "Home",
  props: {},
  setup() {
    const state = reactive({
      content: "# Welcome",
    });

    function compiledMd() {
      return marked(state.content, { sanitize: true });
    }

    const update = _.debounce((e: { target: { value: any } }) => {
      state.content = e.target.value;
    }, 100);
    return { state, update, compiledMd };
  },
});
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  .edit,
  .preview {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .edit {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    padding: 20px;
  }
  .preview {
    padding: 20px;
  }
}
</style>
