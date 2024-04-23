import { useJsonStorage } from "./jsonStorage.js";
import { computed } from "vue";

export function useBookmarks(storageName = 'bookmarks') {
  const { data: bookmarks } = useJsonStorage(storageName, []);
  const orderedBookmarks = computed(() => {
    return bookmarks.value.sort((a, b) => a.title.localeCompare(b.title))
  });

  function addBookmark({title, url, tags = []}) {
    bookmarks.value.push({title, url, tags});
  }

  function removeBookmark(bookmark) {
    bookmarks.value = bookmarks.value.filter((b) => b !== bookmark);
  }

  return {
    orderedBookmarks,
    addBookmark,
    removeBookmark,
  };
}