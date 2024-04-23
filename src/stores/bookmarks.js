import { useTags } from "../composables/tags";

console.log('init store');

export const {
  orderedTags,
  addTag,
  removeTag,
} = useTags();

// addTag('JS');
// addTag('php');
// addTag('dev');
