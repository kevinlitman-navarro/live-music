<script>
  import howler from "howler";
  import Icon from "./helpers/Icon.svelte";
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";

  export let preview;
  export let art;
  export let label;

  //set up a howl for the studio version
  const Howl = howler.Howl;
  let sound;

  function playSound() {
    //chceck to see if we already have a howl loaded/playing
    if (sound != null) {
      sound.stop();
      sound.unload();
      sound = null;
    } else {
      sound = new Howl({
        format: ["mp3"],
        src: [preview],
      });
      sound.play();
      console.log(sound);
    }
  }
</script>

<div>
  <div>
    <img alt="album cover art" src="{art}" />
    <p>{label}</p>
  </div>
  <div id="studio-click" on:click="{playSound}">
    <Icon name="play-circle" />
  </div>
</div>

<style>
  #studio-click {
    bottom: 320px;
    position: relative;
  }

  img {
    display: block;
    border-radius: 10px;
  }
</style>
