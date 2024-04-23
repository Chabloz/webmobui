import { useJsonStorage } from './jsonStorage.js';
import { computed } from 'vue';

export function useBookmarks() {
  const { data: bookmarks } = useJsonStorage('bookmarks', []);
  const orderedBookmarks = computed(() => {
    return bookmarks.value.sort((a, b) => a.title.localeCompare(b.title));
  });

  function addBookmark({title, url, tags = []}) {
    // check if the bookmark already exists
    if (bookmarks.value.some(b => b.url === url)) return;
    bookmarks.value.push({title, url, tags});
  }

  function removeBookmark(bookmark) {
    // find the bookmark by it's url
    const index = bookmarks.value.findIndex(b => b.url === bookmark.url);
    if (index === -1) return;
    bookmarks.value.splice(index, 1);
  }

  return {
    orderedBookmarks,
    addBookmark,
    removeBookmark
  };
}