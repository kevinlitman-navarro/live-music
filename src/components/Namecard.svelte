<script>
  export let track_name_live;
  export let track_name_studio;
  export let artist_name_studio;
</script>

<div class="namecard">
  <div class="studio-name song">{track_name_studio}</div>
  <div class="artist-box">
    <div class="left side">
      <div class="line"></div>
    </div>

    <div class="artist-name">
      <div class="left-triangle"></div>
      <div>{artist_name_studio}</div>
      <div class="right-triangle"></div>
    </div>

    <div class="right side">
      <div class="line"></div>
    </div>
  </div>

  <div class="live-name song">{track_name_live}</div>
</div>

<!-- <div class="namecard">
  {@html namecard}
</div> -->
<style>
  .namecard {
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    border: var(--red);
    border-style: solid;
    border-width: 0.6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .artist-name {
    border: var(--red);
    border-style: solid;
    border-width: 0.3em;
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .artist-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .line {
    background-color: var(--red);
    width: 15%;
    height: 10%;
    position: absolute;
  }

  .right .line {
    transform: translate(-100%, 0);
  }

  .left-triangle {
    width: 0;
    height: 0;
    border-top: 0.6em solid transparent;
    border-bottom: 0.6em solid transparent;
    border-left: 0.6em solid var(--red);
  }

  .right-triangle {
    width: 0;
    height: 0;
    border-top: 0.6em solid transparent;
    border-bottom: 0.6em solid transparent;
    border-right: 0.6em solid var(--red);
  }

  .side {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .song {
    font-weight: bold;
  }
</style>
