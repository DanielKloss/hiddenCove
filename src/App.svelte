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
  let correctMessage;

  function submitTeamCode() {
    currentClue = $clues[teamCode - 1234];
  }

  function submitAnswer() {
    if (currentClue.answers.includes(givenAnswer.toLowerCase())) {
      givenAnswer = "";
      correct = currentClue.correct;
      correctClues++;
      correctMessage = true;
      if (correctClues == $clues.length) {
        currentClue = null;
      } else {
        if ($clues[currentClue.id] == $clues.length) {
          currentClue = $clues[0];
        } else {
          currentClue = $clues[currentClue.id + 1];
        }
      }
    } else {
      console.log("incorrect");
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

</style>