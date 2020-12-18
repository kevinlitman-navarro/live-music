<script>
  import namecard from "../svg/namecard3.svg";
  import { selectAll } from "d3-selection";
  import { song } from "../stores/jukebox.js";
  // export let track_name_live;
  // export let track_name_studio;
  // export let artist_name_studio;

  function updateNameCard(v) {
    let test = selectAll("#live_track_name");
    console.log(test);
    selectAll("#live_track_name").select("tspan").text(v.track_name_live);
    selectAll("#studio_track_name").select("tspan").text(v.track_name_studio);
    selectAll("#artist_name").select("tspan").text(v.artist_name_studio);
  }

  $: updateNameCard($song);
</script>

<div class="namecard">
  {@html namecard}
</div>
