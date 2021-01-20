<script>
  import { scaleLinear } from "d3-scale";
  import { select, selectAll } from "d3-selection";
  import { extent } from "d3-array";
  import { orderby } from "../stores/jukebox.js";
  import { tooltip_text } from "../stores/jukebox.js";
  import { LayerCake, Svg, Html } from "layercake";
  import Scatter from "./demo/Scatter.svelte";
  import Axis from "./Axis.svelte";
  import Tooltip from "./Tooltip.svelte";
  import { format } from "d3-format";
  import { onMount } from "svelte";

  const diff_string = "difference_";
  $: active_metric = diff_string.concat($orderby);
  $: console.log(active_metric);
  const padding = 2;
  export let active_artist_songlist = {};
  export let r = 12;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  $: flat_data = active_artist_songlist.artist_songlist;
  $: console.log(flat_data);
  $: height = innerHeight / 3;
  $: console.log(height);
  let width;
  let innerHeight = 1;
  let extent_values = [];
  let scale_extent;

  $: {
    extent_values = [];
    flat_data.forEach((d) => extent_values.push(Math.abs(d[active_metric])));
    console.log("old extent", scale_extent);
    scale_extent = extent(extent_values);
    console.log(scale_extent);
  }

  let current_x;
  let current_y;
  let show;

  let updateTooltip = (event) => {
    current_x = event.detail.current_x;
    current_y = event.detail.current_y;
    show = event.detail.show;
    console.log(current_x, current_y, show);
  };
</script>

<svelte:window bind:innerHeight />
<div bind:offsetHeight="{height}" class="chart-wrapper">
  {#if mounted}
    <figure bind:offsetWidth="{width}" style="height:{height}px;">
      <LayerCake
        data="{flat_data}"
        x="{active_metric}"
        y="0"
        padding="{padding}">
        <Svg>
          <Axis formatTick="{(d) => format('.3')(d)}" />
        </Svg>
        <Svg>
          <Scatter
            r="{r}"
            figureHeight="{height}"
            on:message="{updateTooltip}" />
        </Svg>

        <Html pointerEvents="{false}">
          <Tooltip
            x="{current_x}"
            y="{current_y}"
            show_tooltip="{show}"
            r="{r}" />
        </Html>
      </LayerCake>
    </figure>
  {/if}
</div>

<style>
  figure {
    position: relative;
    width: 100%;
  }

  .chart-wrapper {
    background-color: #fefbf7;
    width: 100%;
    height: 100%;
  }
</style>
