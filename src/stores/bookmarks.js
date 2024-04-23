import { useTags } from "../composables/tags";
import { useBookmarks } from "../composables/bookmarks";

export const {
  orderedTags,
  addTag,
  removeTag
} = useTags();

export const {
  orderedBookmarks,
  addBookmark,
  removeBookmark
} = useBookmarks();

// addTag('JS');
// addTag('Js');
// addTag(' js  ');
// addTag('PHP');
// removeTag('Js');
// const bookmark = { title: 'Vue 3', url: 'https://v3.vuejs.org/' }
// addBookmark(bookmark);
// addBookmark({ title: 'Vue 2', url: 'https://vuejs.org/v2/guide/' });
// addBookmark({ title: 'React', url: 'https://reactjs.org/' });
// removeBookmark(bookmark);
// console.log(orderedTags.value); // ["JS", "PHP"]