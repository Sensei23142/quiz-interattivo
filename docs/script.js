// Domande e risposte corrette
const questions = [
  {
    question: "Qual è il primo passaggio per avviare un progetto?",
    options: {
      a: "Creare una cartella per ogni applicazione",
      b: "Aprire Redmine, scaricare tutti i file ed inserirli nella cartella apposita dentro il server",
      c: "Aprire Unica RA e prendere il codice centrale"
    },
    correct: "b"
  },
  {
    question: "Dove vanno salvati i file scaricati dal server?",
    options: {
      a: "In una cartella temporanea",
      b: "Nella cartella 'Unica' dentro il server",
      c: "Nella cartella di rete"
    },
    correct: "b"
  },
  {
    question: "Cosa succede quando selezioni il distributore da modificare?",
    options: {
      a: "Si apre un menu di configurazione",
      b: "Il distributore viene rimosso",
      c: "Si esplode il distributore"
    },
    correct: "c"
  },
  {
    question: "Come si verifica la certificazione del civico durante la modifica di un indirizzo?",
    options: {
      a: "Cliccando sul campo 'Verifica certificazione'",
      b: "Cliccando sul binocolo accanto al civico",
      c: "Verificando direttamente nel database"
    },
    correct: "b"
  },
  {
    question: "Qual è il primo passo per modificare il grado di derivazione di un distributore?",
    options: {
      a: "Selezionare il distributore da modificare e copiarne il codice",
      b: "Aprire il file di configurazione e cercare il distributore",
      c: "Modificare direttamente il grado senza selezionare il distributore"
    },
    correct: "a"
  },
  {
    question: "Cosa deve essere fatto quando si crea un distributore su Unica?",
    options: {
      a: "Selezionare 'Armadio' come filtro e inserire l'ubicazione",
      b: "Cliccare su 'Aggiorna' per modificare l'indirizzo",
      c: "Inserire il codice del distributore e configurare il civico manualmente"
    },
    correct: "a"
  },
  {
    question: "Come si annulla un'operazione in corso durante la creazione di un distributore?",
    options: {
      a: "Premendo il pulsante 'Annulla' nel form",
      b: "Chiudendo il programma",
      c: "Premendo 'Esc' sulla tastiera"
    },
    correct: "a"
  },
  {
    question: "Quando un distributore deve essere disattivato, quale passaggio seguire?",
    options: {
      a: "Selezionare il distributore e cliccare su 'OPI Disattestazione tratta'",
      b: "Aprire il distributore e cliccare su 'Disattiva'",
      c: "Semplicemente cancellare il distributore dal server"
    },
    correct: "a"
  },
  {
    question: "Cosa succede quando si seleziona 'Refresh' durante la ricerca di un Work Order (WO)?",
    options: {
      a: "I dati vengono aggiornati e il WO selezionato appare nella lista",
      b: "Il WO selezionato viene automaticamente chiuso",
      c: "Il sistema cancella tutte le informazioni relative al WO"
    },
    correct: "a"
  },
  {
    question: "Qual è il passo finale durante la creazione di uno splitter armadio?",
    options: {
      a: "Verificare la configurazione e inviare le fibre",
      b: "Fare clic su 'Salva' e completare l'operazione",
      c: "Salvare l'export Excel e tornare a Unica RA"
    },
    correct: "b"
  },
  {
    question: "Come si esegue il tracciamento OPI in Unica RA?",
    options: {
      a: "Inserendo il codice NTW nel campo 'Codice NTW' e cliccando su 'Nuova Ricerca'",
      b: "Selezionando il Work Order dal menu 'Tracciamento'",
      c: "Inserendo il codice distributore e cliccando 'Ricerca'"
    },
    correct: "a"
  },
  {
    question: "Qual è il primo passo per creare un armadio su NGNEER?",
    options: {
      a: "Cliccare su 'Ricerca Elementi di Rete' e selezionare 'Fibra Ottica'",
      b: "Selezionare 'Modelli' e scegliere 'Armadio'",
      c: "Inserire il codice armadio direttamente nella barra di ricerca"
    },
    correct: "a"
  },
  {
    question: "Come si associa un armadio ottico a uno in rame?",
    options: {
      a: "Usando 'Zoom' per spostarsi nella posizione desiderata",
      b: "Selezionando il tasto verde 'AO' e il tasto rosso 'AO'",
      c: "Agganciando l'equipaggiamento direttamente nella schermata 'Modelli'"
    },
    correct: "b"
  },
  {
    question: "Cosa bisogna fare per completare la chiusura di un Work Order (WO)?",
    options: {
      a: "Fare clic su 'Fine Aggiornamento Parziale' e 'Chiusura Aggiornamento Parziale'",
      b: "Verificare il WO nella lista dei completati",
      c: "Non fare nulla, il sistema chiuderà automaticamente il WO"
    },
    correct: "a"
  },
  {
    question: "Quando si crea uno splitter primario in un armadio ottico, quale tipologia viene selezionata?",
    options: {
      a: "4 porte",
      b: "8 porte",
      c: "16 porte"
    },
    correct: "a"
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
