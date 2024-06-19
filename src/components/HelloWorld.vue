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
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      rel="noopener noreferrer"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>

  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener noreferrer"
      >Volar</a
    >
    in your IDE for a better DX
  </p>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <form>
    主题切换:
    <input
      id="default"
      v-model="type"
      type="radio"
      name="theme"
      value="default"
      @change="onChange"
    />

    <label for="default">default</label>

    <input id="orange" v-model="type" type="radio" name="theme" value="orange" @change="onChange" />

    <label for="orange">orange</label>

    <input id="red" v-model="type" type="radio" name="theme" value="red" @change="onChange" />

    <label for="red">red</label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
const type = ref(localStorage.getItem('theme') ?? 'default');
function onChange() {
  localStorage.setItem('theme', type.value);
  document.documentElement.setAttribute('data-theme', type.value);
}
</script>
