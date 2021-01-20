<script>
  import copy from "../data/copy.json";
  import Player from "./Player.svelte";
  import { song } from "../stores/jukebox.js";
  import { ready } from "../stores/jukebox.js";
  import Namecard from "./Namecard.svelte";
</script>

<div class="top">
  <h1>{copy.hed}</h1>
  <h3>{copy.dek}</h3>
  <p>{copy.byline}</p>
  <p>{copy.byline2}</p>
</div>

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
    <div
      class="playercard"
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}">
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/fc1dd43539f9fbdaa17a4b012d61d50864e6f1fa?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573"
          label="STUDIO" />
      </div>
      <div class="namecard">
        <Namecard />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/ecdc10e9820be7f90d3234d8c501122d98346140?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27355ecddc0466561dd83c773e4"
          label="LIVE" />
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

  p {
    max-width: 40%;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .top {
    text-align: center;
    margin: 0 auto;
  }

  .playercard {
    display: flex;
    visibility: hidden;
    max-width: 60em;
    margin: 0 auto;
    background-color: #fefbf7;
    height: fit-content;
    border: #bfb2a2;
    border-style: solid;
    border-width: 2px;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .player {
    background-color: #fefbf7;
  }

  .namecard {
    margin: 0 10px;
    padding: 1rem;
  }
</style>
