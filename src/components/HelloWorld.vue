<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>

  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <form>
    主题切换:

    <input
      id="light"
      v-model="type"
      type="radio"
      name="gender"
      value="light"
      checked
      @change="onChange"
    />

    <label for="light">light</label>

    <input id="dark" v-model="type" type="radio" name="gender" value="dark" @change="onChange" />

    <label for="dark">dark</label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const type = ref('light');
function onChange() {
  document.documentElement.setAttribute('prefers-color-scheme', type.value);
}
</script>
