<!--
@component
PhotoSlide.svelte — A full-bleed photo slide with a gradient caption overlay.

Renders an image that fills the viewport with object-fit: cover. A gradient
overlay at the bottom displays the title, caption, and photo credit.

USAGE EXAMPLE:
<PhotoSlide photo={{
  filename: 'subway-platform.jpg',
  title: 'Waiting for the L',
  caption: 'Commuters line the platform at Bedford Avenue during morning rush.',
  credit: 'Photo by Jane Doe'
}} />
-->
<script>
  import { base } from '$app/paths';

  let {
    photo, // Object with filename, title, caption, and credit
  } = $props();
</script>

<div class="slide" data-slide data-photo>
  <img src="{base}/photos/{photo.filename}" alt={photo.title} />
  <div class="caption">
    <div class="caption-inner">
      <h2>{photo.title}</h2>
      <p>{photo.caption}</p>
      <span class="credit">{photo.credit}</span>
    </div>
  </div>
</div>

<style lang="scss">
  .slide {
    height: 100%;
    flex: 0 0 100%;
    position: relative;
    background: var(--color-archive-black);
    display: flex;
    flex-direction: column;
  }

  .slide img {
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
    object-position: center;
  }

  .caption {
    flex-shrink: 0;
    padding: 1rem 1rem 1.5rem;
    background: linear-gradient(
      to top,
      rgba(18, 16, 13, 0.88) 0%,
      rgba(18, 16, 13, 0.55) 42%,
      transparent 100%
    );
    color: var(--color-paper);
  }

  .caption-inner {
    max-width: 48rem;
  }

  .caption h2 {
    font-family: var(--font-serif);
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    line-height: 1.3;
    color: #ffffff;
    letter-spacing: 0.03em;

    @container (min-width: 768px) {
      font-size: 1.9rem;
      margin-bottom: 0.75rem;
      letter-spacing: 0.04em;
    }
  }

  .caption p {
    margin: 0 0 0.5rem;
    font-size: 0.9375rem;
    line-height: 1.5;
    color: #cccccc;

    @container (min-width: 768px) {
      font-size: 1.0625rem;
      line-height: 1.65;
      margin-bottom: 0.75rem;
    }
  }

  .caption .credit {
    font-size: 0.75rem;
    color: #999999;
    letter-spacing: 0.04em;

    @container (min-width: 768px) {
      font-size: 0.8125rem;
    }
  }
</style>
