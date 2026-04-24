<!--
@component
TextSlide.svelte — A centered text slide for narrative context between photos.

Displays a headline and body paragraph on a full-screen black background,
providing editorial context within a multimedia gallery sequence.

USAGE EXAMPLE:
<TextSlide slide={{
  headline: 'The Commute',
  body: 'Every day, thousands of riders depend on the L train to cross between Brooklyn and Manhattan.'
}} />
-->
<script>
  let {
    slide, // Object with headline and body text
  } = $props();
</script>

<div class="slide" data-slide>
  <div class="content">
    <h2>{slide.headline}</h2>
    <p>{slide.body}</p>
  </div>
</div>

<style>
  .slide {
    height: 100%;
    flex: 0 0 100%;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    max-width: 560px;
    padding: 2rem 2rem 3rem;
    color: #ffffff;
    text-align: center;
  }

  h2 {
    font-family: var(--font-serif);
    font-size: 1.75rem;
    line-height: 1.2;
    margin: 0 0 1rem;
    letter-spacing: 0.03em;
    color: #ffffff;
    text-wrap: balance;
  }

  p {
    font-family: var(--font-serif);
    font-size: 1.0625rem;
    line-height: 1.7;
    color: #cccccc;
    margin: 0;
  }
</style>
