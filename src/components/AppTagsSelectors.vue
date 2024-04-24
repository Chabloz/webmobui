<script setup>
  import BaseBadge from './BaseBadge.vue';
  import { orderedTags } from '../stores/bookmarks.js';

  const tags = defineModel({type: Array});

  function toogleTag(tag) {
    if (tags.value.includes(tag)) {
      tags.value = tags.value.filter((t) => t !== tag);
    } else {
      tags.value.push(tag);
    }
  }
</script>

<template>
  <div>
    <BaseBadge
      v-for="tag of orderedTags"
      :label="tag"
      :active="tags.includes(tag)"
      @click="toogleTag(tag)"
    ></BaseBadge>
  </div>
</template>

<style scoped>
  div > * {
    cursor: pointer;
  }
</style>