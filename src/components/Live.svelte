<script>
    import howler from "howler";
    import { song } from "../stores/jukebox.js";
    import Icon from "./helpers/Icon.svelte";
    import {csv} from "d3-fetch";
    import { onMount } from "svelte";
  
    //load in data, filtered to initial selection
  
    let data = [];
    let single_song;
    let live_preview_url;
    let live_album_art;
  
    const song_type = "live";
  
      function updateSingleSong(raw) {
          data = raw;
            let filtered = data.filter((d) => {
                return d.track_name_studio == $song
            });
            single_song = filtered[0]
            live_album_art = single_song['live_art_large']
            live_preview_url = single_song['track_preview_url_live']
  
      }
  
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
  
      song.subscribe(value => {
          csv("assets/small_data.csv")
          .then((raw) => {
              updateSingleSong(raw)         
          })
          .catch((error) => {
            console.log(error);
          });
      });
  
      
      
      //set up a howl for the studio version
    const Howl = howler.Howl;
    let sound;
  
      function playSound() {
          //chceck to see if we already have a howl loaded/playing
          if (sound != null) {
              sound.stop();
              sound.unload();
              sound = null;
          }
          else {
              sound = new Howl({
                  format : ["mp3"],
                  src: [
                      live_preview_url
                  ]
              });
              sound.play();
              console.log(sound)
          }
      };
  
  
  </script>
  
  
  <div>
  <img alt='album cover art' src="{live_album_art}">
      <div id='studio-click' on:click="{playSound}">
          <Icon name='play-circle' ></Icon>
      </div>
  </div>
  
  
  <h1>{$song}</h1>
  
  <style>
  
  #studio-click {
      bottom: 320px;
      position: relative;
  
  }
  
  </style>
  
  
  