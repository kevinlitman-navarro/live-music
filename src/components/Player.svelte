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

<div class="group">
  {#key art}
    <div class="art">
      <img class="album" alt="album cover art" src="{art}" />
      <div class="studio-click" on:click="{playSound}">
        <Icon name="play-circle" />
      </div>
    </div>
  {/key}

  <span class="label">{label}</span>
</div>

<style>
  .album {
    position: relative;
    top: 0;
    left: 0;
  }

  .studio-click {
    position: absolute;
  }

  .art {
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: spin;
    animation-duration: 800ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  img {
    display: inline;
    border-radius: 10px;
    min-width: 10.5rem;
  }

  .label {
    position: absolute;
    font-family: var(--sans);
    text-transform: capitalize;
    text-align: center;
  }

  .group {
  }
</style>
