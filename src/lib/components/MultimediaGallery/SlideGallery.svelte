<!--
@component
SlideGallery.svelte — A horizontal, tap-navigated gallery container for
Instagram Stories-style multimedia presentations.

Displays one slide at a time with tap-to-advance navigation (tap right
two-thirds to go forward, left third to go back) and dot indicators at
the bottom showing the current position.

On desktop viewports (768px+), the gallery is constrained to a phone-like
aspect ratio (9:16) and centered on a dark background, similar to how
Instagram displays Stories on the web.

USAGE EXAMPLE:
<SlideGallery>
  <TitleSlide headline="My Story" intro="A photo essay." byline="Jane Doe" />
  <PhotoSlide photo={{ filename: 'hero.jpg', title: 'The Scene', caption: '...', credit: 'Jane Doe' }} />
  <TextSlide slide={{ headline: 'Context', body: 'Some background...' }} />
  <CreditsSlide><h2>Credits</h2><p>Thanks to...</p></CreditsSlide>
</SlideGallery>
-->
<script>
  let { children } = $props();

  let currentSlide = $state(0);
  let totalSlides = $state(0);
  let galleryEl;

  $effect(() => {
    if (typeof window === 'undefined' || !galleryEl) {
      return;
    }

    totalSlides = galleryEl.querySelectorAll('[data-slide]').length;
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  function goNext() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    }
  }

  function goPrev() {
    if (currentSlide > 0) {
      currentSlide--;
    }
  }

  function handleKeydown(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      goNext();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      goPrev();
    }
  }

  function handleGalleryClick(event) {
    const interactiveElement = event.target.closest(
      'a, button, input, textarea, select, label'
    );

    if (interactiveElement || !galleryEl) {
      return;
    }

    const rect = galleryEl.getBoundingClientRect();
    const clickX = event.clientX - rect.left;

    if (clickX <= rect.width / 3) {
      goPrev();
    } else {
      goNext();
    }
  }

  function handleGalleryKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goNext();
    }
  }
</script>

<div class="gallery-wrapper">
  <div
    class="gallery"
    bind:this={galleryEl}
    role="button"
    tabindex="0"
    aria-label="Slide gallery"
    onclick={handleGalleryClick}
    onkeydown={handleGalleryKeydown}
  >
    <div
      class="slides-track"
      style="transform: translateX(-{currentSlide * 100}%)"
    >
      {@render children()}
    </div>

    {#if totalSlides > 1}
      <div class="dots" aria-label="Slide indicators">
        {#each Array.from({ length: totalSlides }, (_, i) => i) as i (i)}
          <span
            class="dot"
            class:active={i === currentSlide}
            aria-label="Slide {i + 1}"
            aria-current={i === currentSlide ? 'true' : undefined}
          ></span>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use '../../styles' as *;

  .gallery-wrapper {
    height: 100dvh;
    background: black;
    container-type: inline-size;
    overflow: hidden;
  }

  .gallery {
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .slides-track {
    display: flex;
    height: 100%;
    transition: transform 0.3s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .slides-track {
      transition: none;
    }
  }

  .gallery :global(a),
  .gallery :global(button),
  .gallery :global(input),
  .gallery :global(select),
  .gallery :global(textarea) {
    cursor: auto;
  }

  .dots {
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    z-index: 5;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    opacity: 0.4;
    transition: opacity 0.2s ease;
  }

  .dot.active {
    opacity: 1;
    background: var(--color-accent);
  }
</style>
