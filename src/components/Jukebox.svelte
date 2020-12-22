<script>
  import { song } from "../stores/jukebox.js";
  import Player from "./Player.svelte";
  import Table from "./Table.svelte";
  import Searchbar from "./Searchbar.svelte";
  import Order from "./Order.svelte";
  import Songlist from "./Songlist.svelte";
  import Namecard from "./Namecard.svelte";

  let data = [];
  let search_string;

  function handleMessage(event) {
    search_string = event.detail.text.toLowerCase();
    console.log(search_string);
    data = data.filter((d) =>
      d.artist_name_studio.toLowerCase().includes({ search_string })
    );
  }

  // function updateList(event) {
  //   console.log(event.detail.text);
  //   console.log($song);
  // }
</script>

<section class="jukebox">
  <div class="top-level">
    <div class="side">
      <div class="searchbar">
        <Searchbar on:message="{handleMessage}" />
      </div>

      <div class="songlist">
        <Songlist search_query="{search_string}" />
      </div>
    </div>

    {#if $song}
      <div class="playercard">
        <div class="player">
          <Player
            preview="{$song.track_preview_url_studio}"
            art="{$song.studio_art_large}"
            label="Studio" />
        </div>
        <div class="namecard">
          <Namecard />
        </div>
        <div class="player">
          <Player
            preview="{$song.track_preview_url_live}"
            art="{$song.live_art_large}"
            label="Live" />
        </div>
      </div>
    {/if}
  </div>

  <div class="bottom-level">
    <div class="order">
      <Order />
    </div>
    {#if $song}
      <div class="table">
        <Table />
      </div>
    {/if}
  </div>
</section>

<style>
  .playercard {
    display: flex;
    max-width: 60em;
    margin: 0 auto;
    background-color: #fefbf7;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .player {
    background-color: #fefbf7;
  }

  .order {
    background-color: #fefbf7;
    padding: 1rem;
  }

  .jukebox {
    background-color: #bfb2a2;
    display: block;
  }

  .side {
    max-width: 20vw;
  }

  .songlist {
    background-color: #fefbf7;
    max-width: 100%;
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
  }

  .top-level {
    display: flex;
  }

  .bottom-level {
    display: inline-flex;
    position: relative;
  }
</style>
