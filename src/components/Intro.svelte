<script>
  import copy from "../data/copy.json";
  import { csv } from "d3-fetch";
  import Player from "./Player.svelte";
  import { song } from "../stores/jukebox.js";
  import Table from "./Table.svelte";
  import { ready } from "../stores/jukebox.js";
  import Namecard from "./Namecard.svelte";
  import { onMount } from "svelte";
  import { get_slot_changes } from "svelte/internal";
  import headerShape from "../svg/pudding/header-shape.svg";

  let dylanData;

  onMount(() => {
    csv(
      "assets/data/final_data_0128/single_rows/18GiV1BaXzPVYpp9rmOg0E2Xc1Xd7q4bunmnYkwIwJGY.csv"
    ).then((selected) => {
      dylanData = selected[0];
      // dylanData = dylanData.map((d) => ({
      //   ...+d,
      // }));
    });
  });
</script>

<div class="top">
  <h2><span class="intro-hed">Introducing the</span><br /></h2>
  <div class="jukebox-logo">
    <div class="header-shape">
      {@html headerShape}
    </div>
    <h1>
      <span class="live-hed">Live Music</span><br />
      <span class="juke-hed">Analyst</span>
    </h1>
  </div>

  <p class="byline">
    {@html copy.byline}
  </p>
</div>

<div class="intro">
  <p>{copy.Intro1}</p>
  <p>{copy.Intro2}</p>
  <p>{copy.Intro3}</p>
</div>

<div class="dylan">
  <p>{copy.BD1}</p>
  <div class="table">
    <h4>Blowin' In the Wind — Song Characteristics</h4>
    {#if dylanData}
      <Table song="{dylanData}" highlight_row="energy" />
    {:else}
      <p>Loading data...</p>
    {/if}
  </div>
  <p>{copy.BD2}</p>
  {#if $song}
    <div
      class="playercard"
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}"
    >
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/fc1dd43539f9fbdaa17a4b012d61d50864e6f1fa?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573"
          label="STUDIO VERSION"
        />
      </div>
      <div class="namecard">
        <Namecard
          track_name_live="Blowin' in the Wind - Live at LA Forum, Inglewood, CA - February 1974"
          track_name_studio="Blowin' in the Wind"
          artist_name_studio="Bob Dylan"
        />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/ecdc10e9820be7f90d3234d8c501122d98346140?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27355ecddc0466561dd83c773e4"
          label="LIVE"
        />
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
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}"
    >
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/cfd849c6c572e6684266dd55cd21fd7e69f2db58?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27352b09f0ce4f200b1dcae2fa6"
          label="STUDIO"
        />
      </div>
      <div class="namecard">
        <Namecard
          track_name_live="Heaven - Live"
          track_name_studio="Heaven - 2003 Remaster"
          artist_name_studio="Talking Heads"
        />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/9a276e396584e27f75ab7440f4a9bf48aecf6543?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b2734436f2e7c93002ad0eb9716a"
          label="LIVE"
        />
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
      style="{$ready ? 'visibility:visible;' : 'visibilty:hidden;'}"
    >
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/b0d0b4ec8963779239654542a0b33d25caf38156?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b2736aa9314b7ddfbd8f036ba3ac"
          label="STUDIO"
        />
      </div>
      <div class="namecard">
        <Namecard
          track_name_live="Respect"
          track_name_studio="Respect - Live at Fillmore West, San Francisco, February 5, 1971"
          artist_name_studio="Aretha Franklin"
        />
      </div>
      <div class="player">
        <Player
          preview="https://p.scdn.co/mp3-preview/063c482557787e400891b0da4cc279de251c6ba2?cid=57a57fe2e5b44b2bab703613bb86725e"
          art="https://i.scdn.co/image/ab67616d0000b27329b8d473ea845365e9a0ea22"
          label="LIVE"
        />
      </div>
    </div>
  {:else}
    <div class="loader"></div>
  {/if}
</div>

<div class="preamble">
  <p>{copy.Tool1}</p>
</div>

