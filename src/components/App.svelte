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
      <div class="loader"></div>
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
    height: 100vh;
  }

  .intro {
    max-width: 100%;
    position: flex;
    margin: auto;
    padding-top: 1rem;
    background-color: #fefbf7;
    padding-bottom: 2rem;
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
