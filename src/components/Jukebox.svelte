<script>
  import { song } from "../stores/jukebox.js";
  import { orderby } from "../stores/jukebox.js";
  import { active_artist } from "../stores/jukebox.js";
  import Player from "./Player.svelte";
  import Table from "./Table.svelte";
  import Searchbar from "./Searchbar.svelte";
  import Order from "./Order.svelte";
  import Songlist from "./Songlist.svelte";
  import Namecard from "./Namecard.svelte";
  import Legend from "./Legend.svelte";
  import Chart from "./Chart.svelte";

  let data = [];
  let search_string;
  let active_artist_chart = "Bob Dylan";
  let active_track_key = "18GiV1BaXzPVYpp9rmOg0E2Xc1Xd7q4bunmnYkwIwJGY";
  let active_artist_list;
  let scale;

  //$: console.log(flat_data);

  function updateSearchString(event) {
    if (event.detail.text) {
      search_string = event.detail.text;
      $active_artist = search_string;
    } else {
      search_string = undefined;
    }

    // console.log(search_string);
    // data = data.filter((d) =>
    //   d.artist_name_studio.toLowerCase().includes({ search_string })
    // );
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
      <Searchbar on:message="{updateSearchString}" />
      <div class="songlist">
        <Songlist on:message="{updateChartParameters}" />
      </div>
    </div>
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

  .namecard {
    margin: 0 10px;
    padding: 1rem;
    height: 100%;
    min-width: 50%;
    max-width: 50%;
  }

  .player {
    background-color: #fefbf7;
  }

  .order {
    background-color: #fefbf7;
    padding: 1rem;
    max-height: 20vw;
  }

  .jukebox {
    background-color: #bfb2a2;
    display: flex;
    flex-direction: row;
    max-width: 82rem;
    margin: 0 auto;
  }

  .column1 {
    display: flex;
    flex-direction: column;
    min-width: 24rem;
    align-items: center;
    margin-right: 0.5em;
    height: 90%;
    overflow: hidden;
  }

  .column2 {
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
    height: 90%;
    overflow: hidden;
  }

  .column3 {
    max-height: 30vh;
  }

  .column2 > div {
  }

  .side {
    max-width: 20vw;
  }

  .songlist {
    background-color: #fefbf7;
    max-width: 20vw;
    margin: 1rem;
  }

  .searchbar {
    background-color: #fefbf7;
    max-width: 100%;
    padding: 1.2rem;
    margin: 1rem;
  }

  .table {
    max-width: 50vw;
    background-color: #fefbf7;
    margin: 1rem;
    max-height: 30vh;
    padding-top: 2px;
  }

  .legend {
    background-color: #d24939;
    color: #fefbf7;
    padding: 0 0.1rem 0 0.1rem;
    max-height: 10vh;
  }

  .top-level {
    display: flex;
    margin: 1em;
    margin-top: 0em;
  }

  .middle-level {
    display: flex;
    margin: 1em;
  }

  .bottom-level {
    display: flex;
    flex-direction: row;
    margin: 1em;
  }

  .column3 {
    max-width: 14rem;
  }
</style>