<style>
  .jukebox-logo {
    position: relative;
    height: 19rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 55rem;
    margin: 0 auto;
  }

  .header-shape {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50rem;
    width: 100%;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    padding: 1rem 0 0 0;
  }

  h2 {
    margin: 0;
  }

  .intro-hed {
    font-family: var(--sans);
    letter-spacing: 0.75rem;
    text-indent: 0.75rem;
    font-size: 1.75rem;
    display: inline-block;
  }

  .live-hed {
    font-family: var(--sans);
    color: var(--jukebox-red);
    text-transform: uppercase;
    letter-spacing: 1.75rem;
    text-indent: 1.75rem;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    display: inline-block;
  }

  .juke-hed {
    font-family: var(--display);
    text-transform: uppercase;
    font-size: 7rem;
    margin: -1rem 0 0 0;
    line-height: 1.5;
    text-align: center;
    display: inline-block;
  }

  .table {
    max-width: 50rem;
    margin: 4rem auto;
    background-color: var(--jukebox-light-tan);
    border: var(--jukebox-dark-tan);
    border-style: solid;
    border-width: 2px;
    padding: 2rem;
    box-shadow: 0px 2px 10px rgba(191, 178, 162, 0.25);
  }

  p {
    max-width: 40rem;
    margin: 1rem auto;
    font-size: 1.2rem;
    line-height: 1.5em;
  }

  .top {
    text-align: center;
    margin: 0 auto;
    padding: 2rem 0 3rem 0;
  }

  .top p {
    font-family: var(--narrow);
  }

  .playercard {
    display: flex;
    visibility: hidden;
    max-width: 50rem;
    margin: 4rem auto;
    background-color: var(--jukebox-light-tan);
    border: var(--jukebox-dark-tan);
    border-style: solid;
    border-width: 2px;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-shadow: 0px 2px 10px rgba(191, 178, 162, 0.25);
  }

  .namecard {
    margin: 0 10px;
    padding: 1rem;
    height: 100%;
    min-width: 60%;
    max-width: 50%;
  }

  .loader {
    border: 16px solid #bfb2a2; /* Light grey */
    border-top: 16px solid #d24939; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  h4 {
    background: var(--jukebox-brown);
    font-family: var(--narrow);
    text-transform: uppercase;
    text-align: center;
    border-radius: 0.25rem;
    margin: 0 0 1rem 0;

    padding: 0.25rem 0;
    color: var(--jukebox-light-tan);
    font-size: 1.25rem;
    font-weight: 500;
    height: 2.25rem;
    max-width: 50rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 1000px) {
    .table {
      font-size: 0.9rem;
    }

    .jukebox-logo {
      height: 15rem;
    }

    .header-shape {
      max-width: 38rem;
      width: 100%;
    }

    .intro-hed {
      font-size: 1.25rem;
      letter-spacing: 0.5rem;
      text-indent: 0.5rem;
    }

    .live-hed {
      font-size: 2rem;
      letter-spacing: 1.25rem;
      text-indent: 1.25rem;
    }

    .juke-hed {
      font-size: 5rem;
    }
  }

  @media only screen and (max-width: 700px) {
    .playercard {
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 1rem;
      margin: 2rem auto;
    }

    .player {
      order: 1;
      width: calc(50% - 2rem);
      max-width: 150px;
    }

    .namecard {
      order: 2;
      width: 100%;
      max-width: 100%;
      margin: 2rem 0 0 0;
      padding: 0;
    }

    .table {
      padding: 1rem;
      margin: 2rem auto;
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 600px) {
    h1 {
      padding: 0;
    }

    .jukebox-logo {
      height: 9rem;
    }

    .header-shape {
      max-width: 25rem;
      width: 100%;
    }

    .intro-hed {
      font-size: 1rem;
      letter-spacing: 0.25rem;
      text-indent: 0.25rem;
    }

    .live-hed {
      font-size: 1.5rem;
      letter-spacing: 0.75rem;
      text-indent: 0.75rem;
    }

    .juke-hed {
      font-size: 3.25rem;
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      margin-top: -0.5rem;
    }

    .jukebox-logo {
      height: 8rem;
    }

    .live-hed {
      font-size: 1.25rem;
      letter-spacing: 0.5rem;
      text-indent: 0.5rem;
    }

    .juke-hed {
      font-size: 2.75rem;
    }
  }
</style>
