<script>
  export let search_query;
  import { song } from "../stores/jukebox.js";
  import { globalScale } from "../stores/jukebox.js";
  import { onMount } from "svelte";
  import { orderby } from "../stores/jukebox.js";
  import { createEventDispatcher } from "svelte";
  import { csv } from "d3-fetch";
  import { group, descending, ascending, extent } from "d3-array";
  import { values } from "d3-collection";
  import { selectAll } from "d3-selection";
  import Dial from "./Dial.svelte";
  import { scaleLinear } from "d3-scale";

  const dispatch = createEventDispatcher();
  let active;
  let flat_data = [];
  let grouped = [];
  let active_track_key;
  let filename;
  let variable_name;
  const diff_string = "difference_";
  let artist_songlist;
  let active_artist_list;
  const folder_name = "assets/data/final_data_1218/single_rows/";
  const endpoint = ".csv";

  let current_metric = "difference_overall";
  $: current_metric = diff_string.concat($orderby);

  let extent_values;
  let scale_extent;
  let scale;

  function updateSong(v) {
    dispatch("message", {
      text: v,
      active_artist_list,
      scale,
    });
  }

  onMount(() => {
    csv("assets/data/final_data_1218/songlist_wide.csv")
      .then((raw) => {
        flat_data = raw;
        updateScale();
        grouped = Array.from(
          group(flat_data, (d) => d.artist_name_studio),
          ([artist_name, artist_songlist]) => ({
            artist_name,
            artist_songlist: artist_songlist.map((d) => ({
              ...d,
              difference_valence: +d.difference_valence,
              difference_energy: +d.difference_energy,
              difference_acousticness: +d.difference_acousticness,
              difference_duration: +d.difference_duration,
              difference_tempo: +d.difference_tempo,
              difference_speechiness: +d.difference_speechiness,
              difference_dance: +d.difference_dance,
              difference_instrumentalness: +d.difference_instrumentalness,
            })),
          })
        );
        sortData($orderby);
        active_track_key = "18GiV1BaXzPVYpp9rmOg0E2Xc1Xd7q4bunmnYkwIwJGY";
        filename = folder_name.concat(active_track_key, endpoint);
        csv(filename)
          .then((selected) => {
            $song = selected[0];
            $song["difference_scaled"] = scale($song[current_metric]);
            console.log($song.artist_name_studio);
          })
          .then(() => {
            active_artist_list = grouped.find(
              (d) => d.artist_name == $song.artist_name_studio
            );
            console.log(active_artist_list);
          })
          .then(() => {
            updateSong($song);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function onSelect(d) {
    active_track_key = d.track_key;

    filename = folder_name.concat(active_track_key, endpoint);
    csv(filename)
      .then((selected) => {
        $song = selected[0];
        $song["difference_scaled"] = scale($song[current_metric]);
        console.log($song.artist_name_studio);
      })
      .then(() => {
        active_artist_list = grouped.find(
          (d) => d.artist_name == $song.artist_name_studio
        );
        console.log(active_artist_list.artist_songlist);
      })
      .then(() => {
        updateSong($song);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function sortData(v) {
    //reorder the data using v as column name
    grouped.forEach((g) => {
      artist_songlist = g.artist_songlist;
      console.log(artist_songlist);
      artist_songlist.sort((a, b) =>
        descending(Math.abs(a[current_metric]), Math.abs(b[current_metric]))
      );
    });

    updateScale();
    grouped = grouped;
  }

  function updateScale() {
    console.log(current_metric);
    extent_values = [];
    flat_data.forEach((d) => extent_values.push(Math.abs(d[current_metric])));
    console.log("old extent", scale_extent);
    scale_extent = extent(extent_values);
    console.log("new extent", scale_extent);
    scale = scaleLinear(scale_extent, [0, 1]);
    $globalScale = scale;
    flat_data.forEach(
      (d) => (d["difference_scaled"] = scale(Math.abs(d[current_metric])))
    );
    flat_data = flat_data;
  }

  $: sortData($orderby);
</script>

<p class="header">ALL TRACKS</p>
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
              <Dial value="{v['difference_scaled']}" />
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
            <Dial value="{v['difference_scaled']}" />
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
    height: 80vh;
    overflow-y: scroll;
    width: 100%;
  }

  li.active {
    background: red;
    color: var(--off-white);
  }

  .artist-name {
    color: red;
    font-weight: bold;
    font-family: var(--sans);
    padding-left: 1rem;
    font-size: 1.8em;
    text-transform: uppercase;
    position: sticky;
  }

  .track-name {
    padding-left: 3rem;
    color: var(--off-black);
    font-size: 1.1em;
    border-bottom: 1px solid rgba(178, 160, 114, 0.2);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  .header {
    background-color: #3c3332;
    border-radius: 5px;
    color: #fefbf7;
    text-transform: capitalize;
    text-align: center;
    width: fit-content;
    right: 50%;
    margin-left: 25%;
    font-size: 2rem;
    padding: 0.5rem;
    margin-top: 1rem;
  }
</style>
