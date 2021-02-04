<script>
  import { getContext } from "svelte";
  import { ascending } from "d3-array";
  import { orderby } from "../stores/jukebox.js";
  import Icon from "./helpers/Icon.svelte";
  const { width, height, xScale, yScale, yRange } = getContext("LayerCake");
  export let gridlines = true;
  export let formatTick = (d) => d;
  export let baseline = false;
  export let snapTicks = false;
  export let ticks = undefined;
  export let xTick = undefined;
  export let metric;
  const stroke = "#666666";
  export let yTick = 16;
  export let dxTick = 0;
  export let dyTick = 0;
  $: isBandwidth = typeof $xScale.bandwidth === "function";
  //$: tickVals = $xScale.ticks(ticks);
  $: tickVals = [0];
  // $: if (!tickVals.includes(0)) {
  //   tickVals.push(0);
  //   tickVals.sort(ascending);
  // }
  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
</script>

{#if metric != 'difference_overall'}
  <g class="axis x-axis">
    {#each tickVals as tick, i}
      <g
        class="tick tick-{tick}"
        transform="translate({$xScale(tick)},{$yRange[0]})">
        {#if gridlines !== false}
          <line y1="{$height * -1}" y2="0" x1="0" x2="0"></line>
        {/if}
        <text
          x="{xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0}"
          y="{yTick}"
          dx="{dxTick}"
          dy="{dyTick}"
          text-anchor="{textAnchor(i)}">
          {formatTick(tick)}
        </text>
      </g>
    {/each}
    {#if baseline === true}
      <line
        class="baseline"
        y1="{$height}"
        y2="{$height}"
        x1="0"
        x2="{$width}"></line>
    {/if}
  </g>
{/if}

{#if metric == 'difference_overall'}
  <g
    class="annotation left"
    transform="translate({$width * 0},{$height * 0.05})">
    <g class="arrow">
      <Icon name="arrow-left" stroke="{stroke}" strokeWidth="2px" />
      <text text-anchor="start">Less different</text>
    </g>
  </g>

  <g
    class="annotation right"
    transform="translate({$width * 1},{$height * 0.05})">
    <g class="arrow">
      <g transform="translate(-20,0)">
        <Icon name="arrow-right" stroke="{stroke}" strokeWidth="2px"/>
      </g>
      <text text-anchor="end">More different</text>
    </g>
  </g>
{:else}
  <g
    class="annotation left"
    transform="translate({$width * 0},{$height * 0.05})">
    <g class="arrow">
      <Icon name="arrow-left" stroke="{stroke}" strokeWidth="2px" />
      <text text-anchor="start">Less {$orderby}</text>
    </g>
  </g>

  <g
    class="annotation zero"
    transform="translate({$xScale(0)},{$height * 0.05})">
    <g class="arrow">
      <text text-anchor="middle">No difference</text>
    </g>
  </g>

  <g
    class="annotation right"
    transform="translate({$width * 1},{$height * 0.05})">
    <g class="arrow">
      <g transform="translate(-20,0)">
        <Icon name="arrow-right" stroke="{stroke}" strokeWidth="2px"/>
      </g>
      <text text-anchor="end">More {$orderby}</text>
    </g>
  </g>
{/if}

<style>
  .annotation {
    text-align: center;
    font-family: var(--narrow);
  }
  .tick {
    font-size: 0.75em;
  }
  line,
  .tick line {
    stroke: var(--jukebox-dark-tan);
    stroke-dasharray: 2;
    stroke-opacity: 0.33;
  }
  .tick text {
    fill: var(--fg);
  }
  .baseline {
    stroke-dasharray: 0;
    stroke: var(--default);
    stroke-opacity: 0.5;
  }
</style>
