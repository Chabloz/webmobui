<script setup>
  import { ref, computed } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';
  import TheBookmarksList from './components/TheBookmarksList.vue';
  import TheTagsList from './components/TheTagsList.vue';


  const routes = [
    {
      anchor: '#bookmarks',
      name: 'Bookmarks',
      comp: TheBookmarksList
    },
    {
      anchor: '#tags',
      name: 'Tags',
      comp: TheTagsList
    }
  ];

  const currentPath = ref(window.location.hash);

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  })

  const currentView = computed(() => {
    return routes.find(route => route.anchor === currentPath.value)?.comp;
  })


</script>

<template>
  <TheHeader>
    Bookmarks
  </TheHeader>
  <TheNav :routes="routes" />
  <component :is="currentView" />
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Verdana, sans-serif;
  }
  a {
    text-decoration: none;
    color: tomato;
  }
  a:hover {
    text-decoration: underline;
  }

</style>