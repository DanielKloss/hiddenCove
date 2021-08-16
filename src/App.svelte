<script>
  import { clues } from "./stores.js";
  import { fade, fly } from "svelte/transition";

  let teamCode;
  let correctClues = 0;
  $: finalClue = correctClues == $clues.length;
  let finalClue = true;

  let currentClue;
  let givenAnswer;
  let correct;

  function submitTeamCode() {
    currentClue = $clues[teamCode - 1234];
  }

  function submitAnswer() {
    if (currentClue.answers.includes(givenAnswer.toLowerCase())) {
      console.log($clues[currentClue.id]);
      console.log($clues.length);
      givenAnswer = "";
      correct = currentClue.correct;
      correctClues++;
      console.log(correctClues);
      if (correctClues == $clues.length) {
        currentClue = null;
      } else {
        if ($clues[currentClue.id].id + 1 == $clues.length) {
          currentClue = $clues[0];
        } else {
          currentClue = $clues[currentClue.id + 1];
        }
      }
    } else {
      correct = "Incorrect, try again!";
    }
  }
</script>

<main>
  <h1>COVE HOTEL</h1>
  {#if currentClue == null && !finalClue}
    <section in:fade>
      <p>Enter your check in code</p>
      <input type="number" bind:value={teamCode}/>
      <button on:click={()=>submitTeamCode()}>
		CHECK IN
      </button>
    </section>
  {:else if finalClue}
  <section in:fade>
    <h3>Congratulations</h3>
      <p>You should now have everything you need to work out the murderer, weapon and loaction</p>
      <p>You should also now have the means to work out how to report your findings to the police...</p>
    </section>
  {:else}
    {#key currentClue}
      <section in:fade={{delay: 1000}}>
        <p>{currentClue.info}</p>
        <p>{currentClue.clue}</p>
        <input type="text" bind:value={givenAnswer}/>
        <button on:click={()=>submitAnswer()}>SUBMIT</button>
      </section>
      {#if correct != undefined}
        {#key correct}
          <p class="correct" in:fly={{x: 100, delay: 500}} out:fly={{x:-100}}>{correct}</p>
        {/key}
      {/if}
    {/key}
  {/if}
</main>

<style>
  * {
    box-sizing: border-box;
  }

  h1,
  h3 {
    font-family: "Limelight", cursive;
    font-weight: normal;
    margin: 0;
  }

  p {
    font-family: "Montserrat", sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  input[type="text"],
  input[type="number"] {
    border: 2px solid gold;
    opacity: 0.5;
    background: transparent;
    width: 90%;
    margin: 0 auto 1rem auto;
    font-size: 2rem;
    color: gold;
    text-align: center;
  }

  input[type="text"]:focus,
  input[type="number"]:focus {
    outline: none;
    opacity: 1;
  }

  button {
    max-width: 50%;
    margin: 0 auto;
    background: gold;
    border: 0.15rem black solid;
    padding: 1rem;
    font-family: "Limelight", cursive;
    font-size: 1.2rem;
  }

  .correct {
    color: green;
  }
</style>