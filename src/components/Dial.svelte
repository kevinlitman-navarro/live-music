<script>
  export let value;
  $: r = value * 180;
</script>

<div class="labels">
  <div class="dots"></div>
  <div class="cover"></div>
  <div class='knob-wrapper'>
    <div class="knob" style="transform:rotate({r}deg)">
      <div class="line"></div>
    </div>
  </div>
</div>

<style>
  .labels {
    width: 3rem;
    position: relative;
    height: 3rem;
    margin: 0 1rem;
  }

  .knob-wrapper {
    position: absolute;
    width: 2.5em;
    height: 2.5em;
  }

  .cover {
    position: absolute;
    width: 3em;
    bottom: 0;
    height: 1.5em;
    background-color: var(--jukebox-light-tan);
  }

  .dots {
    border: 1px dotted black;
    width: 3em;
    height: 3em;
    position: absolute;
    border-radius: 50%;
  }

  .dots::before {
    display: inline-block;
    font-family: var(--narrow);
    content: 'MIN';
    font-size: 0.5rem;
    top: 1.5rem;
    left: -0.8rem;
    font-weight: 700;
    position: absolute;
    z-index: 1;
    color: var(--jukebox-brown);
  }

  .dots::after {
    display: inline-block;
    font-family: var(--narrow);
    content: 'MAX';
    font-size: 0.5rem;
    top: 1.5rem;
    right: -1rem;
    font-weight: 700;
    position: absolute;
    z-index: 1;
    color: var(--jukebox-brown);
  }

  .knob-wrapper {
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    transform: translate(-0.125rem, -0.125rem);
    z-index: 1;
  }

  .knob {
    display: block;
    position: relative;
    top: 15.5%;
    left: 14.5%;
    background: #fff;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    border-style: solid;
    border-width: thin;
    border-color: #bfbfbf;
    margin: 0em;
  }

  .line {
    position: absolute;
    width: 50%;
    height: 3px;
    right: 50%;
    top: 50%;
    background: red;
    transform-origin: left center;
  }
</style>
