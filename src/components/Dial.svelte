<script>
  export let value;
  $: r = value * 180;
</script>

<div class="labels">
  {value}
  <div class="knob" style="transform:rotate({r}deg)">
    <div class="line"></div>
  </div>
</div>

<style>
  .knob {
    display: block;
    position: relative;
    top: 15.5%;
    left: 14.5%;
    background: #fff;
    width: 4em;
    height: 4em;
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
