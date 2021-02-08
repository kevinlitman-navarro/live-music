<script>
  export let value;
  $: r = value * 180;
  $: r_2 = r * -1;
</script>

<div class="labels">
  <div class="half-circle" style="transform:rotate(180deg)"></div>
  <div class="coverup"></div>
  <div class="knob" style="transform:rotate({r}deg)">
    <!-- <div class="circle one"></div>
      <div class="circle two"></div>
      <div class="circle three"></div>
      <div class="circle four"></div>
      <div class="circle five"></div>
      <div class="circle six"></div>
      <div class="circle seven"></div>
      <div class="circle eight"></div>
      <div class="circle nine"></div>
      <div class="circle ten"></div>
      <div class="circle eleven"></div> -->

    <div class="line"></div>
  </div>
</div>

<style>
  .labels {
    width: 3rem;
    position: relative;
  }

  .half-circle {
    width: 3em;
    top: -8%;
    left: 6%;
    height: 1.5em;
    border-bottom-left-radius: 1.5em;
    border-bottom-right-radius: 1.5em;
    border: 0.18em dotted gray;
    border-top: 0;
    box-sizing: border-box;
    display: block;
    position: absolute;
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

  .circle-container {
    position: absolute;
    display: block;
    top: -10%;
    right: -5%;
    width: 115%;
    height: 115%;
    margin: 0em;
    border-radius: 50%;
    border-top-left-radius: 110%; /* 100px of height + 10px of border */
    border-top-right-radius: 110%; /* 100px of height + 10px of border */
    border: 2px dotted gray;
    border-bottom: 0;
  }

  .circle {
    border-radius: 50%;
    width: 0.2em;
    height: 0.2em;
    position: fixed;
    background-color: var(--red);
  }

  .one {
    top: 82%;
    left: -10%;
  }

  .two {
    top: 54%;
    left: -18%;
  }

  .three {
    top: 28%;
    left: -20%;
  }

  .four {
    top: 6%;
    left: -10%;
  }

  .five {
    top: -10%;
    left: 12%;
  }

  .six {
    top: -16%;
    left: 40%;
  }

  .seven {
    top: -10%;
    right: 12%;
  }

  .eight {
    top: 6%;
    right: -10%;
  }

  .nine {
    top: 28%;
    right: -20%;
  }

  .ten {
    top: 54%;
    right: -18%;
  }

  .eleven {
    top: 82%;
    right: -10%;
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
