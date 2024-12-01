// Domande e risposte corrette
const questions = [
  {
    question: "1. Qual è il primo passaggio per modificare l'indirizzo di un distributore?",
    options: {
      a: "Selezionare il distributore da modificare",
      b: "Modificare il grado di derivazione",
      c: "Creare un nuovo distributore"
    },
    correct: "a"
  },
  {
    question: "2. Come si verifica la certificazione del civico?",
    options: {
      a: "Cliccando su 'Uscita'",
      b: "Inserendo il nuovo indirizzo",
      c: "Cliccando sul binocolo"
    },
    correct: "c"
  },
  {
    question: "3. Quale menu si utilizza per aggiornare il grado di derivazione?",
    options: {
      a: "Applicazioni > Network Creation",
      b: "Indirizzo > Network Update",
      c: "Apparato > Load Top Level"
    },
    correct: "a"
  },
  {
    question: "4. Qual è la tipologia di splitter selezionata per armadi large?",
    options: {
      a: "2 porte",
      b: "4 porte",
      c: "8 porte"
    },
    correct: "b"
  },
  {
    question: "5. Qual è il comando per iniziare la creazione dello splitter ottico?",
    options: {
      a: "OPI Attestazione primaria",
      b: "OPI Creazione splitter armadio ottico",
      c: "OPI Scorporo distributori"
    },
    correct: "b"
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestions() {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = ""; // Pulisce il contenitore

  shuffleArray(questions); // Rimescola le domande

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    let optionsHTML = "";
    for (let key in q.options) {
      optionsHTML += `
        <label>
          <input type="radio" name="q${index + 1}" value="${key}">
          ${q.options[key]}
        </label><br>
      `;
    }

    questionDiv.innerHTML = `
      <p>${q.question}</p>
      ${optionsHTML}
    `;

    questionsContainer.appendChild(questionDiv);
  });
}

document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const resultDiv = document.getElementById("result");
  let score = 0;

  questions.forEach((q, index) => {
    const userAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
    if (userAnswer && userAnswer.value === q.correct) {
      score++;
    }
  });

  const total = questions.length;
  resultDiv.innerHTML = `Hai totalizzato ${score} su ${total} punti!`;

  if (score === total) {
    resultDiv.style.color = "green";
  } else {
    resultDiv.style.color = "red";
  }

  // Cambia il pulsante in "Ricomincia"
  const submitButton = document.getElementById("submit");
  submitButton.textContent = "Ricomincia";
  submitButton.onclick = resetQuiz;
});

function resetQuiz() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Pulisce i risultati
  renderQuestions(); // Ricarica le domande in ordine casuale

  // Ripristina il pulsante
  const submitButton = document.getElementById("submit");
  submitButton.textContent = "Invia";
  submitButton.onclick = null;
}

// Inizializza le domande
renderQuestions();
