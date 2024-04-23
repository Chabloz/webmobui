<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
  });

  // Create a computed unique color for the label props
  // genberate a random HSL color fomr the label props
  const randomColor = computed(() => {
    const hue = Math.abs(hashCode(props.label)) % 360;
    console.log(hue);
    return `hsl(${hue}, 100%, 90%)`;
  });

  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

</script>

<template>
  <span>{{ label }}</span>
</template>

<style scoped>
  span {
    display: inline-block;
    background-color: v-bind(randomColor);
    color: white;
    padding: 0.5rem;
    margin: 0.25rem;
    border-radius: 1rem;
  }
</style>