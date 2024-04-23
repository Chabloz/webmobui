<script setup>
  import { computed } from 'vue';
  import { orderedBookmarks, removeBookmark } from '../stores/bookmarks.js';
  import BaseBadge from './BaseBadge.vue';
  import BaseButton from './BaseButton.vue';
  import AddBookmarkForm from './AddBookmarkForm.vue';
  import BaseInput from './BaseInput.vue';

  const search = defineModel('search');

  const filteredBookmarks = computed(() => {
    if (!search.value) return orderedBookmarks.value;
    return orderedBookmarks.value.filter((bookmark) => {
      return bookmark.title.toLowerCase().includes(search.value.toLowerCase());
    });
  });

</script>

<template>
  <div>
    <AddBookmarkForm />
  </div>
  <div>
    <BaseInput v-model="search" type="text" placeholder="Search" />
  </div>
  <div>
    <template v-for="bookmark in filteredBookmarks">
      <a href="bookmark.url" target="_blank">
        <img :src="`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${bookmark.url}&size=16`">
        {{ bookmark.title }}
      </a>
      <BaseButton @click="removeBookmark(bookmark)">✖</BaseButton>
      <div>
        <BaseBadge v-for="tag in bookmark.tags" :label="tag" :key="tag" />
      </div>
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
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 1rem;
    width: min-content;
  }
</style>