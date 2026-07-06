(function () {
  const SESSION_KEY = "certivoPracticeSession";
  const PROGRESS_KEY = "certivoPracticeProgress";
  const PREF_KEY = "certivoPracticePrefs";

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
      yourAnswer: "Your answer",
      correctAnswer: "Correct answer",
      explanation: "Explanation",
      whyItMatters: "Why it matters",
      reviewCue: "Review this topic",
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
      yourAnswer: "Tu respuesta",
      correctAnswer: "Respuesta correcta",
      explanation: "Explicación",
      whyItMatters: "Por qué importa",
      reviewCue: "Repasa este tema",
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

    if (!isCorrect) {
      const comparison = document.createElement("div");
      comparison.className = "feedback-grid";
      comparison.append(
        feedbackLine(t("yourAnswer"), selectedText),
        feedbackLine(t("correctAnswer"), correctText)
      );
      els.feedback.appendChild(comparison);
    }

    const explanation = document.createElement("p");
    explanation.className = "feedback-detail";
    const explanationLabel = document.createElement("b");
    explanationLabel.textContent = `${isCorrect ? t("explanation") : t("whyItMatters")}:`;
    explanation.append(explanationLabel, ` ${question[prefs.language].explanation}`);
    els.feedback.appendChild(explanation);

    if (!isCorrect) {
      const cue = document.createElement("p");
      cue.className = "feedback-cue";
      cue.textContent = `${t("reviewCue")}: ${topicLabel(question.topic)} · ${t("simulator")} ${question.simulator}`;
      els.feedback.appendChild(cue);
    }
  }

  function feedbackLine(label, value) {
    const row = document.createElement("p");
    const labelNode = document.createElement("span");
    const valueNode = document.createElement("b");
    labelNode.textContent = `${label}:`;
    valueNode.textContent = value;
    row.append(labelNode, valueNode);
    return row;
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

  bindEvents();
  applyTheme();
  localize();
  showScreen("home");
})();
