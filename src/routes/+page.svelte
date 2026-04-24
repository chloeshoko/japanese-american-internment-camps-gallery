<script>
  import SlideGallery from '$lib/components/MultimediaGallery/SlideGallery.svelte';
  import TitleSlide from '$lib/components/MultimediaGallery/TitleSlide.svelte';
  import PhotoSlide from '$lib/components/MultimediaGallery/PhotoSlide.svelte';
  import TextSlide from '$lib/components/MultimediaGallery/TextSlide.svelte';
  import CreditsSlide from '$lib/components/MultimediaGallery/CreditsSlide.svelte';

  let { data } = $props();
</script>

<SlideGallery>
  <TitleSlide
    headline="Japanese-American Internment at Manzanar"
    intro="Ansel Adams's 1943 Manzanar Collection documents the daily lives and resilience of Japanese-Americans interned at a California relocation center during World War II"
  />

  {#each data.story as slide (slide.id)}
    {#if slide.type === 'photo'}
      <PhotoSlide photo={slide} />
    {:else if slide.type === 'text'}
      <TextSlide {slide} />
    {/if}
  {/each}

  <CreditsSlide>
    <h2>About This Collection</h2>
    <p>
      The Manzanar photographs are held by the Library of Congress and are free
      for anyone to download and reuse. High-resolution scans are available in
      the
      <a
        href="https://www.loc.gov/collections/ansel-adams-manzanar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prints &amp; Photographs Division</a
      >'s digital collection.
    </p>
  </CreditsSlide>
</SlideGallery>
