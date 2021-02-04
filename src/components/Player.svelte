<script>
  import howler from "howler";
  import Icon from "./helpers/Icon.svelte";
  import { current_howl } from "../stores/jukebox.js";

  export let preview;

  export let art;

  export let label;

  const stroke = "#EEEEEE";

  //set up a howl for the studio version
  const Howl = howler.Howl;
  let sound = null;

  function playSound() {
    try {
      sound.stop();
      sound.unload();
    } catch (error) {}

    if (!$current_howl) {
      console.log("if");
      sound = new Howl({
        format: ["mp3"],
        src: [preview],
      });
      sound.play();
      $current_howl = sound;

      console.log(sound);
    } else {
      console.log("branch");
      if (sound == $current_howl) {
        console.log("of");
        sound.stop();
        sound.unload();
        sound = null;
        $current_howl = null;
      } else {
        console.log("else");
        $current_howl.stop();
        $current_howl.unload();
        sound = new Howl({
          format: ["mp3"],
          src: [preview],
        });
        sound.play();
        $current_howl = sound;
      }
    }

    // //chceck to see if we already have a howl loaded/playing
    // if (sound != null && sound == $current_howl) {
    //   sound.stop();
    // } else if ($current_howl != null) {
    //   $current_howl.stop();
    //   $current_howl.unload();
    // }
    // if (sound !== $current_howl) {
    //   // if ($current_howl) {
    //   //   $current_howl.stop();
    //   //   $current_howl.unload();
    //   //   $current_howl = null;
    //   // }
    //   sound = new Howl({
    //     format: ["mp3"],
    //     src: [preview],
    //   });
    //   sound.play();
    //   $current_howl = sound;
    // }
  }

  let getIcon = (howl) => {
    if (!howl) {
      return "play-circle";
    } else if (howl["_src"] == preview) {
      return "pause-circle";
      console.log("yee");
    } else {
      return "play-circle";
    }
  };
</script>

<div class="group" on:click="{playSound}">
  {#key art}
    <div class="art">
      <img class="album" alt="album cover art" src="{art}" />
      <div class="studio-click">
        <Icon
          name="{getIcon($current_howl)}"
          strokeWidth="1px"
          stroke="{stroke}" />
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
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
  }

  .studio-click svg {
    width: 100%;
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
    position: relative;
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
  }

  .label {
    font-family: var(--narrow);
    text-transform: capitalize;
    text-align: center;
    color: #3b3332;
    width: 100%;
    padding: 0;
    font-size: 0.9rem;
    margin: 0.75rem 0 0 0;
  }

  .group {
  }
</style>
