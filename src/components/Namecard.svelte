<script>
  import namecard from "../svg/namecard3.svg";
  import { selectAll } from "d3-selection";
  import { song } from "../stores/jukebox.js";
  //export let update;

  function updateNameCard(v) {
    // let test = selectAll("#live_track_name")["_groups"][1];
    // console.log(test);
    selectAll("#live_track_name").select("tspan").text(v.track_name_live);
    selectAll("#studio_track_name").select("tspan").text(v.track_name_studio);
    selectAll("#artist_name").select("tspan").text(v.artist_name_studio);
  }

  $: updateNameCard($song);
</script>

<div class="namecard">
  {@html namecard}
</div>
