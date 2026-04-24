<!--
@component
TitleSlide.svelte — The opening slide of a multimedia gallery.

Displays a centered headline, introductory text, byline, and a
"Scroll to begin" hint on a full-screen black background.

USAGE EXAMPLE:
<TitleSlide
  headline="Life on the L Train"
  intro="A photo essay documenting commuters on New York's busiest crosstown line."
  byline="By Jane Doe"
/>
-->
<script>
  let {
    headline, // The main gallery title
    intro, // Introductory text below the headline
    byline, // Author attribution
  } = $props();
</script>

<div class="slide" data-slide>
  <div class="masthead">
    <a
      href="https://www.nycitynewsservice.com/"
      class="logo"
      aria-label="NYCity News Service"
    >
      <span class="logo-text">
        <span class="logo-nycity">NYCITY</span><span class="logo-news-service"
          >News Service</span
        >
      </span>
    </a>
  </div>
  <div class="content">
    <h1>{headline}</h1>
    <p class="intro">{intro}</p>
    <p class="byline">{byline}</p>
  </div>
  <div class="scroll-hint">Tap to begin →</div>
</div>

<style lang="scss">
  @use '../../styles' as *;

  .slide {
    height: 100%;
    flex: 0 0 100%;
    background: #000000;
    display: flex;
    flex-direction: column;
  }

  .masthead {
    display: flex;
    justify-content: center;
    padding: var(--spacing-xs) var(--spacing-sm);
    background: #0033a1;
    border-bottom: 1px solid #002266;
  }

  .logo {
    display: inline-block;
    text-decoration: none;
  }

  .logo:hover {
    text-decoration: none;
  }

  .logo:focus-visible {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }

  .logo-text {
    display: inline-flex;
    align-items: stretch;
    border: 1px solid #ffffff;
  }

  .logo-nycity {
    background-color: #ffffff;
    color: #0033a1;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-extrabold);
    padding: var(--logo-padding-mobile);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  .logo-news-service {
    color: #ffffff;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-light);
    padding: var(--logo-padding-mobile);
    letter-spacing: var(--letter-spacing-tight);
    display: flex;
    align-items: center;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    color: var(--color-paper);
    text-align: center;
  }

  h1 {
    font-family: var(--font-serif);
    font-size: 2rem;
    line-height: 1.2;
    margin: 0 0 1rem;
    color: var(--color-paper);
    letter-spacing: 0.03em;
    text-wrap: balance;

    @container (min-width: 768px) {
      font-size: 3rem;
      letter-spacing: 0.04em;
    }
  }

  .intro {
    font-family: var(--font-serif);
    font-size: 1.0625rem;
    line-height: 1.7;
    color: #cccccc;
    margin: 0 0 1.5rem;

    @container (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.75;
    }
  }

  .byline {
    font-family: var(--font-serif);
    font-size: 0.875rem;
    font-style: italic;
    color: #aaaaaa;
    margin: 0;
    letter-spacing: 0.04em;

    @container (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .scroll-hint {
    font-size: 0.75rem;
    color: #888888;
    margin: 0;
    padding-bottom: 3.5rem;
    display: flex;
    justify-content: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
</style>
