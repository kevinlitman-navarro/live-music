<script>
  import Meta from "./Meta.svelte";
  import Demo from "./demo/Demo.svelte";
  import Header from "./pudding/Header.svelte";
  import Footer from "./pudding/Footer.svelte";
  import Jukebox from "./Jukebox.svelte";
  import { ready } from "../stores/jukebox.js";
  import Intro from "./Intro.svelte";
  import Methods from "./Methods.svelte";
</script>

<Meta />
<section class="header">
  <Header />
</section>

<section class="story">
  <section class="intro">
    <Intro />
  </section>
  <section class="jukebox-container">
    {#if !$ready}
      <p>loading jukebox</p>
    {/if}
    <section
      class="jukebox"
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}">
      <Jukebox />
    </section>
  </section>
  <section class="methods">
    <Methods />
  </section>
</section>

<Footer />

<style>
  .header {
    background-color: var(--text-main);
  }
  .jukebox {
    background-color: #bfb2a2;
    visibility: hidden;
  }

  .intro {
    max-width: 100%;
    position: flex;
    margin: auto;
    padding-top: 1rem;
    background-color: #fefbf7;
    padding-bottom: 2rem;
  }
</style>
