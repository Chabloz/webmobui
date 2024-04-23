<script setup>
  import { orderedTags } from '../stores/bookmarks.js';
  import BaseBadge from './BaseBadge.vue';
</script>

<template>
  <BaseBadge v-for="tag in orderedTags" :label="tag" />
</template>

<style scoped>

</style>