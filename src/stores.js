import { writable } from "svelte/store";

export const clues = writable([
  {
    id: 0,
    info: "Find a flute that plays no music but can be made to sing",
    clue: "How much was spent on the tab?",
    answers: ["£133", "133", "£133.00", "133.00"],
    correct: "The murder was not fuelled by alcohol..."
  },
  {
    id: 1,
    info: "Do the first stage of any team building day",
    clue: "What was the craving for?",
    answers: ["soil", "soil!"],
    correct: "The murder was not an ice cold assassination..."
  },
  {
    id: 2,
    info: "Find the place with 104 legs",
    clue: "What was the last recipe cooked?",
    answers: ["pie"],
    correct: "The murder was not cannibalism..."
  },
  {
    id: 3,
    info: "Find the 01110011 01101111 01100110 01100001",
    clue: "What orafice was operated on?",
    answers: [
      "anus",
      "bumhole",
      "butt",
      "arse"
    ],
    correct: "The murder was not a medical malpractice..."
  },
  {
    id: 4,
    info: "Find the lowest floor in the hotel",
    clue: "How many days since the last floater?",
    answers: ["3", "three"],
    correct: "The murder was not a case of drowning..."
  },
  {
    id: 5,
    info: "Find the yrarbil and flip to page 49",
    clue: "What is the hand holding?",
    answers: ["poo", "shit", "faeces"],
    correct: "The murder was not a case of flashing..."
  },
  {
    id: 6,
    info: "Find the room that should be dark and make it so",
    clue: "Which room should not be disturbed?",
    answers: ["402", "four oh two", "four o two", "four hundred and two"],
    correct: "That's right! The murder was not concealed by the darkness..."
  },
  {
    id: 7,
    info: "Find the last place you go before a trip",
    clue: "How far to the peak?",
    answers: ["20", "20 miles"],
    correct: "The murder was not a case of exhaustion..."
  },
  {
    id: 8,
    info: "Find the ns;vpmu shifted once to the right",
    clue: "What is the case against the defendant built on?",
    answers: ["faeces", "poo", "shit"],
    correct: "The murder was not a bureaucratic one..."
  }
]);
