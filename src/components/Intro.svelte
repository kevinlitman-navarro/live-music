<script>
  import copy from "../data/copy.json";
  import Player from "./Player.svelte";
  import { song } from "../stores/jukebox.js";
  import Namecard from "./Namecard.svelte";
</script>

<div class="intro">
  <p>{copy.Intro1}</p>
  <p>{copy.Intro2}</p>
  <p>{copy.Intro3}</p>
</div>

<div class="dylan">
  <p>{copy.BD1}</p>
  <p>{copy.BD2}</p>
  <p>{copy.BD3}</p>
  {#if $song}
    <div class="example">
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/fc1dd43539f9fbdaa17a4b012d61d50864e6f1fa?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573"
          label="Studio" />
      </div>
      <div class="namecard">
        <Namecard />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/ecdc10e9820be7f90d3234d8c501122d98346140?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27355ecddc0466561dd83c773e4"
          label="Live" />
      </div>
    </div>
  {/if}
  <p>{copy.BD4}</p>
</div>

<style>
  .example {
    display: flex;
    margin: auto;
  }
</style>
