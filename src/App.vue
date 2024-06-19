<template>
  <div class="body">
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>

      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  const theme = localStorage.getItem('theme');
  window.document.documentElement.setAttribute('data-theme', theme ?? 'default');
});
</script>
