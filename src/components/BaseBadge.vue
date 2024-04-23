<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
  });

  const color = computed(() => {
    const hash = Array.from(props.label).reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const hue = hash % 360;
    // determine the lightness based on the active prop
    const lightness = 50;
    return `hsl(${hue}, 70%, ${lightness}%)`;
  });

</script>

<template>
  <span>{{ label }}</span>
</template>

<style scoped>
  span {
    display: inline-block;
    background-color: v-bind(color);
    color: white;
    padding: 0.5rem;
    margin: 0.25rem;
    border-radius: 1rem;
    text-align: center;
  }
</style>