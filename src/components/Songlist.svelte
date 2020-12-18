<script>
  export let search_query;
  import { song } from "../stores/jukebox.js";
  import { onMount } from "svelte";
  import { orderby } from "../stores/jukebox.js";
  import { createEventDispatcher } from "svelte";
  import { csv } from "d3-fetch";
  import { group, descending, ascending } from "d3-array";
  import { selectAll } from "d3-selection";

  const dispatch = createEventDispatcher();
  let active;
  let grouped = [];
  let active_track_key;
  let filename;
  let variable_name;
  const diff_string = "difference_";
  let artist_songlist;
  const folder_name = "assets/data/final_data_1218/single_rows/";
  const endpoint = ".csv";
  $: updateSong($song);

  function updateSong(v) {
    dispatch("message", {
      text: v,
    });
  }

  onMount(() => {
    csv("assets/data/final_data_1218/songlist_wide.csv")
      .then((raw) => {
        grouped = Array.from(
          group(raw, (d) => d.artist_name_studio),
          ([artist_name, artist_songlist]) => ({ artist_name, artist_songlist })
        );
        console.log(grouped);
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

  function sortData(v) {
    //reorder the data using v as column name
    variable_name = diff_string.concat($orderby);
    grouped.forEach((g) => {
      artist_songlist = g.artist_songlist;
      console.log(artist_songlist);
      artist_songlist.sort((a, b) =>
        descending(a[variable_name], b[variable_name])
      );
    });
    grouped = grouped;
  }

  $: sortData($orderby);
</script>

{#if grouped.length}
  <ul>
    {#each grouped as d}
      {#if search_query}
        {#if d.artist_name.toLowerCase().includes(search_query)}
          <li class="artist-name">{d.artist_name}</li>
          {#each d.artist_songlist as v}
            <li
              class:active="{active === v.track_key}"
              class="track-name"
              on:click="{() => onSelect(v)}">
              {v.track_name_studio}
            </li>
          {/each}
        {/if}
      {:else}
        <li class="artist-name">{d.artist_name}</li>
        {#each d.artist_songlist as v}
          <li
            class:active="{active === v.track_key}"
            class="track-name"
            on:click="{() => onSelect(v)}">
            {v.track_name_studio}
          </li>
        {/each}
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

  .artist-name {
    color: #d24939;
  }

  .track-name {
    padding-left: 3rem;
  }
</style>
