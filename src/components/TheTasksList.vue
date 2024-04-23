<script setup>
  import { orderedTags, removeTag } from '../stores/bookmarks.js';
  import BaseBadge from './BaseBadge.vue';
  import BaseButton from './BaseButton.vue';
  import AppTaskForm from './AppTaskForm.vue';
</script>

<template>
  <div class="add-form">
    <AppTaskForm />
  </div>
  <div>
    <template v-for="tag in orderedTags">
      <BaseBadge  :label="tag" />
      <BaseButton @click="removeTag(tag)">✖</BaseButton>
    </template>
  </div>
</template>

<style scoped>
  .add-form {
    padding-top: 1rem;
    margin: 0 auto;
  }
  div {
    display: grid;
    gap: 1rem;
    width: min-content;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 1rem;
  }
</style>