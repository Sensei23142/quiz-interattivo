// Domande e risposte corrette
const questions = [
  {
    question: "Qual è il primo passaggio per modificare l'indirizzo di un distributore?",
    options: {
      a: "Selezionare il distributore da modificare",
      b: "Modificare il grado di derivazione",
      c: "Creare un nuovo distributore"
    },
    correct: "a"
  },
  {
    question: "Come si verifica la certificazione del civico?",
    options: {
      a: "Cliccando su 'Uscita'",
      b: "Inserendo il nuovo indirizzo",
      c: "Cliccando sul binocolo"
    },
    correct: "c"
  },
  {
    question: "Qual è la funzione del pulsante 'Salva'?",
    options: {
      a: "Salvare le modifiche",
      b: "Eliminare i dati",
      c: "Annullare le modifiche"
    },
    correct: "a"
  },
  {
    question: "Cosa succede se non si seleziona il distributore corretto?",
    options: {
      a: "Il sistema genera un errore",
      b: "Non si può procedere",
      c: "Il sistema chiude l'applicazione"
    },
    correct: "b"
  },
  {
    question: "Dove si trova l'opzione per visualizzare i dettagli del civico?",
    options: {
      a: "Nel menu principale",
      b: "Nel pannello laterale",
      c: "Nella barra degli strumenti"
    },
    correct: "c"
  }
];

// Funzione per rimescolare le domande
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Funzione per mostrare le domande
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

// Invia il quiz
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

  // Mostra il tasto "Riprova"
  document.getElementById("submit").style.display = "none";
  document.getElementById("retry").style.display = "inline-block";
});

// Resetta il quiz
document.getElementById("retry").addEventListener("click", function () {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Pulisce i risultati
  renderQuestions(); // Ricarica le domande in ordine casuale

  // Ripristina i pulsanti
  document.getElementById("submit").style.display = "inline-block";
  document.getElementById("retry").style.display = "none";
});

// Inizializza le domande
renderQuestions();
