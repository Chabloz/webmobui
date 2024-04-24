<script setup>
  import { ref } from 'vue';

  import { addBookmark, orderedTags } from '../stores/bookmarks.js';

  import BaseButton from './BaseButton.vue';
  import BaseInput from './BaseInput.vue';
  import AppTagsSelectors from './AppTagsSelectors.vue';

  const title = ref('');
  const url = ref('');
  const tags = ref([]);

  function addNewBookmark() {
    addBookmark({ title: title.value, url: url.value, tags: tags.value});
    title.value = '';
    url.value = '';
    tags.value = [];
  }

  function toogleTag(tag) {
    if (tags.value.includes(tag)) {
      tags.value = tags.value.filter((t) => t !== tag);
    } else {
      tags.value.push(tag);
    }
  }
</script>

<template>
  <form @submit.prevent="addNewBookmark()">
    <BaseInput v-model="title" type="text" required placeholder="title" name="title" />
    <BaseInput v-model="url" type="url" required placeholder="https://" name="url" />
    <AppTagsSelectors v-model="tags" />
    <BaseButton>Add</BaseButton>
  </form>
</template>

<style scoped>
  form {
    display: grid;
    gap: 1rem
  }
  form > div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>