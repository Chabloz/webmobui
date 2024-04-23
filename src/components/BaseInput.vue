<script setup>
  const model = defineModel()
</script>

<template>
  <input v-model="model">
</template>

<style scoped>
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }
</style>