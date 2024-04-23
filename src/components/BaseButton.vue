<script setup>

</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    background: none;
    color: black;
    padding: 0.2rem 0.4rem;
    border-radius: 1rem;
    border: 1px solid black;
    cursor: pointer;
    margin: 0 0.5rem;
  }
</style>