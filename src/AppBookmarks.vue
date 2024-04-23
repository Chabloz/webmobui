<script setup>
  import { ref, computed } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';
  import TheBookmarksList from './components/TheBookmarksList.vue';
  import TheTasksList from './components/TheTasksList.vue';

  const routes = {
    '#bookmarks': {
      component: TheBookmarksList,
      label: 'Bookmarks',
    },
    '#tags': {
      component: TheTasksList,
      label: 'Tags',
    }
  }

  const currentPath = ref(window.location.hash)
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value]?.component ?? TheBookmarksList;
  })
</script>

<template>
  <TheHeader>Bookmarks</TheHeader>
  <TheNav :routes="routes" />
  <component :is="currentView" />
</template>

<style>
* {
  font-family: Verdana, sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>