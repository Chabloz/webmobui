<script setup>
  import { ref, computed } from 'vue';
  import { orderedBookmarks, removeBookmark } from '../stores/bookmarks.js';
  import BaseBadge from './BaseBadge.vue';
  import BaseButton from './BaseButton.vue';
  import AddBookmarkForm from './AddBookmarkForm.vue';
  import AppTagsSelectors from './AppTagsSelectors.vue';
  import BaseInput from './BaseInput.vue';

  const search = defineModel('search');
  const showForm = ref(false);
  const tags = ref([]);

  const filteredBookmarks = computed(() => {
    let filtered = orderedBookmarks.value;
    if (search.value) {
      filtered = orderedBookmarks.value.filter((bookmark) => {
        return bookmark.title.toLowerCase().includes(search.value.toLowerCase());
      });
    }
    if (tags.value.length === 0) return filtered;
    return filtered.filter((bookmark) => {
      return tags.value.every((tag) => bookmark.tags.includes(tag));
    });
  });
</script>

<template>
  <div class="grid">
    <AddBookmarkForm v-if="showForm" @submit="showForm = false"/>
    <BaseButton @click="showForm = !showForm">{{ showForm ? 'Cancel' : '+' }}</BaseButton>
    <BaseInput v-if="!showForm" v-model="search" type="text" placeholder="Search" />
  </div>
  <template v-if="!showForm">
    <p><AppTagsSelectors v-model="tags" /></p>
    <p v-if="filteredBookmarks.length === 0">No bookmarks found</p>
    <div class="grid-3-col">
      <template v-for="bookmark in filteredBookmarks">
        <a href="bookmark.url" target="_blank">
          <img :src="`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${bookmark.url}&size=16`">{{ bookmark.title }}
        </a>
        <BaseButton @click="removeBookmark(bookmark)">✖</BaseButton>
        <div>
          <BaseBadge v-for="tag in bookmark.tags" :label="tag" :key="tag" />
        </div>
      </template>
    </div>
  </template>
</template>

<style scoped>
  img {
    padding-right: 0.5rem;
  }
  .grid, .grid-3-col {
    display: grid;
    gap: 1rem;
    grid-template-columns: min-content;
    padding: 1rem 0;
    max-width: min(100%, 27rem);
    margin: 0 auto;
    justify-content: center;
  }
  p {
    text-align: center;
    margin-bottom: 1rem;
  }
  .grid-3-col {
    grid-template-columns: 3fr 1fr 2fr;
    align-items: center;
  }
</style>