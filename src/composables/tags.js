import { computed, ref } from 'vue';
import { useJsonStorage } from './jsonStorage.js';

export function useTags(storageName = 'tags') {
  const {data: tags} = useJsonStorage(storageName, []);
  const orderedTags = computed(() => tags.value.sort());

  function addTag(tag) {
    // tag are always in uppercase letter
    tag = tag.toUpperCase();
    // trim whitespace
    tag = tag.trim();
    // tag must be unique
    if (tags.value.includes(tag)) {
      return;
    }
    tags.value.push(tag);
  }

  function removeTag(tag) {
    tag = tag.toUpperCase();
    tags.value = tags.value.filter((t) => t !== tag);
  }

  return {
    orderedTags,
    addTag,
    removeTag,
  };

}