<script>
  import { createEventDispatcher } from "svelte";
  import AutoComplete from "simple-svelte-autocomplete";

  import artistDictionary from "../data/artist_dictionary.csv";
  let artist_list = [];
  import { onMount } from "svelte";
  import Axis from "./Axis.svelte";
  let value;
  const dispatch = createEventDispatcher();

  function search(v) {
    console.log(v);
    dispatch("message", {
      text: v,
    });
  }

  $: search(value);
</script>

<AutoComplete
  items="{artistDictionary.map((d) => d.artist_name_studio)}"
  bind:selectedItem="{value}" />

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
