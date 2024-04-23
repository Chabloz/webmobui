import { useTags } from "../composables/tags";
import { useBookmarks } from "../composables/bookmarks";

console.log('init store');

export const {
  orderedTags,
  addTag,
  removeTag,
} = useTags();

export const {
  orderedBookmarks,
  addBookmark,
  removeBookmark,
} = useBookmarks();

// addTag('JS');
// addTag('php');
// addTag('dev');
// addBookmark({title: 'Vue 3', url: 'https://v3.vuejs.org/', tags: ['JS', 'DEV']});