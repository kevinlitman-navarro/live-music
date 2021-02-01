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
  <h4>Order By</h4>
  <div>
    <Radio
      buttons="{[overall, energy, valence, duration, acousticness, instrumentalness]}" />
  </div>
</div>

<style>
  h4 {
    background: #3C3332;
    font-family: var(--narrow);
    text-transform: uppercase;
    text-align: center;
    border-radius: 0.25rem;
    margin: 0 0 1rem 0;
    padding: 0.25rem 0;
    color: #FEFBF7;
    font-size: 1.25rem;
    font-weight: 500;
    height: 2.25rem;
  }
</style>
