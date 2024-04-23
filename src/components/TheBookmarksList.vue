<script setup>
  import { computed, ref } from 'vue';
  import { orderedBookmarks, addBookmark, removeBookmark, orderedTags } from '../stores/bookmarks.js';
  import BaseBadge from './BaseBadge.vue';
  import BaseButton from './BaseButton.vue';
  import BaseInput from './BaseInput.vue';

  const search = defineModel('search');
  const title = defineModel('title');
  const url = defineModel('url');
  const tags = ref([]);

  const filteredBookmarks = computed(() => {
    if (!search.value) return orderedBookmarks.value;
    return orderedBookmarks.value.filter(bookmark => {
      return bookmark.title.toUpperCase().includes(search.value.toUpperCase());
    })
  })

  function addNewBookmark() {
    addBookmark({
      title: title.value,
      url: url.value,
      tags: tags.value,
    });
    title.value = '';
    url.value = '';
    tags.value = [];
    document.querySelector('input').focus();
  }

  function toggleTags(tag) {
    if (tags.value.includes(tag)) {
      tags.value = tags.value.filter(t => t != tag);
    } else {
      tags.value.push(tag);
    }
  }
</script>

<template>
  <form @submit.prevent="addNewBookmark()">
    <BaseInput
      v-model="title"
      placeholder="Title"
      type="text"
      required
    />
    <BaseInput
      v-model="url"
      placeholder="Url"
      type="url"
      required
    />
    <div class="badge-list">
        <BaseBadge v-for="tag in orderedTags"
          :label="tag"
          :active="tags.includes(tag)"
          @click="toggleTags(tag)"
        ></BaseBadge>
    </div>
    <BaseButton type="submit">Add</BaseButton>
  </form>

  <BaseInput type="text" placeholder="search ..." v-model="search"></BaseInput>
  <ul>
    <li v-for="bookmark in filteredBookmarks">
      <a :href="bookmark.url" target="_blank">
        <img :src="`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${bookmark.url}&size=16`">
        <span class="title"> {{ bookmark.title }}</span>
      </a>
      <BaseButton @click="removeBookmark(bookmark)">✖</BaseButton>
      <span v-for="tag in bookmark.tags"
        class="badge"
        :key="tag"
      >
        <BaseBadge :label="tag"></BaseBadge>
      </span>
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
    display: grid;
    gap: 1rem;
  }
  .badge {
    display: inline-block;
    margin-left: 0.5rem;
  }
  .title {
    font-size: 1.3rem;
  }
  .badge-list > *{
    margin-right: 1rem;
  }
</style>