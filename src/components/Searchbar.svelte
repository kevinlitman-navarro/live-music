<script>
  import { createEventDispatcher } from "svelte";
  let value;
  const dispatch = createEventDispatcher();

  function search(v) {
    dispatch("message", {
      text: v,
    });
  }

  $: search(value);
</script>

<input type="text" placeholder="Artist Search" bind:value />

<style>
</style>
