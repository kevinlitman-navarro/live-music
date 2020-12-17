<script>
  import Meta from "./Meta.svelte";
  import Demo from "./demo/Demo.svelte";
  import Header from "./pudding/Header.svelte";
  import Footer from "./pudding/Footer.svelte";
  import Jukebox from "./Jukebox.svelte";
  import Intro from "./Intro.svelte";
</script>

<Meta />

<Header />

<section class="story">
  <Intro />
  <Jukebox />
</section>

<Footer />

<style>
  .story {
    background-color: #bfb2a2;
  }
</style>
