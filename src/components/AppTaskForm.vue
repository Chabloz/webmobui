<script setup>
  import BaseButton from './BaseButton.vue';
  import BaseInput from './BaseInput.vue';
  import { addTag } from '../stores/bookmarks.js';

  const label = defineModel();

  function addNewTag() {
    addTag(label.value);
    label.value = '';
  }
</script>

<template>
  <form @submit.prevent="addNewTag()">
    <BaseInput v-model="label" type="text" placeholder="Add a new task" />
    <BaseButton>Add</BaseButton>
  </form>
</template>

<style scoped>
  form {
    display: grid;
    gap: 1rem
  }
</style>