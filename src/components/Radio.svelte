<script>
  // based on suggestions from:
  // Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
  // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/

  export let buttons;
  //   export let legend;
  import { orderby } from "../stores/jukebox.js";

  export const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<fieldset>
  <!-- <legend>{legend}</legend> -->
  {#each buttons as { name, label }}
  <div class="input-wrapper">
      <input
      class="sr-only"
      type="radio"
      id="{slugify(name)}"
      bind:group="{$orderby}"
      value="{slugify(name)}" />
      <label for="{slugify(name)}"> {label} </label>
  </div>
  {/each}
</fieldset>

<style>
  .input-wrapper {
    border-bottom: 1px solid rgba(178, 160, 114, 0.2);
    padding: 0.5rem 0 0.5rem 0.25rem; 
  }

  fieldset {
    border-radius: 2px;
    border: none;
    width: 100%;
    padding: 0;
  }

  /* legend {
    margin: 0 1em;
    padding: 0 1em;
    font-weight: bold;
  } */
  label {
    user-select: none;
    cursor: pointer;
  }

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  input[type="radio"] {
    position: absolute;
  }

  input[type="radio"] + label {
    display: flex;
    position: relative;
    text-align: left;
    font-weight: 500;
  }

  input[type="radio"] + label::before {
    content: "";
    position: relative;
    display: inline-block;
    margin-right: 0.5em;
    width: 1.25em;
    height: 1.25em;
    background: transparent;
    border: 1px solid var(--gray);
    border-radius: 50%;
    transition: background 0.3s ease-out;
  }

  input[type="radio"]:checked + label {
    font-weight: 700;
  }

  input[type="radio"]:checked + label::before {
    border: 1px solid var(--gray, #ddd);
    border-radius: 50%;
    transition: background 0.3s ease-in;
  }

  input[type="radio"] + label::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 0.75em;
    height: 0.75em;
    top: 0.25em;
    left: 0.25em;
    background: var(--red);
    border: 1px solid var(--red);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-out;
  }

  input[type="radio"]:checked + label::after {
    opacity: 1;
    transform: scale(1);
    transition: transform 0.2s ease-in;
  }

  input[type="radio"]:focus + label::before {
    box-shadow: 0 0px 8px var(--accent-color);
    border-radius: 50%;
  }

  input[type="radio"]:disabled + label {
    color: darken(var(--gray), 10);
  }

  input[type="radio"]:disabled + label::before {
    background: var(--gray);
  }

  label {
    font-weight: 700;
    text-transform: uppercase;
    font-family: var(--narrow);
  }

  .input-wrapper:hover {
    background-color: rgba(178, 160, 114, 0.2);
  }

  .input-wrapper:hover label {
    font-weight: 700;
  }
</style>
