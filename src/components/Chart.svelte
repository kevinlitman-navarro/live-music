<script>
  import { scaleLinear } from "d3-scale";
  import { select, selectAll } from "d3-selection";
  import { orderby } from "../stores/jukebox.js";
  import { LayerCake, Svg } from "layercake";
  import Scatter from "./demo/Scatter.svelte";
  import Axis from "./Axis.svelte";
  import { format } from "d3-format";

  const diff_string = "difference_";
  $: active_metric = diff_string.concat($orderby);

  const padding = 2;

  export let active_artist_songlist = {};
  export let r = 12;
  export let scale;

  $: datapoints = active_artist_songlist;
  $: flat_data = datapoints.artist_songlist;
</script>

<div class="chart-wrapper">
  <figure>
    <LayerCake data="{flat_data}" x="{active_metric}" y="0" padding="{padding}">
      <!-- <Svg>
        <Axis formatTick="{(d) => format('.3%')(d)}" />
      </Svg> -->
      <Svg>
        <Scatter r="{r}" />
      </Svg>
    </LayerCake>
  </figure>
</div>

<style>
  figure {
    position: relative;
    width: 20rem;
    height: 20rem;
  }

  .chart-wrapper {
    background-color: #fefbf7;
  }
</style>
