<script>
  import Radio from "./Radio.svelte";
  import { orderby } from "../stores/jukebox.js";

  const buttons = [
    "overall",
    "energy",
    "valence",
    "duration",
    "acousticness",
    "liveness",
    "instrumentalness",
  ].map((d) => ({
    name: d,
    label: d,
  }));
</script>

<div>
  <h4>Order By</h4>
  <div>
    <Radio buttons="{buttons}" bind:value="{$orderby}" name="metric" />
  </div>
</div>

<style>
  h4 {
    background: var(--jukebox-brown);
    font-family: var(--narrow);
    text-transform: uppercase;
    text-align: center;
    border-radius: 0.25rem;
    margin: 0 0 1rem 0;
    padding: 0.25rem 0;
    color: var(--jukebox-light-tan);
    font-size: 1.25rem;
    font-weight: 500;
    height: 2.25rem;
  }
</style>
