<script>
  import Radio from "./Radio.svelte";

  const tempo = { name: "Tempo", label: "Tempo" };
  const energy = { name: "Energy", label: "Energy" };
  const valence = { name: "Valence", label: "Valence" };
  const duration = { name: "Duration", label: "Duration" };
</script>

<div>
  <div>Order By</div>
  <div>
    <Radio buttons="{[tempo, energy, valence, duration]}" />
  </div>
</div>

<style>
</style>
