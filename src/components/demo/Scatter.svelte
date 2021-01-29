<script>
  // Import the getContext function from svelte
  import { getContext } from "svelte";
  import { csv } from "d3-fetch";
  import { orderby } from "../../stores/jukebox.js";
  import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";
  import { song } from "../../stores/jukebox.js";
  import { tooltip_text } from "../../stores/jukebox.js";
  import { globalScale } from "../../stores/jukebox.js";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  //import { tooltip } from "svelte";

  // Access the context using the 'LayerCake' keyword
  // Grab some helpful functions
  const { data, x, xScale, y, yScale } = getContext("LayerCake");
  const dispatch = createEventDispatcher();

  //export let fill = "#D24939";
  let highlight = "#000";
  export let r;
  export let figureHeight = 300;
  let mounted = false;

  const diff_string = "difference_";
  let current_metric = "difference_overall";
  $: current_metric = diff_string.concat($orderby);

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
        .force("collide", forceCollide(r + 1).iterations(1))
        .on("tick", (d) => {
          circlePositions = [...simulationData];
        });
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

  let active_track_key;
  const folder_name = "assets/data/final_data_0107/single_rows/";
  const endpoint = ".csv";
  let filename;

  function handleClick() {
    active_track_key = this.getAttribute("track_key");

    filename = folder_name.concat(active_track_key, endpoint);
    csv(filename).then((selected) => {
      $song = selected[0];
      $song["difference_scaled"] = $globalScale($song[current_metric]);
    });
  }

  let current_x;
  let current_y;
  let show = false;

  let updateMessage = () => {
    dispatch("message", {
      current_x,
      current_y,
      show,
    });
  };

  function handleMouseout() {
    show = false;
    updateMessage();
  }

  function handleMouseover(d) {
    show = true;
    $tooltip_text = d.track_name_studio;
    current_x = d.x;
    current_y = d.y;

    updateMessage();
  }
</script>

{#if mounted}
  {#each circlePositions as d}
    <g
      class="point-wrapper"
      on:mouseenter="{handleMouseover(d)}"
      on:mouseout="{handleMouseout}">
      <circle
        class="point"
        cx="{d.x}"
        cy="{d.y}"
        fill="{d.track_key == $song.track_key ? '#BB86FC' : '#D24939'}"
        on:click="{handleClick}"
        track_key="{d.track_key}"
        r="{r}"></circle>
    </g>
  {/each}
{/if}

<style>
  .point-wrapper {
    position: relative;
    pointer-events: all;
  }

  /* .tooltip-wrapper {
    background-color: white;
  } */
  .tooltip {
    display: none;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    pointer-events: none;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .point-wrapper:hover .tooltip {
    display: block;
  }
</style>
