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
  input {
    background-color: #3c3332;
    border-radius: 5px;
  }

  ::placeholder {
    color: #fefbf7;
    text-transform: capitalize;
    text-align: center;
  }
</style>
