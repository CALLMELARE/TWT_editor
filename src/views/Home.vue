<template>
  <div id="home">
    <div class="left">
      <textarea class="edit" :value="state.content" @input="update"> </textarea>
    </div>
    <div class="right">
      <div class="preview" v-html="compiledMd()"></div>
    </div>
    <func-bar :count="wordCount()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import _ from "lodash";
import "@/style/md.css";
import FuncBar from "@/components/FuncBar.vue";
const md = require("markdown-it")();
const emoji = require("markdown-it-emoji");

md.use(emoji);
md.use(require("markdown-it-highlightjs"));

export default defineComponent({
  components: { FuncBar },
  name: "Home",
  props: {},
  setup() {
    const state = reactive({
      content:
        "# :rocket: Welcome to Markdown \n> You can write something here",
    });

    // 编译markdown
    function compiledMd() {
      return md.render(state.content);
    }

    // 字数统计
    function wordCount() {
      const pattern = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
      const m = state.content.match(pattern);
      let count = 0;
      if (m == null) {
        return count;
      }
      for (let i = 0; i < m.length; i++) {
        if (m[i].charCodeAt(0) >= 0x4e00) {
          count += m[i].length;
        } else {
          count += 1;
        }
      }
      return count;
    }

    // 防抖+根据内容渲染Markdown
    const update = _.debounce((e: { target: { value: any } }) => {
      state.content = e.target.value;
    }, 100);
    return { state, update, compiledMd, wordCount };
  },
});
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  display: grid;
  grid-template-columns: 50% 50%;
  .left,
  .right {
    min-height: 100%;
    overflow-y: auto;
    vertical-align: top;
    box-sizing: border-box;
    width: 100%;
  }
  .left {
    display: flex;
  }
  .edit {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    line-height: 1.5;
    padding: 20px;
    width: 100%;
    height: auto;
    overflow-y: visible;
  }
  .preview {
    padding: 20px;
  }
}
</style>
