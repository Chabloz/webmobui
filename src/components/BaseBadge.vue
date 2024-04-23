<script setup>
import { computed } from 'vue';

  const props = defineProps({
    label: {
      type: String,
      required: true
    }
  });

  // generate a uniqe HSL color from the label as a ref
  const color = computed(() => {
    const hash = props.label.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    const h = hash % 360;
    return `hsl(${h}, 50%, 50%)`;
  });

</script>

<template>
  <span>
    {{ label }}
  </span>
</template>

<style scoped>
  span {
    display: inline-block;
    padding: 0.4rem 0.5rem;
    background-color: v-bind(color);
    border-radius: 1rem;
    color: white;
  }
</style>