<script>
  // Import the getContext function from svelte
  import { getContext } from "svelte";
  import { csv } from "d3-fetch";
  import { orderby } from "../../stores/jukebox";
  import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";
  import { song } from "../../stores/jukebox";
  import { globalScale } from "../../stores/jukebox";
  import { onMount } from "svelte";

  // Access the context using the 'LayerCake' keyword
  // Grab some helpful functions
  const { data, x, xScale, y, yScale } = getContext("LayerCake");

  //export let fill = "#D24939";
  let highlight = "#000";
  export let r;
  export let figureHeight = 300;
  $: console.log($song);
  let mounted = false;

  const diff_string = "difference_";
  let current_metric = "difference_overall";
  $: current_metric = diff_string.concat($orderby);
  $: console.log(current_metric);

  let datapoints;
  let circlePositions = [];
  let simulation;
  let createSimulation = () => {
    if ($data) {
      let simulationData = [
        ...$data.map((d) => ({
          ...d,
        })),
      ];
      simulationData.forEach((d) => {
        const match = circlePositions.find(
          (circle) => circle.track_key == d.track_key
        );
        if (!match) return;
        d.x = match.x;
        d.y = match.y;
      });
      simulation = forceSimulation(simulationData)
        .force("y", forceY(figureHeight / 2).strength(0.2))
        .force("x", forceX((d) => $xScale($x(d))).strength(1))
        .force("collide", forceCollide(13).iterations(1))
        .on("tick", (d) => {
          circlePositions = [...simulationData];
        });

      console.log($xScale.domain());
    }
  };

  onMount(() => {
    setTimeout(() => {
      createSimulation();
    }, 1000);
    setTimeout(() => {
      mounted = true;
    }, 1000);
  });

  $: $data, $x, createSimulation();
  $: console.log($xScale.domain());

  let active_track_key;
  const folder_name = "assets/data/final_data_1218/single_rows/";
  const endpoint = ".csv";
  let filename;

  function handleClick() {
    active_track_key = this.getAttribute("track_key");

    filename = folder_name.concat(active_track_key, endpoint);
    csv(filename).then((selected) => {
      $song = selected[0];
      $song["difference_scaled"] = $globalScale($song[current_metric]);
      console.log($song.artist_name_studio);
    });
  }
</script>

{#if mounted}
  {#each circlePositions as d}
    <g class="point-wrapper">
      <circle
        class="point"
        cx="{d.x}"
        cy="{d.y}"
        fill="{d.track_key == $song.track_key ? '#BB86FC' : '#D24939'}"
        on:click="{handleClick}"
        track_key="{d.track_key}"
        r="{r}"></circle>
      <text class="tooltip">{d.track_name_studio}</text>
    </g>
  {/each}
{/if}

<style>
  .point-wrapper {
    position: relative;
  }
  .tooltip {
    display: none;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .point-wrapper:hover .tooltip {
    display: block;
  }
</style>
