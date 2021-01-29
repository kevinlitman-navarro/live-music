<script>
  import { song } from "../stores/jukebox.js";
  import { onMount } from "svelte";
  import { csv } from "d3-fetch";

  //   let data = [];
  //   let single_song;
  //   let difference_valence;
  //   let valence_studio;
  //   let valence_live;
  //   let difference_energy;
  //   let energy_studio;
  //   let energy_live;
  //   let difference_tempo;
  //   let tempo_studio;
  //   let tempo_live;
  //   let difference_speechiness;
  //   let speechiness_studio;
  //   let speechiness_live;
  //   let difference_acousticness;
  //   let acousticness_studio;
  //   let acousticness_live;
  //   let difference_instrumentalness;
  //   let instrumentalness_studio;
  //   let instrumentalness_live;
  //   let difference_duration;
  //   let duration_studio;
  //   let duration_live;

  //   function updateSingleSong(raw) {
  //     data = raw;
  //     let filtered = data.filter((d) => {
  //       return d.track_name_studio == $song;
  //     });
  //     single_song = filtered[0];
  //     console.log(single_song);
  //     difference_valence = single_song["difference_valence"];
  //     valence_studio = single_song["valence_studio"];
  //     valence_live = single_song["valence_live"];
  //     difference_energy = single_song["difference_energy"];
  //     energy_studio = single_song["energy_studio"];
  //     energy_live = single_song["energy_live"];
  //     difference_tempo = single_song["difference_tempo"];
  //     tempo_studio = single_song["tempo_studio"];
  //     tempo_live = single_song["tempo_live"];
  //     difference_speechiness = single_song["difference_speechiness"];
  //     speechiness_studio = single_song["speechiness_studio"];
  //     speechiness_live = single_song["speechiness_live"];
  //     difference_acousticness = single_song["difference_acousticness"];
  //     acousticness_studio = single_song["acousticness_studio"];
  //     acousticness_live = single_song["acousticness_live"];
  //     difference_instrumentalness = single_song["difference_instrumentalness"];
  //     instrumentalness_studio = single_song["instrumentalness_studio"];
  //     instrumentalness_live = single_song["instrumentalness_live"];
  //     difference_duration = single_song["difference_duration"];
  //     duration_studio = single_song["duration_studio"];
  //     duration_live = single_song["duration_live"];
  //   }

  // onMount(() => {
  //     csv("assets/small_data.csv")
  //       .then((raw) => {
  //         updateSingleSong(raw)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });

  //change data each time the selection changes

  //   song.subscribe((value) => {
  //     csv("assets/small_data.csv")
  //       .then((raw) => {
  //         updateSingleSong(raw);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });

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
      <tr>
        <td class="row-label">Valence</td>
        <td>{parseFloat($song.valence_studio).toFixed(2)}</td>
        <td>{parseFloat($song.valence_live).toFixed(2)}</td>
        <td>{parseFloat($song.difference_valence).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="row-label">Energy</td>
        <td>{parseFloat($song.energy_studio).toFixed(2)}</td>
        <td>{parseFloat($song.energy_live).toFixed(2)}</td>
        <td>{parseFloat($song.difference_energy).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="row-label">Speechiness</td>
        <td>{parseFloat($song.speechiness_studio).toFixed(2)}</td>
        <td>{parseFloat($song.speechiness_live).toFixed(2)}</td>
        <td>{parseFloat($song.difference_speechiness).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="row-label">Tempo</td>
        <td>{parseFloat($song.tempo_studio).toFixed(2)}</td>
        <td>{parseFloat($song.tempo_live).toFixed(2)}</td>
        <td>{parseFloat($song.difference_tempo).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="row-label">Acousticness</td>
        <td>{parseFloat($song.acousticness_studio).toFixed(2)}</td>
        <td>{parseFloat($song.acousticness_live).toFixed(2)}</td>
        <td>{parseFloat($song.difference_acousticness).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="row-label">Instrumentalness</td>
        <td>{parseFloat($song.instrumentalness_studio).toFixed(2)}</td>
        <td>{parseFloat($song.instrumentalness_live).toFixed(2)}</td>
        <td>{parseFloat($song.difference_instrumentalness).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="row-label">Duration</td>
        <td>{Math.round($song.duration_studio / 1000)}</td>
        <td>{Math.round($song.duration_live / 1000)}</td>
        <td>{Math.round($song.difference_duration / 1000)} seconds</td>
      </tr>
      <tr>
        <td class="row-label">Liveness</td>
        <td>{parseFloat($song.liveness_studio).toFixed(2)}</td>
        <td>{parseFloat($song.liveness_live).toFixed(2)}</td>
        <td>{parseFloat($song.difference_liveness).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="row-label">Overall</td>
        <td></td>
        <td></td>
        <td>{parseFloat($song.difference_overall).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
</style>
