<script setup>

</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    background-color: none;
    padding: .6rem  .7rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
  }
  button:hover {
    background-color: #eee;
  }
  button:active {
    background-color: #eee;
  }
</style>