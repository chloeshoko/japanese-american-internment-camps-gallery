import story from '$lib/data/story.json';

export function load() {
  return {
    showHeader: false,
    showFooter: false,
    story,
  };
}