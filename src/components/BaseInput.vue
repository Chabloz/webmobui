<script setup>
  const model = defineModel();
</script>

<template>
  <input v-model="model"/>
</template>

<style scoped>
  input {
    padding: 0.3rem;
  }
</style>