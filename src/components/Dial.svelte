<script>
  export let value;
  $: r = value * 180;
</script>

<div class="labels">
  <div class="knob" style="transform:rotate({r}deg)">
    <div class="line"></div>
  </div>
</div>

<style>
  .labels {
    width: 3rem;
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
