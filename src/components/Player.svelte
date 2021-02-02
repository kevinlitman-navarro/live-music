<script>
  import howler from "howler";
  import Icon from "./helpers/Icon.svelte";
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";

  export let preview;
  export let art;
  export let label;
  const stroke = "#EEEEEE";

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
    <div class="art" on:click="{playSound}">
      <img class="album" alt="album cover art" src="{art}"/>
      <div class="studio-click">
        <Icon name="play-circle" strokeWidth="1px" stroke="{stroke}" />
      </div>
    </div>
    <p class="label">{label}</p>
  {/key}
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
    cursor: pointer;
    z-index: 1;
    border-radius: 10px;
  }

  .art:hover {
    transform: scale(1.125) rotate(2deg);
    box-shadow: 0px 2px 10px rgba(191, 178, 162, 0.5);
  }

  .art:hover .studio-click {
    opacity: 0.5;
  }

  .art:hover + .label {
    font-weight: 700;
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
    font-family: var(--narrow);
    text-transform: capitalize;
    text-align: center;
    color: #3B3332;
    width: 100%;
    padding: 0;
    font-size: 0.9rem;
    margin: 0.75rem 0 0 0;
  }

  .group {
  }
</style>
