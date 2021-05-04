<script>
  import { song } from "../stores/jukebox.js";
  import { orderby } from "../stores/jukebox.js";
  import { current_howl } from "../stores/jukebox.js";
  import { active_artist } from "../stores/jukebox.js";
  import Player from "./Player.svelte";
  import Table from "./Table.svelte";
  import Searchbar from "./Searchbar.svelte";
  import Order from "./Order.svelte";
  import Songlist from "./Songlist.svelte";
  import Namecard from "./Namecard.svelte";
  import Legend from "./Legend.svelte";
  import Chart from "./Chart.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let data = [];
  let search_string;
  let active_artist_chart = "Bob Dylan";
  let active_track_key = "18GiV1BaXzPVYpp9rmOg0E2Xc1Xd7q4bunmnYkwIwJGY";
  let active_artist_list;
  let scale;

  function updateSearchString(event) {
    if (event.detail.text) {
      search_string = event.detail.text;
      $active_artist = search_string;
    } else {
      search_string = undefined;
    }
  }

  function updateChartParameters(event) {
    active_artist_chart = event.detail.text.artist_name_studio;
    active_track_key = event.detail.text.track_key;
    active_artist_list = event.detail.active_artist_list;
    scale = event.detail.scale;
  }
</script>

<section class="jukebox">
  <div class="column1">
    <div class="searchbar">
      <h4>Artists</h4>
      <Searchbar on:message="{updateSearchString}" />
      <p>... or click below to explore their songs</p>
      <div class="songlist">
        <Songlist on:message="{updateChartParameters}" />
      </div>
    </div>
    <div class="fade"></div>
  </div>
  <div class="column2">
    <div class="top-level">
      <div class="side"></div>

      {#if $song}
        <div class="playercard">
          <div class="player">
            <Player
              preview="{$song.track_preview_url_studio}"
              art="{$song.studio_art_large}"
              label="STUDIO" />
          </div>
          <div class="namecard">
            <Namecard
              track_name_live="{$song.track_name_live}"
              track_name_studio="{$song.track_name_studio}"
              artist_name_studio="{$song.artist_name_studio}" />
          </div>
          <div class="player">
            <Player
              preview="{$song.track_preview_url_live}"
              art="{$song.live_art_large}"
              label="LIVE" />
          </div>
        </div>
      {/if}
    </div>

    <div class="middle-level">
      {#if active_artist_list}
        <Chart active_artist_songlist="{active_artist_list}" />
      {/if}
    </div>

    <div class="bottom-level">
      <div class="column3">
        <div class="order">
          <Order />
        </div>
        <div class="legend">
          <Legend />
        </div>
      </div>

      <div class="column4">
        <h4>Song Characteristics</h4>
        {#if $song}
          <div class="table">
            <Table song="{$song}" highlight_row="{$orderby}" />
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .playercard {
    display: flex;
    background-color: var(--jukebox-light-tan);
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    height: 16rem;
    width: 100%;
  }

  .player {
    max-width: 9rem;
  }

  .namecard {
    margin: 0 10px;
    padding: 1rem 1.5rem;
    width: 100%;
    min-height: 9rem;
  }

  .order {
    background-color: var(--jukebox-light-tan);
    padding: 1rem;
    margin: 0 0 1rem 0;
  }

  .jukebox {
    display: flex;
    flex-direction: row;
    max-width: 82rem;
    margin: 0 auto;
    padding: 3rem 2rem 0 2rem;
  }

  .column1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem 0 0;
    position: relative;
    min-width: calc(20vw + 2rem);
    height: 100%;
  }

  .fade {
    width: calc(100% - 2rem);
    height: 12rem;
    background: linear-gradient(
      0deg,
      rgba(254, 251, 247, 1) 20%,
      rgba(254, 251, 247, 0) 100%
    );
    position: absolute;
    bottom: 0;
    pointer-events: none;
  }

  .column2 {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin: 0 0 0 1rem;
    flex-wrap: wrap;
    width: calc(100% - 20vw + 2rem);
  }

  .column3 {
    margin: 0 1rem 0 0;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    max-width: 14rem;
  }

  .column4 {
    background-color: var(--jukebox-light-tan);
    margin: 0 0 1rem 1rem;
    padding: 1rem;
    width: calc(100% - 16rem);
    height: fit-content;
  }

  .column4 h4,
  .searchbar h4 {
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
  }

  .side {
    max-width: 20vw;
  }

  .songlist {
    background-color: var(--jukebox-light-tan);
    max-width: 20vw;
    margin-top: 1rem;
  }

  .searchbar {
    background-color: var(--jukebox-light-tan);
    max-width: 100%;
    padding: 1rem;
    height: 100%;
    margin: 0;
  }

  .searchbar p {
    font-family: var(--narrow);
    font-size: 0.9rem;
  }

  .table {
    background-color: var(--jukebox-light-tan);
    margin-bottom: 1rem;
    font-family: var(--narrow);
  }

  .legend {
    background-color: var(--jukebox-red);
    color: var(--jukebox-light-tan);
    padding: 0 1rem 0 1rem;
    margin: 1rem 0 0 0;
    display: none;
  }

  .top-level {
    display: flex;
    margin: 0 0 1rem 0;
    width: 100%;
  }

  .middle-level {
    display: flex;
    margin: 1rem 0;
    width: 100%;
  }

  .bottom-level {
    display: flex;
    flex-direction: row;
    margin: 1rem 0 0 0;
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    .column3 {
      max-width: 12rem;
    }

    .column4 {
      width: calc(100% - 14rem);
    }

    .table {
      font-size: 0.9rem;
    }

    .namecard {
      min-width: 60%;
      max-width: 60%;
    }
  }

  @media only screen and (max-width: 900px) {
    .jukebox {
      flex-direction: column;
    }

    .column1 {
      width: 100%;
    }

    .searchbar {
      width: 100%;
      margin: 0 0 2rem 0;
    }

    .songlist,
    .fade,
    .searchbar p {
      display: none;
    }

    .column2 {
      width: 100%;
      margin: 0;
    }

    .table {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 700px) {
    .jukebox {
      padding: 3rem 1rem 0 1rem;
    }

    .table {
      font-size: 0.8rem;
    }

    .playercard {
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 1rem;
      margin: 0 auto;
      height: 24rem;
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

    .bottom-level {
      flex-direction: column;
      margin: 0;
    }

    .column3 {
      width: 100%;
      max-width: 100%;
      margin: 1rem 0;
    }

    .legend {
      display: none;
    }

    .column4 {
      margin: 0;
      width: 100%;
    }
  }
</style>
