(function () {
  const SESSION_KEY = "certivoPracticeSession";
  const PROGRESS_KEY = "certivoPracticeProgress";
  const PREF_KEY = "certivoPracticePrefs";
  const INTRO_KEY = "certivoIntroPlayed";

  const text = {
    en: {
      subTitle: "Texas Life Insurance Trainer",
      darkMode: "Dark mode",
      lightMode: "Light mode",
      homeTitle: "Continue Studying",
      homeDesc: "Bilingual Texas Life practice with saved progress.",
      readiness: "Readiness",
      startPractice: "Start Practice",
      examSimulation: "Exam Simulation",
      dashboard: "Dashboard",
      view: "View",
      answered: "Answered",
      accuracy: "Accuracy",
      missed: "Missed",
      flagged: "Flagged",
      choosePath: "Choose a path",
      practiceMode: "Practice Mode",
      practiceDesc: "Instant explanations",
      examMode: "Exam Mode",
      examDesc: "Grade at the end",
      reviewMissed: "Review missed",
      missedDesc: "Retry weak spots",
      progress: "Progress",
      progressDesc: "History and stats",
      setupTitle: "Set up practice",
      home: "Home",
      mode: "Mode",
      topic: "Topic",
      simulator: "Simulator",
      questionCount: "Questions",
      shuffle: "Shuffle",
      shuffleBoth: "Questions and answers",
      shuffleAnswers: "Answers only",
      shuffleNone: "No shuffle",
      begin: "Begin",
      resume: "Resume",
      clearSession: "Clear session",
      previous: "Previous",
      flag: "Flag",
      unflag: "Unflag",
      check: "Check",
      next: "Next",
      finish: "Finish",
      results: "Results",
      reviewMistakes: "Review mistakes",
      practiceAgain: "Practice again",
      topicBreakdown: "Topic breakdown",
      correctCount: "Correct",
      resetProgress: "Reset progress",
      recentSessions: "Recent sessions",
      practice: "Practice",
      exam: "Exam",
      stats: "Stats",
      allTopics: "All topics",
      allSimulators: "All simulators",
      allQuestions: "All questions",
      available: "available",
      sessionSaved: "Saved session",
      noSession: "No saved session yet.",
      question: "Question",
      of: "of",
      correct: "Correct",
      incorrect: "Incorrect",
      correctAnswer: "Correct answer",
      explanation: "Explanation",
      basicExplanation: "Explanation",
      memoryPhrase: "Memory phrase",
      chooseAnswer: "Choose an answer to continue.",
      emptyMissed: "No missed questions yet.",
      noHistory: "No sessions yet.",
      resetConfirm: "Reset all saved progress on this device?",
      strong: "Ready with margin",
      passing: "Passing",
      keepPracticing: "Keep practicing",
      youScored: "You scored",
      reviewingMissed: "Reviewing missed",
      noQuestions: "No questions match those filters."
    },
    es: {
      subTitle: "Entrenador para Texas Life Insurance",
      darkMode: "Modo oscuro",
      lightMode: "Modo claro",
      homeTitle: "Continúa estudiando",
      homeDesc: "Práctica bilingüe de Texas Life con progreso guardado.",
      readiness: "Preparación",
      startPractice: "Iniciar práctica",
      examSimulation: "Simulación de examen",
      dashboard: "Panel",
      view: "Ver",
      answered: "Respondidas",
      accuracy: "Precisión",
      missed: "Falladas",
      flagged: "Marcadas",
      choosePath: "Elige una ruta",
      practiceMode: "Modo práctica",
      practiceDesc: "Explicaciones inmediatas",
      examMode: "Modo examen",
      examDesc: "Calificación al final",
      reviewMissed: "Repasar falladas",
      missedDesc: "Reintenta puntos débiles",
      progress: "Progreso",
      progressDesc: "Historial y estadísticas",
      setupTitle: "Configurar práctica",
      home: "Inicio",
      mode: "Modo",
      topic: "Tema",
      simulator: "Simulador",
      questionCount: "Preguntas",
      shuffle: "Mezclar",
      shuffleBoth: "Preguntas y respuestas",
      shuffleAnswers: "Solo respuestas",
      shuffleNone: "No mezclar",
      begin: "Comenzar",
      resume: "Continuar",
      clearSession: "Borrar sesión",
      previous: "Anterior",
      flag: "Marcar",
      unflag: "Quitar marca",
      check: "Revisar",
      next: "Siguiente",
      finish: "Finalizar",
      results: "Resultados",
      reviewMistakes: "Revisar errores",
      practiceAgain: "Practicar otra vez",
      topicBreakdown: "Desglose por tema",
      correctCount: "Correctas",
      resetProgress: "Reiniciar progreso",
      recentSessions: "Sesiones recientes",
      practice: "Práctica",
      exam: "Examen",
      stats: "Stats",
      allTopics: "Todos los temas",
      allSimulators: "Todos los simuladores",
      allQuestions: "Todas las preguntas",
      available: "disponibles",
      sessionSaved: "Sesión guardada",
      noSession: "Todavía no hay una sesión guardada.",
      question: "Pregunta",
      of: "de",
      correct: "Correcto",
      incorrect: "Incorrecto",
      correctAnswer: "Respuesta correcta",
      explanation: "Explicación",
      basicExplanation: "Explicación",
      memoryPhrase: "Frase para memorizar",
      chooseAnswer: "Elige una respuesta para continuar.",
      emptyMissed: "Todavía no hay preguntas falladas.",
      noHistory: "Aún no hay sesiones.",
      resetConfirm: "¿Borrar todo el progreso guardado en este dispositivo?",
      strong: "Listo con holgura",
      passing: "Aprobado",
      keepPracticing: "Sigue practicando",
      youScored: "Tu resultado",
      reviewingMissed: "Repasando falladas",
      noQuestions: "Ninguna pregunta coincide con esos filtros."
    }
  };

  const els = {
    screens: {
      home: document.getElementById("homeScreen"),
      setup: document.getElementById("setupScreen"),
      quiz: document.getElementById("quizScreen"),
      results: document.getElementById("resultsScreen"),
      progress: document.getElementById("progressScreen")
    },
    langEn: document.getElementById("langEn"),
    langEs: document.getElementById("langEs"),
    theme: document.getElementById("themeToggle"),
    bankPill: document.getElementById("bankPill"),
    readinessBar: document.getElementById("readinessBar"),
    statAnswered: document.getElementById("statAnswered"),
    statAccuracy: document.getElementById("statAccuracy"),
    statMissed: document.getElementById("statMissed"),
    statFlagged: document.getElementById("statFlagged"),
    setupTitle: document.getElementById("setupTitle"),
    mode: document.getElementById("modeSelect"),
    topic: document.getElementById("topicSelect"),
    simulator: document.getElementById("simulatorSelect"),
    count: document.getElementById("countSelect"),
    shuffle: document.getElementById("shuffleSelect"),
    start: document.getElementById("startButton"),
    resume: document.getElementById("resumeButton"),
    clearSession: document.getElementById("clearSessionButton"),
    sessionSummary: document.getElementById("sessionSummary"),
    questionCounter: document.getElementById("questionCounter"),
    timer: document.getElementById("timerText"),
    questionTopic: document.getElementById("questionTopic"),
    questionProgress: document.getElementById("questionProgress"),
    questionSource: document.getElementById("questionSource"),
    questionText: document.getElementById("questionText"),
    answers: document.getElementById("answersList"),
    feedback: document.getElementById("feedbackBox"),
    previous: document.getElementById("previousButton"),
    flag: document.getElementById("flagButton"),
    check: document.getElementById("checkButton"),
    finish: document.getElementById("finishButton"),
    scoreCircle: document.getElementById("scoreCircle"),
    scorePercent: document.getElementById("scorePercent"),
    resultTitle: document.getElementById("resultTitle"),
    resultSummary: document.getElementById("resultSummary"),
    reviewLastMissed: document.getElementById("reviewLastMissedButton"),
    topicBreakdown: document.getElementById("topicBreakdown"),
    progressAnswered: document.getElementById("progressAnswered"),
    progressCorrect: document.getElementById("progressCorrect"),
    progressAccuracy: document.getElementById("progressAccuracy"),
    progressFlagged: document.getElementById("progressFlagged"),
    historyList: document.getElementById("historyList"),
    navButtons: document.querySelectorAll(".nav-button")
  };
  els.intro = document.getElementById("introScreen");
  els.introSkip = document.getElementById("introSkip");

  let prefs = loadJson(PREF_KEY, { language: "en", theme: "light" });
  let progress = loadJson(PROGRESS_KEY, defaultProgress());
  let session = loadJson(SESSION_KEY, null);
  let activeScreen = "home";
  let timerId = null;

  function defaultProgress() {
    return { answers: {}, missed: {}, flagged: {}, history: [] };
  }

  function loadJson(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value || fallback;
    } catch {
      return fallback;
    }
  }

  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function t(key) {
    return text[prefs.language][key] || text.en[key] || key;
  }

  function qById(id) {
    return CERTIVO_QUESTIONS.find((question) => question.id === id);
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swap]] = [copy[swap], copy[index]];
    }
    return copy;
  }

  function titleCase(value) {
    return String(value).replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function topicLabel(topic) {
    const labels = {
      es: {
        annuities: "Anualidades",
        beneficiaries: "Beneficiarios",
        "best interest": "Mejor interés",
        calculation: "Cálculos",
        contracts: "Contratos",
        ethics: "Ética",
        general: "General",
        "life insurance": "Seguro de vida",
        "policy provisions": "Cláusulas de póliza",
        retirement: "Retiro",
        riders: "Cláusulas adicionales",
        taxes: "Impuestos",
        texas: "Texas",
        underwriting: "Evaluación de riesgo"
      },
      en: {}
    };
    return labels[prefs.language]?.[topic] || titleCase(topic);
  }

  function localize() {
    document.documentElement.lang = prefs.language;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    els.langEn.classList.toggle("active", prefs.language === "en");
    els.langEs.classList.toggle("active", prefs.language === "es");
    els.theme.textContent = prefs.theme === "dark" ? t("lightMode") : t("darkMode");
    els.bankPill.textContent = `${CERTIVO_QUESTIONS.length} ${prefs.language === "es" ? "preguntas" : "questions"}`;
    populateFilters();
    updateDashboard();
    renderSessionSummary();
    if (activeScreen === "quiz" && session) renderQuestion();
    if (activeScreen === "results" && session) renderResults();
    if (activeScreen === "progress") renderProgress();
  }

  function applyTheme() {
    document.documentElement.dataset.theme = prefs.theme;
  }

  function showScreen(name) {
    activeScreen = name;
    Object.entries(els.screens).forEach(([screen, node]) => node.classList.toggle("hidden", screen !== name));
    els.navButtons.forEach((button) => button.classList.remove("active"));
    const navMap = { home: "navHome", setup: session?.mode === "exam" ? "navExam" : "navPractice", quiz: session?.mode === "exam" ? "navExam" : "navPractice", results: "navStats", progress: "navStats" };
    const active = document.getElementById(navMap[name]);
    if (active) active.classList.add("active");
    if (name === "progress") renderProgress();
    if (name === "home") updateDashboard();
    window.scrollTo({ top: 0, behavior: "instant" });
    tickTimer();
  }

  function populateFilters() {
    const previousTopic = els.topic.value || "all";
    const previousSimulator = els.simulator.value || "all";
    const topics = [...new Set(CERTIVO_QUESTIONS.map((question) => question.topic))].sort();
    const simulators = [...new Set(CERTIVO_QUESTIONS.map((question) => question.simulator))].sort((a, b) => a - b);
    fillSelect(els.topic, [{ value: "all", label: t("allTopics") }, { value: "missed", label: t("reviewMissed") }, ...topics.map((topic) => ({ value: topic, label: topicLabel(topic) }))], previousTopic);
    fillSelect(els.simulator, [{ value: "all", label: t("allSimulators") }, ...simulators.map((sim) => ({ value: String(sim), label: `${t("simulator")} ${sim}` }))], previousSimulator);
    populateCounts();
  }

  function populateCounts() {
    const available = filteredQuestions().length;
    const preferred = els.count.value;
    const base = [10, 20, 25, 50, 100, 300, available].filter((count) => count > 0 && count <= available);
    const unique = [...new Set(base)];
    fillSelect(els.count, unique.map((count) => ({ value: String(count), label: `${count} ${t("available")}` })), preferred || String(unique.at(-1) || ""));
    els.start.disabled = available === 0;
  }

  function fillSelect(select, options, selectedValue) {
    select.innerHTML = "";
    options.forEach((option) => {
      const node = document.createElement("option");
      node.value = option.value;
      node.textContent = option.label;
      select.appendChild(node);
    });
    select.value = options.some((option) => option.value === selectedValue) ? selectedValue : options[0]?.value || "";
  }

  function filteredQuestions() {
    return CERTIVO_QUESTIONS.filter((question) => {
      const topicMatch = els.topic.value === "all" || els.topic.value === "" || question.topic === els.topic.value || (els.topic.value === "missed" && progress.missed[question.id]);
      const simulatorMatch = els.simulator.value === "all" || els.simulator.value === "" || String(question.simulator) === String(els.simulator.value);
      return topicMatch && simulatorMatch;
    });
  }

  function openSetup(mode) {
    els.mode.value = mode === "exam" ? "exam" : "practice";
    els.topic.value = mode === "missed" ? "missed" : "all";
    els.setupTitle.textContent = mode === "exam" ? t("examSimulation") : mode === "missed" ? t("reviewMissed") : t("setupTitle");
    populateCounts();
    showScreen("setup");
  }

  function buildDeck() {
    const pool = filteredQuestions();
    const questionOrder = els.shuffle.value === "both" ? shuffle(pool) : [...pool];
    const count = Math.min(Number(els.count.value), questionOrder.length);
    return questionOrder.slice(0, count).map((question) => ({
      id: question.id,
      answerOrder: els.shuffle.value === "none" ? question.en.answers.map((answer) => answer.id) : shuffle(question.en.answers.map((answer) => answer.id))
    }));
  }

  function startSession() {
    const deck = buildDeck();
    if (!deck.length) {
      renderMessage(els.sessionSummary, t("noQuestions"));
      return;
    }
    session = {
      mode: els.mode.value,
      deck,
      index: 0,
      answers: {},
      startedAt: Date.now(),
      lastMissed: [],
      reviewingMissed: els.topic.value === "missed"
    };
    saveJson(SESSION_KEY, session);
    showScreen("quiz");
    renderQuestion();
  }

  function resumeSession() {
    session = loadJson(SESSION_KEY, null);
    if (!session?.deck?.length) return;
    showScreen("quiz");
    renderQuestion();
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    session = null;
    renderSessionSummary();
  }

  function renderSessionSummary() {
    const saved = loadJson(SESSION_KEY, null);
    if (!saved?.deck?.length) {
      renderMessage(els.sessionSummary, t("noSession"));
      els.resume.disabled = true;
      return;
    }
    els.resume.disabled = false;
    renderMessage(els.sessionSummary, `${t("sessionSaved")}: ${saved.index + 1}/${saved.deck.length} · ${saved.mode}`);
  }

  function renderMessage(node, message) {
    node.classList.add("visible");
    node.textContent = message;
  }

  function renderQuestion() {
    const deckItem = session.deck[session.index];
    const question = qById(deckItem.id);
    const answerState = session.answers[question.id] || {};
    const selectedId = answerState.selectedAnswerId || "";
    const checked = Boolean(answerState.checked);
    const copy = question[prefs.language];
    const elapsed = Math.max(0, Math.floor((Date.now() - session.startedAt) / 1000));
    const minutes = Math.floor(elapsed / 60);
    const seconds = String(elapsed % 60).padStart(2, "0");

    els.questionCounter.textContent = `${t("question")} ${session.index + 1} ${t("of")} ${session.deck.length}`;
    els.timer.textContent = `${minutes}:${seconds}`;
    els.questionTopic.textContent = topicLabel(question.topic);
    els.questionProgress.style.width = `${((session.index + 1) / session.deck.length) * 100}%`;
    els.questionSource.textContent = `${t("simulator")} ${question.simulator} · ${question.id.toUpperCase()}${session.reviewingMissed ? ` · ${t("reviewingMissed")}` : ""}`;
    els.questionText.textContent = copy.question;

    els.answers.innerHTML = "";
    deckItem.answerOrder.forEach((answerId) => {
      const answer = copy.answers.find((item) => item.id === answerId);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer";
      button.textContent = answer.text;
      button.setAttribute("aria-pressed", String(selectedId === answer.id));
      if (selectedId === answer.id) button.classList.add("selected");
      if (checked && answer.id === question.correctAnswerId) button.classList.add("correct");
      if (checked && selectedId === answer.id && answer.id !== question.correctAnswerId) button.classList.add("wrong");
      button.addEventListener("click", () => selectAnswer(question.id, answer.id));
      els.answers.appendChild(button);
    });

    renderFeedback(question, selectedId, checked);
    els.previous.disabled = session.index === 0;
    els.flag.textContent = progress.flagged[question.id] ? t("unflag") : t("flag");
    if (session.mode === "exam") {
      els.check.textContent = session.index === session.deck.length - 1 ? t("finish") : t("next");
    } else {
      els.check.textContent = checked ? t("next") : t("check");
    }
    saveJson(SESSION_KEY, session);
  }

  function renderFeedback(question, selectedId, checked) {
    els.feedback.className = "feedback hidden";
    els.feedback.innerHTML = "";
    if (!checked || session.mode === "exam") return;

    const isCorrect = selectedId === question.correctAnswerId;
    const answers = question[prefs.language].answers;
    const selectedText = answers.find((answer) => answer.id === selectedId)?.text || "";
    const correctText = answers.find((answer) => answer.id === question.correctAnswerId).text;
    els.feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;

    const title = document.createElement("strong");
    title.textContent = isCorrect ? t("correct") : t("incorrect");
    els.feedback.appendChild(title);

    if (isCorrect) {
      const explanation = document.createElement("p");
      explanation.className = "feedback-detail";
      const explanationLabel = document.createElement("b");
      explanationLabel.textContent = `${t("explanation")}:`;
      explanation.append(explanationLabel, ` ${question[prefs.language].explanation}`);
      els.feedback.appendChild(explanation);
    } else {
      const lesson = buildFeedbackLesson(question, selectedText, correctText);
      els.feedback.append(
        feedbackSection(t("basicExplanation"), lesson.explanation),
        feedbackSection(t("memoryPhrase"), lesson.memory)
      );
    }
  }

  function feedbackSection(label, value) {
    const section = document.createElement("section");
    section.className = "feedback-section";
    const heading = document.createElement("h4");
    const body = document.createElement("p");
    heading.textContent = label;
    body.textContent = value;
    section.append(heading, body);
    return section;
  }

  function buildFeedbackLesson(question, selectedText, correctText) {
    const concept = conceptLesson(question, correctText);
    return {
      explanation: concept.explanation || conceptExplanation(concept) || defaultWrongExplanation(question, selectedText, correctText),
      memory: concept.rule || defaultMemoryRule(question, correctText)
    };
  }

  function conceptExplanation(concept) {
    const parts = [concept.plain, concept.correct, concept.wrong].filter(Boolean);
    if (!parts.length) return "";
    const prefix = prefs.language === "es"
      ? "Según la regla que se prueba para la licencia de seguros de Texas, "
      : "Under the rule tested for the Texas insurance license, ";
    return `${prefix}${parts.join(" ")}`;
  }

  function conceptLesson(question, correctText) {
    const source = `${question.en.question} ${question.en.explanation} ${correctText}`.toLowerCase();
    const spanish = prefs.language === "es";
    const lessons = [
      {
        match: /single-premium immediate annuity|spia/,
        en: {
          notice: "The key words are single-premium and immediate.",
          plain: "Single-premium means the owner pays one lump sum. Immediate means income payments start soon, usually within about one year.",
          correct: "The correct answer says payments begin within about one year and there is no accumulation phase. That matches an immediate annuity exactly.",
          wrong: "The wrong choices describe other ideas: flexible payments, variable-only products, or long accumulation. A SPIA is not built that way. It is funded once, then it starts paying.",
          rule: "SPIA = one payment in, income starts soon."
        },
        es: {
          notice: "Las palabras clave son prima única e inmediata.",
          plain: "Prima única significa que el dueño paga una sola suma grande. Inmediata significa que los pagos de ingreso empiezan pronto, normalmente dentro de aproximadamente un año.",
          correct: "La respuesta correcta dice que empieza a pagar dentro de aproximadamente un año y que no hay fase de acumulación. Eso describe exactamente una anualidad inmediata.",
          wrong: "Las respuestas incorrectas describen otras ideas: pagos flexibles, productos solo variables o una acumulación larga. Una SPIA no funciona así. Se paga una vez y luego empieza a pagar ingresos.",
          rule: "SPIA = un pago entra, el ingreso empieza pronto."
        }
      },
      {
        match: /best interest|suitability|liquidity|surrender charge/,
        en: {
          notice: "Look for the client's need first: age, liquidity, risk tolerance, and time horizon.",
          plain: "Best interest means the recommendation must fit the client, not just the product features or the commission.",
          correct: "The correct answer protects the client's stated need. If the client needs money soon, a product with long surrender charges is usually a bad fit.",
          wrong: "Your answer focuses on one feature, but suitability is about the whole client situation. A good feature does not fix a product that blocks money the client needs.",
          rule: "Client need first, product second."
        },
        es: {
          notice: "Primero mira la necesidad del cliente: edad, liquidez, tolerancia al riesgo y plazo.",
          plain: "Mejor interés significa que la recomendación debe encajar con el cliente, no solo con las características del producto o la comisión.",
          correct: "La respuesta correcta protege la necesidad declarada del cliente. Si el cliente necesita dinero pronto, un producto con cargos de rescate largos normalmente no encaja.",
          wrong: "Tu respuesta se enfoca en una característica, pero la idoneidad mira la situación completa del cliente. Una característica buena no arregla un producto que bloquea el dinero que el cliente necesita.",
          rule: "Primero la necesidad del cliente, después el producto."
        }
      },
      {
        match: /lifo|fifo|nonqualified annuity|withdrawal|annuity withdrawals/,
        en: {
          notice: "Watch whether the annuity is nonqualified and whether the question says withdrawal instead of annuitized payment.",
          plain: "For a nonqualified annuity withdrawal, the IRS treats earnings as coming out first.",
          correct: "The correct answer matches LIFO: last in, first out. The gain comes out first, so it is taxable first.",
          wrong: "Your answer treats the owner's basis as coming out first or treats the money as tax-free. That is not how nonqualified annuity withdrawals are tested.",
          rule: "Nonqualified annuity withdrawal = gain first = taxable first."
        },
        es: {
          notice: "Fíjate si la anualidad es no calificada y si la pregunta dice retiro en vez de pago anualizado.",
          plain: "En un retiro de anualidad no calificada, el IRS trata la ganancia como si saliera primero.",
          correct: "La respuesta correcta coincide con LIFO: lo último que entró sale primero. La ganancia sale primero, así que se grava primero.",
          wrong: "Tu respuesta trata la base del dueño como si saliera primero o como si el dinero fuera libre de impuesto. Así no se prueban los retiros de anualidades no calificadas.",
          rule: "Retiro de anualidad no calificada = ganancia primero = impuesto primero."
        }
      },
      {
        match: /required minimum distribution|rmd|traditional ira/,
        en: {
          notice: "The key is the account type and the required beginning age.",
          plain: "Traditional IRA money was usually tax-deferred, so the IRS eventually forces minimum withdrawals.",
          correct: "The correct answer gives the current general RMD start age for a traditional IRA.",
          wrong: "Your answer is either an old rule, a penalty-free withdrawal age, or a retirement age. Those are different rules.",
          rule: "Traditional IRA RMDs currently start at 73 for this exam rule."
        },
        es: {
          notice: "La clave es el tipo de cuenta y la edad en que deben empezar las distribuciones.",
          plain: "El dinero de una IRA tradicional normalmente fue diferido de impuestos, por eso el IRS eventualmente exige retiros mínimos.",
          correct: "La respuesta correcta da la edad general vigente para empezar RMD en una IRA tradicional.",
          wrong: "Tu respuesta puede ser una regla vieja, una edad para retirar sin penalidad o una edad de retiro. Son reglas distintas.",
          rule: "RMD de IRA tradicional empieza generalmente a los 73 bajo esta regla de examen."
        }
      },
      {
        match: /insurable interest/,
        en: {
          notice: "Ask when insurable interest must exist.",
          plain: "For life insurance, insurable interest is checked when the policy starts. It does not have to be proven again at death.",
          correct: "The correct answer says application or policy issue. That is the required timing for life insurance.",
          wrong: "Your answer adds another timing requirement that belongs more to property insurance thinking, not life insurance.",
          rule: "Life insurance insurable interest = required at the beginning."
        },
        es: {
          notice: "Pregunta cuándo debe existir el interés asegurable.",
          plain: "En seguro de vida, el interés asegurable se revisa cuando empieza la póliza. No tiene que probarse otra vez al morir.",
          correct: "La respuesta correcta dice solicitud o emisión de la póliza. Ese es el momento requerido en vida.",
          wrong: "Tu respuesta agrega otro momento que se parece más a la lógica de seguros de propiedad, no de vida.",
          rule: "Interés asegurable en vida = se exige al inicio."
        }
      },
      {
        match: /guaranty association|tlhiga/,
        en: {
          notice: "This is asking for a Texas guaranty association dollar limit.",
          plain: "The guaranty association is a safety net if an insurer fails, but it only protects up to set limits.",
          correct: "The correct answer is the death benefit limit for life insurance.",
          wrong: "Your answer is likely a different benefit limit. The exam expects you to match the limit to the type of benefit.",
          rule: "TLHIGA life death benefit limit = $300,000."
        },
        es: {
          notice: "La pregunta pide un límite en dólares de la asociación de garantía de Texas.",
          plain: "La asociación de garantía funciona como protección si una aseguradora falla, pero solo protege hasta ciertos límites.",
          correct: "La respuesta correcta es el límite para beneficio por muerte en seguro de vida.",
          wrong: "Tu respuesta probablemente corresponde a otro tipo de límite. El examen espera que conectes el límite con el tipo de beneficio.",
          rule: "Límite TLHIGA para beneficio por muerte de vida = $300,000."
        }
      },
      {
        match: /churning|twisting|rebating|sliding|commingling/,
        en: {
          notice: "This is an ethics vocabulary question. Small wording differences matter.",
          plain: "The question describes a prohibited sales behavior. Match the behavior to the exact term.",
          correct: "The correct answer names the specific unfair practice described in the question.",
          wrong: "Your answer is a different unfair practice. These terms are close, but each one describes a different bad action.",
          rule: "Define the behavior first, then pick the term."
        },
        es: {
          notice: "Esta es una pregunta de vocabulario ético. Las diferencias pequeñas importan.",
          plain: "La pregunta describe una práctica de venta prohibida. Debes conectar la conducta con el término exacto.",
          correct: "La respuesta correcta nombra la práctica injusta específica descrita en la pregunta.",
          wrong: "Tu respuesta es otra práctica injusta distinta. Estos términos se parecen, pero cada uno describe una mala conducta diferente.",
          rule: "Primero define la conducta, luego escoge el término."
        }
      },
      {
        match: /waiver of premium|disability/,
        en: {
          notice: "Look for total disability and premium payments.",
          plain: "Waiver of premium means the policy can stay in force without the insured paying premiums after a qualifying disability.",
          correct: "The correct answer connects the rider to disability, not death, loans, or beneficiary changes.",
          wrong: "Your answer points to a different policy feature. The disability clue should lead you to waiver of premium.",
          rule: "Disability clue = waiver of premium."
        },
        es: {
          notice: "Busca discapacidad total y pagos de prima.",
          plain: "Exención de prima significa que la póliza puede seguir activa sin que el asegurado pague primas después de una discapacidad que califica.",
          correct: "La respuesta correcta conecta el rider con discapacidad, no con muerte, préstamos o cambios de beneficiario.",
          wrong: "Tu respuesta apunta a otra característica de la póliza. La pista de discapacidad debe llevarte a exención de prima.",
          rule: "Pista de discapacidad = exención de prima."
        }
      }
    ];

    const match = lessons.find((lesson) => lesson.match.test(source));
    return match ? match[spanish ? "es" : "en"] : {};
  }

  function defaultWrongExplanation(question, selectedText, correctText) {
    const explanation = question[prefs.language].explanation;
    if (prefs.language === "es") {
      return `Según la regla que se prueba para la licencia de seguros de Texas, “${selectedText}” no es la mejor respuesta porque no coincide con el punto legal exacto de la pregunta. La respuesta correcta es “${correctText}” porque esta es la regla: ${explanation}`;
    }
    return `Under the rule tested for the Texas insurance license, “${selectedText}” is not the best answer because it does not match the exact legal point in the question. The correct answer is “${correctText}” because this is the rule: ${explanation}`;
  }

  function defaultMemoryRule(question, correctText) {
    if (prefs.language === "es") {
      return `Para memorizarlo: conecta la pista de la pregunta con esta frase corta: ${correctText}.`;
    }
    return `Memory shortcut: connect the question clue to this short phrase: ${correctText}.`;
  }

  function selectAnswer(questionId, answerId) {
    const current = session.answers[questionId];
    if (current?.checked && session.mode === "practice") return;
    session.answers[questionId] = { selectedAnswerId: answerId, checked: false };
    renderQuestion();
  }

  function checkOrNext() {
    const question = qById(session.deck[session.index].id);
    const current = session.answers[question.id];
    if (session.mode === "practice" && !current?.checked) {
      if (!current?.selectedAnswerId) {
        renderMessage(els.feedback, t("chooseAnswer"));
        els.feedback.className = "feedback";
        return;
      }
      session.answers[question.id] = { ...current, checked: true };
      recordAnswer(question, current.selectedAnswerId);
      renderQuestion();
      return;
    }

    if (session.mode === "exam" && current?.selectedAnswerId && !current.checked) {
      session.answers[question.id] = { ...current, checked: true };
    }

    if (session.index < session.deck.length - 1) {
      session.index += 1;
      renderQuestion();
    } else {
      finishSession();
    }
  }

  function recordAnswer(question, selectedAnswerId) {
    const existing = progress.answers[question.id] || { seen: 0, correct: 0, wrong: 0 };
    const isCorrect = selectedAnswerId === question.correctAnswerId;
    existing.seen += 1;
    if (isCorrect) {
      existing.correct += 1;
      delete progress.missed[question.id];
    } else {
      existing.wrong += 1;
      progress.missed[question.id] = true;
    }
    progress.answers[question.id] = existing;
    saveJson(PROGRESS_KEY, progress);
  }

  function previousQuestion() {
    if (session.index > 0) {
      session.index -= 1;
      renderQuestion();
    }
  }

  function toggleFlag() {
    const question = qById(session.deck[session.index].id);
    if (progress.flagged[question.id]) {
      delete progress.flagged[question.id];
    } else {
      progress.flagged[question.id] = true;
    }
    saveJson(PROGRESS_KEY, progress);
    renderQuestion();
    updateDashboard();
  }

  function finishSession() {
    const missed = [];
    let correct = 0;

    session.deck.forEach((deckItem) => {
      const question = qById(deckItem.id);
      const current = session.answers[question.id];
      const selected = current?.selectedAnswerId || "";
      if (session.mode === "exam" && selected) {
        recordAnswer(question, selected);
      }
      if (selected === question.correctAnswerId) {
        correct += 1;
      } else {
        progress.missed[question.id] = true;
        missed.push(question.id);
      }
    });

    const total = session.deck.length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    session.lastMissed = missed;
    progress.history.unshift({ date: new Date().toISOString(), mode: session.mode, language: prefs.language, correct, total, percent });
    progress.history = progress.history.slice(0, 20);
    saveJson(PROGRESS_KEY, progress);
    saveJson(SESSION_KEY, session);
    showScreen("results");
    renderResults();
  }

  function sessionScore() {
    let correct = 0;
    const missed = [];
    session.deck.forEach((deckItem) => {
      const question = qById(deckItem.id);
      const selected = session.answers[question.id]?.selectedAnswerId || "";
      if (selected === question.correctAnswerId) correct += 1;
      else missed.push(question);
    });
    return { correct, missed, total: session.deck.length, percent: session.deck.length ? Math.round((correct / session.deck.length) * 100) : 0 };
  }

  function renderResults() {
    const score = sessionScore();
    els.scoreCircle.style.setProperty("--pct", String(score.percent));
    els.scorePercent.textContent = `${score.percent}%`;
    els.resultTitle.textContent = score.percent >= 84 ? t("strong") : score.percent >= 70 ? t("passing") : t("keepPracticing");
    els.resultSummary.textContent = `${t("youScored")}: ${score.correct} / ${score.total}`;
    els.reviewLastMissed.classList.toggle("hidden", score.missed.length === 0);
    renderTopicBreakdown();
  }

  function renderTopicBreakdown() {
    const byTopic = {};
    session.deck.forEach((deckItem) => {
      const question = qById(deckItem.id);
      byTopic[question.topic] ||= { correct: 0, total: 0 };
      byTopic[question.topic].total += 1;
      if (session.answers[question.id]?.selectedAnswerId === question.correctAnswerId) byTopic[question.topic].correct += 1;
    });

    els.topicBreakdown.innerHTML = "";
    Object.entries(byTopic).sort(([a], [b]) => a.localeCompare(b)).forEach(([topic, value]) => {
      const percent = Math.round((value.correct / value.total) * 100);
      const row = document.createElement("div");
      row.className = "topic-row";
      row.innerHTML = `<div class="topic-top"><span>${topicLabel(topic)}</span><span>${value.correct}/${value.total} · ${percent}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>`;
      els.topicBreakdown.appendChild(row);
    });
  }

  function reviewLastMissed() {
    const ids = session?.lastMissed || [];
    if (!ids.length) {
      showScreen("home");
      return;
    }
    session = {
      mode: "practice",
      deck: shuffle(ids).map((id) => {
        const question = qById(id);
        return { id, answerOrder: shuffle(question.en.answers.map((answer) => answer.id)) };
      }),
      index: 0,
      answers: {},
      startedAt: Date.now(),
      lastMissed: [],
      reviewingMissed: true
    };
    saveJson(SESSION_KEY, session);
    showScreen("quiz");
    renderQuestion();
  }

  function updateDashboard() {
    const records = Object.values(progress.answers || {});
    const answered = records.reduce((sum, record) => sum + record.seen, 0);
    const correct = records.reduce((sum, record) => sum + record.correct, 0);
    const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
    els.statAnswered.textContent = String(answered);
    els.statAccuracy.textContent = `${accuracy}%`;
    els.statMissed.textContent = String(Object.keys(progress.missed || {}).length);
    els.statFlagged.textContent = String(Object.keys(progress.flagged || {}).length);
    els.readinessBar.style.width = `${accuracy}%`;
  }

  function renderProgress() {
    updateDashboard();
    const records = Object.values(progress.answers || {});
    const answered = records.reduce((sum, record) => sum + record.seen, 0);
    const correct = records.reduce((sum, record) => sum + record.correct, 0);
    const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
    els.progressAnswered.textContent = String(answered);
    els.progressCorrect.textContent = String(correct);
    els.progressAccuracy.textContent = `${accuracy}%`;
    els.progressFlagged.textContent = String(Object.keys(progress.flagged || {}).length);

    els.historyList.innerHTML = "";
    if (!progress.history?.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = t("noHistory");
      els.historyList.appendChild(empty);
      return;
    }

    progress.history.forEach((entry) => {
      const item = document.createElement("div");
      item.className = "history-item";
      item.innerHTML = `<strong>${entry.percent}% · ${entry.correct}/${entry.total}</strong><p class="muted">${new Date(entry.date).toLocaleString()} · ${entry.mode} · ${entry.language.toUpperCase()}</p>`;
      els.historyList.appendChild(item);
    });
  }

  function resetProgress() {
    if (!window.confirm(t("resetConfirm"))) return;
    progress = defaultProgress();
    saveJson(PROGRESS_KEY, progress);
    renderProgress();
    updateDashboard();
  }

  function tickTimer() {
    window.clearTimeout(timerId);
    if (activeScreen !== "quiz" || !session) return;
    const elapsed = Math.max(0, Math.floor((Date.now() - session.startedAt) / 1000));
    els.timer.textContent = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}`;
    timerId = window.setTimeout(tickTimer, 1000);
  }

  function bindEvents() {
    els.langEn.addEventListener("click", () => setLanguage("en"));
    els.langEs.addEventListener("click", () => setLanguage("es"));
    els.theme.addEventListener("click", toggleTheme);
    document.getElementById("homePracticeButton").addEventListener("click", () => openSetup("practice"));
    document.getElementById("homeExamButton").addEventListener("click", () => openSetup("exam"));
    document.getElementById("viewProgressButton").addEventListener("click", () => showScreen("progress"));
    document.getElementById("practicePath").addEventListener("click", () => openSetup("practice"));
    document.getElementById("examPath").addEventListener("click", () => openSetup("exam"));
    document.getElementById("missedPath").addEventListener("click", () => openSetup("missed"));
    document.getElementById("progressPath").addEventListener("click", () => showScreen("progress"));
    document.getElementById("setupHomeButton").addEventListener("click", () => showScreen("home"));
    document.getElementById("resultsHomeButton").addEventListener("click", () => showScreen("home"));
    document.getElementById("progressHomeButton").addEventListener("click", () => showScreen("home"));
    document.getElementById("practiceAgainButton").addEventListener("click", () => openSetup("practice"));
    document.getElementById("progressMissedButton").addEventListener("click", () => openSetup("missed"));
    document.getElementById("resetProgressButton").addEventListener("click", resetProgress);
    document.getElementById("navHome").addEventListener("click", () => showScreen("home"));
    document.getElementById("navPractice").addEventListener("click", () => openSetup("practice"));
    document.getElementById("navExam").addEventListener("click", () => openSetup("exam"));
    document.getElementById("navStats").addEventListener("click", () => showScreen("progress"));
    els.introSkip?.addEventListener("click", hideIntro);
    els.topic.addEventListener("change", populateCounts);
    els.simulator.addEventListener("change", populateCounts);
    els.start.addEventListener("click", startSession);
    els.resume.addEventListener("click", resumeSession);
    els.clearSession.addEventListener("click", clearSession);
    els.previous.addEventListener("click", previousQuestion);
    els.flag.addEventListener("click", toggleFlag);
    els.check.addEventListener("click", checkOrNext);
    els.finish.addEventListener("click", finishSession);
    els.reviewLastMissed.addEventListener("click", reviewLastMissed);
  }

  function setLanguage(language) {
    prefs.language = language;
    saveJson(PREF_KEY, prefs);
    localize();
  }

  function toggleTheme() {
    prefs.theme = prefs.theme === "dark" ? "light" : "dark";
    saveJson(PREF_KEY, prefs);
    applyTheme();
    localize();
  }

  function setupIntro() {
    if (!els.intro) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyPlayed = sessionStorage.getItem(INTRO_KEY) === "true";

    if (reduceMotion || alreadyPlayed) {
      hideIntro(true);
      return;
    }

    document.body.classList.add("intro-active");
    window.setTimeout(hideIntro, 2850);
  }

  function hideIntro(immediate = false) {
    if (!els.intro) return;
    sessionStorage.setItem(INTRO_KEY, "true");
    document.body.classList.remove("intro-active");
    els.intro.classList.add("is-hidden");
    if (immediate) {
      els.intro.classList.add("hidden");
      return;
    }
    window.setTimeout(() => {
      els.intro.classList.add("hidden");
    }, 460);
  }

  bindEvents();
  applyTheme();
  localize();
  showScreen("home");
  setupIntro();
})();
