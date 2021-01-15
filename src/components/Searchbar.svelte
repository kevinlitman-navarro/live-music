<script>
  import { createEventDispatcher } from "svelte";
  import accessibleAutocomplete from "accessible-autocomplete";
  import artistDictionary from "../data/artist_dictionary.csv";
  let artist_list = [];
  import { onMount } from "svelte";
  let value;
  const dispatch = createEventDispatcher();

  onMount(() => {
    accessibleAutocomplete({
      element: document.querySelector("#my-autocomplete-container"),
      id: "my-autocomplete", // To match it to the existing <label>.
      source: artistDictionary.map((d) => d.artist_name_studio),
      onConfirm(name) {
        value = name;
      },
      placeholder: "Artist Search",
    });
  });

  function search(v) {
    console.log(v);
    dispatch("message", {
      text: v,
    });
  }

  $: search(value);
</script>

<label for="my-autocomplete"></label>
<div id="my-autocomplete-container"></div>

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
