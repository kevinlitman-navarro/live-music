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
    background-color: #bfb2a2;
    color: #fff;
    text-align: center;
    padding: 5px 5px;
    border-radius: 6px;
    pointer-events: none;
    font-family: var(--sans);
    font-weight: 200;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
  .visible {
    visibility: visible;
  }
</style>
