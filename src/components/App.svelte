<script>
  import Meta from "./Meta.svelte";
  import Demo from "./demo/Demo.svelte";
  import Header from "./pudding/Header.svelte";
  import Footer from "./pudding/Footer.svelte";
  import Jukebox from "./Jukebox.svelte";
  import Intro from "./Intro.svelte";
  import Methods from "./Methods.svelte";
</script>

<Meta />

<Header />

<section class="story">
  <section class="intro">
    <Intro />
  </section>
  <section class="jukebox">
    <Jukebox />
  </section>
  <section class="methods">
    <Methods />
  </section>
</section>

<Footer />

<style>
  .story {
    background-color: #bfb2a2;
  }

  .intro {
    max-width: 50%;
    position: flex;
    margin: auto;
    padding-top: 1rem;
  }
</style>
