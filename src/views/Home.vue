<template>
  <div id="home">
    <div class="line-number" v-html="line()"></div>
    <textarea class="edit" :value="state.content" @input="update"> </textarea>
    <div class="preview" v-html="compiledMd()"></div>
    <func-bar :count="wordCount()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import marked from "marked";
import _ from "lodash";
import "@/style/md.css";
import FuncBar from "@/components/FuncBar.vue";

export default defineComponent({
  components: { FuncBar },
  name: "Home",
  props: {},
  setup() {
    const state = reactive({
      content: "# Welcome",
    });

    // 编译markdown
    function compiledMd() {
      return marked(state.content, { sanitize: true });
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

    // 行号
    function line() {
      const data = state.content.replace(/\r/gi, "").split("\n");
      const n = data.length;
      let num = "";
      for (let i = 1; i <= n; i++) {
        num += i + "<br>";
      }
      return num;
    }

    const update = _.debounce((e: { target: { value: any } }) => {
      state.content = e.target.value;
    }, 100);
    return { state, update, compiledMd, wordCount, line };
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
    width: 48%;
    height: calc(100% - 24px);
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .line-number {
    cursor: default;
    min-width: 2%;
    display: inline-block;
    height: calc(100% - 24px);
    vertical-align: top;
    box-sizing: border-box;
    padding: 20px 5px;
    text-align: center;
    line-height: 1.5;
    font-size: 14px;
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
  }
  .preview {
    padding: 20px;
  }
}
</style>
