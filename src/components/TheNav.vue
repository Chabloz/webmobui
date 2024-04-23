<script setup>
  defineProps({
    routes: {
      type: Array,
      required: true,
    }
  });
</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <a :href="route.anchor">{{ route.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    background-color: #333333dc;
    color: white;
    padding: 1rem;
    text-align: center;
    border-top: 1px solid white;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
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