import { writable } from "svelte/store";

export const clues = writable([
  {
    id: 0,
    info: "Find a flute that plays no music but can be made to sing",
    clue: "How much was spent on the tab?",
    answers: ["£133", "133", "£133.00", "133.00"],
    correct: "Sarah could not have been the murderer... she was socialising"
  },
  {
    id: 1,
    info: "Do the first stage of any team building day",
    clue: "What was the craving for?",
    answers: ["soil", "soil!"],
    correct: "Nat Hacker could not have been the murderer... she was out satisifying a craving"
  },
  {
    id: 2,
    info: "Find the place with 104 legs",
    clue: "What was the last recipe cooked?",
    answers: ["pie", "meat pie"],
    correct: "Morag could not have been the murderer... she was in the kitchen making the perfect pie"
  },
  {
    id: 3,
    info: "Find the 01110011 01101111 01100110 01100001",
    clue: "Which orifice was operated on?",
    answers: [
      "anus",
      "bumhole",
      "butt",
      "arse",
      "arsehole"
    ],
    correct: "Dom could not have been the murderer... he was in surgery removing a stuck poop"
  },
  {
    id: 4,
    info: "Find the lowest floor in the hotel",
    clue: "How many days since the last floater?",
    answers: ["3", "three"],
    correct: "Frank could not have been the murderer... he was retrieving floaters from the pool"
  },
  {
    id: 5,
    info: "Find the yrarbil and flip to page 3",
    clue: "What is the hand holding?",
    answers: ["poo", "shit", "faeces", "turd", "crap", "poop"],
    correct: "Gerald could not have been the murderer... he was taking photos of poo"
  },
  {
    id: 6,
    info: "Find the room that should be dark and make it so",
    clue: "Which room should not be disturbed?",
    answers: ["402", "four oh two", "four o two", "four hundred and two"],
    correct: "Frankie could not have been the murderer... she had fallen asleep"
  },
  {
    id: 7,
    info: "Find the last place you go before a trip",
    clue: "How far to the peak?",
    answers: ["20", "20 miles"],
    correct: "Richard could not have been the murderer... he was climbing a peak"
  },
  {
    id: 8,
    info: "Find the ns;vpmu shifted once to the right",
    clue: "What is the case against the defendant built on?",
    answers: ["faeces", "poo", "shit", "crap", "turd"], 
    correct: "Nat Brown could not have been the murderer... she was filing an excrement lawsuit"
  }
]);
