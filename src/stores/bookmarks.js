import { useTags } from "../composables/tags";

console.log('store tags.js init');

export const {
  orderedTags,
  addTag,
  removeTag
} = useTags();

// addTag('JS');
// addTag('Js');
// addTag(' js  ');
// addTag('PHP');
// removeTag('Js');
// console.log(orderedTags.value); // ["JS", "PHP"]