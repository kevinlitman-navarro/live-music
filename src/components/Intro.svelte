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
</div>

<div class="intro">
  <p>{copy.Intro1}</p>
  <p>{copy.Intro2}</p>
  <p>{copy.Intro3}</p>
</div>

<div class="dylan">
  <p>{copy.BD1}</p>
  <p>{copy.BD2}</p>
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
        <Namecard
          track_name_live="Blowin' in the Wind - Live at LA Forum, Inglewood, CA - February 1974"
          track_name_studio="Blowin' in the Wind"
          artist_name_studio="Bob Dylan" />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/ecdc10e9820be7f90d3234d8c501122d98346140?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27355ecddc0466561dd83c773e4"
          label="LIVE" />
      </div>
    </div>
  {:else}
    <div class="loader"></div>
  {/if}
  <p>{copy.BD3}</p>
</div>

<div class="theads">
  <p>{copy.TH1}</p>
  <!-- <p>{copy.TH2}</p> -->
  {#if $song}
    <div
      class="playercard"
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}">
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/cfd849c6c572e6684266dd55cd21fd7e69f2db58?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27352b09f0ce4f200b1dcae2fa6"
          label="STUDIO" />
      </div>
      <div class="namecard">
        <Namecard
          track_name_live="Heaven - Live"
          track_name_studio="Heaven - 2003 Remaster"
          artist_name_studio="Talking Heads" />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/9a276e396584e27f75ab7440f4a9bf48aecf6543?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b2734436f2e7c93002ad0eb9716a"
          label="LIVE" />
      </div>
    </div>
  {:else}
    <div class="loader"></div>
  {/if}
</div>

<div class="aretha">
  <p>{copy.AF1}</p>
  {#if $song}
    <div
      class="playercard"
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}">
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/b0d0b4ec8963779239654542a0b33d25caf38156?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b2736aa9314b7ddfbd8f036ba3ac"
          label="STUDIO" />
      </div>
      <div class="namecard">
        <Namecard
          track_name_live="Respect"
          track_name_studio="Respect - Live at Fillmore West, San Francisco, February 5, 1971"
          artist_name_studio="Aretha Franklin" />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/063c482557787e400891b0da4cc279de251c6ba2?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27329b8d473ea845365e9a0ea22"
          label="LIVE" />
      </div>
    </div>
  {:else}
    <div class="loader"></div>
  {/if}
</div>

<div class="preamble">
  <p>{copy.Jukebox1}</p>
</div>

<style>
  .example {
    display: flex;
    margin: auto;
  }

  p {
    max-width: 40rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 1.5em
  }

  .top {
    text-align: center;
    margin: 0 auto;
    padding: 0 0 3rem 0;
  }

  .top p {
    font-family: var(--narrow);
  }

  .playercard {
    display: flex;
    visibility: hidden;
    max-width: 50rem;
    margin: 4rem auto;
    background-color: #fefbf7;
    border: #bfb2a2;
    border-style: solid;
    border-width: 2px;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-shadow: 0px 2px 10px rgba(191, 178, 162, 0.25);
  }

  .player {
    background-color: #fefbf7;
  }

  .namecard {
    margin: 0 10px;
    padding: 1rem;
    height: 100%;
    min-width: 50%;
    max-width: 50%;
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
