<script>
  import { tooltip_text } from "../stores/jukebox.js";
  export let x;
  export let y;
  export let show_tooltip;
  export let r;
</script>

<div
  style="top:{y + r}px;left:{x - 60}px"
  class="tooltip"
  class:visible="{show_tooltip}">
  {$tooltip_text}
</div>

<style>
  .tooltip {
    visibility: hidden;
    width: 120px;
    background-color: #FEFBF7;
    color: #3C3332;
    text-align: center;
    padding: 5px 5px;
    border-radius: 6px;
    pointer-events: none;
    font-family: var(--sans);
    font-weight: 200;
    border: 1px solid #3C3332;
    box-shadow: 0px 2px 10px rgba(191, 178, 162, 0.25);

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
  .visible {
    visibility: visible;
  }
</style>
