<script>
  import Radio from "./Radio.svelte";

  const tempo = { name: "Tempo", label: "Tempo" };
  const overall = { name: "Overall", label: "Overall" };
  const energy = { name: "Energy", label: "Energy" };
  const valence = { name: "Valence", label: "Valence" };
  const duration = { name: "Duration", label: "Duration" };
  const liveness = { name: "Liveness", label: "Liveness" };
  const acousticness = { name: "Acousticness", label: "Acousticness" };
  const speechiness = { name: "Speechiness", label: "Speechiness" };
  const instrumentalness = {
    name: "Instrumentalness",
    label: "Instrumentals",
  };
</script>

<div>
  <div>Order By</div>
  <div>
    <Radio
      buttons="{[overall, energy, valence, duration, acousticness, instrumentalness]}" />
  </div>
</div>

<style>
</style>
