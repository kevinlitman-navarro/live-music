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
<div class="line-horiz">
  <div class="mid-line"></div>
</div>

<section class="story">
  <section class="intro">
    <Intro />
  </section>
  <section class="jukebox-container">
    <div class="line-horiz">
      <div class="mid-line"></div>
    </div>
    {#if !$ready}
      <div class="loader"></div>
    {/if}
    <section
      class="jukebox"
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}">
      <Jukebox />
    </section>
    <div class="line-horiz">
      <div class="mid-line"></div>
    </div>
  </section>
  <section class="methods">
    <Methods />
  </section>
</section>

<Footer />

<style>
  .header {
    background-color: var(--jukebox-brown);
  }

  .jukebox {
    background-color: var(--jukebox-dark-tan);
    visibility: hidden;
  }

  .intro {
    width: calc(100% - 2rem);
    max-width: 80rem;
    border-left: 3px solid var(--jukebox-brown);
    border-right: 3px solid var(--jukebox-brown);
    position: flex;
    margin: 0 auto;
    background-color: var(--jukebox-light-tan);
    padding: 2rem 3rem;
  }

  .loader {
    border: 16px solid #BFB2A2; /* Light grey */
    border-top: 16px solid #D24939; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  .line-horiz {
    width: 100%;
    border-top: 3px solid var(--jukebox-brown);
    border-bottom: 3px solid var(--jukebox-brown);
    height: 1.5rem;
    display: flex;
    align-items: center;
  }

  .mid-line {
    width: 100%;
    border-top: 3px solid var(--jukebox-brown);
  }

  @media only screen and (max-width: 700px) {
    .intro {
      width: 100%;
      padding: 2rem 1rem; 
      border-left: none;
      border-right: 3px solid var(--jukebox-brown);
    }
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
