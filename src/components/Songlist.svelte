<script>
  export let search_query;
  import { song } from "../stores/jukebox.js";
  import { onMount } from "svelte";
  import { orderby } from "../stores/jukebox.js";
  import { createEventDispatcher } from "svelte";
  import { csv } from "d3-fetch";

  const dispatch = createEventDispatcher();
  let active;
  let data = [];
  let active_track_key;
  let filename;
  const folder_name = "assets/data/single_rows/";
  const endpoint = ".csv";
  $: updateSong($song);

  function updateSong(v) {
    dispatch("message", {
      text: v,
    });
  }

  onMount(() => {
    csv("assets/data/songlist_raw.csv")
      .then((raw) => {
        data = raw;
        active_track_key = "18GiV1BaXzPVYpp9rmOg0E2Xc1Xd7q4bunmnYkwIwJGY";
        filename = folder_name.concat(active_track_key, endpoint);
        csv(filename).then((selected) => {
          $song = selected[0];
          console.log($song);
          updateSong($song);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function onSelect(d) {
    active = d.track_key;
    active_track_key = d.track_key;
    filename = folder_name.concat(active_track_key, endpoint);
    // console.log(this.value);
    // set state to loading
    // 1. load data and update stores
    // $song = this.value;
    // set state to not loading anymore
    csv(filename)
      .then((selected) => {
        $song = selected[0];
        console.log($song);
        updateSong($song);
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

{#if data.length}
  <ul>
    {#each data as d, i}
      {#if search_query}
        {#if d.artist_name_studio
          .toLowerCase()
          .includes(
            search_query
          ) || d.track_name_studio.toLowerCase().includes(search_query)}
          <li
            class:active="{active === d.track_key}"
            on:click="{() => onSelect(d)}">
            {d.artist_name_studio}
            -
            {d.track_name_studio}
          </li>
        {/if}
      {:else}
        <li
          class:active="{active === d.track_key}"
          on:click="{() => onSelect(d)}">
          {d.artist_name_studio}
          -
          {d.track_name_studio}
        </li>
      {/if}
    {/each}
  </ul>
{:else}
  <p>Loading data...</p>
{/if}

<style>
  ul {
    height: 50vh;
    overflow-y: scroll;
    width: 20em;
  }

  li.active {
    background: yellow;
  }
</style>
