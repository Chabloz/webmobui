import { ref, computed } from 'vue';

export function useTags() {
  const tags = ref([]);
  const orderedTags = computed(() => {
    return tags.value.sort((a, b) => a.localeCompare(b));
  });

  function addTag(tag) {
    tag = tag.trim().toUpperCase();
    if (tags.value.includes(tag)) return;

    tags.value.push(tag);
  }

  function removeTag(tag) {
    tag = tag.trim().toUpperCase();
    const index = tags.value.indexOf(tag);
    if (index === -1) return;

    tags.value.splice(index, 1);
  }


  return {
    orderedTags,
    addTag,
    removeTag
  };
}