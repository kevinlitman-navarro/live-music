<script>
  import { scaleLinear } from "d3-scale";
  import { select, selectAll } from "d3-selection";
  import { orderby } from "../stores/jukebox.js";

  const diff_string = "difference_";
  $: active_metric = diff_string.concat($orderby);

  export let active_artist;
  export let active_track_key;
  export let active_artist_songlist;
  export let scale;
  let data;

  data = active_artist_songlist;
  $: console.log(data);
</script>

<div class="chart-wrapper">
  <div class="chart">
    <p>
      {active_artist}
      {active_track_key}
      {active_metric}
      {active_artist_songlist}
    </p>

    <g></g>
  </div>
</div>

<style>
</style>
