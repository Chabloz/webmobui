<script setup>
  defineProps({
    routes: {
     type: Object,
     required: true,
    },
  })
</script>

<template>
  <nav>
    <ul>
      <li v-for="(route, key) in routes" :key="key">
        <a :href="key">{{ route.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    background-color: #333333d5;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline;
    margin-right: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>