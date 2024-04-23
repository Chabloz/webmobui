<script setup>
  import { orderedTags, removeTag, addTag } from '../stores/bookmarks.js';
  import BaseBadge from './BaseBadge.vue';
  import BaseButton from './BaseButton.vue';
  import BaseInput from './BaseInput.vue';

  const newTag = defineModel();

  function addNewTag() {
    addTag(newTag.value);
    newTag.value = '';
    document.querySelector('input').focus();
  }

</script>

<template>
  <form @submit.prevent="addNewTag()">
    <BaseInput
      v-model="newTag"
      placeholder="Add a tag"
      type="text"
      required
    />
    <BaseButton type="submit">Add</BaseButton>
  </form>
  <ul>
    <li v-for="tag in orderedTags" :key="tag">
      <BaseBadge :label="tag"></BaseBadge>
      <BaseButton @click="removeTag(tag)">✖</BaseButton>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    display: grid;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    width: max-content;
  }
  form {
    margin: 0 auto;
    width: max-content;
    margin-bottom: 1rem;
  }
</style>