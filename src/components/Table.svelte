<script>
  export let song;
  export let highlight_row;
  function colorTable() {}
</script>

<div>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Studio</th>
        <th>Live</th>
        <th>Difference</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="row valence"
        id="valence"
        class:active="{'valence' == highlight_row}">
        <td class="row-label">Valence</td>
        <td>{parseFloat(song.valence_studio).toFixed(2)}</td>
        <td>{parseFloat(song.valence_live).toFixed(2)}</td>
        <td>{parseFloat(song.difference_valence).toFixed(2)}</td>
      </tr>
      <tr class="row energy" class:active="{'energy' == highlight_row}">
        <td class="row-label">Energy</td>
        <td>{parseFloat(song.energy_studio).toFixed(2)}</td>
        <td>{parseFloat(song.energy_live).toFixed(2)}</td>
        <td>{parseFloat(song.difference_energy).toFixed(2)}</td>
      </tr>
      <tr
        class="row speechiness"
        id="speechiness"
        class:active="{'speechiness' == highlight_row}">
        <td class="row-label">Speechiness</td>
        <td>{parseFloat(song.speechiness_studio).toFixed(2)}</td>
        <td>{parseFloat(song.speechiness_live).toFixed(2)}</td>
        <td>{parseFloat(song.difference_speechiness).toFixed(2)}</td>
      </tr>
      <tr
        class="row tempo"
        class:active="{'tempo' == highlight_row}"
        id="tempo">
        <td class="row-label">Tempo</td>
        <td>{parseFloat(song.tempo_studio).toFixed(2)}</td>
        <td>{parseFloat(song.tempo_live).toFixed(2)}</td>
        <td>{parseFloat(song.difference_tempo).toFixed(2)}</td>
      </tr>
      <tr
        class="row acousticness"
        id="acousticness"
        class:active="{'acousticness' == highlight_row}">
        <td class="row-label">Acousticness</td>
        <td>{parseFloat(song.acousticness_studio).toFixed(2)}</td>
        <td>{parseFloat(song.acousticness_live).toFixed(2)}</td>
        <td>{parseFloat(song.difference_acousticness).toFixed(2)}</td>
      </tr>
      <tr
        class="row instrumentalness"
        id="instrumentalness"
        class:active="{'instrumentalness' == highlight_row}">
        <td class="row-label">Instrumentalness</td>
        <td>{parseFloat(song.instrumentalness_studio).toFixed(2)}</td>
        <td>{parseFloat(song.instrumentalness_live).toFixed(2)}</td>
        <td>{parseFloat(song.difference_instrumentalness).toFixed(2)}</td>
      </tr>
      <tr
        class="row duration"
        id="duration"
        class:active="{'duration' == highlight_row}">
        <td class="row-label">Duration</td>
        <td>{Math.round(song.duration_studio / 1000)}</td>
        <td>{Math.round(song.duration_live / 1000)}</td>
        <td>{Math.round(song.difference_duration / 1000)} seconds</td>
      </tr>
      <tr
        class="row liveness"
        id="liveness"
        class:active="{'liveness' == highlight_row}">
        <td class="row-label">Liveness</td>
        <td>{parseFloat(song.liveness_studio).toFixed(2)}</td>
        <td>{parseFloat(song.liveness_live).toFixed(2)}</td>
        <td>{parseFloat(song.difference_liveness).toFixed(2)}</td>
      </tr>
      <tr
        class="row overall"
        id="overall"
        class:active="{'overall' == highlight_row}">
        <td class="row-label">Overall</td>
        <td></td>
        <td></td>
        <td>{parseFloat(song.difference_overall).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  th {
    color: var(--red);
    text-transform: uppercase;
    text-align: right;
    font-family: var(--narrow);
  }

  tr {
    border-bottom: 1px solid rgba(178, 160, 114, 0.2);
  }

  td {
    text-align: right;
    padding: 0.5rem 0.25rem;
    font-family: var(--narrow);
  }

  .row-label {
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    width: 30%;
  }
  .row.active {
    background-color: var(--red);
    color: var(--off-white);
  }
</style>
