<script>
  import namecard from "../svg/namecard3.svg";
  import { select } from "d3-selection";
  import { song } from "../stores/jukebox.js";
  import { onMount } from "svelte";

  function updateNameCard(v) {
    select("#live_track_name").select("tspan").text(v.track_name_live);
    select("#studio_track_name").select("tspan").text(v.track_name_studio);
    select("#artist_name").select("tspan").text(v.artist_name_studio);
    console.log("trying to update");
  }

  // onMount(() => {
  //   updateNameCard($song).catch((error) => {
  //     console.log(error);
  //   });
  // });

  $: updateNameCard($song);
</script>

<div class="namecard">
  {@html namecard}
</div>
