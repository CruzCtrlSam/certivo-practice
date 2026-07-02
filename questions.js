// Add more questions to this array using the same shape.
// Each answer needs a stable id because scoring must not depend on visible order.
// The production bank contains 300 questions, each with English and Spanish content.
const CERTIVO_QUESTIONS = [
  {
    "id": "s1q1",
    "topic": "annuities",
    "simulator": 1,
    "en": {
      "question": "An annuity primarily protects the owner against the risk of:",
      "answers": [
        {
          "id": "s1q1-a1",
          "text": "Dying prematurely"
        },
        {
          "id": "s1q1-a2",
          "text": "Outliving their own savings"
        },
        {
          "id": "s1q1-a3",
          "text": "Becoming disabled"
        },
        {
          "id": "s1q1-a4",
          "text": "Property damage"
        }
      ],
      "explanation": "The annuity covers longevity risk (living too long). (A is life insurance.)"
    },
    "es": {
      "question": "Una anualidad protege principalmente al titular contra el riesgo de:",
      "answers": [
        {
          "id": "s1q1-a1",
          "text": "Morir prematuramente"
        },
        {
          "id": "s1q1-a2",
          "text": "Sobrevivir a sus propios ahorros"
        },
        {
          "id": "s1q1-a3",
          "text": "Quedar discapacitado"
        },
        {
          "id": "s1q1-a4",
          "text": "Daños a su propiedad"
        }
      ],
      "explanation": "La anualidad cubre el riesgo de longevidad (vivir demasiado). (A es el seguro de vida.)"
    },
    "correctAnswerId": "s1q1-a2"
  },
  {
    "id": "s1q2",
    "topic": "life insurance",
    "simulator": 1,
    "en": {
      "question": "In life insurance, insurable interest must exist:",
      "answers": [
        {
          "id": "s1q2-a1",
          "text": "Only at the time of death"
        },
        {
          "id": "s1q2-a2",
          "text": "Both at issue and at death"
        },
        {
          "id": "s1q2-a3",
          "text": "Only at the time of application/issue"
        },
        {
          "id": "s1q2-a4",
          "text": "At any point during the policy term"
        }
      ],
      "explanation": "For life, insurable interest is required only at issue. (B mixes in the property rule.)"
    },
    "es": {
      "question": "En el seguro de vida, el interés asegurable debe existir:",
      "answers": [
        {
          "id": "s1q2-a1",
          "text": "Solo al momento de la muerte"
        },
        {
          "id": "s1q2-a2",
          "text": "Tanto al emitir como al morir"
        },
        {
          "id": "s1q2-a3",
          "text": "Solo al momento de solicitar/emitir la póliza"
        },
        {
          "id": "s1q2-a4",
          "text": "En cualquier momento de la vigencia"
        }
      ],
      "explanation": "En vida, el interés asegurable solo se exige al emitir. (B mezcla la regla de propiedad.)"
    },
    "correctAnswerId": "s1q2-a3"
  },
  {
    "id": "s1q3",
    "topic": "texas",
    "simulator": 1,
    "en": {
      "question": "How many hours of continuing education, including ethics, does Texas require per 2-year license period?",
      "answers": [
        {
          "id": "s1q3-a1",
          "text": "20 hours, 2 of ethics"
        },
        {
          "id": "s1q3-a2",
          "text": "24 hours, 3 of ethics"
        },
        {
          "id": "s1q3-a3",
          "text": "30 hours, 5 of ethics"
        },
        {
          "id": "s1q3-a4",
          "text": "12 hours, 1 of ethics"
        }
      ],
      "explanation": "Texas: 24 hours / 3 of ethics per 2-year period."
    },
    "es": {
      "question": "¿Cuántas horas de educación continua, incluida la ética, exige Texas por periodo de licencia de 2 años?",
      "answers": [
        {
          "id": "s1q3-a1",
          "text": "20 horas, 2 de ética"
        },
        {
          "id": "s1q3-a2",
          "text": "24 horas, 3 de ética"
        },
        {
          "id": "s1q3-a3",
          "text": "30 horas, 5 de ética"
        },
        {
          "id": "s1q3-a4",
          "text": "12 horas, 1 de ética"
        }
      ],
      "explanation": "Texas: 24 horas / 3 de ética por periodo de 2 años."
    },
    "correctAnswerId": "s1q3-a2"
  },
  {
    "id": "s1q4",
    "topic": "policy provisions",
    "simulator": 1,
    "en": {
      "question": "The nonforfeiture option applied automatically if the owner does not choose another is usually:",
      "answers": [
        {
          "id": "s1q4-a1",
          "text": "Cash surrender value"
        },
        {
          "id": "s1q4-a2",
          "text": "Reduced paid-up insurance"
        },
        {
          "id": "s1q4-a3",
          "text": "Extended term insurance"
        },
        {
          "id": "s1q4-a4",
          "text": "Automatic premium loan"
        }
      ],
      "explanation": "The automatic option is extended term (same face, limited period). (D is a clause, not a nonforfeiture option.)"
    },
    "es": {
      "question": "La opción de no confiscación que se aplica automáticamente si el dueño no elige otra suele ser:",
      "answers": [
        {
          "id": "s1q4-a1",
          "text": "Valor de rescate en efectivo"
        },
        {
          "id": "s1q4-a2",
          "text": "Seguro saldado reducido"
        },
        {
          "id": "s1q4-a3",
          "text": "Seguro de término extendido"
        },
        {
          "id": "s1q4-a4",
          "text": "Préstamo automático de prima"
        }
      ],
      "explanation": "La opción automática es extended term (misma suma, plazo limitado). (D es una cláusula, no nonforfeiture.)"
    },
    "correctAnswerId": "s1q4-a3"
  },
  {
    "id": "s1q5",
    "topic": "retirement",
    "simulator": 1,
    "en": {
      "question": "At what age must Required Minimum Distributions (RMDs) from a traditional IRA generally begin under current rules?",
      "answers": [
        {
          "id": "s1q5-a1",
          "text": "59½"
        },
        {
          "id": "s1q5-a2",
          "text": "65"
        },
        {
          "id": "s1q5-a3",
          "text": "70½"
        },
        {
          "id": "s1q5-a4",
          "text": "73"
        }
      ],
      "explanation": "RMD at 73 (SECURE 2.0). (C, 70½, is the old rule.)"
    },
    "es": {
      "question": "¿A qué edad deben comenzar generalmente las distribuciones mínimas obligatorias (RMD) de una IRA tradicional bajo las reglas vigentes?",
      "answers": [
        {
          "id": "s1q5-a1",
          "text": "59½"
        },
        {
          "id": "s1q5-a2",
          "text": "65"
        },
        {
          "id": "s1q5-a3",
          "text": "70½"
        },
        {
          "id": "s1q5-a4",
          "text": "73"
        }
      ],
      "explanation": "RMD a los 73 (SECURE 2.0). (C, 70½, es la regla antigua.)"
    },
    "correctAnswerId": "s1q5-a4"
  },
  {
    "id": "s1q6",
    "topic": "texas",
    "simulator": 1,
    "en": {
      "question": "The Texas Life and Health Insurance Guaranty Association (TLHIGA) coverage limit for a life insurance death benefit is:",
      "answers": [
        {
          "id": "s1q6-a1",
          "text": "$100,000"
        },
        {
          "id": "s1q6-a2",
          "text": "$250,000"
        },
        {
          "id": "s1q6-a3",
          "text": "$300,000"
        },
        {
          "id": "s1q6-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA: $300,000 death benefit. (A is the cash value limit.)"
    },
    "es": {
      "question": "El límite de cobertura de la Texas Life and Health Insurance Guaranty Association para el beneficio por muerte de una póliza de vida es:",
      "answers": [
        {
          "id": "s1q6-a1",
          "text": "$100,000"
        },
        {
          "id": "s1q6-a2",
          "text": "$250,000"
        },
        {
          "id": "s1q6-a3",
          "text": "$300,000"
        },
        {
          "id": "s1q6-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA: $300,000 de beneficio por muerte. (A es el límite de valor en efectivo.)"
    },
    "correctAnswerId": "s1q6-a3"
  },
  {
    "id": "s1q7",
    "topic": "contracts",
    "simulator": 1,
    "en": {
      "question": "An applicant’s answers on an insurance application are legally considered:",
      "answers": [
        {
          "id": "s1q7-a1",
          "text": "Absolutely true warranties"
        },
        {
          "id": "s1q7-a2",
          "text": "Representations true to the best of their knowledge"
        },
        {
          "id": "s1q7-a3",
          "text": "Opinions with no legal effect"
        },
        {
          "id": "s1q7-a4",
          "text": "Independent contract clauses"
        }
      ],
      "explanation": "They are representations (only material misrepresentation voids)."
    },
    "es": {
      "question": "Las respuestas de un solicitante en la solicitud de seguro se consideran legalmente:",
      "answers": [
        {
          "id": "s1q7-a1",
          "text": "Garantías absolutamente verdaderas"
        },
        {
          "id": "s1q7-a2",
          "text": "Representaciones ciertas a su leal saber y entender"
        },
        {
          "id": "s1q7-a3",
          "text": "Opiniones sin efecto legal"
        },
        {
          "id": "s1q7-a4",
          "text": "Cláusulas contractuales independientes"
        }
      ],
      "explanation": "Son representaciones (solo la material misrepresentation anula)."
    },
    "correctAnswerId": "s1q7-a2"
  },
  {
    "id": "s1q8",
    "topic": "annuities",
    "simulator": 1,
    "en": {
      "question": "In a non-qualified annuity, withdrawals (non-annuitized) are taxed under the:",
      "answers": [
        {
          "id": "s1q8-a1",
          "text": "FIFO method, basis first"
        },
        {
          "id": "s1q8-a2",
          "text": "LIFO method, gain first"
        },
        {
          "id": "s1q8-a3",
          "text": "Equal proration"
        },
        {
          "id": "s1q8-a4",
          "text": "Always tax-free"
        }
      ],
      "explanation": "LIFO: gain comes out first and is taxable (+10% if under 59½)."
    },
    "es": {
      "question": "En una anualidad no calificada, los retiros (no anualizados) se gravan bajo el método:",
      "answers": [
        {
          "id": "s1q8-a1",
          "text": "FIFO, primero la base"
        },
        {
          "id": "s1q8-a2",
          "text": "LIFO, primero la ganancia"
        },
        {
          "id": "s1q8-a3",
          "text": "Prorrateo igual"
        },
        {
          "id": "s1q8-a4",
          "text": "Exentos siempre"
        }
      ],
      "explanation": "LIFO: la ganancia sale primero y es gravable (+10% si <59½)."
    },
    "correctAnswerId": "s1q8-a2"
  },
  {
    "id": "s1q9",
    "topic": "retirement",
    "simulator": 1,
    "en": {
      "question": "Which type of retirement plan receives contributions only from the employer?",
      "answers": [
        {
          "id": "s1q9-a1",
          "text": "SIMPLE IRA"
        },
        {
          "id": "s1q9-a2",
          "text": "Traditional 401(k)"
        },
        {
          "id": "s1q9-a3",
          "text": "SEP IRA"
        },
        {
          "id": "s1q9-a4",
          "text": "Roth IRA"
        }
      ],
      "explanation": "In the SEP IRA only the employer contributes."
    },
    "es": {
      "question": "¿Qué tipo de plan de retiro recibe aportaciones únicamente del empleador?",
      "answers": [
        {
          "id": "s1q9-a1",
          "text": "SIMPLE IRA"
        },
        {
          "id": "s1q9-a2",
          "text": "401(k) tradicional"
        },
        {
          "id": "s1q9-a3",
          "text": "SEP IRA"
        },
        {
          "id": "s1q9-a4",
          "text": "Roth IRA"
        }
      ],
      "explanation": "En el SEP IRA solo aporta el empleador."
    },
    "correctAnswerId": "s1q9-a3"
  },
  {
    "id": "s1q10",
    "topic": "beneficiaries",
    "simulator": 1,
    "en": {
      "question": "An irrevocable beneficiary must give consent before the owner can:",
      "answers": [
        {
          "id": "s1q10-a1",
          "text": "Pay the premium"
        },
        {
          "id": "s1q10-a2",
          "text": "Take a loan against the cash value"
        },
        {
          "id": "s1q10-a3",
          "text": "Read the policy"
        },
        {
          "id": "s1q10-a4",
          "text": "Receive the statement"
        }
      ],
      "explanation": "The irrevocable beneficiary must consent to loans, changes, assignment, or cancellation."
    },
    "es": {
      "question": "Un beneficiario irrevocable debe dar su consentimiento para que el dueño pueda:",
      "answers": [
        {
          "id": "s1q10-a1",
          "text": "Pagar la prima"
        },
        {
          "id": "s1q10-a2",
          "text": "Tomar un préstamo sobre el valor en efectivo"
        },
        {
          "id": "s1q10-a3",
          "text": "Leer la póliza"
        },
        {
          "id": "s1q10-a4",
          "text": "Recibir el estado de cuenta"
        }
      ],
      "explanation": "El irrevocable debe consentir préstamos, cambios, cesión o cancelación."
    },
    "correctAnswerId": "s1q10-a2"
  },
  {
    "id": "s1q11",
    "topic": "underwriting",
    "simulator": 1,
    "en": {
      "question": "A conditional receipt provides coverage from application/exam as long as the applicant:",
      "answers": [
        {
          "id": "s1q11-a1",
          "text": "Pays double the premium"
        },
        {
          "id": "s1q11-a2",
          "text": "Is insurable under normal underwriting"
        },
        {
          "id": "s1q11-a3",
          "text": "Is under 40 years old"
        },
        {
          "id": "s1q11-a4",
          "text": "Signs before a notary"
        }
      ],
      "explanation": "The conditional receipt covers if the applicant was insurable."
    },
    "es": {
      "question": "El recibo condicional (conditional receipt) otorga cobertura desde la solicitud/examen siempre que el solicitante:",
      "answers": [
        {
          "id": "s1q11-a1",
          "text": "Pague el doble de la prima"
        },
        {
          "id": "s1q11-a2",
          "text": "Resulte asegurable según la evaluación normal de riesgo"
        },
        {
          "id": "s1q11-a3",
          "text": "Tenga menos de 40 años"
        },
        {
          "id": "s1q11-a4",
          "text": "Firme ante notario"
        }
      ],
      "explanation": "El conditional receipt cubre si el solicitante era asegurable."
    },
    "correctAnswerId": "s1q11-a2"
  },
  {
    "id": "s1q12",
    "topic": "texas",
    "simulator": 1,
    "en": {
      "question": "Under Texas law, when a marriage is dissolved, the designation of an ex-spouse as beneficiary:",
      "answers": [
        {
          "id": "s1q12-a1",
          "text": "Always remains valid"
        },
        {
          "id": "s1q12-a2",
          "text": "Is automatically revoked, with certain exceptions"
        },
        {
          "id": "s1q12-a3",
          "text": "Only changes if the ex-spouse requests it"
        },
        {
          "id": "s1q12-a4",
          "text": "Is decided by the insurer"
        }
      ],
      "explanation": "Divorce Revocation (§9.301): the ex-spouse is automatically revoked (with exceptions)."
    },
    "es": {
      "question": "Bajo la ley de Texas, al disolverse un matrimonio, la designación de un excónyuge como beneficiario:",
      "answers": [
        {
          "id": "s1q12-a1",
          "text": "Permanece siempre válida"
        },
        {
          "id": "s1q12-a2",
          "text": "Se revoca automáticamente, salvo excepciones"
        },
        {
          "id": "s1q12-a3",
          "text": "Solo cambia si el excónyuge lo pide"
        },
        {
          "id": "s1q12-a4",
          "text": "La decide la aseguradora"
        }
      ],
      "explanation": "Divorce Revocation §9.301: el excónyuge se revoca automáticamente (con excepciones)."
    },
    "correctAnswerId": "s1q12-a2"
  },
  {
    "id": "s1q13",
    "topic": "taxes",
    "simulator": 1,
    "en": {
      "question": "A life insurance death benefit paid as a lump sum to the beneficiary is, for income tax:",
      "answers": [
        {
          "id": "s1q13-a1",
          "text": "Fully taxable"
        },
        {
          "id": "s1q13-a2",
          "text": "Generally income-tax-free"
        },
        {
          "id": "s1q13-a3",
          "text": "50% taxable"
        },
        {
          "id": "s1q13-a4",
          "text": "Taxable if over $100,000"
        }
      ],
      "explanation": "A lump-sum death benefit is income-tax-free."
    },
    "es": {
      "question": "El beneficio por muerte de una póliza de vida pagado en suma global al beneficiario es, para income tax:",
      "answers": [
        {
          "id": "s1q13-a1",
          "text": "Totalmente gravable"
        },
        {
          "id": "s1q13-a2",
          "text": "Generalmente libre de impuesto"
        },
        {
          "id": "s1q13-a3",
          "text": "Gravable en un 50%"
        },
        {
          "id": "s1q13-a4",
          "text": "Gravable si excede $100,000"
        }
      ],
      "explanation": "El beneficio por muerte en lump sum es libre de income tax."
    },
    "correctAnswerId": "s1q13-a2"
  },
  {
    "id": "s1q14",
    "topic": "annuities",
    "simulator": 1,
    "en": {
      "question": "Which annuity payout option provides the highest monthly income but leaves no remainder to beneficiaries?",
      "answers": [
        {
          "id": "s1q14-a1",
          "text": "Life with 10-year period certain"
        },
        {
          "id": "s1q14-a2",
          "text": "Joint and survivor"
        },
        {
          "id": "s1q14-a3",
          "text": "Life only (straight life)"
        },
        {
          "id": "s1q14-a4",
          "text": "Cash refund"
        }
      ],
      "explanation": "Life only pays the most, but nothing to heirs."
    },
    "es": {
      "question": "¿Qué opción de pago de anualidad ofrece el mayor ingreso mensual pero no deja saldo a beneficiarios?",
      "answers": [
        {
          "id": "s1q14-a1",
          "text": "Vida con periodo cierto de 10 años"
        },
        {
          "id": "s1q14-a2",
          "text": "Conjunto y sobreviviente"
        },
        {
          "id": "s1q14-a3",
          "text": "Solo vida (vida directa)"
        },
        {
          "id": "s1q14-a4",
          "text": "Reembolso en efectivo"
        }
      ],
      "explanation": "Life only paga más, pero nada a herederos."
    },
    "correctAnswerId": "s1q14-a3"
  },
  {
    "id": "s1q15",
    "topic": "texas",
    "simulator": 1,
    "en": {
      "question": "An insurer incorporated in another U.S. state is, with respect to Texas:",
      "answers": [
        {
          "id": "s1q15-a1",
          "text": "Domestic"
        },
        {
          "id": "s1q15-a2",
          "text": "Foreign"
        },
        {
          "id": "s1q15-a3",
          "text": "Alien"
        },
        {
          "id": "s1q15-a4",
          "text": "Non-admitted"
        }
      ],
      "explanation": "Another U.S. state = foreign (alien = another country)."
    },
    "es": {
      "question": "Una compañía aseguradora constituida en otro estado de EE. UU., respecto de Texas, es:",
      "answers": [
        {
          "id": "s1q15-a1",
          "text": "Doméstica"
        },
        {
          "id": "s1q15-a2",
          "text": "Foránea"
        },
        {
          "id": "s1q15-a3",
          "text": "Extranjera"
        },
        {
          "id": "s1q15-a4",
          "text": "Non-admitted"
        }
      ],
      "explanation": "Otro estado de EE. UU. = foreign (alien = otro país)."
    },
    "correctAnswerId": "s1q15-a2"
  },
  {
    "id": "s1q16",
    "topic": "riders",
    "simulator": 1,
    "en": {
      "question": "The waiver of premium rider is triggered when the insured:",
      "answers": [
        {
          "id": "s1q16-a1",
          "text": "Turns 65"
        },
        {
          "id": "s1q16-a2",
          "text": "Suffers a qualifying total disability"
        },
        {
          "id": "s1q16-a3",
          "text": "Changes beneficiary"
        },
        {
          "id": "s1q16-a4",
          "text": "Takes a loan"
        }
      ],
      "explanation": "Waiver is triggered by total disability (after the waiting period)."
    },
    "es": {
      "question": "El rider de exención de prima (waiver of prima) se activa cuando el asegurado:",
      "answers": [
        {
          "id": "s1q16-a1",
          "text": "Cumple 65 años"
        },
        {
          "id": "s1q16-a2",
          "text": "Sufre una discapacidad total que cumple las condiciones"
        },
        {
          "id": "s1q16-a3",
          "text": "Cambia de beneficiario"
        },
        {
          "id": "s1q16-a4",
          "text": "Toma un préstamo"
        }
      ],
      "explanation": "El waiver se activa por discapacidad total (tras el periodo de espera)."
    },
    "correctAnswerId": "s1q16-a2"
  },
  {
    "id": "s1q17",
    "topic": "ethics",
    "simulator": 1,
    "en": {
      "question": "The act of mixing client premiums with the agent’s personal funds is called:",
      "answers": [
        {
          "id": "s1q17-a1",
          "text": "Rebating"
        },
        {
          "id": "s1q17-a2",
          "text": "Commingling"
        },
        {
          "id": "s1q17-a3",
          "text": "Twisting"
        },
        {
          "id": "s1q17-a4",
          "text": "Sliding"
        }
      ],
      "explanation": "Mixing premiums with personal funds is commingling."
    },
    "es": {
      "question": "El acto de mezclar las primas del cliente con los fondos personales del agente se llama:",
      "answers": [
        {
          "id": "s1q17-a1",
          "text": "Rebaja indebida"
        },
        {
          "id": "s1q17-a2",
          "text": "Mezcla indebida de fondos"
        },
        {
          "id": "s1q17-a3",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s1q17-a4",
          "text": "Venta agregada no autorizada"
        }
      ],
      "explanation": "Mezclar primas con fondos personales es mezcla indebida de fondos."
    },
    "correctAnswerId": "s1q17-a2"
  },
  {
    "id": "s1q18",
    "topic": "retirement",
    "simulator": 1,
    "en": {
      "question": "In a qualified plan, what portion of the distribution is taxable as ordinary income?",
      "answers": [
        {
          "id": "s1q18-a1",
          "text": "Only the gain"
        },
        {
          "id": "s1q18-a2",
          "text": "The entire amount"
        },
        {
          "id": "s1q18-a3",
          "text": "Half"
        },
        {
          "id": "s1q18-a4",
          "text": "None"
        }
      ],
      "explanation": "In a qualified plan everything is taxable (contributions were pre-tax)."
    },
    "es": {
      "question": "En un plan calificado, ¿qué porción de la distribución es gravable como ingreso ordinario?",
      "answers": [
        {
          "id": "s1q18-a1",
          "text": "Solo la ganancia"
        },
        {
          "id": "s1q18-a2",
          "text": "La totalidad"
        },
        {
          "id": "s1q18-a3",
          "text": "La mitad"
        },
        {
          "id": "s1q18-a4",
          "text": "Nada"
        }
      ],
      "explanation": "En un plan calificado se grava TODO (las aportaciones fueron pre-tax)."
    },
    "correctAnswerId": "s1q18-a2"
  },
  {
    "id": "s1q19",
    "topic": "contracts",
    "simulator": 1,
    "en": {
      "question": "Which characteristic of the insurance contract causes ambiguities to be interpreted in favor of the insured?",
      "answers": [
        {
          "id": "s1q19-a1",
          "text": "Aleatory"
        },
        {
          "id": "s1q19-a2",
          "text": "Unilateral"
        },
        {
          "id": "s1q19-a3",
          "text": "Contract of adhesion"
        },
        {
          "id": "s1q19-a4",
          "text": "Conditional"
        }
      ],
      "explanation": "The contract of adhesion → ambiguity favors the insured."
    },
    "es": {
      "question": "¿Qué característica del contrato de seguro hace que las ambigüedades se interpreten a favor del asegurado?",
      "answers": [
        {
          "id": "s1q19-a1",
          "text": "Aleatorio"
        },
        {
          "id": "s1q19-a2",
          "text": "Unilateral"
        },
        {
          "id": "s1q19-a3",
          "text": "De adhesión"
        },
        {
          "id": "s1q19-a4",
          "text": "Condicional"
        }
      ],
      "explanation": "El contrato de adhesión → ambigüedad a favor del asegurado."
    },
    "correctAnswerId": "s1q19-a3"
  },
  {
    "id": "s1q20",
    "topic": "annuities",
    "simulator": 1,
    "en": {
      "question": "A variable annuity requires that the producer hold:",
      "answers": [
        {
          "id": "s1q20-a1",
          "text": "A life license only"
        },
        {
          "id": "s1q20-a2",
          "text": "A life license and a securities registration"
        },
        {
          "id": "s1q20-a3",
          "text": "A securities registration only"
        },
        {
          "id": "s1q20-a4",
          "text": "A health license"
        }
      ],
      "explanation": "Variable = security → life license + securities registration."
    },
    "es": {
      "question": "Una anualidad variable requiere que el productor tenga:",
      "answers": [
        {
          "id": "s1q20-a1",
          "text": "Solo licencia de vida"
        },
        {
          "id": "s1q20-a2",
          "text": "Licencia de vida y registro de valores"
        },
        {
          "id": "s1q20-a3",
          "text": "Solo registro de valores"
        },
        {
          "id": "s1q20-a4",
          "text": "Licencia de salud"
        }
      ],
      "explanation": "Variable = security → licencia de vida + de valores."
    },
    "correctAnswerId": "s1q20-a2"
  },
  {
    "id": "s1q21",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The contestable (incontestability) period in Texas is:",
      "answers": [
        {
          "id": "s1q21-a1",
          "text": "6 months"
        },
        {
          "id": "s1q21-a2",
          "text": "1 year"
        },
        {
          "id": "s1q21-a3",
          "text": "2 years"
        },
        {
          "id": "s1q21-a4",
          "text": "5 years"
        }
      ],
      "explanation": "Contestable period = 2 years."
    },
    "es": {
      "question": "El periodo contestable (incontestability) en Texas es de:",
      "answers": [
        {
          "id": "s1q21-a1",
          "text": "6 meses"
        },
        {
          "id": "s1q21-a2",
          "text": "1 año"
        },
        {
          "id": "s1q21-a3",
          "text": "2 años"
        },
        {
          "id": "s1q21-a4",
          "text": "5 años"
        }
      ],
      "explanation": "Periodo contestable = 2 años."
    },
    "correctAnswerId": "s1q21-a3"
  },
  {
    "id": "s1q22",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "A policy that fails the 7-pay test is classified as a:",
      "answers": [
        {
          "id": "s1q22-a1",
          "text": "MEC (Modified Endowment Contract)"
        },
        {
          "id": "s1q22-a2",
          "text": "Pure endowment"
        },
        {
          "id": "s1q22-a3",
          "text": "Convertible term"
        },
        {
          "id": "s1q22-a4",
          "text": "Annuity"
        }
      ],
      "explanation": "Failing the 7-pay test makes it a MEC."
    },
    "es": {
      "question": "Una póliza que falla el 7-pay test se clasifica como:",
      "answers": [
        {
          "id": "s1q22-a1",
          "text": "MEC (Modified Endowment Contract)"
        },
        {
          "id": "s1q22-a2",
          "text": "Endowment puro"
        },
        {
          "id": "s1q22-a3",
          "text": "Término convertible"
        },
        {
          "id": "s1q22-a4",
          "text": "Anualidad"
        }
      ],
      "explanation": "Fallar el 7-pay test la convierte en MEC."
    },
    "correctAnswerId": "s1q22-a1"
  },
  {
    "id": "s1q23",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Who leads the Texas Department of Insurance (TDI)?",
      "answers": [
        {
          "id": "s1q23-a1",
          "text": "An elected board"
        },
        {
          "id": "s1q23-a2",
          "text": "The Commissioner of Insurance, appointed by the Governor"
        },
        {
          "id": "s1q23-a3",
          "text": "The Attorney General"
        },
        {
          "id": "s1q23-a4",
          "text": "A federal panel"
        }
      ],
      "explanation": "The Commissioner (appointed by the Governor) leads the TDI."
    },
    "es": {
      "question": "¿Quién dirige el Departamento de Seguros de Texas (TDI)?",
      "answers": [
        {
          "id": "s1q23-a1",
          "text": "Una junta electa"
        },
        {
          "id": "s1q23-a2",
          "text": "El Comisionado de Seguros, designado por el Gobernador"
        },
        {
          "id": "s1q23-a3",
          "text": "El Procurador General"
        },
        {
          "id": "s1q23-a4",
          "text": "Un panel federal"
        }
      ],
      "explanation": "El Comisionado (designado por el Gobernador) dirige el TDI."
    },
    "correctAnswerId": "s1q23-a2"
  },
  {
    "id": "s1q24",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "In a Universal Life policy, Option B (increasing death benefit) pays:",
      "answers": [
        {
          "id": "s1q24-a1",
          "text": "Only the level face amount"
        },
        {
          "id": "s1q24-a2",
          "text": "The face amount plus the cash value"
        },
        {
          "id": "s1q24-a3",
          "text": "Only the cash value"
        },
        {
          "id": "s1q24-a4",
          "text": "Double in case of accident"
        }
      ],
      "explanation": "Option B = face amount + cash value (grows)."
    },
    "es": {
      "question": "En una Universal Life, la Opción B (beneficio creciente) paga:",
      "answers": [
        {
          "id": "s1q24-a1",
          "text": "Solo la suma asegurada nivelada"
        },
        {
          "id": "s1q24-a2",
          "text": "La suma asegurada más el valor en efectivo"
        },
        {
          "id": "s1q24-a3",
          "text": "Únicamente el valor en efectivo"
        },
        {
          "id": "s1q24-a4",
          "text": "El doble en caso de accidente"
        }
      ],
      "explanation": "Opción B = suma asegurada + valor en efectivo (crece)."
    },
    "correctAnswerId": "s1q24-a2"
  },
  {
    "id": "s1q25",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Offering a client something of value not included in the policy to induce the purchase is:",
      "answers": [
        {
          "id": "s1q25-a1",
          "text": "Defamation"
        },
        {
          "id": "s1q25-a2",
          "text": "Rebating"
        },
        {
          "id": "s1q25-a3",
          "text": "Twisting"
        },
        {
          "id": "s1q25-a4",
          "text": "Coercion"
        }
      ],
      "explanation": "A non-contractual inducement to buy = rebating (illegal, both parties)."
    },
    "es": {
      "question": "Ofrecer a un cliente un incentivo de valor no incluido en la póliza para inducir la compra es:",
      "answers": [
        {
          "id": "s1q25-a1",
          "text": "Defamation"
        },
        {
          "id": "s1q25-a2",
          "text": "Rebaja indebida"
        },
        {
          "id": "s1q25-a3",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s1q25-a4",
          "text": "Coercion"
        }
      ],
      "explanation": "Incentivo no contractual para inducir compra = rebaja indebida (ilegal, ambos)."
    },
    "correctAnswerId": "s1q25-a2"
  },
  {
    "id": "s1q26",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The “exclusion ratio” in an annuity is used to:",
      "answers": [
        {
          "id": "s1q26-a1",
          "text": "Calculate the agent’s commission"
        },
        {
          "id": "s1q26-a2",
          "text": "Separate the non-taxable portion (basis) from the taxable portion (gain)"
        },
        {
          "id": "s1q26-a3",
          "text": "Determine the premium"
        },
        {
          "id": "s1q26-a4",
          "text": "Set the retirement age"
        }
      ],
      "explanation": "The exclusion ratio separates basis (non-taxable) from gain (taxable)."
    },
    "es": {
      "question": "El “exclusion ratio” en una anualidad sirve para:",
      "answers": [
        {
          "id": "s1q26-a1",
          "text": "Calcular la comisión del agente"
        },
        {
          "id": "s1q26-a2",
          "text": "Separar la porción no gravable (base) de la gravable (ganancia)"
        },
        {
          "id": "s1q26-a3",
          "text": "Determinar la prima"
        },
        {
          "id": "s1q26-a4",
          "text": "Fijar la edad de jubilación"
        }
      ],
      "explanation": "El exclusion ratio separa la base (no gravable) de la ganancia (gravable)."
    },
    "correctAnswerId": "s1q26-a2"
  },
  {
    "id": "s1q27",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Which of the following is NOT an essential element of a valid contract?",
      "answers": [
        {
          "id": "s1q27-a1",
          "text": "Consideration"
        },
        {
          "id": "s1q27-a2",
          "text": "Legal purpose"
        },
        {
          "id": "s1q27-a3",
          "text": "A printed, signed policy"
        },
        {
          "id": "s1q27-a4",
          "text": "Competent parties"
        }
      ],
      "explanation": "A printed, signed policy is not an essential element (the essentials are agreement, consideration, competent parties, legal purpose)."
    },
    "es": {
      "question": "¿Cuál de los siguientes NO es un elemento esencial de un contrato válido?",
      "answers": [
        {
          "id": "s1q27-a1",
          "text": "Consideración"
        },
        {
          "id": "s1q27-a2",
          "text": "Propósito legal"
        },
        {
          "id": "s1q27-a3",
          "text": "Una póliza impresa y firmada"
        },
        {
          "id": "s1q27-a4",
          "text": "Partes competentes"
        }
      ],
      "explanation": "Una póliza impresa y firmada no es un elemento esencial (lo son acuerdo, consideración, partes competentes, propósito legal)."
    },
    "correctAnswerId": "s1q27-a3"
  },
  {
    "id": "s1q28",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The children’s term rider typically:",
      "answers": [
        {
          "id": "s1q28-a1",
          "text": "Covers only the oldest child"
        },
        {
          "id": "s1q28-a2",
          "text": "Covers all children and is usually convertible without exam"
        },
        {
          "id": "s1q28-a3",
          "text": "Pays double for accident"
        },
        {
          "id": "s1q28-a4",
          "text": "Refunds premiums"
        }
      ],
      "explanation": "The children’s term covers all children, convertible without exam."
    },
    "es": {
      "question": "El children’s term rider típicamente:",
      "answers": [
        {
          "id": "s1q28-a1",
          "text": "Cubre solo al hijo mayor"
        },
        {
          "id": "s1q28-a2",
          "text": "Cubre a todos los hijos y suele ser convertible sin examen"
        },
        {
          "id": "s1q28-a3",
          "text": "Paga el doble por accidente"
        },
        {
          "id": "s1q28-a4",
          "text": "Devuelve las primas"
        }
      ],
      "explanation": "El children’s term cubre a todos los hijos, convertible sin examen."
    },
    "correctAnswerId": "s1q28-a2"
  },
  {
    "id": "s1q29",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "In a defined benefit plan, the investment risk is assumed by:",
      "answers": [
        {
          "id": "s1q29-a1",
          "text": "The employee"
        },
        {
          "id": "s1q29-a2",
          "text": "The employer"
        },
        {
          "id": "s1q29-a3",
          "text": "The government"
        },
        {
          "id": "s1q29-a4",
          "text": "The employee’s insurer"
        }
      ],
      "explanation": "In a DB plan, the risk is on the employer."
    },
    "es": {
      "question": "En un plan de beneficio definido (defined benefit), el riesgo de inversión lo asume:",
      "answers": [
        {
          "id": "s1q29-a1",
          "text": "El empleado"
        },
        {
          "id": "s1q29-a2",
          "text": "El empleador"
        },
        {
          "id": "s1q29-a3",
          "text": "El gobierno"
        },
        {
          "id": "s1q29-a4",
          "text": "La aseguradora del empleado"
        }
      ],
      "explanation": "En un DB, el riesgo lo asume el empleador."
    },
    "correctAnswerId": "s1q29-a2"
  },
  {
    "id": "s1q30",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The free look for an ordinary life policy in Texas is:",
      "answers": [
        {
          "id": "s1q30-a1",
          "text": "3 days"
        },
        {
          "id": "s1q30-a2",
          "text": "10 days"
        },
        {
          "id": "s1q30-a3",
          "text": "30 days"
        },
        {
          "id": "s1q30-a4",
          "text": "60 days"
        }
      ],
      "explanation": "Texas life free look = 10 days."
    },
    "es": {
      "question": "El periodo de revisión gratuita para una póliza de vida ordinaria en Texas es de:",
      "answers": [
        {
          "id": "s1q30-a1",
          "text": "3 días"
        },
        {
          "id": "s1q30-a2",
          "text": "10 días"
        },
        {
          "id": "s1q30-a3",
          "text": "30 días"
        },
        {
          "id": "s1q30-a4",
          "text": "60 días"
        }
      ],
      "explanation": "periodo de revisión gratuita de vida en Texas = 10 días."
    },
    "correctAnswerId": "s1q30-a2"
  },
  {
    "id": "s1q31",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The Accelerated Death Benefit allows the insured to:",
      "answers": [
        {
          "id": "s1q31-a1",
          "text": "Double the benefit for accident"
        },
        {
          "id": "s1q31-a2",
          "text": "Collect part of the benefit while alive due to terminal illness, reducing the final amount"
        },
        {
          "id": "s1q31-a3",
          "text": "Recover all premiums"
        },
        {
          "id": "s1q31-a4",
          "text": "Buy more coverage without exam"
        }
      ],
      "explanation": "Accelerated DB = collect while alive for terminal illness, reduces the benefit."
    },
    "es": {
      "question": "El beneficio acelerado por muerte permite al asegurado:",
      "answers": [
        {
          "id": "s1q31-a1",
          "text": "Duplicar el beneficio por accidente"
        },
        {
          "id": "s1q31-a2",
          "text": "Cobrar en vida parte del beneficio ante enfermedad terminal, reduciendo el monto final"
        },
        {
          "id": "s1q31-a3",
          "text": "Recuperar todas las primas"
        },
        {
          "id": "s1q31-a4",
          "text": "Comprar más cobertura sin examen"
        }
      ],
      "explanation": "Accelerated DB = cobrar en vida por enfermedad terminal, reduce el beneficio."
    },
    "correctAnswerId": "s1q31-a2"
  },
  {
    "id": "s1q32",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Contributions to a Roth IRA are:",
      "answers": [
        {
          "id": "s1q32-a1",
          "text": "Always deductible"
        },
        {
          "id": "s1q32-a2",
          "text": "Never deductible (after-tax)"
        },
        {
          "id": "s1q32-a3",
          "text": "Deductible only for those over 50"
        },
        {
          "id": "s1q32-a4",
          "text": "Partially deductible"
        }
      ],
      "explanation": "Roth contributions are never deductible."
    },
    "es": {
      "question": "Las aportaciones a una Roth IRA son:",
      "answers": [
        {
          "id": "s1q32-a1",
          "text": "Siempre deducibles"
        },
        {
          "id": "s1q32-a2",
          "text": "Nunca deducibles (aftertax)"
        },
        {
          "id": "s1q32-a3",
          "text": "Deducibles solo para mayores de 50"
        },
        {
          "id": "s1q32-a4",
          "text": "Parcialmente deducibles"
        }
      ],
      "explanation": "Las aportaciones Roth nunca son deducibles."
    },
    "correctAnswerId": "s1q32-a2"
  },
  {
    "id": "s1q33",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "A 1035 exchange does NOT allow going from:",
      "answers": [
        {
          "id": "s1q33-a1",
          "text": "Life to life"
        },
        {
          "id": "s1q33-a2",
          "text": "Life to annuity"
        },
        {
          "id": "s1q33-a3",
          "text": "Annuity to annuity"
        },
        {
          "id": "s1q33-a4",
          "text": "Annuity to life"
        }
      ],
      "explanation": "1035 does not allow annuity → life."
    },
    "es": {
      "question": "Un intercambio 1035 NO permite ir de:",
      "answers": [
        {
          "id": "s1q33-a1",
          "text": "Vida a vida"
        },
        {
          "id": "s1q33-a2",
          "text": "Vida a anualidad"
        },
        {
          "id": "s1q33-a3",
          "text": "Anualidad a anualidad"
        },
        {
          "id": "s1q33-a4",
          "text": "Anualidad a vida"
        }
      ],
      "explanation": "1035 no permite anualidad → vida."
    },
    "correctAnswerId": "s1q33-a4"
  },
  {
    "id": "s1q34",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "If the insured misstated their age and paid an insufficient premium, the insurer will:",
      "answers": [
        {
          "id": "s1q34-a1",
          "text": "Rescind the policy"
        },
        {
          "id": "s1q34-a2",
          "text": "Pay the benefit the premium would have purchased at the correct age"
        },
        {
          "id": "s1q34-a3",
          "text": "Pay the full benefit with no adjustment"
        },
        {
          "id": "s1q34-a4",
          "text": "Refund only the premiums"
        }
      ],
      "explanation": "Misstatement of age → adjust the benefit (not void)."
    },
    "es": {
      "question": "Si el asegurado declaró mal su edad y pagó una prima insuficiente, la aseguradora:",
      "answers": [
        {
          "id": "s1q34-a1",
          "text": "Rescinde la póliza"
        },
        {
          "id": "s1q34-a2",
          "text": "Paga el beneficio que la prima habría comprado a la edad correcta"
        },
        {
          "id": "s1q34-a3",
          "text": "Paga el beneficio completo sin ajuste"
        },
        {
          "id": "s1q34-a4",
          "text": "Devuelve solo las primas"
        }
      ],
      "explanation": "Misstatement of age → ajustan el beneficio (no anulan)."
    },
    "correctAnswerId": "s1q34-a2"
  },
  {
    "id": "s1q35",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The suicide clause in Texas typically excludes payment of the benefit if suicide occurs within:",
      "answers": [
        {
          "id": "s1q35-a1",
          "text": "6 months, and refunds premiums"
        },
        {
          "id": "s1q35-a2",
          "text": "1 year, and pays nothing"
        },
        {
          "id": "s1q35-a3",
          "text": "2 years, and refunds the premiums"
        },
        {
          "id": "s1q35-a4",
          "text": "5 years, and pays half"
        }
      ],
      "explanation": "Suicide within 2 years → refunds premiums."
    },
    "es": {
      "question": "La cláusula de suicidio en Texas típicamente excluye el pago del beneficio si el suicidio ocurre dentro de:",
      "answers": [
        {
          "id": "s1q35-a1",
          "text": "6 meses, y devuelve primas"
        },
        {
          "id": "s1q35-a2",
          "text": "1 año, y no paga nada"
        },
        {
          "id": "s1q35-a3",
          "text": "2 años, y devuelve las primas"
        },
        {
          "id": "s1q35-a4",
          "text": "5 años, y paga la mitad"
        }
      ],
      "explanation": "Suicidio dentro de 2 años → devuelve primas."
    },
    "correctAnswerId": "s1q35-a3"
  },
  {
    "id": "s1q36",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Which source of information may NOT be the sole basis for declining an application?",
      "answers": [
        {
          "id": "s1q36-a1",
          "text": "The medical exam"
        },
        {
          "id": "s1q36-a2",
          "text": "The MIB information"
        },
        {
          "id": "s1q36-a3",
          "text": "The application"
        },
        {
          "id": "s1q36-a4",
          "text": "The APS"
        }
      ],
      "explanation": "You cannot decline solely on the MIB."
    },
    "es": {
      "question": "¿Qué fuente de información NO puede ser la única base para declinar una solicitud?",
      "answers": [
        {
          "id": "s1q36-a1",
          "text": "El examen médico"
        },
        {
          "id": "s1q36-a2",
          "text": "La información del MIB"
        },
        {
          "id": "s1q36-a3",
          "text": "La solicitud"
        },
        {
          "id": "s1q36-a4",
          "text": "El APS"
        }
      ],
      "explanation": "No se puede declinar solo por el MIB."
    },
    "correctAnswerId": "s1q36-a2"
  },
  {
    "id": "s1q37",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "A single-premium immediate annuity (SPIA):",
      "answers": [
        {
          "id": "s1q37-a1",
          "text": "Has a long accumulation phase"
        },
        {
          "id": "s1q37-a2",
          "text": "Begins paying within about one year, with no accumulation"
        },
        {
          "id": "s1q37-a3",
          "text": "Requires flexible contributions"
        },
        {
          "id": "s1q37-a4",
          "text": "Only exists in a variable version"
        }
      ],
      "explanation": "SPIA: single premium, pays within 1 year, no accumulation."
    },
    "es": {
      "question": "Una anualidad inmediata de prima única (SPIA):",
      "answers": [
        {
          "id": "s1q37-a1",
          "text": "Tiene una larga fase de acumulación"
        },
        {
          "id": "s1q37-a2",
          "text": "Comienza a pagar dentro de aproximadamente un año, sin acumulación"
        },
        {
          "id": "s1q37-a3",
          "text": "Requiere aportaciones flexibles"
        },
        {
          "id": "s1q37-a4",
          "text": "Solo existe en versión variable"
        }
      ],
      "explanation": "SPIA: prima única, paga en ≤1 año, sin acumulación."
    },
    "correctAnswerId": "s1q37-a2"
  },
  {
    "id": "s1q38",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "An agent who induces a client to replace a policy through false statements commits:",
      "answers": [
        {
          "id": "s1q38-a1",
          "text": "Churning"
        },
        {
          "id": "s1q38-a2",
          "text": "Twisting"
        },
        {
          "id": "s1q38-a3",
          "text": "Backdating"
        },
        {
          "id": "s1q38-a4",
          "text": "Rebating"
        }
      ],
      "explanation": "Replacement induced by false statements = twisting."
    },
    "es": {
      "question": "Un agente que induce a un cliente a reemplazar su póliza mediante declaraciones falsas comete:",
      "answers": [
        {
          "id": "s1q38-a1",
          "text": "Reemplazo abusivo"
        },
        {
          "id": "s1q38-a2",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s1q38-a3",
          "text": "Backdating"
        },
        {
          "id": "s1q38-a4",
          "text": "Rebaja indebida"
        }
      ],
      "explanation": "Reemplazo por declaraciones falsas = inducción engañosa al reemplazo."
    },
    "correctAnswerId": "s1q38-a2"
  },
  {
    "id": "s1q39",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Employer-provided group term life insurance is income-tax-free to the employee up to coverage of:",
      "answers": [
        {
          "id": "s1q39-a1",
          "text": "$25,000"
        },
        {
          "id": "s1q39-a2",
          "text": "$50,000"
        },
        {
          "id": "s1q39-a3",
          "text": "$100,000"
        },
        {
          "id": "s1q39-a4",
          "text": "$250,000"
        }
      ],
      "explanation": "Group term tax-free up to $50,000."
    },
    "es": {
      "question": "El seguro de vida grupal de término del empleador está libre de impuesto para el empleado hasta una cobertura de:",
      "answers": [
        {
          "id": "s1q39-a1",
          "text": "$25,000"
        },
        {
          "id": "s1q39-a2",
          "text": "$50,000"
        },
        {
          "id": "s1q39-a3",
          "text": "$100,000"
        },
        {
          "id": "s1q39-a4",
          "text": "$250,000"
        }
      ],
      "explanation": "Group term libre hasta $50,000."
    },
    "correctAnswerId": "s1q39-a2"
  },
  {
    "id": "s1q40",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Which risk classification applies to an applicant with a higher-than-average but still insurable risk?",
      "answers": [
        {
          "id": "s1q40-a1",
          "text": "Preferred"
        },
        {
          "id": "s1q40-a2",
          "text": "Standard"
        },
        {
          "id": "s1q40-a3",
          "text": "Substandard (rated)"
        },
        {
          "id": "s1q40-a4",
          "text": "Declined"
        }
      ],
      "explanation": "Higher risk but insurable = substandard (rated), not a decline."
    },
    "es": {
      "question": "¿Qué clasificación de riesgo se aplica a un solicitante con riesgo mayor al promedio pero aún asegurable?",
      "answers": [
        {
          "id": "s1q40-a1",
          "text": "Preferred"
        },
        {
          "id": "s1q40-a2",
          "text": "Standard"
        },
        {
          "id": "s1q40-a3",
          "text": "Substandard (rated)"
        },
        {
          "id": "s1q40-a4",
          "text": "Declined"
        }
      ],
      "explanation": "Riesgo alto pero asegurable = substandard (rated), no rechazo."
    },
    "correctAnswerId": "s1q40-a3"
  },
  {
    "id": "s1q41",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Under a “per stirpes” designation, if a beneficiary dies before the insured, their share:",
      "answers": [
        {
          "id": "s1q41-a1",
          "text": "Is divided among the surviving beneficiaries"
        },
        {
          "id": "s1q41-a2",
          "text": "Passes to their descendants"
        },
        {
          "id": "s1q41-a3",
          "text": "Goes to the insured’s estate"
        },
        {
          "id": "s1q41-a4",
          "text": "Is lost"
        }
      ],
      "explanation": "Per stirpes: the share passes to the descendants of the deceased."
    },
    "es": {
      "question": "En la designación “per stirpes”, si un beneficiario muere antes que el asegurado, su porción:",
      "answers": [
        {
          "id": "s1q41-a1",
          "text": "Se reparte entre los beneficiarios sobrevivientes"
        },
        {
          "id": "s1q41-a2",
          "text": "Baja a sus descendientes"
        },
        {
          "id": "s1q41-a3",
          "text": "Va al estate del asegurado"
        },
        {
          "id": "s1q41-a4",
          "text": "Se pierde"
        }
      ],
      "explanation": "Per stirpes: la porción baja a los descendientes del fallecido."
    },
    "correctAnswerId": "s1q41-a2"
  },
  {
    "id": "s1q42",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Which document contains the agent’s observations that are NOT shown to the applicant?",
      "answers": [
        {
          "id": "s1q42-a1",
          "text": "The medical Part II"
        },
        {
          "id": "s1q42-a2",
          "text": "The agent’s report"
        },
        {
          "id": "s1q42-a3",
          "text": "The buyer’s guide"
        },
        {
          "id": "s1q42-a4",
          "text": "The policy summary"
        }
      ],
      "explanation": "The agent’s report is not shown to the applicant."
    },
    "es": {
      "question": "¿Qué documento contiene observaciones del agente que NO se muestran al solicitante?",
      "answers": [
        {
          "id": "s1q42-a1",
          "text": "La Parte II médica"
        },
        {
          "id": "s1q42-a2",
          "text": "El agent’s report"
        },
        {
          "id": "s1q42-a3",
          "text": "El guía del comprador"
        },
        {
          "id": "s1q42-a4",
          "text": "El resumen de la póliza"
        }
      ],
      "explanation": "El agent’s report no se muestra al solicitante."
    },
    "correctAnswerId": "s1q42-a2"
  },
  {
    "id": "s1q43",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "An agent is prohibited from using, as a sales argument, the existence of:",
      "answers": [
        {
          "id": "s1q43-a1",
          "text": "The grace period"
        },
        {
          "id": "s1q43-a2",
          "text": "The Texas Life and Health Insurance Guaranty Association"
        },
        {
          "id": "s1q43-a3",
          "text": "The free look"
        },
        {
          "id": "s1q43-a4",
          "text": "The incontestability clause"
        }
      ],
      "explanation": "Prohibited to use the Guaranty Association as a sales inducement."
    },
    "es": {
      "question": "Está prohibido que un agente use, como argumento de venta, la existencia de:",
      "answers": [
        {
          "id": "s1q43-a1",
          "text": "El periodo de gracia"
        },
        {
          "id": "s1q43-a2",
          "text": "La Asociación de Garantía de Seguros de Vida y Salud de Texas"
        },
        {
          "id": "s1q43-a3",
          "text": "El periodo de revisión gratuita"
        },
        {
          "id": "s1q43-a4",
          "text": "La cláusula de incontestabilidad"
        }
      ],
      "explanation": "Prohibido usar la Guaranty Association como argumento de venta."
    },
    "correctAnswerId": "s1q43-a2"
  },
  {
    "id": "s1q44",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "In a flexible-premium Universal Life, the policy may lapse if:",
      "answers": [
        {
          "id": "s1q44-a1",
          "text": "The insured turns 65"
        },
        {
          "id": "s1q44-a2",
          "text": "The cash value cannot cover the cost of insurance"
        },
        {
          "id": "s1q44-a3",
          "text": "A contingent beneficiary is named"
        },
        {
          "id": "s1q44-a4",
          "text": "An overpayment is made"
        }
      ],
      "explanation": "UL lapses if the cash value cannot cover the cost of insurance."
    },
    "es": {
      "question": "En una Universal Life con prima flexible, la póliza puede caducar si:",
      "answers": [
        {
          "id": "s1q44-a1",
          "text": "El asegurado cumple 65"
        },
        {
          "id": "s1q44-a2",
          "text": "El valor en efectivo no cubre el costo del seguro"
        },
        {
          "id": "s1q44-a3",
          "text": "Se nombra un beneficiario contingente"
        },
        {
          "id": "s1q44-a4",
          "text": "Se paga de más"
        }
      ],
      "explanation": "La UL caduca si el valor en efectivo no cubre el cost of insurance."
    },
    "correctAnswerId": "s1q44-a2"
  },
  {
    "id": "s1q45",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "In-life distributions from a MEC before age 59½ are taxed:",
      "answers": [
        {
          "id": "s1q45-a1",
          "text": "Tax-free"
        },
        {
          "id": "s1q45-a2",
          "text": "Gain first (LIFO), taxable, plus a 10% penalty"
        },
        {
          "id": "s1q45-a3",
          "text": "Basis first (FIFO), tax-free"
        },
        {
          "id": "s1q45-a4",
          "text": "Not permitted"
        }
      ],
      "explanation": "MEC: distributions are LIFO (gain first) +10% if under 59½."
    },
    "es": {
      "question": "Las distribuciones en vida de un MEC antes de los 59½ se gravan:",
      "answers": [
        {
          "id": "s1q45-a1",
          "text": "Libres de impuesto"
        },
        {
          "id": "s1q45-a2",
          "text": "Ganancia primero (LIFO), gravable, más penalidad del 10%"
        },
        {
          "id": "s1q45-a3",
          "text": "Base primero (FIFO), libre de impuesto"
        },
        {
          "id": "s1q45-a4",
          "text": "No se permiten"
        }
      ],
      "explanation": "MEC: distribuciones LIFO (ganancia primero) + 10% si <59½."
    },
    "correctAnswerId": "s1q45-a2"
  },
  {
    "id": "s1q46",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The insurance producer legally represents:",
      "answers": [
        {
          "id": "s1q46-a1",
          "text": "The applicant"
        },
        {
          "id": "s1q46-a2",
          "text": "The insurer"
        },
        {
          "id": "s1q46-a3",
          "text": "The beneficiary"
        },
        {
          "id": "s1q46-a4",
          "text": "The TDI"
        }
      ],
      "explanation": "The agent represents the insurer."
    },
    "es": {
      "question": "El productor de seguros, legalmente, representa a:",
      "answers": [
        {
          "id": "s1q46-a1",
          "text": "El solicitante"
        },
        {
          "id": "s1q46-a2",
          "text": "La aseguradora"
        },
        {
          "id": "s1q46-a3",
          "text": "El beneficiario"
        },
        {
          "id": "s1q46-a4",
          "text": "El TDI"
        }
      ],
      "explanation": "El agente representa a la aseguradora."
    },
    "correctAnswerId": "s1q46-a2"
  },
  {
    "id": "s1q47",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Which type of permanent policy allows premiums to be paid over a limited period but keeps coverage for life?",
      "answers": [
        {
          "id": "s1q47-a1",
          "text": "Term life"
        },
        {
          "id": "s1q47-a2",
          "text": "Limited-pay whole life"
        },
        {
          "id": "s1q47-a3",
          "text": "Annual renewable term"
        },
        {
          "id": "s1q47-a4",
          "text": "Decreasing term"
        }
      ],
      "explanation": "Limited-pay whole life: pay for a shorter time, lifetime coverage."
    },
    "es": {
      "question": "¿Qué tipo de póliza permanente permite pagar las primas en un periodo limitado pero mantiene la cobertura de por vida?",
      "answers": [
        {
          "id": "s1q47-a1",
          "text": "Vida temporal"
        },
        {
          "id": "s1q47-a2",
          "text": "Vida entera de pago limitado"
        },
        {
          "id": "s1q47-a3",
          "text": "Término renovable anual"
        },
        {
          "id": "s1q47-a4",
          "text": "Término decreciente"
        }
      ],
      "explanation": "Limited-pay vida entera: pagas menos tiempo, cobertura vitalicia."
    },
    "correctAnswerId": "s1q47-a2"
  },
  {
    "id": "s1q48",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Under the Fair Credit Reporting Act, if an adverse action is taken based on a consumer report, the insurer must:",
      "answers": [
        {
          "id": "s1q48-a1",
          "text": "Conceal the source"
        },
        {
          "id": "s1q48-a2",
          "text": "Notify the applicant and identify the agency that issued the report"
        },
        {
          "id": "s1q48-a3",
          "text": "Pay a fine to the applicant"
        },
        {
          "id": "s1q48-a4",
          "text": "Cancel the policy"
        }
      ],
      "explanation": "FCRA: adverse action → notify and disclose the source."
    },
    "es": {
      "question": "Bajo la Fair Credit Reporting Act, si se toma una acción adversa basada en un consumer report, la aseguradora debe:",
      "answers": [
        {
          "id": "s1q48-a1",
          "text": "Ocultar la fuente"
        },
        {
          "id": "s1q48-a2",
          "text": "Notificar e identificar la agencia que emitió el reporte"
        },
        {
          "id": "s1q48-a3",
          "text": "Pagar una multa al solicitante"
        },
        {
          "id": "s1q48-a4",
          "text": "Cancelar la póliza"
        }
      ],
      "explanation": "FCRA: adverse action → notificar y revelar la fuente."
    },
    "correctAnswerId": "s1q48-a2"
  },
  {
    "id": "s1q49",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "Which retirement plan is designed for employees of public schools and non-profit organizations?",
      "answers": [
        {
          "id": "s1q49-a1",
          "text": "401(k)"
        },
        {
          "id": "s1q49-a2",
          "text": "403(b) / TSA"
        },
        {
          "id": "s1q49-a3",
          "text": "SEP IRA"
        },
        {
          "id": "s1q49-a4",
          "text": "Keogh"
        }
      ],
      "explanation": "403(b)/TSA = public schools and non-profits."
    },
    "es": {
      "question": "¿Qué plan de retiro está diseñado para empleados de escuelas públicas y organizaciones sin fines de lucro?",
      "answers": [
        {
          "id": "s1q49-a1",
          "text": "401(k)"
        },
        {
          "id": "s1q49-a2",
          "text": "403(b) / TSA"
        },
        {
          "id": "s1q49-a3",
          "text": "SEP IRA"
        },
        {
          "id": "s1q49-a4",
          "text": "Keogh"
        }
      ],
      "explanation": "403(b)/TSA = escuelas públicas y nonprofits."
    },
    "correctAnswerId": "s1q49-a2"
  },
  {
    "id": "s1q50",
    "topic": "general",
    "simulator": 1,
    "en": {
      "question": "The grace period for an ordinary life policy in Texas is:",
      "answers": [
        {
          "id": "s1q50-a1",
          "text": "7 days"
        },
        {
          "id": "s1q50-a2",
          "text": "10 days"
        },
        {
          "id": "s1q50-a3",
          "text": "31 days"
        },
        {
          "id": "s1q50-a4",
          "text": "60 days"
        }
      ],
      "explanation": "Ordinary life grace period in Texas = 31 days."
    },
    "es": {
      "question": "El periodo de gracia para una póliza de vida ordinaria en Texas es de:",
      "answers": [
        {
          "id": "s1q50-a1",
          "text": "7 días"
        },
        {
          "id": "s1q50-a2",
          "text": "10 días"
        },
        {
          "id": "s1q50-a3",
          "text": "31 días"
        },
        {
          "id": "s1q50-a4",
          "text": "60 días"
        }
      ],
      "explanation": "periodo de gracia de vida ordinaria en Texas = 31 días."
    },
    "correctAnswerId": "s1q50-a3"
  },
  {
    "id": "s2q1",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A company buys a policy on the life of its chief financial officer, names itself beneficiary, and pays the premiums. The director resigns two years later and dies a year after that. The insurer:",
      "answers": [
        {
          "id": "s2q1-a1",
          "text": "Does not pay, because insurable interest disappeared"
        },
        {
          "id": "s2q1-a2",
          "text": "Pays, because for life insurance insurable interest is only required at issue"
        },
        {
          "id": "s2q1-a3",
          "text": "Pays only half"
        },
        {
          "id": "s2q1-a4",
          "text": "Refunds the premiums"
        }
      ],
      "explanation": "For life, insurable interest is required only at issue; the policy remains payable."
    },
    "es": {
      "question": "Una empresa compra una póliza sobre la vida de su director financiero, se nombra beneficiaria y paga las primas. El director renuncia dos años después y fallece un año más tarde. La aseguradora:",
      "answers": [
        {
          "id": "s2q1-a1",
          "text": "No paga, porque el interés asegurable desapareció"
        },
        {
          "id": "s2q1-a2",
          "text": "Paga, porque en vida el interés asegurable solo se exige al emitir"
        },
        {
          "id": "s2q1-a3",
          "text": "Paga solo la mitad"
        },
        {
          "id": "s2q1-a4",
          "text": "Devuelve las primas"
        }
      ],
      "explanation": "En vida el interés asegurable solo se exige al emitir; la póliza sigue pagadera."
    },
    "correctAnswerId": "s2q1-a2"
  },
  {
    "id": "s2q2",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A 45-year-old client withdraws $12,000 from a traditional IRA with no exception applying. The tax consequences are:",
      "answers": [
        {
          "id": "s2q2-a1",
          "text": "Tax-free"
        },
        {
          "id": "s2q2-a2",
          "text": "Ordinary income tax plus a 10% penalty"
        },
        {
          "id": "s2q2-a3",
          "text": "Only the 10% penalty"
        },
        {
          "id": "s2q2-a4",
          "text": "Only a 20% withholding"
        }
      ],
      "explanation": "Early IRA withdrawal: ordinary income tax + 10% penalty."
    },
    "es": {
      "question": "Un cliente de 45 años retira $12,000 de su IRA tradicional sin que aplique excepción alguna. Las consecuencias fiscales son:",
      "answers": [
        {
          "id": "s2q2-a1",
          "text": "Libre de impuesto"
        },
        {
          "id": "s2q2-a2",
          "text": "Impuesto ordinario más una penalidad del 10%"
        },
        {
          "id": "s2q2-a3",
          "text": "Solo la penalidad del 10%"
        },
        {
          "id": "s2q2-a4",
          "text": "Impuesto del 20% de retención únicamente"
        }
      ],
      "explanation": "Retiro temprano de IRA: impuesto ordinario + 10% de penalidad."
    },
    "correctAnswerId": "s2q2-a2"
  },
  {
    "id": "s2q3",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A woman names her three children “per stirpes.” One dies before her, leaving two grandchildren. When she dies, the funds are divided:",
      "answers": [
        {
          "id": "s2q3-a1",
          "text": "Half and half between the two living children"
        },
        {
          "id": "s2q3-a2",
          "text": "One-third to each living child, and the deceased’s third between their two grandchildren"
        },
        {
          "id": "s2q3-a3",
          "text": "Equal shares among children and grandchildren"
        },
        {
          "id": "s2q3-a4",
          "text": "All to the estate"
        }
      ],
      "explanation": "Per stirpes: the deceased child’s share passes to their two grandchildren (1/6 each)."
    },
    "es": {
      "question": "Una mujer designa a sus tres hijos “per stirpes”. Uno fallece antes que ella dejando dos nietos. Al morir ella, los fondos se reparten:",
      "answers": [
        {
          "id": "s2q3-a1",
          "text": "Mitad y mitad entre los dos hijos vivos"
        },
        {
          "id": "s2q3-a2",
          "text": "Un tercio a cada hijo vivo y el tercio del fallecido entre sus dos nietos"
        },
        {
          "id": "s2q3-a3",
          "text": "Partes iguales entre hijos y nietos"
        },
        {
          "id": "s2q3-a4",
          "text": "Todo al estate"
        }
      ],
      "explanation": "Per stirpes: la porción del hijo fallecido baja a sus dos nietos (1/6 c/u)."
    },
    "correctAnswerId": "s2q3-a2"
  },
  {
    "id": "s2q4",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An agent deposits a client’s premium into a personal account for three days before sending it to the insurer. This constitutes:",
      "answers": [
        {
          "id": "s2q4-a1",
          "text": "An acceptable practice"
        },
        {
          "id": "s2q4-a2",
          "text": "Commingling, a breach of fiduciary duty"
        },
        {
          "id": "s2q4-a3",
          "text": "Rebating"
        },
        {
          "id": "s2q4-a4",
          "text": "Field underwriting"
        }
      ],
      "explanation": "Mixing premiums with personal funds = commingling."
    },
    "es": {
      "question": "Un agente deposita la prima de un cliente en su cuenta personal por tres días antes de enviarla a la aseguradora. Esto constituye:",
      "answers": [
        {
          "id": "s2q4-a1",
          "text": "Una práctica aceptable"
        },
        {
          "id": "s2q4-a2",
          "text": "Mezcla indebida de fondos, una violación del deber fiduciario"
        },
        {
          "id": "s2q4-a3",
          "text": "Rebaja indebida"
        },
        {
          "id": "s2q4-a4",
          "text": "Evaluación inicial de campo"
        }
      ],
      "explanation": "Mezclar primas con fondos personales = mezcla indebida de fondos."
    },
    "correctAnswerId": "s2q4-a2"
  },
  {
    "id": "s2q5",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A retiree gives $250,000 to an insurer and begins receiving monthly payments the following month. They purchased a:",
      "answers": [
        {
          "id": "s2q5-a1",
          "text": "Flexible-premium deferred annuity"
        },
        {
          "id": "s2q5-a2",
          "text": "Single-premium immediate annuity (SPIA)"
        },
        {
          "id": "s2q5-a3",
          "text": "Variable deferred annuity"
        },
        {
          "id": "s2q5-a4",
          "text": "Single-premium whole life"
        }
      ],
      "explanation": "Single premium + near-immediate payments = SPIA."
    },
    "es": {
      "question": "Un jubilado entrega $250,000 a una aseguradora y comienza a recibir pagos mensuales al mes siguiente. Adquirió una:",
      "answers": [
        {
          "id": "s2q5-a1",
          "text": "Anualidad diferida de prima flexible"
        },
        {
          "id": "s2q5-a2",
          "text": "Anualidad inmediata de prima única (SPIA)"
        },
        {
          "id": "s2q5-a3",
          "text": "Anualidad variable diferida"
        },
        {
          "id": "s2q5-a4",
          "text": "vida entera de prima única"
        }
      ],
      "explanation": "Prima única + pagos casi inmediatos = SPIA."
    },
    "correctAnswerId": "s2q5-a2"
  },
  {
    "id": "s2q6",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An insured with an irrevocable beneficiary requests a loan against the cash value. The insurer:",
      "answers": [
        {
          "id": "s2q6-a1",
          "text": "Grants it without conditions"
        },
        {
          "id": "s2q6-a2",
          "text": "Grants it only with the irrevocable beneficiary’s written consent"
        },
        {
          "id": "s2q6-a3",
          "text": "Requires a court order"
        },
        {
          "id": "s2q6-a4",
          "text": "Denies it permanently"
        }
      ],
      "explanation": "The irrevocable beneficiary must consent in writing to the loan."
    },
    "es": {
      "question": "Un asegurado con beneficiario irrevocable solicita un préstamo sobre el valor en efectivo. La aseguradora:",
      "answers": [
        {
          "id": "s2q6-a1",
          "text": "Lo concede sin condiciones"
        },
        {
          "id": "s2q6-a2",
          "text": "Lo concede solo con el consentimiento escrito del beneficiario irrevocable"
        },
        {
          "id": "s2q6-a3",
          "text": "Requiere una orden judicial"
        },
        {
          "id": "s2q6-a4",
          "text": "Lo niega permanentemente"
        }
      ],
      "explanation": "El irrevocable debe consentir por escrito el préstamo."
    },
    "correctAnswerId": "s2q6-a2"
  },
  {
    "id": "s2q7",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A producer wants to sell a variable annuity. In addition to a life license, they need:",
      "answers": [
        {
          "id": "s2q7-a1",
          "text": "A health license"
        },
        {
          "id": "s2q7-a2",
          "text": "A securities registration (FINRA/SEC)"
        },
        {
          "id": "s2q7-a3",
          "text": "Nothing additional"
        },
        {
          "id": "s2q7-a4",
          "text": "A property license"
        }
      ],
      "explanation": "Variable = security → securities registration in addition to the life license."
    },
    "es": {
      "question": "Un productor quiere vender una anualidad variable. Además de su licencia de vida, necesita:",
      "answers": [
        {
          "id": "s2q7-a1",
          "text": "Una licencia de salud"
        },
        {
          "id": "s2q7-a2",
          "text": "Un registro de valores (FINRA/SEC)"
        },
        {
          "id": "s2q7-a3",
          "text": "Nada adicional"
        },
        {
          "id": "s2q7-a4",
          "text": "Una licencia de propiedad"
        }
      ],
      "explanation": "Variable = security → registro de valores además de la licencia de vida."
    },
    "correctAnswerId": "s2q7-a2"
  },
  {
    "id": "s2q8",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An insurer declines an application based on a consumer report. Under the FCRA it must:",
      "answers": [
        {
          "id": "s2q8-a1",
          "text": "Keep the source secret"
        },
        {
          "id": "s2q8-a2",
          "text": "Notify the applicant and identify the agency"
        },
        {
          "id": "s2q8-a3",
          "text": "Pay compensation"
        },
        {
          "id": "s2q8-a4",
          "text": "Reimburse the medical exam"
        }
      ],
      "explanation": "FCRA: adverse action → notify and identify the agency."
    },
    "es": {
      "question": "Una aseguradora declina una solicitud basándose en un consumer report. Bajo la FCRA debe:",
      "answers": [
        {
          "id": "s2q8-a1",
          "text": "Mantener la fuente en secreto"
        },
        {
          "id": "s2q8-a2",
          "text": "Notificar al solicitante e identificar la agencia"
        },
        {
          "id": "s2q8-a3",
          "text": "Pagar una indemnización"
        },
        {
          "id": "s2q8-a4",
          "text": "Reembolsar el examen médico"
        }
      ],
      "explanation": "FCRA: adverse action → notificar e identificar la agencia."
    },
    "correctAnswerId": "s2q8-a2"
  },
  {
    "id": "s2q9",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An insured dies during the grace period with an unpaid premium. The insurer:",
      "answers": [
        {
          "id": "s2q9-a1",
          "text": "Denies the claim"
        },
        {
          "id": "s2q9-a2",
          "text": "Pays the full benefit with no deduction"
        },
        {
          "id": "s2q9-a3",
          "text": "Pays the benefit minus the overdue premium"
        },
        {
          "id": "s2q9-a4",
          "text": "Refunds the premiums"
        }
      ],
      "explanation": "During the grace period the benefit is paid minus the overdue premium."
    },
    "es": {
      "question": "Un asegurado fallece durante el periodo de gracia con una prima impaga. La aseguradora:",
      "answers": [
        {
          "id": "s2q9-a1",
          "text": "Niega la reclamación"
        },
        {
          "id": "s2q9-a2",
          "text": "Paga el beneficio completo sin descuento"
        },
        {
          "id": "s2q9-a3",
          "text": "Paga el beneficio menos la prima vencida"
        },
        {
          "id": "s2q9-a4",
          "text": "Devuelve las primas"
        }
      ],
      "explanation": "Durante el periodo de gracia se paga el beneficio menos la prima vencida."
    },
    "correctAnswerId": "s2q9-a3"
  },
  {
    "id": "s2q10",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An employee of a 501(c)(3) organization wants to defer salary for retirement with a tax advantage. The typical plan is:",
      "answers": [
        {
          "id": "s2q10-a1",
          "text": "SEP IRA"
        },
        {
          "id": "s2q10-a2",
          "text": "403(b) / TSA"
        },
        {
          "id": "s2q10-a3",
          "text": "Keogh"
        },
        {
          "id": "s2q10-a4",
          "text": "Roth IRA only"
        }
      ],
      "explanation": "501(c)(3) → 403(b)/TSA."
    },
    "es": {
      "question": "Un empleado de una organización 501(c)(3) quiere diferir salario para el retiro con ventaja fiscal. El plan típico es:",
      "answers": [
        {
          "id": "s2q10-a1",
          "text": "SEP IRA"
        },
        {
          "id": "s2q10-a2",
          "text": "403(b) / TSA"
        },
        {
          "id": "s2q10-a3",
          "text": "Keogh"
        },
        {
          "id": "s2q10-a4",
          "text": "Roth IRA exclusivamente"
        }
      ],
      "explanation": "501(c)(3) → 403(b)/TSA."
    },
    "correctAnswerId": "s2q10-a2"
  },
  {
    "id": "s2q11",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An agent exaggerates the flaws of the client’s current policy and hides the charges so they replace it. This is:",
      "answers": [
        {
          "id": "s2q11-a1",
          "text": "Churning"
        },
        {
          "id": "s2q11-a2",
          "text": "Twisting"
        },
        {
          "id": "s2q11-a3",
          "text": "Sliding"
        },
        {
          "id": "s2q11-a4",
          "text": "Backdating"
        }
      ],
      "explanation": "Replacement induced by deception = twisting."
    },
    "es": {
      "question": "Un agente exagera los defectos de la póliza vigente del cliente y oculta los cargos para que la reemplace. Comete:",
      "answers": [
        {
          "id": "s2q11-a1",
          "text": "Reemplazo abusivo"
        },
        {
          "id": "s2q11-a2",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s2q11-a3",
          "text": "Venta agregada no autorizada"
        },
        {
          "id": "s2q11-a4",
          "text": "Backdating"
        }
      ],
      "explanation": "Reemplazo inducido por engaño = inducción engañosa al reemplazo."
    },
    "correctAnswerId": "s2q11-a2"
  },
  {
    "id": "s2q12",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A client wants maximum coverage for 20 years at the lowest cost, with the option to convert it to permanent without a new medical exam. Best suited is:",
      "answers": [
        {
          "id": "s2q12-a1",
          "text": "Limited-pay whole life"
        },
        {
          "id": "s2q12-a2",
          "text": "Level convertible term"
        },
        {
          "id": "s2q12-a3",
          "text": "Deferred annuity"
        },
        {
          "id": "s2q12-a4",
          "text": "Single-premium whole life"
        }
      ],
      "explanation": "Level convertible term: cheap maximum coverage + conversion without exam."
    },
    "es": {
      "question": "Un cliente quiere la máxima cobertura por 20 años al menor costo, con opción de volverla permanente sin nuevo examen médico. Conviene:",
      "answers": [
        {
          "id": "s2q12-a1",
          "text": "Vida entera de pago limitado"
        },
        {
          "id": "s2q12-a2",
          "text": "Término nivelado convertible"
        },
        {
          "id": "s2q12-a3",
          "text": "Anualidad diferida"
        },
        {
          "id": "s2q12-a4",
          "text": "Vida entera de prima única"
        }
      ],
      "explanation": "Term nivelado convertible: máxima cobertura barata + conversión sin examen."
    },
    "correctAnswerId": "s2q12-a2"
  },
  {
    "id": "s2q13",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "The cash value of a whole life policy is surrendered. The client paid $30,000 in premiums (no dividends) and the cash value is $42,000. The taxable amount is:",
      "answers": [
        {
          "id": "s2q13-a1",
          "text": "$42,000"
        },
        {
          "id": "s2q13-a2",
          "text": "$30,000"
        },
        {
          "id": "s2q13-a3",
          "text": "$12,000"
        },
        {
          "id": "s2q13-a4",
          "text": "$0"
        }
      ],
      "explanation": "Gain = 42,000 − 30,000 = $12,000 (only the gain is taxable)."
    },
    "es": {
      "question": "El valor en efectivo de una vida entera se rescata. El cliente pagó $30,000 en primas (sin dividendos) y el valor en efectivo es $42,000. La parte gravable es:",
      "answers": [
        {
          "id": "s2q13-a1",
          "text": "$42,000"
        },
        {
          "id": "s2q13-a2",
          "text": "$30,000"
        },
        {
          "id": "s2q13-a3",
          "text": "$12,000"
        },
        {
          "id": "s2q13-a4",
          "text": "$0"
        }
      ],
      "explanation": "Ganancia = 42,000 − 30,000 = $12,000 (solo la ganancia es gravable)."
    },
    "correctAnswerId": "s2q13-a3"
  },
  {
    "id": "s2q14",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A wealthy couple wants funds to pay the estate tax their children will face after both parents have died. The suitable policy is:",
      "answers": [
        {
          "id": "s2q14-a1",
          "text": "Joint life (first-to-die)"
        },
        {
          "id": "s2q14-a2",
          "text": "Survivorship (second-todie)"
        },
        {
          "id": "s2q14-a3",
          "text": "Decreasing term"
        },
        {
          "id": "s2q14-a4",
          "text": "Annual renewable term"
        }
      ],
      "explanation": "Survivorship (second-to-die) for estate taxes at the second death."
    },
    "es": {
      "question": "Un matrimonio adinerado quiere fondos para pagar el impuesto sucesorio que sus hijos enfrentarán cuando ambos padres hayan muerto. La póliza idónea es:",
      "answers": [
        {
          "id": "s2q14-a1",
          "text": "Vida conjunta (primer fallecimiento)"
        },
        {
          "id": "s2q14-a2",
          "text": "Survivorship (second-to-die)"
        },
        {
          "id": "s2q14-a3",
          "text": "Término decreciente"
        },
        {
          "id": "s2q14-a4",
          "text": "Término renovable anual"
        }
      ],
      "explanation": "Survivorship (second-to-die) para impuestos sucesorios al segundo deceso."
    },
    "correctAnswerId": "s2q14-a2"
  },
  {
    "id": "s2q15",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Under Texas law, an agent who sells annuities must complete, before selling them, a course of:",
      "answers": [
        {
          "id": "s2q15-a1",
          "text": "8 hours of ethics"
        },
        {
          "id": "s2q15-a2",
          "text": "4 hours Best Interest (suitability)"
        },
        {
          "id": "s2q15-a3",
          "text": "24 hours of LTC"
        },
        {
          "id": "s2q15-a4",
          "text": "3 hours of flood"
        }
      ],
      "explanation": "Texas requires the 4-hour Best Interest course before selling annuities."
    },
    "es": {
      "question": "Bajo la ley de Texas, un agente que vende anualidades debe completar, antes de venderlas, un curso de:",
      "answers": [
        {
          "id": "s2q15-a1",
          "text": "8 horas de ética"
        },
        {
          "id": "s2q15-a2",
          "text": "4 horas de mejor interés (idoneidad)"
        },
        {
          "id": "s2q15-a3",
          "text": "24 horas de LTC"
        },
        {
          "id": "s2q15-a4",
          "text": "3 horas de flood"
        }
      ],
      "explanation": "Texas exige el curso mejor interés de 4 horas antes de vender anualidades."
    },
    "correctAnswerId": "s2q15-a2"
  },
  {
    "id": "s2q16",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A Universal Life policy has for years paid only the minimum; rates drop and the cash value is depleted without covering the cost of insurance. If the owner does not contribute more, the policy:",
      "answers": [
        {
          "id": "s2q16-a1",
          "text": "Converts to whole life"
        },
        {
          "id": "s2q16-a2",
          "text": "Lapses"
        },
        {
          "id": "s2q16-a3",
          "text": "Increases its face amount"
        },
        {
          "id": "s2q16-a4",
          "text": "Pays dividends"
        }
      ],
      "explanation": "If the cash value cannot cover the cost of insurance, the UL lapses."
    },
    "es": {
      "question": "Una póliza de Universal Life lleva años pagando solo el mínimo; las tasas bajan y el valor en efectivo se agota sin cubrir el costo del seguro. Si el dueño no aporta más, la póliza:",
      "answers": [
        {
          "id": "s2q16-a1",
          "text": "Se convierte en vida entera"
        },
        {
          "id": "s2q16-a2",
          "text": "Caduca (lapse)"
        },
        {
          "id": "s2q16-a3",
          "text": "Aumenta su suma asegurada"
        },
        {
          "id": "s2q16-a4",
          "text": "Paga dividendos"
        }
      ],
      "explanation": "Si el valor en efectivo no cubre el cost of insurance, la UL caduca."
    },
    "correctAnswerId": "s2q16-a2"
  },
  {
    "id": "s2q17",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "The primary beneficiary died a year before the insured; there is a living contingent. When the insured dies, who collects?",
      "answers": [
        {
          "id": "s2q17-a1",
          "text": "The primary’s estate"
        },
        {
          "id": "s2q17-a2",
          "text": "The contingent beneficiary"
        },
        {
          "id": "s2q17-a3",
          "text": "The insured’s estate"
        },
        {
          "id": "s2q17-a4",
          "text": "The insurer"
        }
      ],
      "explanation": "The contingent collects (the primary did not survive)."
    },
    "es": {
      "question": "El beneficiario primario falleció un año antes que el asegurado; hay un contingente vivo. Al morir el asegurado, cobra:",
      "answers": [
        {
          "id": "s2q17-a1",
          "text": "El estate del primario"
        },
        {
          "id": "s2q17-a2",
          "text": "El beneficiario contingente"
        },
        {
          "id": "s2q17-a3",
          "text": "El estate del asegurado"
        },
        {
          "id": "s2q17-a4",
          "text": "La aseguradora"
        }
      ],
      "explanation": "El contingente cobra (el primario no sobrevivió)."
    },
    "correctAnswerId": "s2q17-a2"
  },
  {
    "id": "s2q18",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An applicant pays the premium and receives a conditional receipt. They die before issue, but underwriting concludes they were insurable as applied. The insurer:",
      "answers": [
        {
          "id": "s2q18-a1",
          "text": "Does not pay"
        },
        {
          "id": "s2q18-a2",
          "text": "Pays the benefit"
        },
        {
          "id": "s2q18-a3",
          "text": "Refunds only the premium"
        },
        {
          "id": "s2q18-a4",
          "text": "Pays half"
        }
      ],
      "explanation": "Conditional receipt: they were insurable → the insurer pays."
    },
    "es": {
      "question": "Un solicitante paga la prima y recibe un recibo condicional. Muere antes de la emisión, pero el evaluación de riesgo concluye que era asegurable como se solicitó. La aseguradora:",
      "answers": [
        {
          "id": "s2q18-a1",
          "text": "No paga"
        },
        {
          "id": "s2q18-a2",
          "text": "Paga el beneficio"
        },
        {
          "id": "s2q18-a3",
          "text": "Devuelve solo la prima"
        },
        {
          "id": "s2q18-a4",
          "text": "Paga la mitad"
        }
      ],
      "explanation": "Conditional receipt: era asegurable → la aseguradora paga."
    },
    "correctAnswerId": "s2q18-a2"
  },
  {
    "id": "s2q19",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Which statement about the Roth IRA is correct?",
      "answers": [
        {
          "id": "s2q19-a1",
          "text": "Its contributions are deductible"
        },
        {
          "id": "s2q19-a2",
          "text": "It requires RMDs at 73"
        },
        {
          "id": "s2q19-a3",
          "text": "Its qualified distributions are tax-free and there are no lifetime RMDs"
        },
        {
          "id": "s2q19-a4",
          "text": "It has no income limits to contribute"
        }
      ],
      "explanation": "Roth: qualified distributions tax-free, no lifetime RMDs."
    },
    "es": {
      "question": "¿Qué afirmación sobre la Roth IRA es correcta?",
      "answers": [
        {
          "id": "s2q19-a1",
          "text": "Sus aportaciones son deducibles"
        },
        {
          "id": "s2q19-a2",
          "text": "Exige RMD a los 73"
        },
        {
          "id": "s2q19-a3",
          "text": "Sus distribuciones calificadas son libres de impuesto y no hay RMD en vida"
        },
        {
          "id": "s2q19-a4",
          "text": "No tiene límites de ingreso para aportar"
        }
      ],
      "explanation": "Roth: distribuciones calificadas tax-free, sin RMD en vida."
    },
    "correctAnswerId": "s2q19-a3"
  },
  {
    "id": "s2q20",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An insurer spreads, without basis, that a competitor “is about to go bankrupt” to steal its clients. It commits:",
      "answers": [
        {
          "id": "s2q20-a1",
          "text": "Rebating"
        },
        {
          "id": "s2q20-a2",
          "text": "Defamation"
        },
        {
          "id": "s2q20-a3",
          "text": "Twisting"
        },
        {
          "id": "s2q20-a4",
          "text": "Sliding"
        }
      ],
      "explanation": "Defaming a competitor’s solvency = defamation."
    },
    "es": {
      "question": "Una aseguradora difunde, sin sustento, que una competidora “está por quebrar” para robarle clientes. Comete:",
      "answers": [
        {
          "id": "s2q20-a1",
          "text": "Rebaja indebida"
        },
        {
          "id": "s2q20-a2",
          "text": "Defamation"
        },
        {
          "id": "s2q20-a3",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s2q20-a4",
          "text": "Venta agregada no autorizada"
        }
      ],
      "explanation": "Difamar la solvencia de otra aseguradora = defamation."
    },
    "correctAnswerId": "s2q20-a2"
  },
  {
    "id": "s2q21",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "In an annuity, the phase in which money is contributed and grows tax-deferred is called:",
      "answers": [
        {
          "id": "s2q21-a1",
          "text": "Payout phase"
        },
        {
          "id": "s2q21-a2",
          "text": "Accumulation phase"
        },
        {
          "id": "s2q21-a3",
          "text": "Annuitization"
        },
        {
          "id": "s2q21-a4",
          "text": "Liquidation"
        }
      ],
      "explanation": "Contributing and growing tax-deferred = accumulation phase."
    },
    "es": {
      "question": "En una anualidad, la fase en que el dinero se aporta y crece con impuestos diferidos se llama:",
      "answers": [
        {
          "id": "s2q21-a1",
          "text": "Fase de pago"
        },
        {
          "id": "s2q21-a2",
          "text": "Fase de acumulación"
        },
        {
          "id": "s2q21-a3",
          "text": "Anualización"
        },
        {
          "id": "s2q21-a4",
          "text": "Liquidación"
        }
      ],
      "explanation": "Aportar y crecer tax-deferred = fase de acumulación."
    },
    "correctAnswerId": "s2q21-a2"
  },
  {
    "id": "s2q22",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An insured commits suicide 18 months after the policy is issued. The insurer:",
      "answers": [
        {
          "id": "s2q22-a1",
          "text": "Pays the full benefit"
        },
        {
          "id": "s2q22-a2",
          "text": "Pays nothing"
        },
        {
          "id": "s2q22-a3",
          "text": "Refunds the premiums paid"
        },
        {
          "id": "s2q22-a4",
          "text": "Pays half"
        }
      ],
      "explanation": "Suicide within 2 years → refunds premiums."
    },
    "es": {
      "question": "Un asegurado se suicida 18 meses después de emitida la póliza. La aseguradora:",
      "answers": [
        {
          "id": "s2q22-a1",
          "text": "Paga el beneficio completo"
        },
        {
          "id": "s2q22-a2",
          "text": "No paga nada"
        },
        {
          "id": "s2q22-a3",
          "text": "Devuelve las primas pagadas"
        },
        {
          "id": "s2q22-a4",
          "text": "Paga la mitad"
        }
      ],
      "explanation": "Suicidio dentro de 2 años → devuelve las primas."
    },
    "correctAnswerId": "s2q22-a3"
  },
  {
    "id": "s2q23",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Which of the following describes a defined contribution (DC) plan?",
      "answers": [
        {
          "id": "s2q23-a1",
          "text": "Promises a fixed monthly benefit at retirement"
        },
        {
          "id": "s2q23-a2",
          "text": "Defines the contribution; the benefit depends on performance and the risk is on the employee"
        },
        {
          "id": "s2q23-a3",
          "text": "The employer assumes all investment risk"
        },
        {
          "id": "s2q23-a4",
          "text": "Guarantees the final amount to the retiree"
        }
      ],
      "explanation": "DC: defined contribution, benefit based on performance, employee’s risk."
    },
    "es": {
      "question": "¿Cuál de los siguientes describe un plan de contribución definida (DC)?",
      "answers": [
        {
          "id": "s2q23-a1",
          "text": "Promete un beneficio mensual fijo en el retiro"
        },
        {
          "id": "s2q23-a2",
          "text": "Define la aportación; el beneficio depende del desempeño y el riesgo es del empleado"
        },
        {
          "id": "s2q23-a3",
          "text": "El empleador asume todo el riesgo de inversión"
        },
        {
          "id": "s2q23-a4",
          "text": "Garantiza el monto final al jubilado"
        }
      ],
      "explanation": "DC: aportación definida, beneficio según desempeño, riesgo del empleado."
    },
    "correctAnswerId": "s2q23-a2"
  },
  {
    "id": "s2q24",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An agent notices an error in an application answer. The correct thing is that:",
      "answers": [
        {
          "id": "s2q24-a1",
          "text": "The agent corrects it without notice"
        },
        {
          "id": "s2q24-a2",
          "text": "The applicant makes and initials the correction"
        },
        {
          "id": "s2q24-a3",
          "text": "The underwriter changes it"
        },
        {
          "id": "s2q24-a4",
          "text": "It is ignored"
        }
      ],
      "explanation": "Corrections are initialed by the applicant."
    },
    "es": {
      "question": "Un agente nota un error en una respuesta de la solicitud. Lo correcto es que:",
      "answers": [
        {
          "id": "s2q24-a1",
          "text": "El agente lo corrija sin avisar"
        },
        {
          "id": "s2q24-a2",
          "text": "El solicitante realice e inicialice la corrección"
        },
        {
          "id": "s2q24-a3",
          "text": "El underwriter lo cambie"
        },
        {
          "id": "s2q24-a4",
          "text": "Se ignore"
        }
      ],
      "explanation": "Las correcciones las inicializa el solicitante."
    },
    "correctAnswerId": "s2q24-a2"
  },
  {
    "id": "s2q25",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "The Texas Guaranty Association limit for the present value of an annuity is:",
      "answers": [
        {
          "id": "s2q25-a1",
          "text": "$100,000"
        },
        {
          "id": "s2q25-a2",
          "text": "$250,000"
        },
        {
          "id": "s2q25-a3",
          "text": "$300,000"
        },
        {
          "id": "s2q25-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA annuity = $250,000 (present value)."
    },
    "es": {
      "question": "El límite de la Texas Guaranty Association para el valor presente de una anualidad es:",
      "answers": [
        {
          "id": "s2q25-a1",
          "text": "$100,000"
        },
        {
          "id": "s2q25-a2",
          "text": "$250,000"
        },
        {
          "id": "s2q25-a3",
          "text": "$300,000"
        },
        {
          "id": "s2q25-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA anualidad = $250,000 (valor presente)."
    },
    "correctAnswerId": "s2q25-a2"
  },
  {
    "id": "s2q26",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A person wants to receive a fixed monthly payment from their life benefit until the funds run out. They should choose:",
      "answers": [
        {
          "id": "s2q26-a1",
          "text": "Fixed period"
        },
        {
          "id": "s2q26-a2",
          "text": "Fixed amount"
        },
        {
          "id": "s2q26-a3",
          "text": "Interest only"
        },
        {
          "id": "s2q26-a4",
          "text": "Life only"
        }
      ],
      "explanation": "Fixed amount until depleted = fixed amount."
    },
    "es": {
      "question": "Una persona quiere recibir un pago mensual fijo de su beneficio de vida hasta que los fondos se agoten. Debe elegir:",
      "answers": [
        {
          "id": "s2q26-a1",
          "text": "Periodo fijo"
        },
        {
          "id": "s2q26-a2",
          "text": "Monto fijo"
        },
        {
          "id": "s2q26-a3",
          "text": "Interest only"
        },
        {
          "id": "s2q26-a4",
          "text": "Solo vida"
        }
      ],
      "explanation": "Monto fijo hasta agotarse = fixed amount."
    },
    "correctAnswerId": "s2q26-a2"
  },
  {
    "id": "s2q27",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "The double indemnity rider will pay the additional benefit only if death:",
      "answers": [
        {
          "id": "s2q27-a1",
          "text": "Occurs from any cause"
        },
        {
          "id": "s2q27-a2",
          "text": "Is accidental and occurs within the specified period (e.g., 90 days)"
        },
        {
          "id": "s2q27-a3",
          "text": "Is from illness in the first year"
        },
        {
          "id": "s2q27-a4",
          "text": "Occurs after age 65"
        }
      ],
      "explanation": "Double indemnity: accident within the period (~90 days)."
    },
    "es": {
      "question": "El rider de doble indemnización pagará el beneficio adicional solo si la muerte:",
      "answers": [
        {
          "id": "s2q27-a1",
          "text": "Ocurre por cualquier causa"
        },
        {
          "id": "s2q27-a2",
          "text": "Es accidental y ocurre dentro del plazo especificado (p. ej., 90 días)"
        },
        {
          "id": "s2q27-a3",
          "text": "Es por enfermedad en el primer año"
        },
        {
          "id": "s2q27-a4",
          "text": "Ocurre después de los 65"
        }
      ],
      "explanation": "Double indemnity: accidente dentro del plazo (~90 días)."
    },
    "correctAnswerId": "s2q27-a2"
  },
  {
    "id": "s2q28",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "To reinstate a lapsed policy, you do NOT need:",
      "answers": [
        {
          "id": "s2q28-a1",
          "text": "Evidence of insurability"
        },
        {
          "id": "s2q28-a2",
          "text": "Payment of back premiums with interest"
        },
        {
          "id": "s2q28-a3",
          "text": "To buy a new policy at a new age"
        },
        {
          "id": "s2q28-a4",
          "text": "To reactivate outstanding loans"
        }
      ],
      "explanation": "Reinstatement does not mean buying a new policy (keeps the original age)."
    },
    "es": {
      "question": "Para reactivar (reinstate) una póliza caducada, NO se requiere:",
      "answers": [
        {
          "id": "s2q28-a1",
          "text": "Evidencia de asegurabilidad"
        },
        {
          "id": "s2q28-a2",
          "text": "Pago de primas atrasadas con interés"
        },
        {
          "id": "s2q28-a3",
          "text": "Comprar una póliza nueva con nueva edad"
        },
        {
          "id": "s2q28-a4",
          "text": "Reactivar préstamos pendientes"
        }
      ],
      "explanation": "El reinstatement no implica comprar póliza nueva (conserva la edad original)."
    },
    "correctAnswerId": "s2q28-a3"
  },
  {
    "id": "s2q29",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A client wants to exchange their life policy for an annuity without triggering tax on the gain. The mechanism is:",
      "answers": [
        {
          "id": "s2q29-a1",
          "text": "A MEC"
        },
        {
          "id": "s2q29-a2",
          "text": "A 1035 exchange"
        },
        {
          "id": "s2q29-a3",
          "text": "A 60-day rollover"
        },
        {
          "id": "s2q29-a4",
          "text": "Backdating"
        }
      ],
      "explanation": "Exchanging life for an annuity tax-free = 1035."
    },
    "es": {
      "question": "Un cliente quiere cambiar su póliza de vida por una anualidad sin disparar impuesto sobre la ganancia. El mecanismo es:",
      "answers": [
        {
          "id": "s2q29-a1",
          "text": "Un MEC"
        },
        {
          "id": "s2q29-a2",
          "text": "Un intercambio 1035"
        },
        {
          "id": "s2q29-a3",
          "text": "Un rollover de 60 días"
        },
        {
          "id": "s2q29-a4",
          "text": "Un backdating"
        }
      ],
      "explanation": "Cambiar vida por anualidad sin impuesto = 1035."
    },
    "correctAnswerId": "s2q29-a2"
  },
  {
    "id": "s2q30",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "What happens to the death benefit when there is an outstanding policy loan at the insured’s death?",
      "answers": [
        {
          "id": "s2q30-a1",
          "text": "It doubles"
        },
        {
          "id": "s2q30-a2",
          "text": "It is reduced by the loan balance plus interest"
        },
        {
          "id": "s2q30-a3",
          "text": "It does not change"
        },
        {
          "id": "s2q30-a4",
          "text": "It is voided"
        }
      ],
      "explanation": "The outstanding loan reduces the death benefit (balance + interest)."
    },
    "es": {
      "question": "¿Qué le ocurre al beneficio por muerte cuando hay un préstamo de póliza pendiente al morir el asegurado?",
      "answers": [
        {
          "id": "s2q30-a1",
          "text": "Se duplica"
        },
        {
          "id": "s2q30-a2",
          "text": "Se reduce por el saldo del préstamo más intereses"
        },
        {
          "id": "s2q30-a3",
          "text": "No cambia"
        },
        {
          "id": "s2q30-a4",
          "text": "Se anula"
        }
      ],
      "explanation": "El préstamo pendiente reduce el beneficio por muerte (saldo + intereses)."
    },
    "correctAnswerId": "s2q30-a2"
  },
  {
    "id": "s2q31",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An insolvent insurer is liquidated. Who is protected by TLHIGA?",
      "answers": [
        {
          "id": "s2q31-a1",
          "text": "Anyone in the U.S."
        },
        {
          "id": "s2q31-a2",
          "text": "Only Texas residents as of the liquidation date"
        },
        {
          "id": "s2q31-a3",
          "text": "Only agents"
        },
        {
          "id": "s2q31-a4",
          "text": "No one"
        }
      ],
      "explanation": "TLHIGA protects Texas residents as of the liquidation date."
    },
    "es": {
      "question": "Una aseguradora insolvente es liquidada. ¿Quién queda protegido por la TLHIGA?",
      "answers": [
        {
          "id": "s2q31-a1",
          "text": "Cualquier persona en EE. UU."
        },
        {
          "id": "s2q31-a2",
          "text": "Solo residentes de Texas en la fecha de liquidación"
        },
        {
          "id": "s2q31-a3",
          "text": "Solo los agentes"
        },
        {
          "id": "s2q31-a4",
          "text": "Nadie"
        }
      ],
      "explanation": "TLHIGA protege a residentes de Texas a la fecha de liquidación."
    },
    "correctAnswerId": "s2q31-a2"
  },
  {
    "id": "s2q32",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An applicant skydives every weekend. In insurance terms, that hobby is:",
      "answers": [
        {
          "id": "s2q32-a1",
          "text": "A peril"
        },
        {
          "id": "s2q32-a2",
          "text": "A hazard"
        },
        {
          "id": "s2q32-a3",
          "text": "A speculative risk"
        },
        {
          "id": "s2q32-a4",
          "text": "A fortuitous loss"
        }
      ],
      "explanation": "The hobby that increases risk = hazard."
    },
    "es": {
      "question": "Un solicitante practica paracaidismo cada fin de semana. En términos de seguros, esa afición es:",
      "answers": [
        {
          "id": "s2q32-a1",
          "text": "Un peril"
        },
        {
          "id": "s2q32-a2",
          "text": "Un hazard"
        },
        {
          "id": "s2q32-a3",
          "text": "Un riesgo especulativo"
        },
        {
          "id": "s2q32-a4",
          "text": "Una pérdida fortuita"
        }
      ],
      "explanation": "La afición que aumenta el riesgo = hazard."
    },
    "correctAnswerId": "s2q32-a2"
  },
  {
    "id": "s2q33",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Which type of insurer is owned by its policyholders and issues participating policies?",
      "answers": [
        {
          "id": "s2q33-a1",
          "text": "Stock"
        },
        {
          "id": "s2q33-a2",
          "text": "Mutual"
        },
        {
          "id": "s2q33-a3",
          "text": "Reciprocal"
        },
        {
          "id": "s2q33-a4",
          "text": "Fraternal"
        }
      ],
      "explanation": "Owned by policyholders + participating policies = mutual."
    },
    "es": {
      "question": "¿Qué tipo de aseguradora es propiedad de sus asegurados y emite pólizas participantes?",
      "answers": [
        {
          "id": "s2q33-a1",
          "text": "Por acciones"
        },
        {
          "id": "s2q33-a2",
          "text": "Mutua"
        },
        {
          "id": "s2q33-a3",
          "text": "Recíproca"
        },
        {
          "id": "s2q33-a4",
          "text": "Fraternal"
        }
      ],
      "explanation": "Propiedad de los asegurados + pólizas participantes = mutua."
    },
    "correctAnswerId": "s2q33-a2"
  },
  {
    "id": "s2q34",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A 30-year-old with low taxes wants tax-free growth at retirement and does not want to be forced to withdraw. Best suited is a:",
      "answers": [
        {
          "id": "s2q34-a1",
          "text": "Traditional IRA"
        },
        {
          "id": "s2q34-a2",
          "text": "Roth IRA"
        },
        {
          "id": "s2q34-a3",
          "text": "Immediate annuity"
        },
        {
          "id": "s2q34-a4",
          "text": "DB pension"
        }
      ],
      "explanation": "Roth IRA: tax-free growth and no lifetime RMDs."
    },
    "es": {
      "question": "Una persona de 30 años con impuestos bajos quiere crecimiento libre de impuestos al jubilarse y no verse obligada a retirar dinero. Le conviene una:",
      "answers": [
        {
          "id": "s2q34-a1",
          "text": "IRA tradicional"
        },
        {
          "id": "s2q34-a2",
          "text": "Roth IRA"
        },
        {
          "id": "s2q34-a3",
          "text": "Anualidad inmediata"
        },
        {
          "id": "s2q34-a4",
          "text": "Pensión DB"
        }
      ],
      "explanation": "Roth IRA: crecimiento tax-free y sin RMD en vida."
    },
    "correctAnswerId": "s2q34-a2"
  },
  {
    "id": "s2q35",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "The producer delivers a policy for which the premium was not collected at application. Before coverage begins, they must obtain:",
      "answers": [
        {
          "id": "s2q35-a1",
          "text": "A court order"
        },
        {
          "id": "s2q35-a2",
          "text": "Payment of the first premium and a statement of good health"
        },
        {
          "id": "s2q35-a3",
          "text": "The beneficiary’s signature"
        },
        {
          "id": "s2q35-a4",
          "text": "An MIB exam"
        }
      ],
      "explanation": "At delivery with no prior premium: first premium + statement of good health."
    },
    "es": {
      "question": "El productor entrega una póliza cuya prima no se cobró al solicitar. Antes de que la cobertura inicie debe obtener:",
      "answers": [
        {
          "id": "s2q35-a1",
          "text": "Una orden judicial"
        },
        {
          "id": "s2q35-a2",
          "text": "El pago de la primera prima y una declaración de buena salud"
        },
        {
          "id": "s2q35-a3",
          "text": "La firma del beneficiario"
        },
        {
          "id": "s2q35-a4",
          "text": "Un examen del MIB"
        }
      ],
      "explanation": "En la entrega sin prima previa: primera prima + statement of good health."
    },
    "correctAnswerId": "s2q35-a2"
  },
  {
    "id": "s2q36",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "The penalty for withdrawing qualified retirement funds before age 59½, absent an exception, is:",
      "answers": [
        {
          "id": "s2q36-a1",
          "text": "5%"
        },
        {
          "id": "s2q36-a2",
          "text": "10%"
        },
        {
          "id": "s2q36-a3",
          "text": "20%"
        },
        {
          "id": "s2q36-a4",
          "text": "50%"
        }
      ],
      "explanation": "Early-withdrawal penalty = 10%."
    },
    "es": {
      "question": "La penalidad por retiro de fondos de retiro calificados antes de los 59½, salvo excepción, es de:",
      "answers": [
        {
          "id": "s2q36-a1",
          "text": "5%"
        },
        {
          "id": "s2q36-a2",
          "text": "10%"
        },
        {
          "id": "s2q36-a3",
          "text": "20%"
        },
        {
          "id": "s2q36-a4",
          "text": "50%"
        }
      ],
      "explanation": "Penalidad por retiro temprano = 10%."
    },
    "correctAnswerId": "s2q36-a2"
  },
  {
    "id": "s2q37",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "In a Universal Life policy, the components deducted from the cash value each period include:",
      "answers": [
        {
          "id": "s2q37-a1",
          "text": "Dividends and credited interest"
        },
        {
          "id": "s2q37-a2",
          "text": "The cost of insurance and expense charges"
        },
        {
          "id": "s2q37-a3",
          "text": "Only the gross premium"
        },
        {
          "id": "s2q37-a4",
          "text": "The beneficiary’s commissions"
        }
      ],
      "explanation": "From the UL are deducted the cost of insurance and expense charges."
    },
    "es": {
      "question": "En una póliza de Universal Life, los componentes que se descuentan del valor en efectivo cada periodo incluyen:",
      "answers": [
        {
          "id": "s2q37-a1",
          "text": "Dividendos e intereses acreditados"
        },
        {
          "id": "s2q37-a2",
          "text": "El costo del seguro y los cargos de gastos"
        },
        {
          "id": "s2q37-a3",
          "text": "Solo la prima bruta"
        },
        {
          "id": "s2q37-a4",
          "text": "Las comisiones del beneficiario"
        }
      ],
      "explanation": "De la UL se descuentan costo del seguro y cargos de gastos."
    },
    "correctAnswerId": "s2q37-a2"
  },
  {
    "id": "s2q38",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A person wants an annuity that participates in the gains of a stock index without risking principal if the index falls. Best suited is a(n):",
      "answers": [
        {
          "id": "s2q38-a1",
          "text": "Variable annuity"
        },
        {
          "id": "s2q38-a2",
          "text": "Indexed annuity (with floor and cap)"
        },
        {
          "id": "s2q38-a3",
          "text": "Fixed immediate annuity"
        },
        {
          "id": "s2q38-a4",
          "text": "Whole life"
        }
      ],
      "explanation": "Index with floor and cap, without risking principal = indexed annuity."
    },
    "es": {
      "question": "Una persona quiere una anualidad que participe de las ganancias de un índice bursátil sin arriesgar el capital si el índice cae. Le conviene una:",
      "answers": [
        {
          "id": "s2q38-a1",
          "text": "Anualidad variable"
        },
        {
          "id": "s2q38-a2",
          "text": "Anualidad indexada (con piso y tope)"
        },
        {
          "id": "s2q38-a3",
          "text": "Anualidad inmediata fija"
        },
        {
          "id": "s2q38-a4",
          "text": "Vida entera"
        }
      ],
      "explanation": "Índice con piso y tope, sin arriesgar capital = anualidad indexada."
    },
    "correctAnswerId": "s2q38-a2"
  },
  {
    "id": "s2q39",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Which practice consists of adding coverage or charges to a policy without the client’s consent?",
      "answers": [
        {
          "id": "s2q39-a1",
          "text": "Rebating"
        },
        {
          "id": "s2q39-a2",
          "text": "Sliding"
        },
        {
          "id": "s2q39-a3",
          "text": "Twisting"
        },
        {
          "id": "s2q39-a4",
          "text": "Churning"
        }
      ],
      "explanation": "Adding charges without consent = sliding."
    },
    "es": {
      "question": "¿Qué práctica consiste en agregar cobertura o cargos a una póliza sin el consentimiento del cliente?",
      "answers": [
        {
          "id": "s2q39-a1",
          "text": "Rebaja indebida"
        },
        {
          "id": "s2q39-a2",
          "text": "Venta agregada no autorizada"
        },
        {
          "id": "s2q39-a3",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s2q39-a4",
          "text": "Reemplazo abusivo"
        }
      ],
      "explanation": "Agregar cargos sin consentimiento = venta agregada no autorizada."
    },
    "correctAnswerId": "s2q39-a2"
  },
  {
    "id": "s2q40",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Life insurance is an example of a contract that is:",
      "answers": [
        {
          "id": "s2q40-a1",
          "text": "Of indemnity"
        },
        {
          "id": "s2q40-a2",
          "text": "Valued"
        },
        {
          "id": "s2q40-a3",
          "text": "Bilateral"
        },
        {
          "id": "s2q40-a4",
          "text": "Speculative"
        }
      ],
      "explanation": "Life = a valued contract (fixed sum)."
    },
    "es": {
      "question": "El seguro de vida es un ejemplo de contrato:",
      "answers": [
        {
          "id": "s2q40-a1",
          "text": "De indemnización"
        },
        {
          "id": "s2q40-a2",
          "text": "Valuado (valued)"
        },
        {
          "id": "s2q40-a3",
          "text": "Bilateral"
        },
        {
          "id": "s2q40-a4",
          "text": "Especulativo"
        }
      ],
      "explanation": "Vida = contrato valuado (suma fija)."
    },
    "correctAnswerId": "s2q40-a2"
  },
  {
    "id": "s2q41",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A company pays the premiums on a key person policy covering its manager. The tax treatment is:",
      "answers": [
        {
          "id": "s2q41-a1",
          "text": "Premiums deductible; benefit taxable"
        },
        {
          "id": "s2q41-a2",
          "text": "Premiums not deductible; benefit generally tax-free"
        },
        {
          "id": "s2q41-a3",
          "text": "Both taxable"
        },
        {
          "id": "s2q41-a4",
          "text": "Both exempt and deductible"
        }
      ],
      "explanation": "Key person: premiums not deductible, benefit taxfree."
    },
    "es": {
      "question": "Una compañía paga las primas de una póliza key person sobre su gerente. El tratamiento fiscal es:",
      "answers": [
        {
          "id": "s2q41-a1",
          "text": "Primas deducibles; beneficio gravable"
        },
        {
          "id": "s2q41-a2",
          "text": "Primas no deducibles; beneficio generalmente libre de impuesto"
        },
        {
          "id": "s2q41-a3",
          "text": "Ambos gravables"
        },
        {
          "id": "s2q41-a4",
          "text": "Ambos exentos y deducibles"
        }
      ],
      "explanation": "Key person: primas no deducibles, beneficio libre."
    },
    "correctAnswerId": "s2q41-a2"
  },
  {
    "id": "s2q42",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "In insurance, the tendency of higher risks to seek coverage more than low risks is called:",
      "answers": [
        {
          "id": "s2q42-a1",
          "text": "Law of large numbers"
        },
        {
          "id": "s2q42-a2",
          "text": "Adverse selection"
        },
        {
          "id": "s2q42-a3",
          "text": "Indemnity"
        },
        {
          "id": "s2q42-a4",
          "text": "Pooling"
        }
      ],
      "explanation": "Higher risks seeking insurance = adverse selection."
    },
    "es": {
      "question": "En el seguro, la tendencia de los riesgos más altos a buscar cobertura en mayor medida que los bajos se llama:",
      "answers": [
        {
          "id": "s2q42-a1",
          "text": "Ley de los grandes números"
        },
        {
          "id": "s2q42-a2",
          "text": "Selección adversa"
        },
        {
          "id": "s2q42-a3",
          "text": "Indemnización"
        },
        {
          "id": "s2q42-a4",
          "text": "Mancomunación"
        }
      ],
      "explanation": "Riesgos altos buscan seguro = selección adversa."
    },
    "correctAnswerId": "s2q42-a2"
  },
  {
    "id": "s2q43",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Which is the annuity payout option that pays over two lives and continues for the survivor?",
      "answers": [
        {
          "id": "s2q43-a1",
          "text": "Life only"
        },
        {
          "id": "s2q43-a2",
          "text": "Period certain"
        },
        {
          "id": "s2q43-a3",
          "text": "Joint and survivor"
        },
        {
          "id": "s2q43-a4",
          "text": "Fixed amount"
        }
      ],
      "explanation": "Two lives with continuation to the survivor = joint and survivor."
    },
    "es": {
      "question": "¿Cuál es la opción de pago de anualidad que paga sobre dos vidas y continúa para el sobreviviente?",
      "answers": [
        {
          "id": "s2q43-a1",
          "text": "Solo vida"
        },
        {
          "id": "s2q43-a2",
          "text": "Periodo cierto"
        },
        {
          "id": "s2q43-a3",
          "text": "Conjunto y sobreviviente"
        },
        {
          "id": "s2q43-a4",
          "text": "Monto fijo"
        }
      ],
      "explanation": "Dos vidas con continuación al sobreviviente = joint and survivor."
    },
    "correctAnswerId": "s2q43-a3"
  },
  {
    "id": "s2q44",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Under the transfer-for-value rule, if a policy is sold for consideration, the death benefit:",
      "answers": [
        {
          "id": "s2q44-a1",
          "text": "Always stays tax-free"
        },
        {
          "id": "s2q44-a2",
          "text": "May become partially taxable, except in certain exceptions"
        },
        {
          "id": "s2q44-a3",
          "text": "Doubles"
        },
        {
          "id": "s2q44-a4",
          "text": "Is voided"
        }
      ],
      "explanation": "Transfer-for-value: the benefit may become taxable (with exceptions)."
    },
    "es": {
      "question": "Bajo la regla de transferencia por valor (transfer-for-value), si una póliza se vende por una contraprestación, el beneficio por muerte:",
      "answers": [
        {
          "id": "s2q44-a1",
          "text": "Siempre permanece libre de impuesto"
        },
        {
          "id": "s2q44-a2",
          "text": "Puede volverse parcialmente gravable, salvo ciertas excepciones"
        },
        {
          "id": "s2q44-a3",
          "text": "Se duplica"
        },
        {
          "id": "s2q44-a4",
          "text": "Se anula"
        }
      ],
      "explanation": "Transfer-for-value: el beneficio puede volverse gravable (con excepciones)."
    },
    "correctAnswerId": "s2q44-a2"
  },
  {
    "id": "s2q45",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "An agent represents three different insurers. To do so legally, they need:",
      "answers": [
        {
          "id": "s2q45-a1",
          "text": "A single license, nothing more"
        },
        {
          "id": "s2q45-a2",
          "text": "An appointment from each one, reported to the TDI"
        },
        {
          "id": "s2q45-a3",
          "text": "Three separate licenses"
        },
        {
          "id": "s2q45-a4",
          "text": "The beneficiary’s approval"
        }
      ],
      "explanation": "Needs an appointment from each insurer, reported to the TDI."
    },
    "es": {
      "question": "Un agente representa a tres aseguradoras distintas. Para hacerlo legalmente necesita:",
      "answers": [
        {
          "id": "s2q45-a1",
          "text": "Una sola licencia, sin más"
        },
        {
          "id": "s2q45-a2",
          "text": "Un appointment de cada una, notificado al TDI"
        },
        {
          "id": "s2q45-a3",
          "text": "Tres licencias separadas"
        },
        {
          "id": "s2q45-a4",
          "text": "Aprobación del beneficiario"
        }
      ],
      "explanation": "Necesita un appointment de cada aseguradora, notificado al TDI."
    },
    "correctAnswerId": "s2q45-a2"
  },
  {
    "id": "s2q46",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A participating policy’s dividend left to accumulate with the insurer: which part is taxable?",
      "answers": [
        {
          "id": "s2q46-a1",
          "text": "The whole dividend"
        },
        {
          "id": "s2q46-a2",
          "text": "None"
        },
        {
          "id": "s2q46-a3",
          "text": "Only the interest earned"
        },
        {
          "id": "s2q46-a4",
          "text": "Only the dividend, not the interest"
        }
      ],
      "explanation": "The dividend is not taxable; the accumulated interest is."
    },
    "es": {
      "question": "El dividendo de una póliza participante dejado a acumularse con la aseguradora: ¿qué parte es gravable?",
      "answers": [
        {
          "id": "s2q46-a1",
          "text": "Todo el dividendo"
        },
        {
          "id": "s2q46-a2",
          "text": "Nada"
        },
        {
          "id": "s2q46-a3",
          "text": "Solo el interés ganado"
        },
        {
          "id": "s2q46-a4",
          "text": "Solo el dividendo, no el interés"
        }
      ],
      "explanation": "El dividendo no es gravable; el interés acumulado sí."
    },
    "correctAnswerId": "s2q46-a3"
  },
  {
    "id": "s2q47",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "Which type of authority arises when the insurer, by its conduct, leads the public to believe an agent has powers it did not actually grant?",
      "answers": [
        {
          "id": "s2q47-a1",
          "text": "Express"
        },
        {
          "id": "s2q47-a2",
          "text": "Implied"
        },
        {
          "id": "s2q47-a3",
          "text": "Apparent"
        },
        {
          "id": "s2q47-a4",
          "text": "Fiduciary"
        }
      ],
      "explanation": "Apparent authority, from the appearance created (estoppel)."
    },
    "es": {
      "question": "¿Qué tipo de autoridad surge cuando la aseguradora, por su conducta, lleva al público a creer que un agente tiene facultades que en realidad no le otorgó?",
      "answers": [
        {
          "id": "s2q47-a1",
          "text": "Express"
        },
        {
          "id": "s2q47-a2",
          "text": "Implied"
        },
        {
          "id": "s2q47-a3",
          "text": "Apparent"
        },
        {
          "id": "s2q47-a4",
          "text": "Fiduciario"
        }
      ],
      "explanation": "Autoridad aparente (apparent), por la apariencia creada (estoppel)."
    },
    "correctAnswerId": "s2q47-a3"
  },
  {
    "id": "s2q48",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "What is the main purpose of backdating a policy?",
      "answers": [
        {
          "id": "s2q48-a1",
          "text": "To extend the contestable period"
        },
        {
          "id": "s2q48-a2",
          "text": "To obtain a lower premium for a younger insured age"
        },
        {
          "id": "s2q48-a3",
          "text": "To avoid the medical exam"
        },
        {
          "id": "s2q48-a4",
          "text": "To eliminate the grace period"
        }
      ],
      "explanation": "Backdating: lower premium from a younger insured age."
    },
    "es": {
      "question": "¿Cuál es el propósito principal de antedatar (backdating) una póliza?",
      "answers": [
        {
          "id": "s2q48-a1",
          "text": "Extender el periodo contestable"
        },
        {
          "id": "s2q48-a2",
          "text": "Obtener una prima menor por una edad asegurada más joven"
        },
        {
          "id": "s2q48-a3",
          "text": "Evitar el examen médico"
        },
        {
          "id": "s2q48-a4",
          "text": "Eliminar el periodo de gracia"
        }
      ],
      "explanation": "Backdating: prima menor por edad asegurada más joven."
    },
    "correctAnswerId": "s2q48-a2"
  },
  {
    "id": "s2q49",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "A “life only” annuity is normally chosen when the annuitant:",
      "answers": [
        {
          "id": "s2q49-a1",
          "text": "Wants to leave the largest possible balance to heirs"
        },
        {
          "id": "s2q49-a2",
          "text": "Has no dependents and seeks the highest monthly income"
        },
        {
          "id": "s2q49-a3",
          "text": "Wants to guarantee 20 years of payments"
        },
        {
          "id": "s2q49-a4",
          "text": "Wants accidental death coverage"
        }
      ],
      "explanation": "Life only: no dependents, highest income, nothing to heirs."
    },
    "es": {
      "question": "Una anualidad “life only” se elige normalmente cuando el anualizante:",
      "answers": [
        {
          "id": "s2q49-a1",
          "text": "Quiere dejar el mayor saldo posible a sus herederos"
        },
        {
          "id": "s2q49-a2",
          "text": "No tiene dependientes y busca el mayor ingreso mensual"
        },
        {
          "id": "s2q49-a3",
          "text": "Quiere garantizar 20 años de pagos"
        },
        {
          "id": "s2q49-a4",
          "text": "Desea cobertura por muerte accidental"
        }
      ],
      "explanation": "Life only: sin dependientes, mayor ingreso, nada a herederos."
    },
    "correctAnswerId": "s2q49-a2"
  },
  {
    "id": "s2q50",
    "topic": "general",
    "simulator": 2,
    "en": {
      "question": "In Texas, if an insurer unjustifiably delays payment of a valid claim beyond the legal deadline, it generally must:",
      "answers": [
        {
          "id": "s2q50-a1",
          "text": "Nothing additional"
        },
        {
          "id": "s2q50-a2",
          "text": "Pay a penalty interest (18%) and attorney’s fees"
        },
        {
          "id": "s2q50-a3",
          "text": "Cancel the policy"
        },
        {
          "id": "s2q50-a4",
          "text": "Double the benefit"
        }
      ],
      "explanation": "Texas: unjustified delay → 18% interest + fees."
    },
    "es": {
      "question": "En Texas, si una aseguradora retrasa injustificadamente el pago de una reclamación válida más allá del plazo legal, generalmente debe:",
      "answers": [
        {
          "id": "s2q50-a1",
          "text": "Nada adicional"
        },
        {
          "id": "s2q50-a2",
          "text": "Pagar interés de penalización (18%) y honorarios de abogado"
        },
        {
          "id": "s2q50-a3",
          "text": "Cancelar la póliza"
        },
        {
          "id": "s2q50-a4",
          "text": "Duplicar el beneficio"
        }
      ],
      "explanation": "Texas: demora injustificada → 18% de interés + honorarios."
    },
    "correctAnswerId": "s2q50-a2"
  },
  {
    "id": "s3q1",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The principle that lets an insurer accurately predict its expected annual losses is:",
      "answers": [
        {
          "id": "s3q1-a1",
          "text": "Adverse selection"
        },
        {
          "id": "s3q1-a2",
          "text": "The Law of Large Numbers"
        },
        {
          "id": "s3q1-a3",
          "text": "Indemnity"
        },
        {
          "id": "s3q1-a4",
          "text": "Insurable interest"
        }
      ],
      "explanation": "Accurate loss prediction rests on the Law of Large Numbers."
    },
    "es": {
      "question": "El principio que permite a una aseguradora predecir con exactitud sus pérdidas anuales esperadas es:",
      "answers": [
        {
          "id": "s3q1-a1",
          "text": "La selección adversa"
        },
        {
          "id": "s3q1-a2",
          "text": "La Ley de los grandes números"
        },
        {
          "id": "s3q1-a3",
          "text": "La indemnización"
        },
        {
          "id": "s3q1-a4",
          "text": "El interés asegurable"
        }
      ],
      "explanation": "La predicción exacta de pérdidas se apoya en la Ley de los grandes números."
    },
    "correctAnswerId": "s3q1-a2"
  },
  {
    "id": "s3q2",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A client wants a permanent policy whose premiums they can raise or lower and whose face amount they can adjust. Best suited is:",
      "answers": [
        {
          "id": "s3q2-a1",
          "text": "Level term"
        },
        {
          "id": "s3q2-a2",
          "text": "Limited-pay whole life"
        },
        {
          "id": "s3q2-a3",
          "text": "Universal Life"
        },
        {
          "id": "s3q2-a4",
          "text": "Decreasing term"
        }
      ],
      "explanation": "Flexible premium + adjustable face = Universal Life."
    },
    "es": {
      "question": "Un cliente quiere una póliza permanente cuyas primas pueda subir o bajar y cuya suma asegurada pueda ajustar. Le conviene:",
      "answers": [
        {
          "id": "s3q2-a1",
          "text": "Término nivelado"
        },
        {
          "id": "s3q2-a2",
          "text": "Vida entera de pago limitado"
        },
        {
          "id": "s3q2-a3",
          "text": "Vida universal"
        },
        {
          "id": "s3q2-a4",
          "text": "Término decreciente"
        }
      ],
      "explanation": "Prima flexible + suma ajustable = Universal Life."
    },
    "correctAnswerId": "s3q2-a3"
  },
  {
    "id": "s3q3",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Under SECURE 2.0, the RMD starting age for a traditional IRA is:",
      "answers": [
        {
          "id": "s3q3-a1",
          "text": "65"
        },
        {
          "id": "s3q3-a2",
          "text": "70½"
        },
        {
          "id": "s3q3-a3",
          "text": "72"
        },
        {
          "id": "s3q3-a4",
          "text": "73"
        }
      ],
      "explanation": "RMD at 73 (SECURE 2.0)."
    },
    "es": {
      "question": "Bajo SECURE 2.0, la edad de inicio de los RMD para una IRA tradicional es:",
      "answers": [
        {
          "id": "s3q3-a1",
          "text": "65"
        },
        {
          "id": "s3q3-a2",
          "text": "70½"
        },
        {
          "id": "s3q3-a3",
          "text": "72"
        },
        {
          "id": "s3q3-a4",
          "text": "73"
        }
      ],
      "explanation": "RMD a los 73 (SECURE 2.0)."
    },
    "correctAnswerId": "s3q3-a4"
  },
  {
    "id": "s3q4",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "An indexed annuity generally:",
      "answers": [
        {
          "id": "s3q4-a1",
          "text": "Requires a securities license"
        },
        {
          "id": "s3q4-a2",
          "text": "Does not require a securities license and offers a protective floor"
        },
        {
          "id": "s3q4-a3",
          "text": "Invests directly in individual stocks"
        },
        {
          "id": "s3q4-a4",
          "text": "Guarantees market losses"
        }
      ],
      "explanation": "The indexed annuity does not require a securities license and has a protective floor."
    },
    "es": {
      "question": "Una anualidad indexada generalmente:",
      "answers": [
        {
          "id": "s3q4-a1",
          "text": "Requiere licencia de valores"
        },
        {
          "id": "s3q4-a2",
          "text": "No requiere licencia de valores y ofrece un piso de protección"
        },
        {
          "id": "s3q4-a3",
          "text": "Invierte directamente en acciones individuales"
        },
        {
          "id": "s3q4-a4",
          "text": "Garantiza pérdidas de mercado"
        }
      ],
      "explanation": "La indexada no requiere licencia de valores y tiene piso de protección."
    },
    "correctAnswerId": "s3q4-a2"
  },
  {
    "id": "s3q5",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The Texas Guaranty Association limit for the cash surrender value of life insurance is:",
      "answers": [
        {
          "id": "s3q5-a1",
          "text": "$50,000"
        },
        {
          "id": "s3q5-a2",
          "text": "$100,000"
        },
        {
          "id": "s3q5-a3",
          "text": "$250,000"
        },
        {
          "id": "s3q5-a4",
          "text": "$300,000"
        }
      ],
      "explanation": "TLHIGA life cash value = $100,000."
    },
    "es": {
      "question": "El límite de la Texas Guaranty Association para el valor de rescate en efectivo (valor en efectivo) de vida es:",
      "answers": [
        {
          "id": "s3q5-a1",
          "text": "$50,000"
        },
        {
          "id": "s3q5-a2",
          "text": "$100,000"
        },
        {
          "id": "s3q5-a3",
          "text": "$250,000"
        },
        {
          "id": "s3q5-a4",
          "text": "$300,000"
        }
      ],
      "explanation": "TLHIGA valor en efectivo de vida = $100,000."
    },
    "correctAnswerId": "s3q5-a2"
  },
  {
    "id": "s3q6",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A revocable beneficiary, while the insured is alive, has:",
      "answers": [
        {
          "id": "s3q6-a1",
          "text": "A vested right"
        },
        {
          "id": "s3q6-a2",
          "text": "A mere expectancy, with no rights"
        },
        {
          "id": "s3q6-a3",
          "text": "Control of the policy"
        },
        {
          "id": "s3q6-a4",
          "text": "The right to take loans"
        }
      ],
      "explanation": "The revocable beneficiary has a mere expectancy, no rights while the insured lives."
    },
    "es": {
      "question": "Un beneficiario revocable, mientras el asegurado vive, tiene:",
      "answers": [
        {
          "id": "s3q6-a1",
          "text": "Un derecho adquirido (vested)"
        },
        {
          "id": "s3q6-a2",
          "text": "Una mera expectativa, sin derechos"
        },
        {
          "id": "s3q6-a3",
          "text": "Control de la póliza"
        },
        {
          "id": "s3q6-a4",
          "text": "Derecho a tomar préstamos"
        }
      ],
      "explanation": "El revocable tiene mera expectativa, sin derechos en vida del asegurado."
    },
    "correctAnswerId": "s3q6-a2"
  },
  {
    "id": "s3q7",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "In a non-qualified plan, upon distribution, what is taxed:",
      "answers": [
        {
          "id": "s3q7-a1",
          "text": "The entire amount"
        },
        {
          "id": "s3q7-a2",
          "text": "Only the gain"
        },
        {
          "id": "s3q7-a3",
          "text": "Nothing"
        },
        {
          "id": "s3q7-a4",
          "text": "Twice the gain"
        }
      ],
      "explanation": "Non-qualified plan: only the gain is taxed."
    },
    "es": {
      "question": "En un plan no calificado, al distribuirse, se grava:",
      "answers": [
        {
          "id": "s3q7-a1",
          "text": "La totalidad"
        },
        {
          "id": "s3q7-a2",
          "text": "Solo la ganancia"
        },
        {
          "id": "s3q7-a3",
          "text": "Nada"
        },
        {
          "id": "s3q7-a4",
          "text": "El doble de la ganancia"
        }
      ],
      "explanation": "Plan no calificado: se grava solo la ganancia."
    },
    "correctAnswerId": "s3q7-a2"
  },
  {
    "id": "s3q8",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The clause that uses the cash value to automatically pay an unpaid premium and prevent lapse is:",
      "answers": [
        {
          "id": "s3q8-a1",
          "text": "Reduced paid-up"
        },
        {
          "id": "s3q8-a2",
          "text": "Extended term"
        },
        {
          "id": "s3q8-a3",
          "text": "Automatic Premium Loan"
        },
        {
          "id": "s3q8-a4",
          "text": "Waiver of premium"
        }
      ],
      "explanation": "Paying the unpaid premium from cash value = APL."
    },
    "es": {
      "question": "La cláusula que usa el valor en efectivo para pagar automáticamente una prima impaga y evitar la caducidad es:",
      "answers": [
        {
          "id": "s3q8-a1",
          "text": "Reduced paid-up"
        },
        {
          "id": "s3q8-a2",
          "text": "Término extendido"
        },
        {
          "id": "s3q8-a3",
          "text": "Préstamo automático de prima"
        },
        {
          "id": "s3q8-a4",
          "text": "Exención de prima"
        }
      ],
      "explanation": "Pagar la prima impaga con el valor en efectivo = APL."
    },
    "correctAnswerId": "s3q8-a3"
  },
  {
    "id": "s3q9",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The Texas state exam for the life license is administered by:",
      "answers": [
        {
          "id": "s3q9-a1",
          "text": "The TDI directly"
        },
        {
          "id": "s3q9-a2",
          "text": "Pearson VUE"
        },
        {
          "id": "s3q9-a3",
          "text": "The NAIC"
        },
        {
          "id": "s3q9-a4",
          "text": "FINRA"
        }
      ],
      "explanation": "The exam is administered by Pearson VUE."
    },
    "es": {
      "question": "El examen del estado de Texas para la licencia de vida lo administra:",
      "answers": [
        {
          "id": "s3q9-a1",
          "text": "El TDI directamente"
        },
        {
          "id": "s3q9-a2",
          "text": "Pearson VUE"
        },
        {
          "id": "s3q9-a3",
          "text": "La NAIC"
        },
        {
          "id": "s3q9-a4",
          "text": "FINRA"
        }
      ],
      "explanation": "El examen lo administra Pearson VUE."
    },
    "correctAnswerId": "s3q9-a2"
  },
  {
    "id": "s3q10",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A person wants a guaranteed lifetime income for at least 20 years to protect their family if they die soon. Best suited is:",
      "answers": [
        {
          "id": "s3q10-a1",
          "text": "Life only"
        },
        {
          "id": "s3q10-a2",
          "text": "Life with 20-year period certain"
        },
        {
          "id": "s3q10-a3",
          "text": "Interest only"
        },
        {
          "id": "s3q10-a4",
          "text": "Cash surrender"
        }
      ],
      "explanation": "Lifetime income with a guaranteed minimum of years = life with period certain."
    },
    "es": {
      "question": "Una persona quiere un ingreso vitalicio garantizado por al menos 20 años para proteger a su familia si muere pronto. Le conviene:",
      "answers": [
        {
          "id": "s3q10-a1",
          "text": "Solo vida"
        },
        {
          "id": "s3q10-a2",
          "text": "Vida con periodo cierto de 20 años"
        },
        {
          "id": "s3q10-a3",
          "text": "Interest only"
        },
        {
          "id": "s3q10-a4",
          "text": "Rescate en efectivo"
        }
      ],
      "explanation": "Ingreso vitalicio con mínimo garantizado de años = life with period certain."
    },
    "correctAnswerId": "s3q10-a2"
  },
  {
    "id": "s3q11",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which of these practices is legal if done with proper disclosure?",
      "answers": [
        {
          "id": "s3q11-a1",
          "text": "Rebating"
        },
        {
          "id": "s3q11-a2",
          "text": "Twisting"
        },
        {
          "id": "s3q11-a3",
          "text": "Replacement"
        },
        {
          "id": "s3q11-a4",
          "text": "Churning"
        }
      ],
      "explanation": "Replacement is legal with proper disclosure."
    },
    "es": {
      "question": "¿Cuál de estas prácticas es legal si se hace con la debida divulgación?",
      "answers": [
        {
          "id": "s3q11-a1",
          "text": "Rebaja indebida"
        },
        {
          "id": "s3q11-a2",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s3q11-a3",
          "text": "Reemplazo"
        },
        {
          "id": "s3q11-a4",
          "text": "Reemplazo abusivo"
        }
      ],
      "explanation": "El reemplazo es legal con la debida divulgación."
    },
    "correctAnswerId": "s3q11-a3"
  },
  {
    "id": "s3q12",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A traditional whole life policy typically “endows” (matures) at age:",
      "answers": [
        {
          "id": "s3q12-a1",
          "text": "65"
        },
        {
          "id": "s3q12-a2",
          "text": "80"
        },
        {
          "id": "s3q12-a3",
          "text": "100 (or 121 under recent tables)"
        },
        {
          "id": "s3q12-a4",
          "text": "59½"
        }
      ],
      "explanation": "Whole life matures at 100 (or 121 under recent tables)."
    },
    "es": {
      "question": "Una vida entera tradicional “madura” (endows) normalmente a la edad de:",
      "answers": [
        {
          "id": "s3q12-a1",
          "text": "65"
        },
        {
          "id": "s3q12-a2",
          "text": "80"
        },
        {
          "id": "s3q12-a3",
          "text": "100 (o 121 con tablas recientes)"
        },
        {
          "id": "s3q12-a4",
          "text": "59½"
        }
      ],
      "explanation": "vida entera madura a los 100 (o 121 con tablas recientes)."
    },
    "correctAnswerId": "s3q12-a3"
  },
  {
    "id": "s3q13",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "An insured with a MEC policy takes a loan at age 50. The tax treatment of the loan is:",
      "answers": [
        {
          "id": "s3q13-a1",
          "text": "Tax-free"
        },
        {
          "id": "s3q13-a2",
          "text": "Taxable gain (LIFO) plus a 10% penalty"
        },
        {
          "id": "s3q13-a3",
          "text": "Tax-free, as in any policy"
        },
        {
          "id": "s3q13-a4",
          "text": "Not permitted"
        }
      ],
      "explanation": "MEC: loan taxed LIFO + 10% (under 59½)."
    },
    "es": {
      "question": "Un asegurado con una póliza MEC toma un préstamo a los 50 años. El tratamiento fiscal del préstamo es:",
      "answers": [
        {
          "id": "s3q13-a1",
          "text": "Libre de impuesto"
        },
        {
          "id": "s3q13-a2",
          "text": "Ganancia gravable (LIFO) más penalidad del 10%"
        },
        {
          "id": "s3q13-a3",
          "text": "Libre, como en cualquier póliza"
        },
        {
          "id": "s3q13-a4",
          "text": "No se permite"
        }
      ],
      "explanation": "MEC: préstamo gravado LIFO + 10% (<59½)."
    },
    "correctAnswerId": "s3q13-a2"
  },
  {
    "id": "s3q14",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "In Texas, an agent’s life license expires:",
      "answers": [
        {
          "id": "s3q14-a1",
          "text": "Every year, on December 31"
        },
        {
          "id": "s3q14-a2",
          "text": "Every 2 years, on the last day of the birth month"
        },
        {
          "id": "s3q14-a3",
          "text": "Every 5 years"
        },
        {
          "id": "s3q14-a4",
          "text": "Never, it is permanent"
        }
      ],
      "explanation": "License: 2 years, last day of the birth month."
    },
    "es": {
      "question": "En Texas, la licencia de un agente de vida vence:",
      "answers": [
        {
          "id": "s3q14-a1",
          "text": "Cada año, el 31 de diciembre"
        },
        {
          "id": "s3q14-a2",
          "text": "Cada 2 años, el último día del mes de cumpleaños"
        },
        {
          "id": "s3q14-a3",
          "text": "Cada 5 años"
        },
        {
          "id": "s3q14-a4",
          "text": "Nunca, es permanente"
        }
      ],
      "explanation": "Licencia: 2 años, último día del mes de cumpleaños."
    },
    "correctAnswerId": "s3q14-a2"
  },
  {
    "id": "s3q15",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Option A of a Universal Life provides a death benefit that is:",
      "answers": [
        {
          "id": "s3q15-a1",
          "text": "Increasing (face + cash value)"
        },
        {
          "id": "s3q15-a2",
          "text": "Level"
        },
        {
          "id": "s3q15-a3",
          "text": "Decreasing"
        },
        {
          "id": "s3q15-a4",
          "text": "Variable with the market"
        }
      ],
      "explanation": "Option A = level benefit."
    },
    "es": {
      "question": "La Opción A de una Universal Life proporciona un beneficio por muerte:",
      "answers": [
        {
          "id": "s3q15-a1",
          "text": "Creciente (suma asegurada + valor en efectivo)"
        },
        {
          "id": "s3q15-a2",
          "text": "Nivelado"
        },
        {
          "id": "s3q15-a3",
          "text": "Decreciente"
        },
        {
          "id": "s3q15-a4",
          "text": "Variable según el mercado"
        }
      ],
      "explanation": "Opción A = beneficio nivelado."
    },
    "correctAnswerId": "s3q15-a2"
  },
  {
    "id": "s3q16",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "In its relationship with client premiums, the insurance agent acts as:",
      "answers": [
        {
          "id": "s3q16-a1",
          "text": "An investor"
        },
        {
          "id": "s3q16-a2",
          "text": "A fiduciary who must not commingle funds"
        },
        {
          "id": "s3q16-a3",
          "text": "A beneficiary"
        },
        {
          "id": "s3q16-a4",
          "text": "An insured"
        }
      ],
      "explanation": "The agent is a fiduciary; must not commingle funds."
    },
    "es": {
      "question": "El agente de seguros, en su relación con las primas del cliente, actúa como:",
      "answers": [
        {
          "id": "s3q16-a1",
          "text": "Un inversionista"
        },
        {
          "id": "s3q16-a2",
          "text": "Un fiduciario que no debe mezclar fondos"
        },
        {
          "id": "s3q16-a3",
          "text": "Un beneficiario"
        },
        {
          "id": "s3q16-a4",
          "text": "Un asegurado"
        }
      ],
      "explanation": "El agente es fiduciario; no debe mezclar fondos."
    },
    "correctAnswerId": "s3q16-a2"
  },
  {
    "id": "s3q17",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which plan lets an unincorporated self-employed person set up a qualified retirement plan?",
      "answers": [
        {
          "id": "s3q17-a1",
          "text": "Corporate 401(k)"
        },
        {
          "id": "s3q17-a2",
          "text": "Keogh (HR-10)"
        },
        {
          "id": "s3q17-a3",
          "text": "403(b)"
        },
        {
          "id": "s3q17-a4",
          "text": "Government pension"
        }
      ],
      "explanation": "Unincorporated self-employed = Keogh (HR10)."
    },
    "es": {
      "question": "¿Qué plan permite a un autoempleado no incorporado establecer un plan calificado de retiro?",
      "answers": [
        {
          "id": "s3q17-a1",
          "text": "401(k) corporativo"
        },
        {
          "id": "s3q17-a2",
          "text": "Keogh (HR-10)"
        },
        {
          "id": "s3q17-a3",
          "text": "403(b)"
        },
        {
          "id": "s3q17-a4",
          "text": "Pensión gubernamental"
        }
      ],
      "explanation": "Autoempleado no incorporado = Keogh (HR-10)."
    },
    "correctAnswerId": "s3q17-a2"
  },
  {
    "id": "s3q18",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "An applicant intentionally omits a serious diagnosis that the application directly asks about. This is:",
      "answers": [
        {
          "id": "s3q18-a1",
          "text": "An immaterial representation"
        },
        {
          "id": "s3q18-a2",
          "text": "Concealment"
        },
        {
          "id": "s3q18-a3",
          "text": "A warranty"
        },
        {
          "id": "s3q18-a4",
          "text": "Utmost good faith"
        }
      ],
      "explanation": "Withholding a material fact that was asked = concealment."
    },
    "es": {
      "question": "Un solicitante omite intencionalmente un diagnóstico grave que la solicitud pregunta directamente. Esto es:",
      "answers": [
        {
          "id": "s3q18-a1",
          "text": "Una representación inmaterial"
        },
        {
          "id": "s3q18-a2",
          "text": "Ocultamiento (concealment)"
        },
        {
          "id": "s3q18-a3",
          "text": "Una garantía"
        },
        {
          "id": "s3q18-a4",
          "text": "Buena fe máxima"
        }
      ],
      "explanation": "Callar un hecho material preguntado = concealment."
    },
    "correctAnswerId": "s3q18-a2"
  },
  {
    "id": "s3q19",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The accelerated benefit for terminal illness is generally:",
      "answers": [
        {
          "id": "s3q19-a1",
          "text": "Fully taxable"
        },
        {
          "id": "s3q19-a2",
          "text": "Income-tax-free"
        },
        {
          "id": "s3q19-a3",
          "text": "50% taxable"
        },
        {
          "id": "s3q19-a4",
          "text": "Taxable only if over $50,000"
        }
      ],
      "explanation": "Terminal accelerated benefit = tax-free."
    },
    "es": {
      "question": "El beneficio acelerado por enfermedad terminal generalmente es:",
      "answers": [
        {
          "id": "s3q19-a1",
          "text": "Totalmente gravable"
        },
        {
          "id": "s3q19-a2",
          "text": "Libre de impuesto sobre la renta"
        },
        {
          "id": "s3q19-a3",
          "text": "Gravable al 50%"
        },
        {
          "id": "s3q19-a4",
          "text": "Gravable solo si excede $50,000"
        }
      ],
      "explanation": "Beneficio acelerado terminal = libre de impuesto."
    },
    "correctAnswerId": "s3q19-a2"
  },
  {
    "id": "s3q20",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A 75-year-old client needs liquidity soon. Recommending a deferred annuity with 12-year surrender charges:",
      "answers": [
        {
          "id": "s3q20-a1",
          "text": "Is suitable"
        },
        {
          "id": "s3q20-a2",
          "text": "Is not suitable (violates suitability/best interest)"
        },
        {
          "id": "s3q20-a3",
          "text": "Is mandatory"
        },
        {
          "id": "s3q20-a4",
          "text": "Reduces their risk"
        }
      ],
      "explanation": "Trapping the liquidity of a client who needs it is not suitable."
    },
    "es": {
      "question": "Un cliente de 75 años necesita liquidez pronto. Recomendarle una anualidad diferida con cargos de rescate de 12 años:",
      "answers": [
        {
          "id": "s3q20-a1",
          "text": "Es idóneo"
        },
        {
          "id": "s3q20-a2",
          "text": "No es idóneo (viola la idoneidad/mejor interés)"
        },
        {
          "id": "s3q20-a3",
          "text": "Es obligatorio"
        },
        {
          "id": "s3q20-a4",
          "text": "Reduce su riesgo"
        }
      ],
      "explanation": "Atrapar liquidez de un cliente que la necesita no es idóneo."
    },
    "correctAnswerId": "s3q20-a2"
  },
  {
    "id": "s3q21",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which type of receipt grants immediate temporary coverage, insurable or not, for a set period?",
      "answers": [
        {
          "id": "s3q21-a1",
          "text": "Conditional receipt"
        },
        {
          "id": "s3q21-a2",
          "text": "Binding receipt"
        },
        {
          "id": "s3q21-a3",
          "text": "Statement of good health"
        },
        {
          "id": "s3q21-a4",
          "text": "Agent’s report"
        }
      ],
      "explanation": "Immediate temporary coverage, insurable or not = binding receipt."
    },
    "es": {
      "question": "¿Qué tipo de recibo otorga cobertura temporal inmediata, asegurable o no, por un periodo determinado?",
      "answers": [
        {
          "id": "s3q21-a1",
          "text": "Conditional receipt"
        },
        {
          "id": "s3q21-a2",
          "text": "Binding receipt"
        },
        {
          "id": "s3q21-a3",
          "text": "Statement of good health"
        },
        {
          "id": "s3q21-a4",
          "text": "Agent’s report"
        }
      ],
      "explanation": "Cobertura inmediata temporal, asegurable o no = binding receipt."
    },
    "correctAnswerId": "s3q21-a2"
  },
  {
    "id": "s3q22",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "In a non-qualified annuity, the “exclusion ratio” is calculated as:",
      "answers": [
        {
          "id": "s3q22-a1",
          "text": "Expected return ÷ investment in the contract"
        },
        {
          "id": "s3q22-a2",
          "text": "Investment in the contract ÷ expected return"
        },
        {
          "id": "s3q22-a3",
          "text": "Premium ÷ commission"
        },
        {
          "id": "s3q22-a4",
          "text": "Age ÷ life expectancy"
        }
      ],
      "explanation": "Exclusion ratio = investment in the contract ÷ expected return."
    },
    "es": {
      "question": "En una anualidad no calificada, el “exclusion ratio” se calcula como:",
      "answers": [
        {
          "id": "s3q22-a1",
          "text": "Rendimiento esperado ÷ inversión en el contrato"
        },
        {
          "id": "s3q22-a2",
          "text": "Inversión en el contrato ÷ rendimiento esperado"
        },
        {
          "id": "s3q22-a3",
          "text": "Prima ÷ comisión"
        },
        {
          "id": "s3q22-a4",
          "text": "Edad ÷ expectativa de vida"
        }
      ],
      "explanation": "Exclusion ratio = inversión en el contrato ÷ rendimiento esperado."
    },
    "correctAnswerId": "s3q22-a2"
  },
  {
    "id": "s3q23",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A company incorporated in London is, with respect to Texas:",
      "answers": [
        {
          "id": "s3q23-a1",
          "text": "Domestic"
        },
        {
          "id": "s3q23-a2",
          "text": "Foreign"
        },
        {
          "id": "s3q23-a3",
          "text": "Alien"
        },
        {
          "id": "s3q23-a4",
          "text": "Automatically admitted"
        }
      ],
      "explanation": "Incorporated in another country = alien."
    },
    "es": {
      "question": "Una compañía constituida en Londres, respecto de Texas, es:",
      "answers": [
        {
          "id": "s3q23-a1",
          "text": "Doméstica"
        },
        {
          "id": "s3q23-a2",
          "text": "Foránea"
        },
        {
          "id": "s3q23-a3",
          "text": "Extranjera"
        },
        {
          "id": "s3q23-a4",
          "text": "Admitted automáticamente"
        }
      ],
      "explanation": "Constituida en otro país = alien."
    },
    "correctAnswerId": "s3q23-a3"
  },
  {
    "id": "s3q24",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which is NOT a nonforfeiture option?",
      "answers": [
        {
          "id": "s3q24-a1",
          "text": "Cash surrender value"
        },
        {
          "id": "s3q24-a2",
          "text": "Reduced paid-up insurance"
        },
        {
          "id": "s3q24-a3",
          "text": "Extended term insurance"
        },
        {
          "id": "s3q24-a4",
          "text": "Automatic premium loan"
        }
      ],
      "explanation": "The APL is a clause, not a nonforfeiture option."
    },
    "es": {
      "question": "¿Cuál NO es una opción de no confiscación (nonforfeiture)?",
      "answers": [
        {
          "id": "s3q24-a1",
          "text": "Valor de rescate en efectivo"
        },
        {
          "id": "s3q24-a2",
          "text": "Seguro saldado reducido"
        },
        {
          "id": "s3q24-a3",
          "text": "Seguro de término extendido"
        },
        {
          "id": "s3q24-a4",
          "text": "Préstamo automático de prima"
        }
      ],
      "explanation": "El APL es una cláusula, no una nonforfeiture option."
    },
    "correctAnswerId": "s3q24-a4"
  },
  {
    "id": "s3q25",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The IRA contribution limit for 2026 (excluding catch-up) is:",
      "answers": [
        {
          "id": "s3q25-a1",
          "text": "$6,000"
        },
        {
          "id": "s3q25-a2",
          "text": "$7,000"
        },
        {
          "id": "s3q25-a3",
          "text": "$7,500"
        },
        {
          "id": "s3q25-a4",
          "text": "$10,000"
        }
      ],
      "explanation": "IRA 2026 = $7,500 (excluding catch-up)."
    },
    "es": {
      "question": "El límite de aportación a una IRA en 2026 (sin contar catch-up) es de:",
      "answers": [
        {
          "id": "s3q25-a1",
          "text": "$6,000"
        },
        {
          "id": "s3q25-a2",
          "text": "$7,000"
        },
        {
          "id": "s3q25-a3",
          "text": "$7,500"
        },
        {
          "id": "s3q25-a4",
          "text": "$10,000"
        }
      ],
      "explanation": "IRA 2026 = $7,500 (sin catch-up)."
    },
    "correctAnswerId": "s3q25-a3"
  },
  {
    "id": "s3q26",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "An agent promises to return part of their commission to a client if they sign today. This is:",
      "answers": [
        {
          "id": "s3q26-a1",
          "text": "Suitability"
        },
        {
          "id": "s3q26-a2",
          "text": "Rebating (illegal, both parties liable)"
        },
        {
          "id": "s3q26-a3",
          "text": "Field underwriting"
        },
        {
          "id": "s3q26-a4",
          "text": "Best interest"
        }
      ],
      "explanation": "Returning part of the commission = rebating (illegal, both)."
    },
    "es": {
      "question": "Un agente le promete a un cliente devolverle parte de su comisión si firma hoy. Esto es:",
      "answers": [
        {
          "id": "s3q26-a1",
          "text": "Idoneidad"
        },
        {
          "id": "s3q26-a2",
          "text": "Rebaja indebida (ilegal, ambos sancionables)"
        },
        {
          "id": "s3q26-a3",
          "text": "Evaluación inicial de campo"
        },
        {
          "id": "s3q26-a4",
          "text": "Mejor interés"
        }
      ],
      "explanation": "Devolver parte de la comisión = rebaja indebida (ilegal, ambos)."
    },
    "correctAnswerId": "s3q26-a2"
  },
  {
    "id": "s3q27",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which clause prevents the insurer from voiding the policy for application errors after 2 years?",
      "answers": [
        {
          "id": "s3q27-a1",
          "text": "Suicide clause"
        },
        {
          "id": "s3q27-a2",
          "text": "Incontestability clause"
        },
        {
          "id": "s3q27-a3",
          "text": "Grace period"
        },
        {
          "id": "s3q27-a4",
          "text": "Free look"
        }
      ],
      "explanation": "After 2 years: incontestability clause."
    },
    "es": {
      "question": "¿Qué cláusula impide a la aseguradora anular la póliza por errores en la solicitud después de 2 años?",
      "answers": [
        {
          "id": "s3q27-a1",
          "text": "Suicide clause"
        },
        {
          "id": "s3q27-a2",
          "text": "Cláusula de incontestabilidad"
        },
        {
          "id": "s3q27-a3",
          "text": "Periodo de gracia"
        },
        {
          "id": "s3q27-a4",
          "text": "Periodo de revisión gratuita"
        }
      ],
      "explanation": "Tras 2 años: incontestability clause."
    },
    "correctAnswerId": "s3q27-a2"
  },
  {
    "id": "s3q28",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A variable annuity invests the money in:",
      "answers": [
        {
          "id": "s3q28-a1",
          "text": "The insurer’s general account"
        },
        {
          "id": "s3q28-a2",
          "text": "A separate account with subaccounts"
        },
        {
          "id": "s3q28-a3",
          "text": "Guaranteed government bonds"
        },
        {
          "id": "s3q28-a4",
          "text": "A certificate of deposit"
        }
      ],
      "explanation": "Variable = separate account with subaccounts."
    },
    "es": {
      "question": "Una anualidad variable invierte el dinero en:",
      "answers": [
        {
          "id": "s3q28-a1",
          "text": "La cuenta general de la aseguradora"
        },
        {
          "id": "s3q28-a2",
          "text": "Una cuenta separada con subcuentas"
        },
        {
          "id": "s3q28-a3",
          "text": "Bonos del gobierno garantizados"
        },
        {
          "id": "s3q28-a4",
          "text": "Un certificado de depósito"
        }
      ],
      "explanation": "Variable = cuenta separada con subcuentas."
    },
    "correctAnswerId": "s3q28-a2"
  },
  {
    "id": "s3q29",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Employer group term life insurance is income-tax-free to the employee up to:",
      "answers": [
        {
          "id": "s3q29-a1",
          "text": "$25,000"
        },
        {
          "id": "s3q29-a2",
          "text": "$50,000"
        },
        {
          "id": "s3q29-a3",
          "text": "$100,000"
        },
        {
          "id": "s3q29-a4",
          "text": "No limit"
        }
      ],
      "explanation": "Group term tax-free up to $50,000."
    },
    "es": {
      "question": "El seguro de vida grupal del empleador es libre de impuesto para el empleado hasta:",
      "answers": [
        {
          "id": "s3q29-a1",
          "text": "$25,000"
        },
        {
          "id": "s3q29-a2",
          "text": "$50,000"
        },
        {
          "id": "s3q29-a3",
          "text": "$100,000"
        },
        {
          "id": "s3q29-a4",
          "text": "Sin límite"
        }
      ],
      "explanation": "Group term libre hasta $50,000."
    },
    "correctAnswerId": "s3q29-a2"
  },
  {
    "id": "s3q30",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A client replaces their policy using the accumulated values of the existing one just to generate commission for the agent. This is:",
      "answers": [
        {
          "id": "s3q30-a1",
          "text": "Twisting"
        },
        {
          "id": "s3q30-a2",
          "text": "Churning"
        },
        {
          "id": "s3q30-a3",
          "text": "Backdating"
        },
        {
          "id": "s3q30-a4",
          "text": "Rebating"
        }
      ],
      "explanation": "Replacing with existing values for commission = churning."
    },
    "es": {
      "question": "Un cliente reemplaza su póliza usando los valores acumulados de la existente solo para generar comisión al agente. Esto es:",
      "answers": [
        {
          "id": "s3q30-a1",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s3q30-a2",
          "text": "Reemplazo abusivo"
        },
        {
          "id": "s3q30-a3",
          "text": "Backdating"
        },
        {
          "id": "s3q30-a4",
          "text": "Rebaja indebida"
        }
      ],
      "explanation": "Reemplazar con los valores existentes por comisión = reemplazo abusivo."
    },
    "correctAnswerId": "s3q30-a2"
  },
  {
    "id": "s3q31",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The producer acting as the “first underwriter,” gathering and verifying information, performs:",
      "answers": [
        {
          "id": "s3q31-a1",
          "text": "Adverse selection"
        },
        {
          "id": "s3q31-a2",
          "text": "Field underwriting"
        },
        {
          "id": "s3q31-a3",
          "text": "Commingling"
        },
        {
          "id": "s3q31-a4",
          "text": "Rebating"
        }
      ],
      "explanation": "The agent as first evaluator = field underwriting."
    },
    "es": {
      "question": "El productor que actúa como “primer underwriter” reuniendo y verificando información realiza:",
      "answers": [
        {
          "id": "s3q31-a1",
          "text": "Adverse selection"
        },
        {
          "id": "s3q31-a2",
          "text": "Evaluación inicial de campo"
        },
        {
          "id": "s3q31-a3",
          "text": "Mezcla indebida de fondos"
        },
        {
          "id": "s3q31-a4",
          "text": "Rebaja indebida"
        }
      ],
      "explanation": "El agente como primer evaluador = evaluación inicial de campo."
    },
    "correctAnswerId": "s3q31-a2"
  },
  {
    "id": "s3q32",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A pair of partners wants funds when the first of them dies to fund a buy-sell agreement. Best suited is:",
      "answers": [
        {
          "id": "s3q32-a1",
          "text": "Survivorship (second-to-die)"
        },
        {
          "id": "s3q32-a2",
          "text": "Joint life (first-to-die)"
        },
        {
          "id": "s3q32-a3",
          "text": "Individual decreasing term"
        },
        {
          "id": "s3q32-a4",
          "text": "Immediate annuity"
        }
      ],
      "explanation": "Funds at the first death between partners = joint life (first-to-die)."
    },
    "es": {
      "question": "Una pareja de socios quiere fondos al fallecer el primero de ellos para financiar un acuerdo de compra-venta. Les conviene:",
      "answers": [
        {
          "id": "s3q32-a1",
          "text": "Survivorship (second-to-die)"
        },
        {
          "id": "s3q32-a2",
          "text": "Vida conjunta (primer fallecimiento)"
        },
        {
          "id": "s3q32-a3",
          "text": "Término decreciente individual"
        },
        {
          "id": "s3q32-a4",
          "text": "Anualidad inmediata"
        }
      ],
      "explanation": "Fondos al primer deceso entre socios = joint life (first-to-die)."
    },
    "correctAnswerId": "s3q32-a2"
  },
  {
    "id": "s3q33",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The interest earned on dividends left to accumulate with the insurer is:",
      "answers": [
        {
          "id": "s3q33-a1",
          "text": "Non-taxable"
        },
        {
          "id": "s3q33-a2",
          "text": "Taxable"
        },
        {
          "id": "s3q33-a3",
          "text": "Deductible"
        },
        {
          "id": "s3q33-a4",
          "text": "A return of premium"
        }
      ],
      "explanation": "The interest on accumulated dividends is taxable."
    },
    "es": {
      "question": "El interés ganado sobre dividendos dejados a acumularse con la aseguradora es:",
      "answers": [
        {
          "id": "s3q33-a1",
          "text": "No gravable"
        },
        {
          "id": "s3q33-a2",
          "text": "Gravable"
        },
        {
          "id": "s3q33-a3",
          "text": "Deducible"
        },
        {
          "id": "s3q33-a4",
          "text": "Una devolución de prima"
        }
      ],
      "explanation": "El interés sobre dividendos acumulados es gravable."
    },
    "correctAnswerId": "s3q33-a2"
  },
  {
    "id": "s3q34",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "In Texas, the regulation of insurance falls mainly to:",
      "answers": [
        {
          "id": "s3q34-a1",
          "text": "The federal government"
        },
        {
          "id": "s3q34-a2",
          "text": "The states (McCarran-Ferguson)"
        },
        {
          "id": "s3q34-a3",
          "text": "The SEC"
        },
        {
          "id": "s3q34-a4",
          "text": "FINRA"
        }
      ],
      "explanation": "State regulation (McCarran-Ferguson)."
    },
    "es": {
      "question": "En Texas, la regulación de los seguros corresponde principalmente:",
      "answers": [
        {
          "id": "s3q34-a1",
          "text": "Al gobierno federal"
        },
        {
          "id": "s3q34-a2",
          "text": "A los estados (McCarran-Ferguson)"
        },
        {
          "id": "s3q34-a3",
          "text": "A la SEC"
        },
        {
          "id": "s3q34-a4",
          "text": "A la FINRA"
        }
      ],
      "explanation": "Regulación estatal (McCarran-Ferguson)."
    },
    "correctAnswerId": "s3q34-a2"
  },
  {
    "id": "s3q35",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which risk classification receives the lowest premium?",
      "answers": [
        {
          "id": "s3q35-a1",
          "text": "Declined"
        },
        {
          "id": "s3q35-a2",
          "text": "Substandard"
        },
        {
          "id": "s3q35-a3",
          "text": "Standard"
        },
        {
          "id": "s3q35-a4",
          "text": "Preferred"
        }
      ],
      "explanation": "Preferred receives the lowest premium."
    },
    "es": {
      "question": "¿Qué clasificación de riesgo recibe la prima más baja?",
      "answers": [
        {
          "id": "s3q35-a1",
          "text": "Declined"
        },
        {
          "id": "s3q35-a2",
          "text": "Substandard"
        },
        {
          "id": "s3q35-a3",
          "text": "Standard"
        },
        {
          "id": "s3q35-a4",
          "text": "Preferred"
        }
      ],
      "explanation": "Preferred recibe la prima más baja."
    },
    "correctAnswerId": "s3q35-a4"
  },
  {
    "id": "s3q36",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "An employee leaves their job and wants to move their 401(k) to an IRA without the 20% withholding. They should use:",
      "answers": [
        {
          "id": "s3q36-a1",
          "text": "An indirect 60-day rollover"
        },
        {
          "id": "s3q36-a2",
          "text": "A direct (trustee-to-trustee) transfer"
        },
        {
          "id": "s3q36-a3",
          "text": "A cash withdrawal"
        },
        {
          "id": "s3q36-a4",
          "text": "A loan"
        }
      ],
      "explanation": "No 20% withholding = direct transfer."
    },
    "es": {
      "question": "Un empleado deja su trabajo y quiere mover su 401(k) a una IRA sin retención del 20%. Debe usar:",
      "answers": [
        {
          "id": "s3q36-a1",
          "text": "Un rollover indirecto de 60 días"
        },
        {
          "id": "s3q36-a2",
          "text": "Una transferencia directa (trustee-to-trustee)"
        },
        {
          "id": "s3q36-a3",
          "text": "Un retiro en efectivo"
        },
        {
          "id": "s3q36-a4",
          "text": "Un préstamo"
        }
      ],
      "explanation": "Sin retención del 20% = transferencia directa."
    },
    "correctAnswerId": "s3q36-a2"
  },
  {
    "id": "s3q37",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The lump-sum death benefit paid at death is income-tax-free, but it is included in the estate if the insured:",
      "answers": [
        {
          "id": "s3q37-a1",
          "text": "Was under 65"
        },
        {
          "id": "s3q37-a2",
          "text": "Had incidents of ownership"
        },
        {
          "id": "s3q37-a3",
          "text": "Paid annual premiums"
        },
        {
          "id": "s3q37-a4",
          "text": "Lived in Texas"
        }
      ],
      "explanation": "Included in the estate if they had incidents of ownership."
    },
    "es": {
      "question": "El beneficio por muerte pagado en suma global por muerte es libre de income tax, pero entra al patrimonio (estate) si el asegurado:",
      "answers": [
        {
          "id": "s3q37-a1",
          "text": "Tenía menos de 65 años"
        },
        {
          "id": "s3q37-a2",
          "text": "Tenía atributos de propiedad (incidents of ownership)"
        },
        {
          "id": "s3q37-a3",
          "text": "Pagó primas anuales"
        },
        {
          "id": "s3q37-a4",
          "text": "Vivía en Texas"
        }
      ],
      "explanation": "Entra al estate si tenía incidents of ownership."
    },
    "correctAnswerId": "s3q37-a2"
  },
  {
    "id": "s3q38",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "A “life only” annuity leaves beneficiaries, at the annuitant’s death:",
      "answers": [
        {
          "id": "s3q38-a1",
          "text": "The entire remaining balance"
        },
        {
          "id": "s3q38-a2",
          "text": "Nothing (payments cease)"
        },
        {
          "id": "s3q38-a3",
          "text": "Half"
        },
        {
          "id": "s3q38-a4",
          "text": "A refund of premiums"
        }
      ],
      "explanation": "Life only: at the annuitant’s death, nothing to beneficiaries."
    },
    "es": {
      "question": "Una anualidad “life only” deja a los beneficiarios, al morir el anualizante:",
      "answers": [
        {
          "id": "s3q38-a1",
          "text": "Todo el saldo restante"
        },
        {
          "id": "s3q38-a2",
          "text": "Nada (los pagos cesan)"
        },
        {
          "id": "s3q38-a3",
          "text": "La mitad"
        },
        {
          "id": "s3q38-a4",
          "text": "Un reembolso de primas"
        }
      ],
      "explanation": "Life only: al morir el anualizante, nada a beneficiarios."
    },
    "correctAnswerId": "s3q38-a2"
  },
  {
    "id": "s3q39",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The conditional receipt pays the benefit if the applicant dies before issue and:",
      "answers": [
        {
          "id": "s3q39-a1",
          "text": "Paid double the premium"
        },
        {
          "id": "s3q39-a2",
          "text": "Was insurable under normal underwriting"
        },
        {
          "id": "s3q39-a3",
          "text": "Had an irrevocable beneficiary"
        },
        {
          "id": "s3q39-a4",
          "text": "Lived outside Texas"
        }
      ],
      "explanation": "Conditional receipt: pays if they were insurable."
    },
    "es": {
      "question": "El recibo condicional paga el beneficio si el solicitante muere antes de la emisión y:",
      "answers": [
        {
          "id": "s3q39-a1",
          "text": "Pagó la prima doble"
        },
        {
          "id": "s3q39-a2",
          "text": "Era asegurable según la evaluación normal de riesgo"
        },
        {
          "id": "s3q39-a3",
          "text": "Tenía un beneficiario irrevocable"
        },
        {
          "id": "s3q39-a4",
          "text": "Vivía fuera de Texas"
        }
      ],
      "explanation": "Conditional receipt: paga si era asegurable."
    },
    "correctAnswerId": "s3q39-a2"
  },
  {
    "id": "s3q40",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Contributions to a qualified plan are:",
      "answers": [
        {
          "id": "s3q40-a1",
          "text": "After-tax (not deductible)"
        },
        {
          "id": "s3q40-a2",
          "text": "Pre-tax (deductible)"
        },
        {
          "id": "s3q40-a3",
          "text": "Always Roth"
        },
        {
          "id": "s3q40-a4",
          "text": "Not permitted"
        }
      ],
      "explanation": "Qualified plan: contributions are pre-tax (deductible)."
    },
    "es": {
      "question": "Las aportaciones a un plan calificado son:",
      "answers": [
        {
          "id": "s3q40-a1",
          "text": "Después de impuestos (no deducibles)"
        },
        {
          "id": "s3q40-a2",
          "text": "Antes de impuestos (deducibles)"
        },
        {
          "id": "s3q40-a3",
          "text": "Siempre Roth"
        },
        {
          "id": "s3q40-a4",
          "text": "No permitidas"
        }
      ],
      "explanation": "Plan calificado: aportaciones pre-tax (deducibles)."
    },
    "correctAnswerId": "s3q40-a2"
  },
  {
    "id": "s3q41",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which document must be given to the consumer to compare life policies?",
      "answers": [
        {
          "id": "s3q41-a1",
          "text": "The agent’s report"
        },
        {
          "id": "s3q41-a2",
          "text": "The buyer’s guide and the policy summary"
        },
        {
          "id": "s3q41-a3",
          "text": "The MIB"
        },
        {
          "id": "s3q41-a4",
          "text": "The APS"
        }
      ],
      "explanation": "To compare: buyer’s guide + policy summary."
    },
    "es": {
      "question": "¿Qué documento debe entregarse al consumidor para que compare pólizas de vida?",
      "answers": [
        {
          "id": "s3q41-a1",
          "text": "El agent’s report"
        },
        {
          "id": "s3q41-a2",
          "text": "La guía del comprador y el resumen de la póliza"
        },
        {
          "id": "s3q41-a3",
          "text": "El MIB"
        },
        {
          "id": "s3q41-a4",
          "text": "El APS"
        }
      ],
      "explanation": "Para comparar: guía del comprador + resumen de la póliza."
    },
    "correctAnswerId": "s3q41-a2"
  },
  {
    "id": "s3q42",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Under a “per capita” designation, if a beneficiary dies before the insured, their share:",
      "answers": [
        {
          "id": "s3q42-a1",
          "text": "Passes to their descendants"
        },
        {
          "id": "s3q42-a2",
          "text": "Is divided among the surviving beneficiaries"
        },
        {
          "id": "s3q42-a3",
          "text": "Goes to the deceased beneficiary’s estate"
        },
        {
          "id": "s3q42-a4",
          "text": "Is lost to all"
        }
      ],
      "explanation": "Per capita: the share is divided among survivors."
    },
    "es": {
      "question": "En una designación “per capita”, si un beneficiario muere antes que el asegurado, su porción:",
      "answers": [
        {
          "id": "s3q42-a1",
          "text": "Baja a sus descendientes"
        },
        {
          "id": "s3q42-a2",
          "text": "Se reparte entre los beneficiarios sobrevivientes"
        },
        {
          "id": "s3q42-a3",
          "text": "Va al estate del beneficiario fallecido"
        },
        {
          "id": "s3q42-a4",
          "text": "Se pierde para todos"
        }
      ],
      "explanation": "Per capita: la porción se reparte entre sobrevivientes."
    },
    "correctAnswerId": "s3q42-a2"
  },
  {
    "id": "s3q43",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The grace period for an ordinary life policy in Texas is:",
      "answers": [
        {
          "id": "s3q43-a1",
          "text": "7 days"
        },
        {
          "id": "s3q43-a2",
          "text": "10 days"
        },
        {
          "id": "s3q43-a3",
          "text": "31 days"
        },
        {
          "id": "s3q43-a4",
          "text": "90 days"
        }
      ],
      "explanation": "Texas life grace period = 31 days."
    },
    "es": {
      "question": "El periodo de gracia de una póliza de vida ordinaria en Texas es de:",
      "answers": [
        {
          "id": "s3q43-a1",
          "text": "7 días"
        },
        {
          "id": "s3q43-a2",
          "text": "10 días"
        },
        {
          "id": "s3q43-a3",
          "text": "31 días"
        },
        {
          "id": "s3q43-a4",
          "text": "90 días"
        }
      ],
      "explanation": "periodo de gracia de vida en Texas = 31 días."
    },
    "correctAnswerId": "s3q43-a3"
  },
  {
    "id": "s3q44",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which rider allows buying additional coverage on future dates without proving good health?",
      "answers": [
        {
          "id": "s3q44-a1",
          "text": "Waiver of premium"
        },
        {
          "id": "s3q44-a2",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s3q44-a3",
          "text": "Accidental Death Benefit"
        },
        {
          "id": "s3q44-a4",
          "text": "Return of Premium"
        }
      ],
      "explanation": "Buying more coverage without exam = Guaranteed Insurability."
    },
    "es": {
      "question": "¿Qué rider permite comprar cobertura adicional en fechas futuras sin demostrar buena salud?",
      "answers": [
        {
          "id": "s3q44-a1",
          "text": "Exención de prima"
        },
        {
          "id": "s3q44-a2",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s3q44-a3",
          "text": "Beneficio por muerte accidental"
        },
        {
          "id": "s3q44-a4",
          "text": "Devolución de prima"
        }
      ],
      "explanation": "Comprar más cobertura sin examen = Guaranteed Insurability."
    },
    "correctAnswerId": "s3q44-a2"
  },
  {
    "id": "s3q45",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "An insurer may not decline an application based solely on:",
      "answers": [
        {
          "id": "s3q45-a1",
          "text": "The medical exam"
        },
        {
          "id": "s3q45-a2",
          "text": "The coded MIB information"
        },
        {
          "id": "s3q45-a3",
          "text": "Part II of the application"
        },
        {
          "id": "s3q45-a4",
          "text": "The APS"
        }
      ],
      "explanation": "Do not decline solely on the MIB."
    },
    "es": {
      "question": "Una aseguradora no puede declinar una solicitud basándose únicamente en:",
      "answers": [
        {
          "id": "s3q45-a1",
          "text": "El examen médico"
        },
        {
          "id": "s3q45-a2",
          "text": "La información codificada del MIB"
        },
        {
          "id": "s3q45-a3",
          "text": "La Parte II de la solicitud"
        },
        {
          "id": "s3q45-a4",
          "text": "El APS"
        }
      ],
      "explanation": "No declinar solo por el MIB."
    },
    "correctAnswerId": "s3q45-a2"
  },
  {
    "id": "s3q46",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "The SIMPLE IRA is available to employers with a maximum of:",
      "answers": [
        {
          "id": "s3q46-a1",
          "text": "10 employees"
        },
        {
          "id": "s3q46-a2",
          "text": "50 employees"
        },
        {
          "id": "s3q46-a3",
          "text": "100 employees"
        },
        {
          "id": "s3q46-a4",
          "text": "500 employees"
        }
      ],
      "explanation": "SIMPLE IRA: up to 100 employees."
    },
    "es": {
      "question": "El SIMPLE IRA está disponible para empleadores con un máximo de:",
      "answers": [
        {
          "id": "s3q46-a1",
          "text": "10 empleados"
        },
        {
          "id": "s3q46-a2",
          "text": "50 empleados"
        },
        {
          "id": "s3q46-a3",
          "text": "100 empleados"
        },
        {
          "id": "s3q46-a4",
          "text": "500 empleados"
        }
      ],
      "explanation": "SIMPLE IRA: hasta 100 empleados."
    },
    "correctAnswerId": "s3q46-a3"
  },
  {
    "id": "s3q47",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which contract characteristic means only the insurer makes a legally enforceable promise?",
      "answers": [
        {
          "id": "s3q47-a1",
          "text": "Aleatory"
        },
        {
          "id": "s3q47-a2",
          "text": "Unilateral"
        },
        {
          "id": "s3q47-a3",
          "text": "Adhesion"
        },
        {
          "id": "s3q47-a4",
          "text": "Conditional"
        }
      ],
      "explanation": "Only the insurer promises = unilateral."
    },
    "es": {
      "question": "¿Qué característica del contrato significa que solo la aseguradora hace una promesa legalmente exigible?",
      "answers": [
        {
          "id": "s3q47-a1",
          "text": "Aleatorio"
        },
        {
          "id": "s3q47-a2",
          "text": "Unilateral"
        },
        {
          "id": "s3q47-a3",
          "text": "De adhesión"
        },
        {
          "id": "s3q47-a4",
          "text": "Condicional"
        }
      ],
      "explanation": "Solo la aseguradora promete = unilateral."
    },
    "correctAnswerId": "s3q47-a2"
  },
  {
    "id": "s3q48",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Under the common disaster clause (Uniform Simultaneous Death Act), if the insured and primary beneficiary die together with no known order:",
      "answers": [
        {
          "id": "s3q48-a1",
          "text": "The beneficiary’s estate collects"
        },
        {
          "id": "s3q48-a2",
          "text": "The insured is presumed to have survived, and the contingent collects"
        },
        {
          "id": "s3q48-a3",
          "text": "Nothing is paid"
        },
        {
          "id": "s3q48-a4",
          "text": "The insurer collects"
        }
      ],
      "explanation": "The insured is presumed to have survived → the contingent collects."
    },
    "es": {
      "question": "Bajo la cláusula de desastre común (Uniform Simultaneous Death Act), si el asegurado y el beneficiario primario mueren juntos sin saber el orden:",
      "answers": [
        {
          "id": "s3q48-a1",
          "text": "Cobra el estate del beneficiario"
        },
        {
          "id": "s3q48-a2",
          "text": "Se presume que el asegurado sobrevivió, y cobra el contingente"
        },
        {
          "id": "s3q48-a3",
          "text": "No se paga nada"
        },
        {
          "id": "s3q48-a4",
          "text": "Cobra la aseguradora"
        }
      ],
      "explanation": "Se presume que el asegurado sobrevivió → cobra el contingente."
    },
    "correctAnswerId": "s3q48-a2"
  },
  {
    "id": "s3q49",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "Which retirement plan receives contributions from both employee and employer, for small businesses?",
      "answers": [
        {
          "id": "s3q49-a1",
          "text": "SEP IRA"
        },
        {
          "id": "s3q49-a2",
          "text": "SIMPLE IRA"
        },
        {
          "id": "s3q49-a3",
          "text": "DB pension"
        },
        {
          "id": "s3q49-a4",
          "text": "Keogh only"
        }
      ],
      "explanation": "Employee + employer, small business = SIMPLE IRA."
    },
    "es": {
      "question": "¿Qué plan de retiro recibe aportaciones tanto del empleado como del empleador, para empresas pequeñas?",
      "answers": [
        {
          "id": "s3q49-a1",
          "text": "SEP IRA"
        },
        {
          "id": "s3q49-a2",
          "text": "SIMPLE IRA"
        },
        {
          "id": "s3q49-a3",
          "text": "Pensión DB"
        },
        {
          "id": "s3q49-a4",
          "text": "Keogh exclusivamente"
        }
      ],
      "explanation": "Empleado + empleador, empresa pequeña = SIMPLE IRA."
    },
    "correctAnswerId": "s3q49-a2"
  },
  {
    "id": "s3q50",
    "topic": "general",
    "simulator": 3,
    "en": {
      "question": "In Texas, an agent is prohibited from using as a sales argument:",
      "answers": [
        {
          "id": "s3q50-a1",
          "text": "The policy’s features"
        },
        {
          "id": "s3q50-a2",
          "text": "The existence of the Guaranty Association"
        },
        {
          "id": "s3q50-a3",
          "text": "The insurer’s name"
        },
        {
          "id": "s3q50-a4",
          "text": "The premium price"
        }
      ],
      "explanation": "Prohibited to use the Guaranty Association as a sales argument."
    },
    "es": {
      "question": "En Texas, está prohibido que un agente utilice como argumento de venta:",
      "answers": [
        {
          "id": "s3q50-a1",
          "text": "Las características de la póliza"
        },
        {
          "id": "s3q50-a2",
          "text": "La existencia de la Guaranty Association"
        },
        {
          "id": "s3q50-a3",
          "text": "El nombre de la aseguradora"
        },
        {
          "id": "s3q50-a4",
          "text": "El precio de la prima"
        }
      ],
      "explanation": "Prohibido usar la Guaranty Association como argumento de venta."
    },
    "correctAnswerId": "s3q50-a2"
  },
  {
    "id": "s4q1",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An insured transfers the pure risk of death to the insurer in exchange for a premium. This illustrates the concept of:",
      "answers": [
        {
          "id": "s4q1-a1",
          "text": "Indemnity"
        },
        {
          "id": "s4q1-a2",
          "text": "Risk transfer"
        },
        {
          "id": "s4q1-a3",
          "text": "Speculative risk"
        },
        {
          "id": "s4q1-a4",
          "text": "Pooling"
        }
      ],
      "explanation": "Transferring pure risk for a premium = risk transfer."
    },
    "es": {
      "question": "Un asegurado transfiere el riesgo puro de muerte a la aseguradora a cambio de una prima. Esto ilustra el concepto de:",
      "answers": [
        {
          "id": "s4q1-a1",
          "text": "Indemnización"
        },
        {
          "id": "s4q1-a2",
          "text": "Transferencia de riesgo"
        },
        {
          "id": "s4q1-a3",
          "text": "Riesgo especulativo"
        },
        {
          "id": "s4q1-a4",
          "text": "Mancomunación"
        }
      ],
      "explanation": "Transferir el riesgo puro por una prima = transferencia de riesgo."
    },
    "correctAnswerId": "s4q1-a2"
  },
  {
    "id": "s4q2",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which dividend option increases both the cash value and the death benefit without requiring a medical exam?",
      "answers": [
        {
          "id": "s4q2-a1",
          "text": "Cash"
        },
        {
          "id": "s4q2-a2",
          "text": "Reduce premium"
        },
        {
          "id": "s4q2-a3",
          "text": "Paid-up additions"
        },
        {
          "id": "s4q2-a4",
          "text": "Accumulate at interest"
        }
      ],
      "explanation": "Paid-up additions increase CV and DB without an exam."
    },
    "es": {
      "question": "¿Cuál de las siguientes opciones de dividendo aumenta tanto el valor en efectivo como el beneficio por muerte sin requerir examen médico?",
      "answers": [
        {
          "id": "s4q2-a1",
          "text": "Cash"
        },
        {
          "id": "s4q2-a2",
          "text": "Reducir la prima"
        },
        {
          "id": "s4q2-a3",
          "text": "Paid-up additions"
        },
        {
          "id": "s4q2-a4",
          "text": "Accumulate at interest"
        }
      ],
      "explanation": "Paid-up additions aumenta CV y DB sin examen."
    },
    "correctAnswerId": "s4q2-a3"
  },
  {
    "id": "s4q3",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A Texas agent who sells annuities must complete, after the initial Best Interest course, per license period:",
      "answers": [
        {
          "id": "s4q3-a1",
          "text": "4 hours of annuities"
        },
        {
          "id": "s4q3-a2",
          "text": "8 hours of annuities"
        },
        {
          "id": "s4q3-a3",
          "text": "No additional hours"
        },
        {
          "id": "s4q3-a4",
          "text": "24 hours of ethics"
        }
      ],
      "explanation": "After the initial course: 8 hours of annuities per period."
    },
    "es": {
      "question": "Un agente de Texas que vende anualidades, tras el curso inicial mejor interés, debe completar por cada periodo de licencia:",
      "answers": [
        {
          "id": "s4q3-a1",
          "text": "4 horas de anualidades"
        },
        {
          "id": "s4q3-a2",
          "text": "8 horas de anualidades"
        },
        {
          "id": "s4q3-a3",
          "text": "Ninguna hora adicional"
        },
        {
          "id": "s4q3-a4",
          "text": "24 horas de ética"
        }
      ],
      "explanation": "Tras el curso inicial: 8 horas de anualidades por periodo."
    },
    "correctAnswerId": "s4q3-a2"
  },
  {
    "id": "s4q4",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A person contributes to an annuity for 20 years and then begins receiving payments. The moment they convert the value into payments — which is irreversible — is called:",
      "answers": [
        {
          "id": "s4q4-a1",
          "text": "Accumulation"
        },
        {
          "id": "s4q4-a2",
          "text": "Annuitization"
        },
        {
          "id": "s4q4-a3",
          "text": "Surrender"
        },
        {
          "id": "s4q4-a4",
          "text": "Free look"
        }
      ],
      "explanation": "Converting value into payments (irreversible) = annuitization."
    },
    "es": {
      "question": "Una persona aporta a una anualidad durante 20 años y luego comienza a recibir pagos. El momento en que convierte el valor en pagos —y que es irreversible— se llama:",
      "answers": [
        {
          "id": "s4q4-a1",
          "text": "Acumulación"
        },
        {
          "id": "s4q4-a2",
          "text": "Anualización"
        },
        {
          "id": "s4q4-a3",
          "text": "Rescate"
        },
        {
          "id": "s4q4-a4",
          "text": "Periodo de revisión gratuita"
        }
      ],
      "explanation": "Convertir el valor en pagos (irreversible) = anualización."
    },
    "correctAnswerId": "s4q4-a2"
  },
  {
    "id": "s4q5",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "In a defined benefit plan, what is guaranteed is:",
      "answers": [
        {
          "id": "s4q5-a1",
          "text": "The annual contribution"
        },
        {
          "id": "s4q5-a2",
          "text": "The specific benefit at retirement"
        },
        {
          "id": "s4q5-a3",
          "text": "The investment return"
        },
        {
          "id": "s4q5-a4",
          "text": "The agent’s commission"
        }
      ],
      "explanation": "DB guarantees the specific benefit."
    },
    "es": {
      "question": "En un plan de beneficio definido, lo que está garantizado es:",
      "answers": [
        {
          "id": "s4q5-a1",
          "text": "La aportación anual"
        },
        {
          "id": "s4q5-a2",
          "text": "El beneficio específico en el retiro"
        },
        {
          "id": "s4q5-a3",
          "text": "El rendimiento de la inversión"
        },
        {
          "id": "s4q5-a4",
          "text": "La comisión del agente"
        }
      ],
      "explanation": "DB garantiza el beneficio específico."
    },
    "correctAnswerId": "s4q5-a2"
  },
  {
    "id": "s4q6",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "How much death benefit coverage does TLHIGA protect per person per insolvent insurer?",
      "answers": [
        {
          "id": "s4q6-a1",
          "text": "$100,000"
        },
        {
          "id": "s4q6-a2",
          "text": "$250,000"
        },
        {
          "id": "s4q6-a3",
          "text": "$300,000"
        },
        {
          "id": "s4q6-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA death benefit = $300,000."
    },
    "es": {
      "question": "¿Qué cantidad de cobertura de beneficio por muerte protege la TLHIGA por persona y aseguradora insolvente?",
      "answers": [
        {
          "id": "s4q6-a1",
          "text": "$100,000"
        },
        {
          "id": "s4q6-a2",
          "text": "$250,000"
        },
        {
          "id": "s4q6-a3",
          "text": "$300,000"
        },
        {
          "id": "s4q6-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA beneficio por muerte = $300,000."
    },
    "correctAnswerId": "s4q6-a3"
  },
  {
    "id": "s4q7",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An owner stops paying and chooses no option. The insurer keeps the same face amount for the longest the cash value allows. They applied:",
      "answers": [
        {
          "id": "s4q7-a1",
          "text": "Reduced paid-up"
        },
        {
          "id": "s4q7-a2",
          "text": "Extended term"
        },
        {
          "id": "s4q7-a3",
          "text": "Cash surrender"
        },
        {
          "id": "s4q7-a4",
          "text": "APL"
        }
      ],
      "explanation": "Same face, limited period = extended term."
    },
    "es": {
      "question": "Un dueño deja de pagar y no elige opción. La aseguradora mantiene la misma suma asegurada durante el mayor tiempo que el valor en efectivo permita. Aplicó:",
      "answers": [
        {
          "id": "s4q7-a1",
          "text": "Reduced paid-up"
        },
        {
          "id": "s4q7-a2",
          "text": "Término extendido"
        },
        {
          "id": "s4q7-a3",
          "text": "Rescate en efectivo"
        },
        {
          "id": "s4q7-a4",
          "text": "APL"
        }
      ],
      "explanation": "Misma suma, plazo limitado = extended term."
    },
    "correctAnswerId": "s4q7-a2"
  },
  {
    "id": "s4q8",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A $40,000 distribution from a qualified plan is taxable in:",
      "answers": [
        {
          "id": "s4q8-a1",
          "text": "$0"
        },
        {
          "id": "s4q8-a2",
          "text": "The gain only"
        },
        {
          "id": "s4q8-a3",
          "text": "Its entirety ($40,000)"
        },
        {
          "id": "s4q8-a4",
          "text": "Half"
        }
      ],
      "explanation": "Qualified plan: taxable in its entirety."
    },
    "es": {
      "question": "Una distribución de un plan calificado de $40,000 es gravable en:",
      "answers": [
        {
          "id": "s4q8-a1",
          "text": "$0"
        },
        {
          "id": "s4q8-a2",
          "text": "La ganancia solamente"
        },
        {
          "id": "s4q8-a3",
          "text": "Su totalidad ($40,000)"
        },
        {
          "id": "s4q8-a4",
          "text": "La mitad"
        }
      ],
      "explanation": "Plan calificado: gravable en su totalidad."
    },
    "correctAnswerId": "s4q8-a3"
  },
  {
    "id": "s4q9",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which type of annuity shifts the investment risk to the owner and requires a prospectus?",
      "answers": [
        {
          "id": "s4q9-a1",
          "text": "Fixed"
        },
        {
          "id": "s4q9-a2",
          "text": "Indexed"
        },
        {
          "id": "s4q9-a3",
          "text": "Variable"
        },
        {
          "id": "s4q9-a4",
          "text": "Fixed immediate"
        }
      ],
      "explanation": "Owner’s risk + prospectus = variable."
    },
    "es": {
      "question": "¿Qué tipo de anualidad traslada el riesgo de inversión al dueño y requiere prospecto?",
      "answers": [
        {
          "id": "s4q9-a1",
          "text": "Fija"
        },
        {
          "id": "s4q9-a2",
          "text": "Indexed"
        },
        {
          "id": "s4q9-a3",
          "text": "Variable"
        },
        {
          "id": "s4q9-a4",
          "text": "Immediate fija"
        }
      ],
      "explanation": "Riesgo del dueño + prospecto = variable."
    },
    "correctAnswerId": "s4q9-a3"
  },
  {
    "id": "s4q10",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Insurable interest in life insurance must exist:",
      "answers": [
        {
          "id": "s4q10-a1",
          "text": "At the time of death"
        },
        {
          "id": "s4q10-a2",
          "text": "At policy issue"
        },
        {
          "id": "s4q10-a3",
          "text": "Throughout the entire term"
        },
        {
          "id": "s4q10-a4",
          "text": "Only if the insurer requests it"
        }
      ],
      "explanation": "For life, at issue."
    },
    "es": {
      "question": "El interés asegurable en un seguro de vida debe existir:",
      "answers": [
        {
          "id": "s4q10-a1",
          "text": "Al momento de la muerte"
        },
        {
          "id": "s4q10-a2",
          "text": "Al emitir la póliza"
        },
        {
          "id": "s4q10-a3",
          "text": "Durante toda la vigencia"
        },
        {
          "id": "s4q10-a4",
          "text": "Solo si lo pide la aseguradora"
        }
      ],
      "explanation": "En vida, al emitir."
    },
    "correctAnswerId": "s4q10-a2"
  },
  {
    "id": "s4q11",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which medical document requires the applicant’s written authorization to obtain?",
      "answers": [
        {
          "id": "s4q11-a1",
          "text": "The buyer’s guide"
        },
        {
          "id": "s4q11-a2",
          "text": "The Attending Physician Statement (APS)"
        },
        {
          "id": "s4q11-a3",
          "text": "The policy summary"
        },
        {
          "id": "s4q11-a4",
          "text": "The agent’s report"
        }
      ],
      "explanation": "The APS requires written authorization."
    },
    "es": {
      "question": "¿Qué documento médico requiere la autorización escrita del solicitante para obtenerse?",
      "answers": [
        {
          "id": "s4q11-a1",
          "text": "El guía del comprador"
        },
        {
          "id": "s4q11-a2",
          "text": "El Attending Physician Statement (APS)"
        },
        {
          "id": "s4q11-a3",
          "text": "El resumen de la póliza"
        },
        {
          "id": "s4q11-a4",
          "text": "El agent’s report"
        }
      ],
      "explanation": "El APS requiere autorización escrita."
    },
    "correctAnswerId": "s4q11-a2"
  },
  {
    "id": "s4q12",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A client wants to protect their 30-year mortgage: if they die, enough to pay off the decreasing balance. Best suited is:",
      "answers": [
        {
          "id": "s4q12-a1",
          "text": "Increasing term"
        },
        {
          "id": "s4q12-a2",
          "text": "Decreasing term"
        },
        {
          "id": "s4q12-a3",
          "text": "Whole life"
        },
        {
          "id": "s4q12-a4",
          "text": "Annuity"
        }
      ],
      "explanation": "Decreasing mortgage balance = decreasing term."
    },
    "es": {
      "question": "Un cliente quiere proteger su hipoteca de 30 años: si muere, que alcance para liquidar el saldo decreciente. Le conviene:",
      "answers": [
        {
          "id": "s4q12-a1",
          "text": "Término creciente"
        },
        {
          "id": "s4q12-a2",
          "text": "Término decreciente"
        },
        {
          "id": "s4q12-a3",
          "text": "Vida entera"
        },
        {
          "id": "s4q12-a4",
          "text": "Anualidad"
        }
      ],
      "explanation": "Saldo decreciente de hipoteca = decreasing term."
    },
    "correctAnswerId": "s4q12-a2"
  },
  {
    "id": "s4q13",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "“Once a MEC, always a MEC” means that:",
      "answers": [
        {
          "id": "s4q13-a1",
          "text": "A MEC can be reversed by paying less"
        },
        {
          "id": "s4q13-a2",
          "text": "The MEC classification is permanent"
        },
        {
          "id": "s4q13-a3",
          "text": "The MEC loses its death benefit"
        },
        {
          "id": "s4q13-a4",
          "text": "The MEC becomes an annuity"
        }
      ],
      "explanation": "The MEC classification is permanent."
    },
    "es": {
      "question": "El “once a MEC, always a MEC” significa que:",
      "answers": [
        {
          "id": "s4q13-a1",
          "text": "Un MEC puede revertirse pagando menos"
        },
        {
          "id": "s4q13-a2",
          "text": "La clasificación de MEC es permanente"
        },
        {
          "id": "s4q13-a3",
          "text": "El MEC pierde su beneficio por muerte"
        },
        {
          "id": "s4q13-a4",
          "text": "El MEC se convierte en anualidad"
        }
      ],
      "explanation": "La clasificación de MEC es permanente."
    },
    "correctAnswerId": "s4q13-a2"
  },
  {
    "id": "s4q14",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The producer legally represents:",
      "answers": [
        {
          "id": "s4q14-a1",
          "text": "The client"
        },
        {
          "id": "s4q14-a2",
          "text": "The insurer"
        },
        {
          "id": "s4q14-a3",
          "text": "The TDI"
        },
        {
          "id": "s4q14-a4",
          "text": "The beneficiary"
        }
      ],
      "explanation": "The producer represents the insurer."
    },
    "es": {
      "question": "El productor representa legalmente a:",
      "answers": [
        {
          "id": "s4q14-a1",
          "text": "El cliente"
        },
        {
          "id": "s4q14-a2",
          "text": "La aseguradora"
        },
        {
          "id": "s4q14-a3",
          "text": "El TDI"
        },
        {
          "id": "s4q14-a4",
          "text": "El beneficiario"
        }
      ],
      "explanation": "El productor representa a la aseguradora."
    },
    "correctAnswerId": "s4q14-a2"
  },
  {
    "id": "s4q15",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "In 2026, the elective deferral limit for a 401(k) (excluding catch-up) is:",
      "answers": [
        {
          "id": "s4q15-a1",
          "text": "$7,500"
        },
        {
          "id": "s4q15-a2",
          "text": "$19,500"
        },
        {
          "id": "s4q15-a3",
          "text": "$23,000"
        },
        {
          "id": "s4q15-a4",
          "text": "$24,500"
        }
      ],
      "explanation": "401(k) 2026 = $24,500 (excluding catch-up)."
    },
    "es": {
      "question": "En 2026, el límite de aportación electiva a un 401(k) (sin catch-up) es:",
      "answers": [
        {
          "id": "s4q15-a1",
          "text": "$7,500"
        },
        {
          "id": "s4q15-a2",
          "text": "$19,500"
        },
        {
          "id": "s4q15-a3",
          "text": "$23,000"
        },
        {
          "id": "s4q15-a4",
          "text": "$24,500"
        }
      ],
      "explanation": "401(k) 2026 = $24,500 (sin catch-up)."
    },
    "correctAnswerId": "s4q15-a4"
  },
  {
    "id": "s4q16",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A “joint and survivor” annuity continues paying:",
      "answers": [
        {
          "id": "s4q16-a1",
          "text": "Until the first of the two dies"
        },
        {
          "id": "s4q16-a2",
          "text": "To the surviving spouse after the first death"
        },
        {
          "id": "s4q16-a3",
          "text": "Only for a fixed period"
        },
        {
          "id": "s4q16-a4",
          "text": "Only if the death was accidental"
        }
      ],
      "explanation": "Joint and survivor continues to the survivor."
    },
    "es": {
      "question": "Una anualidad “joint and survivor” continúa pagando:",
      "answers": [
        {
          "id": "s4q16-a1",
          "text": "Hasta que muere el primero de los dos"
        },
        {
          "id": "s4q16-a2",
          "text": "Al cónyuge sobreviviente tras la muerte del primero"
        },
        {
          "id": "s4q16-a3",
          "text": "Solo por un periodo fijo"
        },
        {
          "id": "s4q16-a4",
          "text": "Solo si la muerte fue accidental"
        }
      ],
      "explanation": "Joint and survivor continúa al sobreviviente."
    },
    "correctAnswerId": "s4q16-a2"
  },
  {
    "id": "s4q17",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which Texas practice penalizes both the agent and the client who accepts it?",
      "answers": [
        {
          "id": "s4q17-a1",
          "text": "Field underwriting"
        },
        {
          "id": "s4q17-a2",
          "text": "Rebating"
        },
        {
          "id": "s4q17-a3",
          "text": "Replacement with disclosure"
        },
        {
          "id": "s4q17-a4",
          "text": "Suitability"
        }
      ],
      "explanation": "Rebating penalizes both."
    },
    "es": {
      "question": "¿Qué práctica de Texas se castiga tanto al agente como al cliente que la acepta?",
      "answers": [
        {
          "id": "s4q17-a1",
          "text": "Evaluación inicial de campo"
        },
        {
          "id": "s4q17-a2",
          "text": "Rebaja indebida"
        },
        {
          "id": "s4q17-a3",
          "text": "Reemplazo con divulgación"
        },
        {
          "id": "s4q17-a4",
          "text": "Idoneidad"
        }
      ],
      "explanation": "rebaja indebida sanciona a ambos."
    },
    "correctAnswerId": "s4q17-a2"
  },
  {
    "id": "s4q18",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An applicant states a lower age than their real one and pays an insufficient premium. At death, the insurer:",
      "answers": [
        {
          "id": "s4q18-a1",
          "text": "Voids the policy"
        },
        {
          "id": "s4q18-a2",
          "text": "Adjusts the benefit to what the premium would buy at the correct age"
        },
        {
          "id": "s4q18-a3",
          "text": "Pays double"
        },
        {
          "id": "s4q18-a4",
          "text": "Refunds the premiums"
        }
      ],
      "explanation": "Misstatement of age → adjust the benefit."
    },
    "es": {
      "question": "Un solicitante declara una edad menor a la real y paga prima insuficiente. Al morir, la aseguradora:",
      "answers": [
        {
          "id": "s4q18-a1",
          "text": "Anula la póliza"
        },
        {
          "id": "s4q18-a2",
          "text": "Ajusta el beneficio a lo que la prima compraba a la edad correcta"
        },
        {
          "id": "s4q18-a3",
          "text": "Paga el doble"
        },
        {
          "id": "s4q18-a4",
          "text": "Devuelve las primas"
        }
      ],
      "explanation": "Misstatement of age → ajustan el beneficio."
    },
    "correctAnswerId": "s4q18-a2"
  },
  {
    "id": "s4q19",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which withdrawal from a non-qualified annuity is subject to tax and, before 59½, a 10% penalty?",
      "answers": [
        {
          "id": "s4q19-a1",
          "text": "The return of basis"
        },
        {
          "id": "s4q19-a2",
          "text": "The gain (which comes out first under LIFO)"
        },
        {
          "id": "s4q19-a3",
          "text": "None"
        },
        {
          "id": "s4q19-a4",
          "text": "The death benefit"
        }
      ],
      "explanation": "The gain (LIFO) is taxable, +10% if under 59½."
    },
    "es": {
      "question": "¿Qué retiro de una anualidad no calificada está sujeto a impuesto y, antes de 59½, a penalidad del 10%?",
      "answers": [
        {
          "id": "s4q19-a1",
          "text": "El retorno de la base"
        },
        {
          "id": "s4q19-a2",
          "text": "La ganancia (que sale primero por LIFO)"
        },
        {
          "id": "s4q19-a3",
          "text": "Ninguno"
        },
        {
          "id": "s4q19-a4",
          "text": "El beneficio por muerte"
        }
      ],
      "explanation": "La ganancia (LIFO) es gravable, +10% si <59½."
    },
    "correctAnswerId": "s4q19-a2"
  },
  {
    "id": "s4q20",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An insured dies of natural illness. They had an Accidental Death Benefit rider. The insurer pays:",
      "answers": [
        {
          "id": "s4q20-a1",
          "text": "Double the benefit"
        },
        {
          "id": "s4q20-a2",
          "text": "Only the base benefit"
        },
        {
          "id": "s4q20-a3",
          "text": "Only the ADB"
        },
        {
          "id": "s4q20-a4",
          "text": "Nothing"
        }
      ],
      "explanation": "Death by illness → only the base benefit (ADB does not apply)."
    },
    "es": {
      "question": "Un asegurado fallece por enfermedad natural. Tenía un rider de beneficio por muerte accidental. La aseguradora paga:",
      "answers": [
        {
          "id": "s4q20-a1",
          "text": "El doble del beneficio"
        },
        {
          "id": "s4q20-a2",
          "text": "Solo el beneficio base"
        },
        {
          "id": "s4q20-a3",
          "text": "Solo el ADB"
        },
        {
          "id": "s4q20-a4",
          "text": "Nada"
        }
      ],
      "explanation": "Muerte por enfermedad → solo el beneficio base (ADB no aplica)."
    },
    "correctAnswerId": "s4q20-a2"
  },
  {
    "id": "s4q21",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The incontestability clause primarily protects:",
      "answers": [
        {
          "id": "s4q21-a1",
          "text": "The insurer"
        },
        {
          "id": "s4q21-a2",
          "text": "The insured and their family"
        },
        {
          "id": "s4q21-a3",
          "text": "The agent"
        },
        {
          "id": "s4q21-a4",
          "text": "The TDI"
        }
      ],
      "explanation": "Incontestability protects the insured/family."
    },
    "es": {
      "question": "La cláusula de incontestabilidad protege principalmente:",
      "answers": [
        {
          "id": "s4q21-a1",
          "text": "A la aseguradora"
        },
        {
          "id": "s4q21-a2",
          "text": "Al asegurado y su familia"
        },
        {
          "id": "s4q21-a3",
          "text": "Al agente"
        },
        {
          "id": "s4q21-a4",
          "text": "Al TDI"
        }
      ],
      "explanation": "Incontestabilidad protege al asegurado/familia."
    },
    "correctAnswerId": "s4q21-a2"
  },
  {
    "id": "s4q22",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A company owned by shareholders that issues non-participating policies is:",
      "answers": [
        {
          "id": "s4q22-a1",
          "text": "Mutual"
        },
        {
          "id": "s4q22-a2",
          "text": "Stock"
        },
        {
          "id": "s4q22-a3",
          "text": "Fraternal"
        },
        {
          "id": "s4q22-a4",
          "text": "Reciprocal"
        }
      ],
      "explanation": "Shareholders + non-par = stock."
    },
    "es": {
      "question": "Una compañía propiedad de accionistas que emite pólizas no participantes es:",
      "answers": [
        {
          "id": "s4q22-a1",
          "text": "Mutua"
        },
        {
          "id": "s4q22-a2",
          "text": "Por acciones"
        },
        {
          "id": "s4q22-a3",
          "text": "Fraternal"
        },
        {
          "id": "s4q22-a4",
          "text": "Recíproca"
        }
      ],
      "explanation": "Accionistas + pólizas no participantes = compañía por acciones."
    },
    "correctAnswerId": "s4q22-a2"
  },
  {
    "id": "s4q23",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "What is required to move a 401(k) to an IRA while avoiding the mandatory 20% withholding?",
      "answers": [
        {
          "id": "s4q23-a1",
          "text": "An indirect 60-day rollover"
        },
        {
          "id": "s4q23-a2",
          "text": "A direct transfer"
        },
        {
          "id": "s4q23-a3",
          "text": "A cash withdrawal"
        },
        {
          "id": "s4q23-a4",
          "text": "Waiting until 73"
        }
      ],
      "explanation": "No 20% withholding = direct transfer."
    },
    "es": {
      "question": "¿Qué se requiere para mover un 401(k) a una IRA evitando la retención obligatoria del 20%?",
      "answers": [
        {
          "id": "s4q23-a1",
          "text": "Un rollover indirecto de 60 días"
        },
        {
          "id": "s4q23-a2",
          "text": "Una transferencia directa"
        },
        {
          "id": "s4q23-a3",
          "text": "Un retiro en efectivo"
        },
        {
          "id": "s4q23-a4",
          "text": "Esperar a los 73"
        }
      ],
      "explanation": "Sin retención del 20% = transferencia directa."
    },
    "correctAnswerId": "s4q23-a2"
  },
  {
    "id": "s4q24",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The free look for a life policy in Texas, in a replacement case, may be extended up to:",
      "answers": [
        {
          "id": "s4q24-a1",
          "text": "5 days"
        },
        {
          "id": "s4q24-a2",
          "text": "10 days"
        },
        {
          "id": "s4q24-a3",
          "text": "20 days"
        },
        {
          "id": "s4q24-a4",
          "text": "60 days"
        }
      ],
      "explanation": "Free look in a replacement extends up to 20 days."
    },
    "es": {
      "question": "El periodo de revisión gratuita de una póliza de vida en Texas, en un caso de reemplazo, puede extenderse hasta:",
      "answers": [
        {
          "id": "s4q24-a1",
          "text": "5 días"
        },
        {
          "id": "s4q24-a2",
          "text": "10 días"
        },
        {
          "id": "s4q24-a3",
          "text": "20 días"
        },
        {
          "id": "s4q24-a4",
          "text": "60 días"
        }
      ],
      "explanation": "periodo de revisión gratuita en reemplazo se extiende hasta 20 días."
    },
    "correctAnswerId": "s4q24-a3"
  },
  {
    "id": "s4q25",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A permanent policy whose premiums are paid only 20 years but covers for life is:",
      "answers": [
        {
          "id": "s4q25-a1",
          "text": "Annual renewable term"
        },
        {
          "id": "s4q25-a2",
          "text": "20-pay whole life (limited-pay)"
        },
        {
          "id": "s4q25-a3",
          "text": "Decreasing term"
        },
        {
          "id": "s4q25-a4",
          "text": "Universal Life Option B"
        }
      ],
      "explanation": "Pay 20 years, cover for life = 20-pay whole life."
    },
    "es": {
      "question": "Una póliza permanente cuyas primas se pagan solo 20 años pero cubre de por vida es:",
      "answers": [
        {
          "id": "s4q25-a1",
          "text": "Término renovable anual"
        },
        {
          "id": "s4q25-a2",
          "text": "Vida entera de 20 pagos (pago limitado)"
        },
        {
          "id": "s4q25-a3",
          "text": "Término decreciente"
        },
        {
          "id": "s4q25-a4",
          "text": "Vida universal opción B"
        }
      ],
      "explanation": "Pagas 20 años, cubre de por vida = 20-pay vida entera."
    },
    "correctAnswerId": "s4q25-a2"
  },
  {
    "id": "s4q26",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Who assumes the investment risk in a defined contribution (401k) plan?",
      "answers": [
        {
          "id": "s4q26-a1",
          "text": "The employer"
        },
        {
          "id": "s4q26-a2",
          "text": "The employee"
        },
        {
          "id": "s4q26-a3",
          "text": "The government"
        },
        {
          "id": "s4q26-a4",
          "text": "The insurer"
        }
      ],
      "explanation": "In a DC plan, the risk is on the employee."
    },
    "es": {
      "question": "¿Quién asume el riesgo de inversión en un plan de contribución definida (401k)?",
      "answers": [
        {
          "id": "s4q26-a1",
          "text": "El empleador"
        },
        {
          "id": "s4q26-a2",
          "text": "El empleado"
        },
        {
          "id": "s4q26-a3",
          "text": "El gobierno"
        },
        {
          "id": "s4q26-a4",
          "text": "La aseguradora"
        }
      ],
      "explanation": "En un DC el riesgo es del empleado."
    },
    "correctAnswerId": "s4q26-a2"
  },
  {
    "id": "s4q27",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An agent adds a rider the client did not request and overcharges them. They commit:",
      "answers": [
        {
          "id": "s4q27-a1",
          "text": "Sliding"
        },
        {
          "id": "s4q27-a2",
          "text": "Twisting"
        },
        {
          "id": "s4q27-a3",
          "text": "Rebating"
        },
        {
          "id": "s4q27-a4",
          "text": "Backdating"
        }
      ],
      "explanation": "Adding a rider/charge without consent = sliding."
    },
    "es": {
      "question": "Un agente añade un rider que el cliente no solicitó y le cobra de más. Comete:",
      "answers": [
        {
          "id": "s4q27-a1",
          "text": "Venta agregada no autorizada"
        },
        {
          "id": "s4q27-a2",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s4q27-a3",
          "text": "Rebaja indebida"
        },
        {
          "id": "s4q27-a4",
          "text": "Backdating"
        }
      ],
      "explanation": "Agregar rider/cargo sin consentimiento = venta agregada no autorizada."
    },
    "correctAnswerId": "s4q27-a1"
  },
  {
    "id": "s4q28",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The cash value of a whole life policy is a benefit that is:",
      "answers": [
        {
          "id": "s4q28-a1",
          "text": "Only for death"
        },
        {
          "id": "s4q28-a2",
          "text": "Living (in-life benefit)"
        },
        {
          "id": "s4q28-a3",
          "text": "Exclusive to annuities"
        },
        {
          "id": "s4q28-a4",
          "text": "Nonexistent in permanent policies"
        }
      ],
      "explanation": "The cash value is a living benefit."
    },
    "es": {
      "question": "El valor en efectivo de una vida entera es un beneficio:",
      "answers": [
        {
          "id": "s4q28-a1",
          "text": "Solo por muerte"
        },
        {
          "id": "s4q28-a2",
          "text": "En vida (living benefit)"
        },
        {
          "id": "s4q28-a3",
          "text": "Exclusivo de las anualidades"
        },
        {
          "id": "s4q28-a4",
          "text": "Que no existe en pólizas permanentes"
        }
      ],
      "explanation": "El valor en efectivo es un living benefit."
    },
    "correctAnswerId": "s4q28-a2"
  },
  {
    "id": "s4q29",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which of the following 1035 exchanges is permitted?",
      "answers": [
        {
          "id": "s4q29-a1",
          "text": "Annuity to life"
        },
        {
          "id": "s4q29-a2",
          "text": "Life to annuity"
        },
        {
          "id": "s4q29-a3",
          "text": "Annuity to health"
        },
        {
          "id": "s4q29-a4",
          "text": "Health to life"
        }
      ],
      "explanation": "Life → annuity is permitted."
    },
    "es": {
      "question": "¿Cuál de los siguientes intercambios 1035 está permitido?",
      "answers": [
        {
          "id": "s4q29-a1",
          "text": "Anualidad a vida"
        },
        {
          "id": "s4q29-a2",
          "text": "Vida a anualidad"
        },
        {
          "id": "s4q29-a3",
          "text": "Anualidad a salud"
        },
        {
          "id": "s4q29-a4",
          "text": "Salud a vida"
        }
      ],
      "explanation": "Vida → anualidad está permitido."
    },
    "correctAnswerId": "s4q29-a2"
  },
  {
    "id": "s4q30",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "RMDs are not required during the owner’s life in a:",
      "answers": [
        {
          "id": "s4q30-a1",
          "text": "Traditional IRA"
        },
        {
          "id": "s4q30-a2",
          "text": "401(k)"
        },
        {
          "id": "s4q30-a3",
          "text": "Roth IRA"
        },
        {
          "id": "s4q30-a4",
          "text": "DB pension"
        }
      ],
      "explanation": "The Roth IRA requires no lifetime RMDs."
    },
    "es": {
      "question": "El RMD no se exige en vida del titular en una:",
      "answers": [
        {
          "id": "s4q30-a1",
          "text": "IRA tradicional"
        },
        {
          "id": "s4q30-a2",
          "text": "401(k)"
        },
        {
          "id": "s4q30-a3",
          "text": "Roth IRA"
        },
        {
          "id": "s4q30-a4",
          "text": "Pensión DB"
        }
      ],
      "explanation": "La Roth IRA no exige RMD en vida."
    },
    "correctAnswerId": "s4q30-a3"
  },
  {
    "id": "s4q31",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A person wants the most coverage for the least cost, knowing it is temporary. Best suited is:",
      "answers": [
        {
          "id": "s4q31-a1",
          "text": "Whole life"
        },
        {
          "id": "s4q31-a2",
          "text": "Term life"
        },
        {
          "id": "s4q31-a3",
          "text": "Universal Life"
        },
        {
          "id": "s4q31-a4",
          "text": "Variable life"
        }
      ],
      "explanation": "Cheap temporary coverage = term life."
    },
    "es": {
      "question": "Una persona quiere la mayor cobertura por el menor costo, sabiendo que es temporal. Le conviene:",
      "answers": [
        {
          "id": "s4q31-a1",
          "text": "Vida entera"
        },
        {
          "id": "s4q31-a2",
          "text": "Vida temporal"
        },
        {
          "id": "s4q31-a3",
          "text": "Vida universal"
        },
        {
          "id": "s4q31-a4",
          "text": "Vida variable"
        }
      ],
      "explanation": "Cobertura temporal barata = vida temporal."
    },
    "correctAnswerId": "s4q31-a2"
  },
  {
    "id": "s4q32",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "In Texas, who appoints the Commissioner of Insurance?",
      "answers": [
        {
          "id": "s4q32-a1",
          "text": "The voters"
        },
        {
          "id": "s4q32-a2",
          "text": "The Governor"
        },
        {
          "id": "s4q32-a3",
          "text": "The President"
        },
        {
          "id": "s4q32-a4",
          "text": "The federal legislature"
        }
      ],
      "explanation": "The Governor appoints the Commissioner."
    },
    "es": {
      "question": "En Texas, ¿quién designa al Comisionado de Seguros?",
      "answers": [
        {
          "id": "s4q32-a1",
          "text": "Los votantes"
        },
        {
          "id": "s4q32-a2",
          "text": "El Gobernador"
        },
        {
          "id": "s4q32-a3",
          "text": "El Presidente"
        },
        {
          "id": "s4q32-a4",
          "text": "La legislatura federal"
        }
      ],
      "explanation": "El Gobernador designa al Comisionado."
    },
    "correctAnswerId": "s4q32-a2"
  },
  {
    "id": "s4q33",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A fixed annuity mainly exposes the owner to the risk of:",
      "answers": [
        {
          "id": "s4q33-a1",
          "text": "Market loss"
        },
        {
          "id": "s4q33-a2",
          "text": "Inflation (purchasing power of fixed payments)"
        },
        {
          "id": "s4q33-a3",
          "text": "The beneficiary’s bankruptcy"
        },
        {
          "id": "s4q33-a4",
          "text": "Dismemberment"
        }
      ],
      "explanation": "The fixed annuity faces inflation risk."
    },
    "es": {
      "question": "Una anualidad fija expone al titular principalmente al riesgo de:",
      "answers": [
        {
          "id": "s4q33-a1",
          "text": "Pérdida de mercado"
        },
        {
          "id": "s4q33-a2",
          "text": "Inflación (poder adquisitivo de pagos fijos)"
        },
        {
          "id": "s4q33-a3",
          "text": "Quiebra del beneficiario"
        },
        {
          "id": "s4q33-a4",
          "text": "Desmembramiento"
        }
      ],
      "explanation": "La anualidad fija enfrenta riesgo de inflación."
    },
    "correctAnswerId": "s4q33-a2"
  },
  {
    "id": "s4q34",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The application answers that are true “to the best of the applicant’s knowledge” are:",
      "answers": [
        {
          "id": "s4q34-a1",
          "text": "Warranties"
        },
        {
          "id": "s4q34-a2",
          "text": "Representations"
        },
        {
          "id": "s4q34-a3",
          "text": "Fraud"
        },
        {
          "id": "s4q34-a4",
          "text": "Independent clauses"
        }
      ],
      "explanation": "They are representations."
    },
    "es": {
      "question": "Las respuestas de la solicitud que son ciertas “a leal saber y entender” del solicitante son:",
      "answers": [
        {
          "id": "s4q34-a1",
          "text": "Garantías"
        },
        {
          "id": "s4q34-a2",
          "text": "Representaciones"
        },
        {
          "id": "s4q34-a3",
          "text": "Fraude"
        },
        {
          "id": "s4q34-a4",
          "text": "Cláusulas independientes"
        }
      ],
      "explanation": "Son representaciones."
    },
    "correctAnswerId": "s4q34-a2"
  },
  {
    "id": "s4q35",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "What portion of a settlement option that pays in installments with interest is taxable?",
      "answers": [
        {
          "id": "s4q35-a1",
          "text": "The whole payment"
        },
        {
          "id": "s4q35-a2",
          "text": "Only the interest"
        },
        {
          "id": "s4q35-a3",
          "text": "None"
        },
        {
          "id": "s4q35-a4",
          "text": "Only the principal"
        }
      ],
      "explanation": "Only the interest of the settlement is taxable."
    },
    "es": {
      "question": "¿Qué porción de un settlement option que paga en cuotas con interés es gravable?",
      "answers": [
        {
          "id": "s4q35-a1",
          "text": "Todo el pago"
        },
        {
          "id": "s4q35-a2",
          "text": "Solo el interés"
        },
        {
          "id": "s4q35-a3",
          "text": "Nada"
        },
        {
          "id": "s4q35-a4",
          "text": "Solo el principal"
        }
      ],
      "explanation": "Solo el interés del settlement es gravable."
    },
    "correctAnswerId": "s4q35-a2"
  },
  {
    "id": "s4q36",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An insured commits suicide 30 months after the policy is issued. The insurer:",
      "answers": [
        {
          "id": "s4q36-a1",
          "text": "Refunds the premiums"
        },
        {
          "id": "s4q36-a2",
          "text": "Pays nothing"
        },
        {
          "id": "s4q36-a3",
          "text": "Pays the benefit (the 2-year period has passed)"
        },
        {
          "id": "s4q36-a4",
          "text": "Pays half"
        }
      ],
      "explanation": "At 30 months (>2 years): pays the benefit."
    },
    "es": {
      "question": "Un asegurado se suicida 30 meses después de emitida la póliza. La aseguradora:",
      "answers": [
        {
          "id": "s4q36-a1",
          "text": "Devuelve las primas"
        },
        {
          "id": "s4q36-a2",
          "text": "No paga nada"
        },
        {
          "id": "s4q36-a3",
          "text": "Paga el beneficio (ya pasó el periodo de 2 años)"
        },
        {
          "id": "s4q36-a4",
          "text": "Paga la mitad"
        }
      ],
      "explanation": "A los 30 meses (>2 años): paga el beneficio."
    },
    "correctAnswerId": "s4q36-a3"
  },
  {
    "id": "s4q37",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The number of continuing-education hours Texas requires per 2-year period is:",
      "answers": [
        {
          "id": "s4q37-a1",
          "text": "12"
        },
        {
          "id": "s4q37-a2",
          "text": "20"
        },
        {
          "id": "s4q37-a3",
          "text": "24"
        },
        {
          "id": "s4q37-a4",
          "text": "30"
        }
      ],
      "explanation": "CE: 24 hours."
    },
    "es": {
      "question": "El número de horas de educación continua que exige Texas por periodo de 2 años es:",
      "answers": [
        {
          "id": "s4q37-a1",
          "text": "12"
        },
        {
          "id": "s4q37-a2",
          "text": "20"
        },
        {
          "id": "s4q37-a3",
          "text": "24"
        },
        {
          "id": "s4q37-a4",
          "text": "30"
        }
      ],
      "explanation": "CE: 24 horas."
    },
    "correctAnswerId": "s4q37-a3"
  },
  {
    "id": "s4q38",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A single-premium immediate annuity (SPIA) is distinguished because:",
      "answers": [
        {
          "id": "s4q38-a1",
          "text": "It has a long accumulation phase"
        },
        {
          "id": "s4q38-a2",
          "text": "It begins paying in about one year, with a single premium"
        },
        {
          "id": "s4q38-a3",
          "text": "It is only variable"
        },
        {
          "id": "s4q38-a4",
          "text": "It does not pay for life"
        }
      ],
      "explanation": "SPIA: single premium, pays in ~1 year."
    },
    "es": {
      "question": "Una anualidad inmediata (SPIA) se distingue porque:",
      "answers": [
        {
          "id": "s4q38-a1",
          "text": "Tiene una larga fase de acumulación"
        },
        {
          "id": "s4q38-a2",
          "text": "Comienza a pagar en aproximadamente un año, con prima única"
        },
        {
          "id": "s4q38-a3",
          "text": "Solo es variable"
        },
        {
          "id": "s4q38-a4",
          "text": "No paga de por vida"
        }
      ],
      "explanation": "SPIA: prima única, paga en ~1 año."
    },
    "correctAnswerId": "s4q38-a2"
  },
  {
    "id": "s4q39",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The rider that waives premiums if the insured becomes totally disabled is:",
      "answers": [
        {
          "id": "s4q39-a1",
          "text": "Accidental Death Benefit"
        },
        {
          "id": "s4q39-a2",
          "text": "Waiver of Premium"
        },
        {
          "id": "s4q39-a3",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s4q39-a4",
          "text": "Return of Premium"
        }
      ],
      "explanation": "Waiver for disability = Waiver of Premium."
    },
    "es": {
      "question": "El rider que exime las primas si el asegurado queda totalmente discapacitado es:",
      "answers": [
        {
          "id": "s4q39-a1",
          "text": "Beneficio por muerte accidental"
        },
        {
          "id": "s4q39-a2",
          "text": "Exención de prima"
        },
        {
          "id": "s4q39-a3",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s4q39-a4",
          "text": "Devolución de prima"
        }
      ],
      "explanation": "Exención por discapacidad = Waiver of prima."
    },
    "correctAnswerId": "s4q39-a2"
  },
  {
    "id": "s4q40",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A “substandard (rated)” risk classification means the applicant:",
      "answers": [
        {
          "id": "s4q40-a1",
          "text": "Was declined"
        },
        {
          "id": "s4q40-a2",
          "text": "Is accepted with a higher premium"
        },
        {
          "id": "s4q40-a3",
          "text": "Receives the lowest premium"
        },
        {
          "id": "s4q40-a4",
          "text": "Needs no underwriting"
        }
      ],
      "explanation": "Substandard = accepted with a surcharge."
    },
    "es": {
      "question": "Una clasificación de riesgo “substandard (rated)” significa que el solicitante:",
      "answers": [
        {
          "id": "s4q40-a1",
          "text": "Fue rechazado"
        },
        {
          "id": "s4q40-a2",
          "text": "Es aceptado con prima recargada"
        },
        {
          "id": "s4q40-a3",
          "text": "Recibe la prima más baja"
        },
        {
          "id": "s4q40-a4",
          "text": "No necesita evaluación de riesgo"
        }
      ],
      "explanation": "Substandard = aceptado con recargo."
    },
    "correctAnswerId": "s4q40-a2"
  },
  {
    "id": "s4q41",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which federal law protects the privacy and accuracy of consumer reports used in underwriting?",
      "answers": [
        {
          "id": "s4q41-a1",
          "text": "HIPAA"
        },
        {
          "id": "s4q41-a2",
          "text": "Fair Credit Reporting Act"
        },
        {
          "id": "s4q41-a3",
          "text": "McCarran-Ferguson"
        },
        {
          "id": "s4q41-a4",
          "text": "ERISA"
        }
      ],
      "explanation": "Fair Credit Reporting Act."
    },
    "es": {
      "question": "¿Qué ley federal protege la privacidad y exactitud de los consumer reports usados en evaluación de riesgo?",
      "answers": [
        {
          "id": "s4q41-a1",
          "text": "HIPAA"
        },
        {
          "id": "s4q41-a2",
          "text": "Fair Credit Reporting Act"
        },
        {
          "id": "s4q41-a3",
          "text": "McCarran-Ferguson"
        },
        {
          "id": "s4q41-a4",
          "text": "ERISA"
        }
      ],
      "explanation": "Fair Credit Reporting Act."
    },
    "correctAnswerId": "s4q41-a2"
  },
  {
    "id": "s4q42",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Contributions to a Roth IRA are:",
      "answers": [
        {
          "id": "s4q42-a1",
          "text": "Deductible"
        },
        {
          "id": "s4q42-a2",
          "text": "Never deductible (after-tax)"
        },
        {
          "id": "s4q42-a3",
          "text": "Deductible after age 50"
        },
        {
          "id": "s4q42-a4",
          "text": "Have no income limit"
        }
      ],
      "explanation": "Roth: never deductible."
    },
    "es": {
      "question": "Las aportaciones a una Roth IRA:",
      "answers": [
        {
          "id": "s4q42-a1",
          "text": "Son deducibles"
        },
        {
          "id": "s4q42-a2",
          "text": "Nunca son deducibles (después de impuestos)"
        },
        {
          "id": "s4q42-a3",
          "text": "Son deducibles después de los 50"
        },
        {
          "id": "s4q42-a4",
          "text": "No tienen límite de ingreso"
        }
      ],
      "explanation": "Roth: nunca deducibles."
    },
    "correctAnswerId": "s4q42-a2"
  },
  {
    "id": "s4q43",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The lump-sum death benefit paid at death is, for income tax:",
      "answers": [
        {
          "id": "s4q43-a1",
          "text": "Fully taxable"
        },
        {
          "id": "s4q43-a2",
          "text": "Generally tax-free"
        },
        {
          "id": "s4q43-a3",
          "text": "50% taxable"
        },
        {
          "id": "s4q43-a4",
          "text": "Taxable if over $250,000"
        }
      ],
      "explanation": "Lump-sum death benefit = income-tax-free."
    },
    "es": {
      "question": "El beneficio por muerte en suma global pagado por muerte es, para income tax:",
      "answers": [
        {
          "id": "s4q43-a1",
          "text": "Gravable en su totalidad"
        },
        {
          "id": "s4q43-a2",
          "text": "Generalmente libre de impuesto"
        },
        {
          "id": "s4q43-a3",
          "text": "Gravable al 50%"
        },
        {
          "id": "s4q43-a4",
          "text": "Gravable si excede $250,000"
        }
      ],
      "explanation": "beneficio por muerte lump sum = libre de income tax."
    },
    "correctAnswerId": "s4q43-a2"
  },
  {
    "id": "s4q44",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An agent who replaces a policy through misleading comparisons commits:",
      "answers": [
        {
          "id": "s4q44-a1",
          "text": "Churning"
        },
        {
          "id": "s4q44-a2",
          "text": "Twisting"
        },
        {
          "id": "s4q44-a3",
          "text": "Sliding"
        },
        {
          "id": "s4q44-a4",
          "text": "Field underwriting"
        }
      ],
      "explanation": "Replacement by deception = twisting."
    },
    "es": {
      "question": "Un agente que reemplaza una póliza mediante comparaciones engañosas comete:",
      "answers": [
        {
          "id": "s4q44-a1",
          "text": "Reemplazo abusivo"
        },
        {
          "id": "s4q44-a2",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s4q44-a3",
          "text": "Venta agregada no autorizada"
        },
        {
          "id": "s4q44-a4",
          "text": "Evaluación inicial de campo"
        }
      ],
      "explanation": "Reemplazo por engaño = inducción engañosa al reemplazo."
    },
    "correctAnswerId": "s4q44-a2"
  },
  {
    "id": "s4q45",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The producer who delivers a policy without having collected the premium must obtain, in addition to payment:",
      "answers": [
        {
          "id": "s4q45-a1",
          "text": "A court order"
        },
        {
          "id": "s4q45-a2",
          "text": "A statement of good health"
        },
        {
          "id": "s4q45-a3",
          "text": "The beneficiary’s signature"
        },
        {
          "id": "s4q45-a4",
          "text": "A new MIB exam"
        }
      ],
      "explanation": "At delivery: statement of good health (+ payment)."
    },
    "es": {
      "question": "El productor que entrega una póliza sin haber cobrado la prima debe obtener, además del pago:",
      "answers": [
        {
          "id": "s4q45-a1",
          "text": "Una orden judicial"
        },
        {
          "id": "s4q45-a2",
          "text": "Una declaración de buena salud"
        },
        {
          "id": "s4q45-a3",
          "text": "La firma del beneficiario"
        },
        {
          "id": "s4q45-a4",
          "text": "Un nuevo examen del MIB"
        }
      ],
      "explanation": "En la entrega: statement of good health (+ pago)."
    },
    "correctAnswerId": "s4q45-a2"
  },
  {
    "id": "s4q46",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which plan receives contributions only from the employer to the employees’ IRAs?",
      "answers": [
        {
          "id": "s4q46-a1",
          "text": "SIMPLE"
        },
        {
          "id": "s4q46-a2",
          "text": "SEP"
        },
        {
          "id": "s4q46-a3",
          "text": "401(k)"
        },
        {
          "id": "s4q46-a4",
          "text": "Roth IRA"
        }
      ],
      "explanation": "Only the employer contributes = SEP."
    },
    "es": {
      "question": "¿Qué plan recibe aportaciones solo del empleador a las IRA de los empleados?",
      "answers": [
        {
          "id": "s4q46-a1",
          "text": "SIMPLE"
        },
        {
          "id": "s4q46-a2",
          "text": "SEP"
        },
        {
          "id": "s4q46-a3",
          "text": "401(k)"
        },
        {
          "id": "s4q46-a4",
          "text": "Roth IRA"
        }
      ],
      "explanation": "Solo el empleador aporta = SEP."
    },
    "correctAnswerId": "s4q46-a2"
  },
  {
    "id": "s4q47",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "A contingent beneficiary collects the benefit:",
      "answers": [
        {
          "id": "s4q47-a1",
          "text": "Always, together with the primary"
        },
        {
          "id": "s4q47-a2",
          "text": "Only if the primary does not survive the insured"
        },
        {
          "id": "s4q47-a3",
          "text": "Never"
        },
        {
          "id": "s4q47-a4",
          "text": "Only if the primary authorizes it"
        }
      ],
      "explanation": "The contingent collects if the primary does not survive."
    },
    "es": {
      "question": "Un beneficiario contingente cobra el beneficio:",
      "answers": [
        {
          "id": "s4q47-a1",
          "text": "Siempre, junto con el primario"
        },
        {
          "id": "s4q47-a2",
          "text": "Solo si el primario no sobrevive al asegurado"
        },
        {
          "id": "s4q47-a3",
          "text": "Nunca"
        },
        {
          "id": "s4q47-a4",
          "text": "Solo si lo autoriza el primario"
        }
      ],
      "explanation": "El contingente cobra si el primario no sobrevive."
    },
    "correctAnswerId": "s4q47-a2"
  },
  {
    "id": "s4q48",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "Which contract characteristic implies an exchange of unequal values?",
      "answers": [
        {
          "id": "s4q48-a1",
          "text": "Unilateral"
        },
        {
          "id": "s4q48-a2",
          "text": "Aleatory"
        },
        {
          "id": "s4q48-a3",
          "text": "Adhesion"
        },
        {
          "id": "s4q48-a4",
          "text": "Conditional"
        }
      ],
      "explanation": "Unequal values = aleatory."
    },
    "es": {
      "question": "¿Qué característica del contrato implica un intercambio de valores desiguales?",
      "answers": [
        {
          "id": "s4q48-a1",
          "text": "Unilateral"
        },
        {
          "id": "s4q48-a2",
          "text": "Aleatorio"
        },
        {
          "id": "s4q48-a3",
          "text": "De adhesión"
        },
        {
          "id": "s4q48-a4",
          "text": "Condicional"
        }
      ],
      "explanation": "Valores desiguales = aleatorio."
    },
    "correctAnswerId": "s4q48-a2"
  },
  {
    "id": "s4q49",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "An agent represents a new insurer. To do so legally, they need:",
      "answers": [
        {
          "id": "s4q49-a1",
          "text": "Only their existing license"
        },
        {
          "id": "s4q49-a2",
          "text": "An appointment from that insurer"
        },
        {
          "id": "s4q49-a3",
          "text": "The client’s approval"
        },
        {
          "id": "s4q49-a4",
          "text": "A new state exam"
        }
      ],
      "explanation": "Needs an appointment from that insurer."
    },
    "es": {
      "question": "Un agente representa a una nueva aseguradora. Para hacerlo legalmente requiere:",
      "answers": [
        {
          "id": "s4q49-a1",
          "text": "Solo su licencia existente"
        },
        {
          "id": "s4q49-a2",
          "text": "Un appointment de esa aseguradora"
        },
        {
          "id": "s4q49-a3",
          "text": "Aprobación del cliente"
        },
        {
          "id": "s4q49-a4",
          "text": "Un nuevo examen estatal"
        }
      ],
      "explanation": "Requiere un appointment de esa aseguradora."
    },
    "correctAnswerId": "s4q49-a2"
  },
  {
    "id": "s4q50",
    "topic": "general",
    "simulator": 4,
    "en": {
      "question": "The TLHIGA limit for the present value of annuities is:",
      "answers": [
        {
          "id": "s4q50-a1",
          "text": "$100,000"
        },
        {
          "id": "s4q50-a2",
          "text": "$250,000"
        },
        {
          "id": "s4q50-a3",
          "text": "$300,000"
        },
        {
          "id": "s4q50-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA annuity = $250,000."
    },
    "es": {
      "question": "El límite de la TLHIGA para el valor presente de anualidades es:",
      "answers": [
        {
          "id": "s4q50-a1",
          "text": "$100,000"
        },
        {
          "id": "s4q50-a2",
          "text": "$250,000"
        },
        {
          "id": "s4q50-a3",
          "text": "$300,000"
        },
        {
          "id": "s4q50-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA anualidad = $250,000."
    },
    "correctAnswerId": "s4q50-a2"
  },
  {
    "id": "s5q1",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The risk that has only two outcomes — loss or no loss — and is insurable is called:",
      "answers": [
        {
          "id": "s5q1-a1",
          "text": "Speculative"
        },
        {
          "id": "s5q1-a2",
          "text": "Pure"
        },
        {
          "id": "s5q1-a3",
          "text": "Moral"
        },
        {
          "id": "s5q1-a4",
          "text": "Fortuitous"
        }
      ],
      "explanation": "Only loss or no loss = pure risk."
    },
    "es": {
      "question": "El riesgo que solo tiene dos resultados —pérdida o no pérdida— y es asegurable se llama:",
      "answers": [
        {
          "id": "s5q1-a1",
          "text": "Especulativo"
        },
        {
          "id": "s5q1-a2",
          "text": "Puro"
        },
        {
          "id": "s5q1-a3",
          "text": "Moral"
        },
        {
          "id": "s5q1-a4",
          "text": "Fortuito"
        }
      ],
      "explanation": "Solo pérdida o no pérdida = riesgo puro."
    },
    "correctAnswerId": "s5q1-a2"
  },
  {
    "id": "s5q2",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A flexible-premium deferred annuity (FPDA) is characterized by:",
      "answers": [
        {
          "id": "s5q2-a1",
          "text": "A single premium"
        },
        {
          "id": "s5q2-a2",
          "text": "Allowing multiple contributions during accumulation"
        },
        {
          "id": "s5q2-a3",
          "text": "Payments that begin in less than a year"
        },
        {
          "id": "s5q2-a4",
          "text": "Having no accumulation phase"
        }
      ],
      "explanation": "FPDA = multiple contributions during accumulation."
    },
    "es": {
      "question": "Una anualidad diferida de prima flexible (FPDA) se caracteriza por:",
      "answers": [
        {
          "id": "s5q2-a1",
          "text": "Una sola prima"
        },
        {
          "id": "s5q2-a2",
          "text": "Permitir múltiples aportaciones durante la acumulación"
        },
        {
          "id": "s5q2-a3",
          "text": "Pagos que inician en menos de un año"
        },
        {
          "id": "s5q2-a4",
          "text": "No tener fase de acumulación"
        }
      ],
      "explanation": "FPDA = múltiples aportaciones en la acumulación."
    },
    "correctAnswerId": "s5q2-a2"
  },
  {
    "id": "s5q3",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Which of the following is NOT covered by the Texas Guaranty Association?",
      "answers": [
        {
          "id": "s5q3-a1",
          "text": "The guaranteed death benefit"
        },
        {
          "id": "s5q3-a2",
          "text": "The guaranteed surrender value"
        },
        {
          "id": "s5q3-a3",
          "text": "The non-guaranteed portion of a variable annuity (separate account)"
        },
        {
          "id": "s5q3-a4",
          "text": "The present value of a fixed annuity"
        }
      ],
      "explanation": "The non-guaranteed portion (separate account) is not covered."
    },
    "es": {
      "question": "¿Cuál de los siguientes NO está cubierto por la Texas Guaranty Association?",
      "answers": [
        {
          "id": "s5q3-a1",
          "text": "El beneficio por muerte garantizado"
        },
        {
          "id": "s5q3-a2",
          "text": "El valor de rescate garantizado"
        },
        {
          "id": "s5q3-a3",
          "text": "La porción no garantizada de una anualidad variable (cuenta separada)"
        },
        {
          "id": "s5q3-a4",
          "text": "El valor presente de una anualidad fija"
        }
      ],
      "explanation": "La porción no garantizada (cuenta separada) no está cubierta."
    },
    "correctAnswerId": "s5q3-a3"
  },
  {
    "id": "s5q4",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A client wants their family to receive, if they die, the face amount plus all premiums paid. Best suited is the rider:",
      "answers": [
        {
          "id": "s5q4-a1",
          "text": "Waiver of premium"
        },
        {
          "id": "s5q4-a2",
          "text": "Return of premium"
        },
        {
          "id": "s5q4-a3",
          "text": "Accidental death"
        },
        {
          "id": "s5q4-a4",
          "text": "Guaranteed insurability"
        }
      ],
      "explanation": "DB + premiums paid = Return of Premium."
    },
    "es": {
      "question": "Un cliente quiere que, si muere, su familia reciba la suma asegurada más todas las primas pagadas. Le conviene el rider:",
      "answers": [
        {
          "id": "s5q4-a1",
          "text": "Exención de prima"
        },
        {
          "id": "s5q4-a2",
          "text": "Devolución de prima"
        },
        {
          "id": "s5q4-a3",
          "text": "Accidental death"
        },
        {
          "id": "s5q4-a4",
          "text": "Guaranteed insurability"
        }
      ],
      "explanation": "DB + primas pagadas = Return of prima."
    },
    "correctAnswerId": "s5q4-a2"
  },
  {
    "id": "s5q5",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Under the direct (trustee-to-trustee) transfer rule, the mandatory 20% withholding is:",
      "answers": [
        {
          "id": "s5q5-a1",
          "text": "Always applicable"
        },
        {
          "id": "s5q5-a2",
          "text": "Not applicable"
        },
        {
          "id": "s5q5-a3",
          "text": "10%"
        },
        {
          "id": "s5q5-a4",
          "text": "30%"
        }
      ],
      "explanation": "Direct transfer = no 20% withholding."
    },
    "es": {
      "question": "Bajo la regla de la transferencia directa (trustee-to-trustee), la retención obligatoria del 20% es:",
      "answers": [
        {
          "id": "s5q5-a1",
          "text": "Aplicable siempre"
        },
        {
          "id": "s5q5-a2",
          "text": "No aplicable"
        },
        {
          "id": "s5q5-a3",
          "text": "Del 10%"
        },
        {
          "id": "s5q5-a4",
          "text": "Del 30%"
        }
      ],
      "explanation": "Transferencia directa = sin retención del 20%."
    },
    "correctAnswerId": "s5q5-a2"
  },
  {
    "id": "s5q6",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A single-premium whole life policy will likely be classified as:",
      "answers": [
        {
          "id": "s5q6-a1",
          "text": "Convertible term"
        },
        {
          "id": "s5q6-a2",
          "text": "MEC"
        },
        {
          "id": "s5q6-a3",
          "text": "Pure endowment"
        },
        {
          "id": "s5q6-a4",
          "text": "Immediate annuity"
        }
      ],
      "explanation": "Single-premium WL is usually a MEC."
    },
    "es": {
      "question": "Una vida entera de prima única (single-prima) probablemente se clasifique como:",
      "answers": [
        {
          "id": "s5q6-a1",
          "text": "Término convertible"
        },
        {
          "id": "s5q6-a2",
          "text": "MEC"
        },
        {
          "id": "s5q6-a3",
          "text": "Endowment puro"
        },
        {
          "id": "s5q6-a4",
          "text": "Anualidad inmediata"
        }
      ],
      "explanation": "Single-prima WL suele ser MEC."
    },
    "correctAnswerId": "s5q6-a2"
  },
  {
    "id": "s5q7",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The agent must give the applicant, to compare policies, the:",
      "answers": [
        {
          "id": "s5q7-a1",
          "text": "Agent’s report"
        },
        {
          "id": "s5q7-a2",
          "text": "Buyer’s guide and policy summary"
        },
        {
          "id": "s5q7-a3",
          "text": "MIB"
        },
        {
          "id": "s5q7-a4",
          "text": "APS"
        }
      ],
      "explanation": "To compare: buyer’s guide + policy summary."
    },
    "es": {
      "question": "El agente debe entregar al solicitante, para que compare pólizas, el:",
      "answers": [
        {
          "id": "s5q7-a1",
          "text": "Agent’s report"
        },
        {
          "id": "s5q7-a2",
          "text": "Guía del comprador y resumen de la póliza"
        },
        {
          "id": "s5q7-a3",
          "text": "MIB"
        },
        {
          "id": "s5q7-a4",
          "text": "APS"
        }
      ],
      "explanation": "Para comparar: guía del comprador + resumen de la póliza."
    },
    "correctAnswerId": "s5q7-a2"
  },
  {
    "id": "s5q8",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A 68-year-old with a Roth IRA does not want to be forced to withdraw money. Must they take RMDs?",
      "answers": [
        {
          "id": "s5q8-a1",
          "text": "Yes, from age 65"
        },
        {
          "id": "s5q8-a2",
          "text": "Yes, from age 73"
        },
        {
          "id": "s5q8-a3",
          "text": "No, the Roth requires no lifetime RMDs"
        },
        {
          "id": "s5q8-a4",
          "text": "Only if it exceeds $100,000"
        }
      ],
      "explanation": "The Roth requires no lifetime RMDs."
    },
    "es": {
      "question": "Una persona de 68 años con una Roth IRA no quiere verse obligada a retirar dinero. ¿Debe tomar RMD?",
      "answers": [
        {
          "id": "s5q8-a1",
          "text": "Sí, desde los 65"
        },
        {
          "id": "s5q8-a2",
          "text": "Sí, desde los 73"
        },
        {
          "id": "s5q8-a3",
          "text": "No, la Roth no exige RMD durante la vida del titular"
        },
        {
          "id": "s5q8-a4",
          "text": "Solo si excede $100,000"
        }
      ],
      "explanation": "La Roth no exige RMD en vida."
    },
    "correctAnswerId": "s5q8-a3"
  },
  {
    "id": "s5q9",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Which settlement option lets the insurer retain the principal and pay only the interest?",
      "answers": [
        {
          "id": "s5q9-a1",
          "text": "Fixed period"
        },
        {
          "id": "s5q9-a2",
          "text": "Fixed amount"
        },
        {
          "id": "s5q9-a3",
          "text": "Interest only"
        },
        {
          "id": "s5q9-a4",
          "text": "Life income"
        }
      ],
      "explanation": "Retain principal and pay interest = interest only."
    },
    "es": {
      "question": "¿Qué opción de liquidación deja que la aseguradora retenga el capital y pague solo los intereses?",
      "answers": [
        {
          "id": "s5q9-a1",
          "text": "Periodo fijo"
        },
        {
          "id": "s5q9-a2",
          "text": "Monto fijo"
        },
        {
          "id": "s5q9-a3",
          "text": "Interest only"
        },
        {
          "id": "s5q9-a4",
          "text": "Ingreso de por vida"
        }
      ],
      "explanation": "Retener capital y pagar interés = interest only."
    },
    "correctAnswerId": "s5q9-a3"
  },
  {
    "id": "s5q10",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "An agent who collects a premium and deposits it into a personal account violates their duty of:",
      "answers": [
        {
          "id": "s5q10-a1",
          "text": "Suitability"
        },
        {
          "id": "s5q10-a2",
          "text": "Fiduciary (commingling)"
        },
        {
          "id": "s5q10-a3",
          "text": "Field underwriting"
        },
        {
          "id": "s5q10-a4",
          "text": "Disclosure"
        }
      ],
      "explanation": "Mixing premiums = fiduciary (commingling) violation."
    },
    "es": {
      "question": "Un agente que cobra una prima y la deposita en su cuenta personal viola su deber:",
      "answers": [
        {
          "id": "s5q10-a1",
          "text": "De idoneidad"
        },
        {
          "id": "s5q10-a2",
          "text": "Fiduciario (mezcla indebida de fondos)"
        },
        {
          "id": "s5q10-a3",
          "text": "De evaluación inicial de campo"
        },
        {
          "id": "s5q10-a4",
          "text": "De disclosure"
        }
      ],
      "explanation": "Mezclar primas = violación fiduciaria (mezcla indebida de fondos)."
    },
    "correctAnswerId": "s5q10-a2"
  },
  {
    "id": "s5q11",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "What is the age at which withdrawals of qualified retirement funds no longer carry the 10% penalty?",
      "answers": [
        {
          "id": "s5q11-a1",
          "text": "55"
        },
        {
          "id": "s5q11-a2",
          "text": "59½"
        },
        {
          "id": "s5q11-a3",
          "text": "65"
        },
        {
          "id": "s5q11-a4",
          "text": "73"
        }
      ],
      "explanation": "No 10% penalty from 59½."
    },
    "es": {
      "question": "¿Cuál es la edad a partir de la cual los retiros de fondos de retiro calificados ya no tienen la penalidad del 10%?",
      "answers": [
        {
          "id": "s5q11-a1",
          "text": "55"
        },
        {
          "id": "s5q11-a2",
          "text": "59½"
        },
        {
          "id": "s5q11-a3",
          "text": "65"
        },
        {
          "id": "s5q11-a4",
          "text": "73"
        }
      ],
      "explanation": "Sin penalidad del 10% a partir de 59½."
    },
    "correctAnswerId": "s5q11-a2"
  },
  {
    "id": "s5q12",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A policy whose death benefit equals the face amount plus the cash value is a Universal Life:",
      "answers": [
        {
          "id": "s5q12-a1",
          "text": "Option A"
        },
        {
          "id": "s5q12-a2",
          "text": "Option B"
        },
        {
          "id": "s5q12-a3",
          "text": "Indexed"
        },
        {
          "id": "s5q12-a4",
          "text": "Single-premium"
        }
      ],
      "explanation": "DB = face + cash value = Option B."
    },
    "es": {
      "question": "Una póliza con beneficio por muerte que equivale a la suma asegurada más el valor en efectivo es una Universal Life:",
      "answers": [
        {
          "id": "s5q12-a1",
          "text": "Opción A"
        },
        {
          "id": "s5q12-a2",
          "text": "Opción B"
        },
        {
          "id": "s5q12-a3",
          "text": "Indexada"
        },
        {
          "id": "s5q12-a4",
          "text": "De prima única"
        }
      ],
      "explanation": "DB = suma + valor en efectivo = Opción B."
    },
    "correctAnswerId": "s5q12-a2"
  },
  {
    "id": "s5q13",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The TDI may, for serious violations by an agent:",
      "answers": [
        {
          "id": "s5q13-a1",
          "text": "Only send a letter"
        },
        {
          "id": "s5q13-a2",
          "text": "Suspend or revoke the license, fine, and issue cease-and-desist orders"
        },
        {
          "id": "s5q13-a3",
          "text": "Nothing, it depends on the federal government"
        },
        {
          "id": "s5q13-a4",
          "text": "Cancel the client’s policy"
        }
      ],
      "explanation": "The TDI may suspend/revoke, fine, and cease."
    },
    "es": {
      "question": "El TDI puede, ante violaciones graves de un agente:",
      "answers": [
        {
          "id": "s5q13-a1",
          "text": "Solo enviar una carta"
        },
        {
          "id": "s5q13-a2",
          "text": "Suspender o revocar la licencia, multar y emitir órdenes de cese"
        },
        {
          "id": "s5q13-a3",
          "text": "Nada, depende del gobierno federal"
        },
        {
          "id": "s5q13-a4",
          "text": "Cancelar la póliza del cliente"
        }
      ],
      "explanation": "El TDI puede suspender/revocar, multar y cesar."
    },
    "correctAnswerId": "s5q13-a2"
  },
  {
    "id": "s5q14",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "An insured incorrectly states their sex and pays an insufficient premium. When paying, the insurer:",
      "answers": [
        {
          "id": "s5q14-a1",
          "text": "Voids the policy"
        },
        {
          "id": "s5q14-a2",
          "text": "Adjusts the benefit to what the premium would have bought"
        },
        {
          "id": "s5q14-a3",
          "text": "Pays double"
        },
        {
          "id": "s5q14-a4",
          "text": "Refunds the premiums"
        }
      ],
      "explanation": "Misstatement (age/sex) → adjust the benefit."
    },
    "es": {
      "question": "Un asegurado declara incorrectamente su sexo y paga prima insuficiente. La aseguradora, al pagar:",
      "answers": [
        {
          "id": "s5q14-a1",
          "text": "Anula la póliza"
        },
        {
          "id": "s5q14-a2",
          "text": "Ajusta el beneficio según lo que la prima habría comprado"
        },
        {
          "id": "s5q14-a3",
          "text": "Paga el doble"
        },
        {
          "id": "s5q14-a4",
          "text": "Devuelve las primas"
        }
      ],
      "explanation": "Misstatement (edad/sexo) → ajustan el beneficio."
    },
    "correctAnswerId": "s5q14-a2"
  },
  {
    "id": "s5q15",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Which type of retirement plan is for government employees who defer compensation?",
      "answers": [
        {
          "id": "s5q15-a1",
          "text": "403(b)"
        },
        {
          "id": "s5q15-a2",
          "text": "457(b)"
        },
        {
          "id": "s5q15-a3",
          "text": "SEP"
        },
        {
          "id": "s5q15-a4",
          "text": "Keogh"
        }
      ],
      "explanation": "Government employees = 457(b)."
    },
    "es": {
      "question": "¿Qué tipo de plan de retiro es para empleados gubernamentales que difieren compensación?",
      "answers": [
        {
          "id": "s5q15-a1",
          "text": "403(b)"
        },
        {
          "id": "s5q15-a2",
          "text": "457(b)"
        },
        {
          "id": "s5q15-a3",
          "text": "SEP"
        },
        {
          "id": "s5q15-a4",
          "text": "Keogh"
        }
      ],
      "explanation": "Empleados gubernamentales = 457(b)."
    },
    "correctAnswerId": "s5q15-a2"
  },
  {
    "id": "s5q16",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The producer who gathers information, observes the applicant, and verifies accuracy before submitting the application performs:",
      "answers": [
        {
          "id": "s5q16-a1",
          "text": "Adverse selection"
        },
        {
          "id": "s5q16-a2",
          "text": "Field underwriting"
        },
        {
          "id": "s5q16-a3",
          "text": "Commingling"
        },
        {
          "id": "s5q16-a4",
          "text": "Rebating"
        }
      ],
      "explanation": "Gathering/verifying info = field underwriting."
    },
    "es": {
      "question": "El productor que reúne información, observa al solicitante y verifica exactitud antes de enviar la solicitud realiza:",
      "answers": [
        {
          "id": "s5q16-a1",
          "text": "Adverse selection"
        },
        {
          "id": "s5q16-a2",
          "text": "Evaluación inicial de campo"
        },
        {
          "id": "s5q16-a3",
          "text": "Rebaja indebida"
        },
        {
          "id": "s5q16-a4",
          "text": "Inducción engañosa al reemplazo"
        }
      ],
      "explanation": "Reunir/verificar info = evaluación inicial de campo."
    },
    "correctAnswerId": "s5q16-a2"
  },
  {
    "id": "s5q17",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Which is the annuity payout option with the highest periodic income?",
      "answers": [
        {
          "id": "s5q17-a1",
          "text": "Joint and survivor"
        },
        {
          "id": "s5q17-a2",
          "text": "Life with period certain"
        },
        {
          "id": "s5q17-a3",
          "text": "Life only (straight life)"
        },
        {
          "id": "s5q17-a4",
          "text": "Cash refund"
        }
      ],
      "explanation": "Life only pays the highest income."
    },
    "es": {
      "question": "¿Cuál es la opción de pago de anualidad con el ingreso periódico más alto?",
      "answers": [
        {
          "id": "s5q17-a1",
          "text": "Conjunto y sobreviviente"
        },
        {
          "id": "s5q17-a2",
          "text": "Vida con periodo cierto"
        },
        {
          "id": "s5q17-a3",
          "text": "Solo vida (vida directa)"
        },
        {
          "id": "s5q17-a4",
          "text": "Reembolso en efectivo"
        }
      ],
      "explanation": "Life only paga el ingreso más alto."
    },
    "correctAnswerId": "s5q17-a3"
  },
  {
    "id": "s5q18",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The period during which the owner may return a new policy and receive a full refund is called:",
      "answers": [
        {
          "id": "s5q18-a1",
          "text": "Grace period"
        },
        {
          "id": "s5q18-a2",
          "text": "Free look"
        },
        {
          "id": "s5q18-a3",
          "text": "Contestable period"
        },
        {
          "id": "s5q18-a4",
          "text": "Elimination period"
        }
      ],
      "explanation": "Return with full refund = free look."
    },
    "es": {
      "question": "El periodo durante el cual el dueño puede devolver una póliza nueva y recibir reembolso total se llama:",
      "answers": [
        {
          "id": "s5q18-a1",
          "text": "Periodo de gracia"
        },
        {
          "id": "s5q18-a2",
          "text": "Periodo de revisión gratuita"
        },
        {
          "id": "s5q18-a3",
          "text": "Contestable period"
        },
        {
          "id": "s5q18-a4",
          "text": "Elimination period"
        }
      ],
      "explanation": "Devolución con reembolso total = periodo de revisión gratuita."
    },
    "correctAnswerId": "s5q18-a2"
  },
  {
    "id": "s5q19",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The premiums of a personal life insurance policy are:",
      "answers": [
        {
          "id": "s5q19-a1",
          "text": "Tax-deductible"
        },
        {
          "id": "s5q19-a2",
          "text": "Not deductible"
        },
        {
          "id": "s5q19-a3",
          "text": "Deductible after age 65"
        },
        {
          "id": "s5q19-a4",
          "text": "Partially deductible"
        }
      ],
      "explanation": "Personal premiums = not deductible."
    },
    "es": {
      "question": "Las primas de un seguro de vida personal son:",
      "answers": [
        {
          "id": "s5q19-a1",
          "text": "Deducibles de impuestos"
        },
        {
          "id": "s5q19-a2",
          "text": "No deducibles"
        },
        {
          "id": "s5q19-a3",
          "text": "Deducibles después de los 65"
        },
        {
          "id": "s5q19-a4",
          "text": "Parcialmente deducibles"
        }
      ],
      "explanation": "Primas personales = no deducibles."
    },
    "correctAnswerId": "s5q19-a2"
  },
  {
    "id": "s5q20",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "In a non-qualified annuity, the portion of each annuitized payment that represents the return of basis is:",
      "answers": [
        {
          "id": "s5q20-a1",
          "text": "Taxable"
        },
        {
          "id": "s5q20-a2",
          "text": "Non-taxable"
        },
        {
          "id": "s5q20-a3",
          "text": "Penalized"
        },
        {
          "id": "s5q20-a4",
          "text": "Deductible"
        }
      ],
      "explanation": "The return of basis = nontaxable."
    },
    "es": {
      "question": "En una anualidad no calificada, la porción de cada pago anualizado que representa el retorno de la base es:",
      "answers": [
        {
          "id": "s5q20-a1",
          "text": "Gravable"
        },
        {
          "id": "s5q20-a2",
          "text": "No gravable"
        },
        {
          "id": "s5q20-a3",
          "text": "Penalizada"
        },
        {
          "id": "s5q20-a4",
          "text": "Deducible"
        }
      ],
      "explanation": "El retorno de la base = no gravable."
    },
    "correctAnswerId": "s5q20-a2"
  },
  {
    "id": "s5q21",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "An irrevocable beneficiary has a right that is:",
      "answers": [
        {
          "id": "s5q21-a1",
          "text": "A mere expectancy"
        },
        {
          "id": "s5q21-a2",
          "text": "Vested"
        },
        {
          "id": "s5q21-a3",
          "text": "Nonexistent"
        },
        {
          "id": "s5q21-a4",
          "text": "That the owner can ignore"
        }
      ],
      "explanation": "The irrevocable beneficiary has a vested right."
    },
    "es": {
      "question": "Un beneficiario irrevocable tiene un derecho:",
      "answers": [
        {
          "id": "s5q21-a1",
          "text": "De mera expectativa"
        },
        {
          "id": "s5q21-a2",
          "text": "Adquirido (vested)"
        },
        {
          "id": "s5q21-a3",
          "text": "Inexistente"
        },
        {
          "id": "s5q21-a4",
          "text": "Que el dueño puede ignorar"
        }
      ],
      "explanation": "El irrevocable tiene derecho vested."
    },
    "correctAnswerId": "s5q21-a2"
  },
  {
    "id": "s5q22",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The Texas law that automatically revokes an ex-spouse as beneficiary after a divorce is:",
      "answers": [
        {
          "id": "s5q22-a1",
          "text": "The spendthrift clause"
        },
        {
          "id": "s5q22-a2",
          "text": "The Divorce Revocation Statute (Family Code §9.301)"
        },
        {
          "id": "s5q22-a3",
          "text": "The incontestability clause"
        },
        {
          "id": "s5q22-a4",
          "text": "The 3-year rule"
        }
      ],
      "explanation": "Divorce Revocation §9.301."
    },
    "es": {
      "question": "La ley de Texas que revoca automáticamente al excónyuge como beneficiario tras un divorcio es:",
      "answers": [
        {
          "id": "s5q22-a1",
          "text": "La cláusula spendthrift"
        },
        {
          "id": "s5q22-a2",
          "text": "El Divorce Revocation Statute (Family Code §9.301)"
        },
        {
          "id": "s5q22-a3",
          "text": "La cláusula de incontestabilidad"
        },
        {
          "id": "s5q22-a4",
          "text": "La regla de los 3 años"
        }
      ],
      "explanation": "Divorce Revocation §9.301."
    },
    "correctAnswerId": "s5q22-a2"
  },
  {
    "id": "s5q23",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "An insurer publishes false financial statements. This is a practice that is:",
      "answers": [
        {
          "id": "s5q23-a1",
          "text": "Permitted"
        },
        {
          "id": "s5q23-a2",
          "text": "An unfair trade practice (prohibited)"
        },
        {
          "id": "s5q23-a3",
          "text": "Suitability"
        },
        {
          "id": "s5q23-a4",
          "text": "Field underwriting"
        }
      ],
      "explanation": "False financial statements = a prohibited unfair practice."
    },
    "es": {
      "question": "Una aseguradora difunde estados financieros falsos. Esto es una práctica:",
      "answers": [
        {
          "id": "s5q23-a1",
          "text": "Permitida"
        },
        {
          "id": "s5q23-a2",
          "text": "Comercial injusta (prohibida)"
        },
        {
          "id": "s5q23-a3",
          "text": "De idoneidad"
        },
        {
          "id": "s5q23-a4",
          "text": "De evaluación inicial de campo"
        }
      ],
      "explanation": "Estados financieros falsos = práctica injusta prohibida."
    },
    "correctAnswerId": "s5q23-a2"
  },
  {
    "id": "s5q24",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A person wants to participate in a stock index with a floor that protects them from losses. Best suited is a(n) ______ annuity:",
      "answers": [
        {
          "id": "s5q24-a1",
          "text": "Variable"
        },
        {
          "id": "s5q24-a2",
          "text": "Indexed"
        },
        {
          "id": "s5q24-a3",
          "text": "Variable immediate"
        },
        {
          "id": "s5q24-a4",
          "text": "Variable flexible-premium"
        }
      ],
      "explanation": "Index with a floor = indexed."
    },
    "es": {
      "question": "Una persona quiere participar de un índice bursátil con un piso que la proteja de pérdidas. Le conviene una anualidad:",
      "answers": [
        {
          "id": "s5q24-a1",
          "text": "Variable"
        },
        {
          "id": "s5q24-a2",
          "text": "Indexada"
        },
        {
          "id": "s5q24-a3",
          "text": "Variable inmediata"
        },
        {
          "id": "s5q24-a4",
          "text": "De prima flexible variable"
        }
      ],
      "explanation": "Índice con piso = indexada."
    },
    "correctAnswerId": "s5q24-a2"
  },
  {
    "id": "s5q25",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "How many years, typically, is the period within which a lapsed policy can be reinstated under the standard provision?",
      "answers": [
        {
          "id": "s5q25-a1",
          "text": "1 year"
        },
        {
          "id": "s5q25-a2",
          "text": "3 years (in Texas often up to 5)"
        },
        {
          "id": "s5q25-a3",
          "text": "10 years"
        },
        {
          "id": "s5q25-a4",
          "text": "Indefinitely"
        }
      ],
      "explanation": "Standard reinstatement ~3 years (TX up to 5)."
    },
    "es": {
      "question": "¿Cuántos años, típicamente, dura el periodo dentro del cual una póliza caducada puede reactivarse bajo la provisión estándar?",
      "answers": [
        {
          "id": "s5q25-a1",
          "text": "1 año"
        },
        {
          "id": "s5q25-a2",
          "text": "3 años (en Texas a menudo hasta 5)"
        },
        {
          "id": "s5q25-a3",
          "text": "10 años"
        },
        {
          "id": "s5q25-a4",
          "text": "Indefinidamente"
        }
      ],
      "explanation": "Reinstatement estándar ~3 años (TX hasta 5)."
    },
    "correctAnswerId": "s5q25-a2"
  },
  {
    "id": "s5q26",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The death benefit is included in the insured’s estate for estate tax if the insured:",
      "answers": [
        {
          "id": "s5q26-a1",
          "text": "Lived in Texas"
        },
        {
          "id": "s5q26-a2",
          "text": "Had incidents of ownership at death"
        },
        {
          "id": "s5q26-a3",
          "text": "Paid monthly premiums"
        },
        {
          "id": "s5q26-a4",
          "text": "Was under 60"
        }
      ],
      "explanation": "Included in the estate if they had incidents of ownership."
    },
    "es": {
      "question": "El beneficio por muerte entra al patrimonio del asegurado para estate tax si este:",
      "answers": [
        {
          "id": "s5q26-a1",
          "text": "Vivía en Texas"
        },
        {
          "id": "s5q26-a2",
          "text": "Tenía incidents of ownership al morir"
        },
        {
          "id": "s5q26-a3",
          "text": "Pagó primas mensuales"
        },
        {
          "id": "s5q26-a4",
          "text": "Tenía menos de 60 años"
        }
      ],
      "explanation": "Entra al estate si tenía incidents of ownership."
    },
    "correctAnswerId": "s5q26-a2"
  },
  {
    "id": "s5q27",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Which plan allows an 80-employee company for both employee and employer to contribute?",
      "answers": [
        {
          "id": "s5q27-a1",
          "text": "SEP IRA"
        },
        {
          "id": "s5q27-a2",
          "text": "SIMPLE IRA"
        },
        {
          "id": "s5q27-a3",
          "text": "Keogh"
        },
        {
          "id": "s5q27-a4",
          "text": "DB pension"
        }
      ],
      "explanation": "Employee + employer, small company = SIMPLE IRA."
    },
    "es": {
      "question": "¿Qué plan permite a una empresa de 80 empleados que tanto el empleado como el patrón aporten?",
      "answers": [
        {
          "id": "s5q27-a1",
          "text": "SEP IRA"
        },
        {
          "id": "s5q27-a2",
          "text": "SIMPLE IRA"
        },
        {
          "id": "s5q27-a3",
          "text": "Keogh"
        },
        {
          "id": "s5q27-a4",
          "text": "Pensión DB"
        }
      ],
      "explanation": "Empleado + patrón, empresa chica = SIMPLE IRA."
    },
    "correctAnswerId": "s5q27-a2"
  },
  {
    "id": "s5q28",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The clause that pays the benefit minus the overdue premium if the insured dies with a recent unpaid premium is the:",
      "answers": [
        {
          "id": "s5q28-a1",
          "text": "Free look"
        },
        {
          "id": "s5q28-a2",
          "text": "Grace period"
        },
        {
          "id": "s5q28-a3",
          "text": "Contestable period"
        },
        {
          "id": "s5q28-a4",
          "text": "Reinstatement"
        }
      ],
      "explanation": "Paying the DB minus the overdue premium = grace period."
    },
    "es": {
      "question": "La cláusula que paga el beneficio menos la prima vencida si el asegurado muere con una prima impaga reciente es el:",
      "answers": [
        {
          "id": "s5q28-a1",
          "text": "Periodo de revisión gratuita"
        },
        {
          "id": "s5q28-a2",
          "text": "Periodo de gracia"
        },
        {
          "id": "s5q28-a3",
          "text": "Periodo contestable"
        },
        {
          "id": "s5q28-a4",
          "text": "Rehabilitación de la póliza"
        }
      ],
      "explanation": "Pagar el DB menos la prima vencida = periodo de gracia."
    },
    "correctAnswerId": "s5q28-a2"
  },
  {
    "id": "s5q29",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "An agent legally represents the ______ even though they owe the client honesty and suitability:",
      "answers": [
        {
          "id": "s5q29-a1",
          "text": "Insurer"
        },
        {
          "id": "s5q29-a2",
          "text": "Client’s family"
        },
        {
          "id": "s5q29-a3",
          "text": "NAIC"
        },
        {
          "id": "s5q29-a4",
          "text": "SEC"
        }
      ],
      "explanation": "The agent represents the insurer."
    },
    "es": {
      "question": "Un agente representa a la ___ aunque le deba honestidad e idoneidad al cliente:",
      "answers": [
        {
          "id": "s5q29-a1",
          "text": "Aseguradora"
        },
        {
          "id": "s5q29-a2",
          "text": "Familia del cliente"
        },
        {
          "id": "s5q29-a3",
          "text": "NAIC"
        },
        {
          "id": "s5q29-a4",
          "text": "SEC"
        }
      ],
      "explanation": "El agente representa a la aseguradora."
    },
    "correctAnswerId": "s5q29-a1"
  },
  {
    "id": "s5q30",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "To sell a variable annuity, one is required to have:",
      "answers": [
        {
          "id": "s5q30-a1",
          "text": "A life license only"
        },
        {
          "id": "s5q30-a2",
          "text": "A life license plus a securities registration"
        },
        {
          "id": "s5q30-a3",
          "text": "A health license only"
        },
        {
          "id": "s5q30-a4",
          "text": "No license"
        }
      ],
      "explanation": "Variable = life license + securities."
    },
    "es": {
      "question": "Para vender una anualidad variable se requiere:",
      "answers": [
        {
          "id": "s5q30-a1",
          "text": "Solo licencia de vida"
        },
        {
          "id": "s5q30-a2",
          "text": "Licencia de vida más registro de valores"
        },
        {
          "id": "s5q30-a3",
          "text": "Solo licencia de salud"
        },
        {
          "id": "s5q30-a4",
          "text": "Ninguna licencia"
        }
      ],
      "explanation": "Variable = licencia de vida + valores."
    },
    "correctAnswerId": "s5q30-a2"
  },
  {
    "id": "s5q31",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The suicide clause in Texas, within the exclusion period, causes the insurer to:",
      "answers": [
        {
          "id": "s5q31-a1",
          "text": "Pay the full benefit"
        },
        {
          "id": "s5q31-a2",
          "text": "Refund the premiums paid"
        },
        {
          "id": "s5q31-a3",
          "text": "Do nothing"
        },
        {
          "id": "s5q31-a4",
          "text": "Pay double"
        }
      ],
      "explanation": "Suicide within the period → refunds premiums."
    },
    "es": {
      "question": "La cláusula de suicidio en Texas, dentro del periodo de exclusión, hace que la aseguradora:",
      "answers": [
        {
          "id": "s5q31-a1",
          "text": "Pague el beneficio completo"
        },
        {
          "id": "s5q31-a2",
          "text": "Devuelva las primas pagadas"
        },
        {
          "id": "s5q31-a3",
          "text": "No haga nada"
        },
        {
          "id": "s5q31-a4",
          "text": "Pague el doble"
        }
      ],
      "explanation": "Suicidio en el periodo → devuelve primas."
    },
    "correctAnswerId": "s5q31-a2"
  },
  {
    "id": "s5q32",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "What is taxed in a qualified plan upon distribution?",
      "answers": [
        {
          "id": "s5q32-a1",
          "text": "Only the gain"
        },
        {
          "id": "s5q32-a2",
          "text": "The entire amount"
        },
        {
          "id": "s5q32-a3",
          "text": "Nothing"
        },
        {
          "id": "s5q32-a4",
          "text": "Only the basis"
        }
      ],
      "explanation": "Qualified plan: taxable in its entirety."
    },
    "es": {
      "question": "¿Qué se grava en un plan calificado al distribuirse?",
      "answers": [
        {
          "id": "s5q32-a1",
          "text": "Solo la ganancia"
        },
        {
          "id": "s5q32-a2",
          "text": "La totalidad"
        },
        {
          "id": "s5q32-a3",
          "text": "Nada"
        },
        {
          "id": "s5q32-a4",
          "text": "Solo la base"
        }
      ],
      "explanation": "Plan calificado: gravable en su totalidad."
    },
    "correctAnswerId": "s5q32-a2"
  },
  {
    "id": "s5q33",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A “per stirpes” designation causes a predeceased beneficiary’s share to:",
      "answers": [
        {
          "id": "s5q33-a1",
          "text": "Be divided among the survivors"
        },
        {
          "id": "s5q33-a2",
          "text": "Pass to their descendants"
        },
        {
          "id": "s5q33-a3",
          "text": "Go to the insured’s estate"
        },
        {
          "id": "s5q33-a4",
          "text": "Be lost"
        }
      ],
      "explanation": "Per stirpes: passes to descendants."
    },
    "es": {
      "question": "Una designación “per stirpes” hace que la porción de un beneficiario premuerto:",
      "answers": [
        {
          "id": "s5q33-a1",
          "text": "Se reparta entre los sobrevivientes"
        },
        {
          "id": "s5q33-a2",
          "text": "Baje a sus descendientes"
        },
        {
          "id": "s5q33-a3",
          "text": "Vaya al estate del asegurado"
        },
        {
          "id": "s5q33-a4",
          "text": "Se pierda"
        }
      ],
      "explanation": "Per stirpes: baja a los descendientes."
    },
    "correctAnswerId": "s5q33-a2"
  },
  {
    "id": "s5q34",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The TLHIGA coverage limit for health (major medical) is:",
      "answers": [
        {
          "id": "s5q34-a1",
          "text": "$100,000"
        },
        {
          "id": "s5q34-a2",
          "text": "$250,000"
        },
        {
          "id": "s5q34-a3",
          "text": "$300,000"
        },
        {
          "id": "s5q34-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA health = $500,000."
    },
    "es": {
      "question": "El límite de cobertura de la TLHIGA para salud (médico mayor) es:",
      "answers": [
        {
          "id": "s5q34-a1",
          "text": "$100,000"
        },
        {
          "id": "s5q34-a2",
          "text": "$250,000"
        },
        {
          "id": "s5q34-a3",
          "text": "$300,000"
        },
        {
          "id": "s5q34-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA salud = $500,000."
    },
    "correctAnswerId": "s5q34-a4"
  },
  {
    "id": "s5q35",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The rider that allows collecting part of the benefit while alive due to terminal illness, reducing the final amount, is:",
      "answers": [
        {
          "id": "s5q35-a1",
          "text": "Accidental Death Benefit"
        },
        {
          "id": "s5q35-a2",
          "text": "Accelerated Death Benefit"
        },
        {
          "id": "s5q35-a3",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s5q35-a4",
          "text": "Waiver of Premium"
        }
      ],
      "explanation": "Collect while alive for terminal illness = Accelerated Death Benefit."
    },
    "es": {
      "question": "El rider que permite cobrar parte del beneficio en vida ante enfermedad terminal, reduciendo el monto final, es:",
      "answers": [
        {
          "id": "s5q35-a1",
          "text": "Beneficio por muerte accidental"
        },
        {
          "id": "s5q35-a2",
          "text": "Beneficio acelerado por muerte"
        },
        {
          "id": "s5q35-a3",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s5q35-a4",
          "text": "Exención de prima"
        }
      ],
      "explanation": "Cobrar en vida por terminal = beneficio acelerado por muerte."
    },
    "correctAnswerId": "s5q35-a2"
  },
  {
    "id": "s5q36",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Who assumes the investment risk in a fixed annuity?",
      "answers": [
        {
          "id": "s5q36-a1",
          "text": "The owner"
        },
        {
          "id": "s5q36-a2",
          "text": "The insurer"
        },
        {
          "id": "s5q36-a3",
          "text": "The government"
        },
        {
          "id": "s5q36-a4",
          "text": "The beneficiary"
        }
      ],
      "explanation": "In a fixed annuity, the risk is on the insurer."
    },
    "es": {
      "question": "¿Quién asume el riesgo de inversión en una anualidad fija?",
      "answers": [
        {
          "id": "s5q36-a1",
          "text": "El dueño"
        },
        {
          "id": "s5q36-a2",
          "text": "La aseguradora"
        },
        {
          "id": "s5q36-a3",
          "text": "El gobierno"
        },
        {
          "id": "s5q36-a4",
          "text": "El beneficiario"
        }
      ],
      "explanation": "En la fija, el riesgo es de la aseguradora."
    },
    "correctAnswerId": "s5q36-a2"
  },
  {
    "id": "s5q37",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "An applicant with a better-than-average risk, with excellent health and habits, is classified as:",
      "answers": [
        {
          "id": "s5q37-a1",
          "text": "Standard"
        },
        {
          "id": "s5q37-a2",
          "text": "Preferred"
        },
        {
          "id": "s5q37-a3",
          "text": "Substandard"
        },
        {
          "id": "s5q37-a4",
          "text": "Declined"
        }
      ],
      "explanation": "Better-than-average risk = preferred."
    },
    "es": {
      "question": "Un solicitante con riesgo mejor que el promedio, con salud y hábitos excelentes, se clasifica como:",
      "answers": [
        {
          "id": "s5q37-a1",
          "text": "Standard"
        },
        {
          "id": "s5q37-a2",
          "text": "Preferred"
        },
        {
          "id": "s5q37-a3",
          "text": "Substandard"
        },
        {
          "id": "s5q37-a4",
          "text": "Declined"
        }
      ],
      "explanation": "Riesgo mejor que el promedio = preferred."
    },
    "correctAnswerId": "s5q37-a2"
  },
  {
    "id": "s5q38",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Which practice consists of replacing policies using their accumulated values solely to generate commissions?",
      "answers": [
        {
          "id": "s5q38-a1",
          "text": "Twisting"
        },
        {
          "id": "s5q38-a2",
          "text": "Churning"
        },
        {
          "id": "s5q38-a3",
          "text": "Sliding"
        },
        {
          "id": "s5q38-a4",
          "text": "Rebating"
        }
      ],
      "explanation": "Replacing with existing values for commission = churning."
    },
    "es": {
      "question": "¿Qué práctica consiste en reemplazar pólizas usando sus valores acumulados solo para generar comisiones?",
      "answers": [
        {
          "id": "s5q38-a1",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s5q38-a2",
          "text": "Reemplazo abusivo"
        },
        {
          "id": "s5q38-a3",
          "text": "Venta agregada no autorizada"
        },
        {
          "id": "s5q38-a4",
          "text": "Rebaja indebida"
        }
      ],
      "explanation": "Reemplazar con valores existentes por comisión = reemplazo abusivo."
    },
    "correctAnswerId": "s5q38-a2"
  },
  {
    "id": "s5q39",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Under the “entire contract” clause, the complete contract is formed by:",
      "answers": [
        {
          "id": "s5q39-a1",
          "text": "Only the policy"
        },
        {
          "id": "s5q39-a2",
          "text": "The policy plus the attached application"
        },
        {
          "id": "s5q39-a3",
          "text": "The policy plus the buyer’s guide"
        },
        {
          "id": "s5q39-a4",
          "text": "Only the application"
        }
      ],
      "explanation": "Entire contract = policy + attached application."
    },
    "es": {
      "question": "Bajo la cláusula “entire contract”, el contrato completo lo forman:",
      "answers": [
        {
          "id": "s5q39-a1",
          "text": "Solo la póliza"
        },
        {
          "id": "s5q39-a2",
          "text": "La póliza más la solicitud adjunta"
        },
        {
          "id": "s5q39-a3",
          "text": "La póliza más el guía del comprador"
        },
        {
          "id": "s5q39-a4",
          "text": "Solo la solicitud"
        }
      ],
      "explanation": "Entire contract = póliza + solicitud adjunta."
    },
    "correctAnswerId": "s5q39-a2"
  },
  {
    "id": "s5q40",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The mandatory course a Texas agent must take before selling annuities lasts:",
      "answers": [
        {
          "id": "s5q40-a1",
          "text": "24 hours"
        },
        {
          "id": "s5q40-a2",
          "text": "4 hours (Best Interest)"
        },
        {
          "id": "s5q40-a3",
          "text": "8 hours of ethics"
        },
        {
          "id": "s5q40-a4",
          "text": "3 hours of flood"
        }
      ],
      "explanation": "Best Interest, 4-hour course."
    },
    "es": {
      "question": "El curso obligatorio que un agente de Texas debe tomar antes de vender anualidades dura:",
      "answers": [
        {
          "id": "s5q40-a1",
          "text": "24 horas"
        },
        {
          "id": "s5q40-a2",
          "text": "4 horas de mejor interés"
        },
        {
          "id": "s5q40-a3",
          "text": "8 horas de ética"
        },
        {
          "id": "s5q40-a4",
          "text": "3 horas de flood"
        }
      ],
      "explanation": "Curso mejor interés de 4 horas."
    },
    "correctAnswerId": "s5q40-a2"
  },
  {
    "id": "s5q41",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "Which type of life insurance does NOT accumulate cash value?",
      "answers": [
        {
          "id": "s5q41-a1",
          "text": "Whole life"
        },
        {
          "id": "s5q41-a2",
          "text": "Universal life"
        },
        {
          "id": "s5q41-a3",
          "text": "Term life"
        },
        {
          "id": "s5q41-a4",
          "text": "Variable life"
        }
      ],
      "explanation": "Term life does not accumulate cash value."
    },
    "es": {
      "question": "¿Qué tipo de seguro de vida no acumula valor en efectivo?",
      "answers": [
        {
          "id": "s5q41-a1",
          "text": "Vida entera"
        },
        {
          "id": "s5q41-a2",
          "text": "Vida universal"
        },
        {
          "id": "s5q41-a3",
          "text": "Vida temporal"
        },
        {
          "id": "s5q41-a4",
          "text": "Vida variable"
        }
      ],
      "explanation": "El vida temporal no acumula valor en efectivo."
    },
    "correctAnswerId": "s5q41-a3"
  },
  {
    "id": "s5q42",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "An insurer takes an adverse action based on a consumer report. Under the FCRA it must:",
      "answers": [
        {
          "id": "s5q42-a1",
          "text": "Conceal the source"
        },
        {
          "id": "s5q42-a2",
          "text": "Notify the applicant and disclose the agency"
        },
        {
          "id": "s5q42-a3",
          "text": "Pay a fine"
        },
        {
          "id": "s5q42-a4",
          "text": "Cancel the policy"
        }
      ],
      "explanation": "FCRA: notify and disclose the agency."
    },
    "es": {
      "question": "Una aseguradora toma una acción adversa por un consumer report. Bajo la FCRA debe:",
      "answers": [
        {
          "id": "s5q42-a1",
          "text": "Ocultar la fuente"
        },
        {
          "id": "s5q42-a2",
          "text": "Notificar al solicitante y revelar la agencia"
        },
        {
          "id": "s5q42-a3",
          "text": "Pagar una multa"
        },
        {
          "id": "s5q42-a4",
          "text": "Cancelar la póliza"
        }
      ],
      "explanation": "FCRA: notificar y revelar la agencia."
    },
    "correctAnswerId": "s5q42-a2"
  },
  {
    "id": "s5q43",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The concept “MIG” (mortality up, interest down, expenses up) describes the factors of:",
      "answers": [
        {
          "id": "s5q43-a1",
          "text": "Premium calculation"
        },
        {
          "id": "s5q43-a2",
          "text": "Settlement options"
        },
        {
          "id": "s5q43-a3",
          "text": "Medical underwriting"
        },
        {
          "id": "s5q43-a4",
          "text": "Insurer classification"
        }
      ],
      "explanation": "MIG = factors of the premium."
    },
    "es": {
      "question": "El concepto “MIG” (mortalidad sube, interés baja, gastos suben) describe los factores de:",
      "answers": [
        {
          "id": "s5q43-a1",
          "text": "El cálculo de la prima"
        },
        {
          "id": "s5q43-a2",
          "text": "Las opciones de liquidación"
        },
        {
          "id": "s5q43-a3",
          "text": "La evaluación médica de riesgo"
        },
        {
          "id": "s5q43-a4",
          "text": "La clasificación de aseguradoras"
        }
      ],
      "explanation": "MIG = factores de la prima."
    },
    "correctAnswerId": "s5q43-a1"
  },
  {
    "id": "s5q44",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "In 2026, the additional catch-up for an IRA (50+) is:",
      "answers": [
        {
          "id": "s5q44-a1",
          "text": "$500"
        },
        {
          "id": "s5q44-a2",
          "text": "$1,000"
        },
        {
          "id": "s5q44-a3",
          "text": "$1,100"
        },
        {
          "id": "s5q44-a4",
          "text": "$7,500"
        }
      ],
      "explanation": "IRA catch-up 2026 (50+) = $1,100."
    },
    "es": {
      "question": "En 2026, el catch-up adicional para una IRA (50+) es de:",
      "answers": [
        {
          "id": "s5q44-a1",
          "text": "$500"
        },
        {
          "id": "s5q44-a2",
          "text": "$1,000"
        },
        {
          "id": "s5q44-a3",
          "text": "$1,100"
        },
        {
          "id": "s5q44-a4",
          "text": "$7,500"
        }
      ],
      "explanation": "Catch-up IRA 2026 (50+) = $1,100."
    },
    "correctAnswerId": "s5q44-a3"
  },
  {
    "id": "s5q45",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A company insures its key employee. The treatment of the premiums and the benefit is:",
      "answers": [
        {
          "id": "s5q45-a1",
          "text": "Premiums deductible, benefit taxable"
        },
        {
          "id": "s5q45-a2",
          "text": "Premiums not deductible, benefit generally tax-free"
        },
        {
          "id": "s5q45-a3",
          "text": "Both taxable"
        },
        {
          "id": "s5q45-a4",
          "text": "Both deductible"
        }
      ],
      "explanation": "Key person: premiums not deductible, benefit tax-free."
    },
    "es": {
      "question": "Una empresa asegura a su empleado clave. El tratamiento de las primas y el beneficio es:",
      "answers": [
        {
          "id": "s5q45-a1",
          "text": "Primas deducibles, beneficio gravable"
        },
        {
          "id": "s5q45-a2",
          "text": "Primas no deducibles, beneficio generalmente libre"
        },
        {
          "id": "s5q45-a3",
          "text": "Ambos gravables"
        },
        {
          "id": "s5q45-a4",
          "text": "Ambos deducibles"
        }
      ],
      "explanation": "Key person: primas no deducibles, beneficio libre."
    },
    "correctAnswerId": "s5q45-a2"
  },
  {
    "id": "s5q46",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The beneficiary who collects only if the primary does not survive the insured is the:",
      "answers": [
        {
          "id": "s5q46-a1",
          "text": "Tertiary"
        },
        {
          "id": "s5q46-a2",
          "text": "Contingent"
        },
        {
          "id": "s5q46-a3",
          "text": "Irrevocable"
        },
        {
          "id": "s5q46-a4",
          "text": "Revocable"
        }
      ],
      "explanation": "Collects if the primary does not survive = contingent."
    },
    "es": {
      "question": "El beneficiario que cobra solo si el primario no sobrevive al asegurado es el:",
      "answers": [
        {
          "id": "s5q46-a1",
          "text": "Terciario"
        },
        {
          "id": "s5q46-a2",
          "text": "Contingente"
        },
        {
          "id": "s5q46-a3",
          "text": "Irrevocable"
        },
        {
          "id": "s5q46-a4",
          "text": "Revocable"
        }
      ],
      "explanation": "Cobra si el primario no sobrevive = contingente."
    },
    "correctAnswerId": "s5q46-a2"
  },
  {
    "id": "s5q47",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The 1035 exchange that is NOT permitted is:",
      "answers": [
        {
          "id": "s5q47-a1",
          "text": "Life to life"
        },
        {
          "id": "s5q47-a2",
          "text": "Life to annuity"
        },
        {
          "id": "s5q47-a3",
          "text": "Annuity to annuity"
        },
        {
          "id": "s5q47-a4",
          "text": "Annuity to life"
        }
      ],
      "explanation": "Annuity → life is NOT permitted."
    },
    "es": {
      "question": "El intercambio 1035 que NO está permitido es:",
      "answers": [
        {
          "id": "s5q47-a1",
          "text": "Vida a vida"
        },
        {
          "id": "s5q47-a2",
          "text": "Vida a anualidad"
        },
        {
          "id": "s5q47-a3",
          "text": "Anualidad a anualidad"
        },
        {
          "id": "s5q47-a4",
          "text": "Anualidad a vida"
        }
      ],
      "explanation": "Anualidad → vida NO se permite."
    },
    "correctAnswerId": "s5q47-a4"
  },
  {
    "id": "s5q48",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The regulation of insurance in the United States falls, under the McCarran-Ferguson Act, to:",
      "answers": [
        {
          "id": "s5q48-a1",
          "text": "The federal government"
        },
        {
          "id": "s5q48-a2",
          "text": "The states"
        },
        {
          "id": "s5q48-a3",
          "text": "The SEC"
        },
        {
          "id": "s5q48-a4",
          "text": "Congress exclusively"
        }
      ],
      "explanation": "Regulation = state (McCarran-Ferguson)."
    },
    "es": {
      "question": "La regulación de seguros en Estados Unidos corresponde, por la McCarran-Ferguson Act, a:",
      "answers": [
        {
          "id": "s5q48-a1",
          "text": "El gobierno federal"
        },
        {
          "id": "s5q48-a2",
          "text": "Los estados"
        },
        {
          "id": "s5q48-a3",
          "text": "La SEC"
        },
        {
          "id": "s5q48-a4",
          "text": "El Congreso exclusivamente"
        }
      ],
      "explanation": "Regulación = estatal (McCarran-Ferguson)."
    },
    "correctAnswerId": "s5q48-a2"
  },
  {
    "id": "s5q49",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "A conditional receipt pays the benefit to the applicant who died before issue if they:",
      "answers": [
        {
          "id": "s5q49-a1",
          "text": "Paid double the premium"
        },
        {
          "id": "s5q49-a2",
          "text": "Were insurable under normal underwriting"
        },
        {
          "id": "s5q49-a3",
          "text": "Had a contingent beneficiary"
        },
        {
          "id": "s5q49-a4",
          "text": "Were a Texas resident"
        }
      ],
      "explanation": "Conditional receipt: pays if they were insurable."
    },
    "es": {
      "question": "Un recibo condicional paga el beneficio al solicitante fallecido antes de la emisión si este:",
      "answers": [
        {
          "id": "s5q49-a1",
          "text": "Pagó prima doble"
        },
        {
          "id": "s5q49-a2",
          "text": "Era asegurable según la evaluación normal de riesgo"
        },
        {
          "id": "s5q49-a3",
          "text": "Tenía beneficiario contingente"
        },
        {
          "id": "s5q49-a4",
          "text": "Era residente de Texas"
        }
      ],
      "explanation": "Conditional receipt: paga si era asegurable."
    },
    "correctAnswerId": "s5q49-a2"
  },
  {
    "id": "s5q50",
    "topic": "general",
    "simulator": 5,
    "en": {
      "question": "The central purpose of an annuity is to protect against:",
      "answers": [
        {
          "id": "s5q50-a1",
          "text": "Dying prematurely"
        },
        {
          "id": "s5q50-a2",
          "text": "Living longer than one’s savings last (longevity)"
        },
        {
          "id": "s5q50-a3",
          "text": "Disability"
        },
        {
          "id": "s5q50-a4",
          "text": "Property damage"
        }
      ],
      "explanation": "The annuity protects against living too long (longevity)."
    },
    "es": {
      "question": "El propósito central de una anualidad es proteger contra:",
      "answers": [
        {
          "id": "s5q50-a1",
          "text": "Morir prematuramente"
        },
        {
          "id": "s5q50-a2",
          "text": "Vivir más de lo que duran los ahorros (longevidad)"
        },
        {
          "id": "s5q50-a3",
          "text": "La discapacidad"
        },
        {
          "id": "s5q50-a4",
          "text": "Daños a la propiedad"
        }
      ],
      "explanation": "La anualidad protege contra vivir demasiado (longevidad)."
    },
    "correctAnswerId": "s5q50-a2"
  },
  {
    "id": "s6q1",
    "topic": "best interest",
    "simulator": 6,
    "en": {
      "question": "A 79-year-old client needs access to her money in less than a year. An agent recommends a deferred annuity with 10-year surrender charges. What is the BEST characterization of this recommendation?",
      "answers": [
        {
          "id": "s6q1-a1",
          "text": "Suitable, because the annuity defers taxes"
        },
        {
          "id": "s6q1-a2",
          "text": "Not suitable: the product ties up the liquidity the client needs"
        },
        {
          "id": "s6q1-a3",
          "text": "Suitable, because it offers a surrender charge"
        },
        {
          "id": "s6q1-a4",
          "text": "Mandatory under the best interest standard"
        }
      ],
      "explanation": "The product ties up the liquidity the client needs soon: not suitable. A/C: a tax benefit or a surrender charge does not make suitable a product that clashes with her need. D: best interest requires the opposite."
    },
    "es": {
      "question": "Una clienta de 79 años necesita acceso a su dinero en menos de un año. Un agente le recomienda una anualidad diferida con cargos de rescate a 10 años. ¿Cuál es la MEJOR caracterización de esta recomendación?",
      "answers": [
        {
          "id": "s6q1-a1",
          "text": "Idónea, porque la anualidad difiere impuestos"
        },
        {
          "id": "s6q1-a2",
          "text": "No idónea: el producto compromete la liquidez que la clienta necesita"
        },
        {
          "id": "s6q1-a3",
          "text": "Idónea, porque ofrece un cargo de rescate"
        },
        {
          "id": "s6q1-a4",
          "text": "Obligatoria bajo el estándar de mejor interés"
        }
      ],
      "explanation": "El producto atrapa la liquidez que la clienta necesita pronto: no es idóneo. A/C: un beneficio fiscal o un cargo de rescate no vuelven idóneo un producto que choca con su necesidad. D: el mejor interés exige lo contrario."
    },
    "correctAnswerId": "s6q1-a2"
  },
  {
    "id": "s6q2",
    "topic": "best interest",
    "simulator": 6,
    "en": {
      "question": "Before recommending an annuity to a client, what is the FIRST action the producer must take?",
      "answers": [
        {
          "id": "s6q2-a1",
          "text": "Collect the premium"
        },
        {
          "id": "s6q2-a2",
          "text": "Gather the client’s suitability information (financial situation, objectives, liquidity, risk tolerance)"
        },
        {
          "id": "s6q2-a3",
          "text": "Issue the policy"
        },
        {
          "id": "s6q2-a4",
          "text": "Notify TLHIGA"
        }
      ],
      "explanation": "Suitability starts with gathering the client’s information. A/C: these come later and depend on the product being suitable. D: TLHIGA is not involved in the sale."
    },
    "es": {
      "question": "Antes de recomendar una anualidad a un cliente, ¿cuál es la PRIMERA acción que debe tomar el productor?",
      "answers": [
        {
          "id": "s6q2-a1",
          "text": "Cobrar la prima"
        },
        {
          "id": "s6q2-a2",
          "text": "Recabar la información de idoneidad (situación financiera, objetivos, liquidez, tolerancia al riesgo)"
        },
        {
          "id": "s6q2-a3",
          "text": "Emitir la póliza"
        },
        {
          "id": "s6q2-a4",
          "text": "Notificar a la TLHIGA"
        }
      ],
      "explanation": "La idoneidad empieza por recabar la información del cliente. A/C: van después y dependen de que el producto sea idóneo. D: la TLHIGA no se involucra en la venta."
    },
    "correctAnswerId": "s6q2-a2"
  },
  {
    "id": "s6q3",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "The best interest standard for annuities in Texas requires all of the following obligations EXCEPT:",
      "answers": [
        {
          "id": "s6q3-a1",
          "text": "Care"
        },
        {
          "id": "s6q3-a2",
          "text": "Disclosure"
        },
        {
          "id": "s6q3-a3",
          "text": "Managing conflicts of interest"
        },
        {
          "id": "s6q3-a4",
          "text": "Guaranteeing a minimum 8% return"
        }
      ],
      "explanation": "Best interest requires care, disclosure, and conflict management; no product guarantees 8%. A/B/C are real obligations of the standard."
    },
    "es": {
      "question": "El estándar de mejor interés (mejor interés) para anualidades en Texas exige todas las siguientes obligaciones EXCEPTO:",
      "answers": [
        {
          "id": "s6q3-a1",
          "text": "Cuidado (care)"
        },
        {
          "id": "s6q3-a2",
          "text": "Divulgación (disclosure)"
        },
        {
          "id": "s6q3-a3",
          "text": "Manejo de conflictos de interés"
        },
        {
          "id": "s6q3-a4",
          "text": "Garantizar un rendimiento mínimo del 8%"
        }
      ],
      "explanation": "El mejor interés exige care, disclosure y manejo de conflictos; ningún producto garantiza 8%. A/B/C sí son obligaciones reales del estándar."
    },
    "correctAnswerId": "s6q3-a4"
  },
  {
    "id": "s6q4",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A client wants to replace an existing policy with a new one. What is the agent’s PRIMARY obligation?",
      "answers": [
        {
          "id": "s6q4-a1",
          "text": "Hide the prior policy from the new insurer"
        },
        {
          "id": "s6q4-a2",
          "text": "Provide a replacement notice and a comparison of the policies"
        },
        {
          "id": "s6q4-a3",
          "text": "Cancel the old policy before issuing the new one"
        },
        {
          "id": "s6q4-a4",
          "text": "Increase their commission"
        }
      ],
      "explanation": "The central obligation is to give a replacement notice and compare the policies. A: concealing violates the rule. C: you don’t cancel before issuing. D: commission is not the obligation."
    },
    "es": {
      "question": "Un cliente quiere reemplazar una póliza vigente por una nueva. ¿Cuál es la obligación PRINCIPAL del agente?",
      "answers": [
        {
          "id": "s6q4-a1",
          "text": "Ocultar la póliza anterior a la nueva aseguradora"
        },
        {
          "id": "s6q4-a2",
          "text": "Proporcionar un aviso de reemplazo y una comparación de las pólizas"
        },
        {
          "id": "s6q4-a3",
          "text": "Cancelar la póliza vieja antes de emitir la nueva"
        },
        {
          "id": "s6q4-a4",
          "text": "Aumentar su comisión"
        }
      ],
      "explanation": "La obligación central es avisar el reemplazo y comparar las pólizas. A: ocultar viola la regla. C: no se cancela antes de emitir. D: la comisión no es la obligación."
    },
    "correctAnswerId": "s6q4-a2"
  },
  {
    "id": "s6q5",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "When recommending a product to a senior client, the agent’s BEST practice is:",
      "answers": [
        {
          "id": "s6q5-a1",
          "text": "Speed up the sale to seize the decision"
        },
        {
          "id": "s6q5-a2",
          "text": "Document suitability and the reasons for the recommendation"
        },
        {
          "id": "s6q5-a3",
          "text": "Avoid explaining the charges"
        },
        {
          "id": "s6q5-a4",
          "text": "Omit risk tolerance"
        }
      ],
      "explanation": "With seniors, documenting suitability and reasons is the best practice. A/C/D describe exactly what NOT to do."
    },
    "es": {
      "question": "Al recomendar un producto a un cliente mayor (senior), la MEJOR práctica del agente es:",
      "answers": [
        {
          "id": "s6q5-a1",
          "text": "Acelerar la venta para aprovechar la decisión"
        },
        {
          "id": "s6q5-a2",
          "text": "Documentar la idoneidad y las razones de la recomendación"
        },
        {
          "id": "s6q5-a3",
          "text": "Evitar explicar los cargos"
        },
        {
          "id": "s6q5-a4",
          "text": "Omitir la tolerancia al riesgo"
        }
      ],
      "explanation": "Con seniors, documentar idoneidad y razones es la mejor práctica. A/C/D describen exactamente lo que NO se debe hacer."
    },
    "correctAnswerId": "s6q5-a2"
  },
  {
    "id": "s6q6",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A producer recommends a variable annuity to an 82-year-old client with no investment experience who wants to protect their principal from losses. What is the BEST characterization?",
      "answers": [
        {
          "id": "s6q6-a1",
          "text": "Suitable, because variable annuities always gain"
        },
        {
          "id": "s6q6-a2",
          "text": "Not suitable: market risk contradicts the goal of protecting principal"
        },
        {
          "id": "s6q6-a3",
          "text": "Suitable, if it pays a good commission"
        },
        {
          "id": "s6q6-a4",
          "text": "Required by best interest"
        }
      ],
      "explanation": "The variable’s market risk contradicts the goal of protecting principal: not suitable. A: variables can lose. C: commission doesn’t determine suitability. D: best interest prohibits it."
    },
    "es": {
      "question": "Un productor recomienda una anualidad variable a un cliente de 82 años, sin experiencia en inversiones, que busca proteger su capital de pérdidas. ¿Cuál es la MEJOR caracterización?",
      "answers": [
        {
          "id": "s6q6-a1",
          "text": "Idónea, porque las anualidades variables siempre ganan"
        },
        {
          "id": "s6q6-a2",
          "text": "No idónea: el riesgo de mercado contradice el objetivo de proteger el capital"
        },
        {
          "id": "s6q6-a3",
          "text": "Idónea, si paga buena comisión"
        },
        {
          "id": "s6q6-a4",
          "text": "Requerida por el mejor interés"
        }
      ],
      "explanation": "El riesgo de mercado de la variable contradice el objetivo de proteger capital: no idónea. A: las variables pueden perder. C: la comisión no determina idoneidad. D: el mejor interés lo prohíbe."
    },
    "correctAnswerId": "s6q6-a2"
  },
  {
    "id": "s6q7",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "The PRIMARY purpose of the “free look” period is:",
      "answers": [
        {
          "id": "s6q7-a1",
          "text": "To give the insurer time to investigate"
        },
        {
          "id": "s6q7-a2",
          "text": "To let the client review the policy and return it for a full refund if unsatisfied"
        },
        {
          "id": "s6q7-a3",
          "text": "To extend the contestable period"
        },
        {
          "id": "s6q7-a4",
          "text": "To increase the premium"
        }
      ],
      "explanation": "The free look lets the client review and return for a full refund. A: it’s not for the insurer. C: it doesn’t extend contestability. D: it doesn’t affect the premium."
    },
    "es": {
      "question": "El propósito PRINCIPAL del periodo de “periodo de revisión gratuita” es:",
      "answers": [
        {
          "id": "s6q7-a1",
          "text": "Dar tiempo a la aseguradora para investigar"
        },
        {
          "id": "s6q7-a2",
          "text": "Permitir al cliente revisar la póliza y devolverla para reembolso total si no le satisface"
        },
        {
          "id": "s6q7-a3",
          "text": "Extender el periodo contestable"
        },
        {
          "id": "s6q7-a4",
          "text": "Aumentar la prima"
        }
      ],
      "explanation": "El periodo de revisión gratuita permite revisar y devolver para reembolso total. A: no es para la aseguradora. C: no extiende la contestabilidad. D: no afecta la prima."
    },
    "correctAnswerId": "s6q7-a2"
  },
  {
    "id": "s6q8",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "The suitability information an agent must gather before recommending an annuity includes all of the following EXCEPT:",
      "answers": [
        {
          "id": "s6q8-a1",
          "text": "The client’s age and income"
        },
        {
          "id": "s6q8-a2",
          "text": "Financial objectives and time horizon"
        },
        {
          "id": "s6q8-a3",
          "text": "Risk tolerance and liquidity needs"
        },
        {
          "id": "s6q8-a4",
          "text": "The client’s favorite hobby"
        }
      ],
      "explanation": "Age, income, objectives, liquidity, and risk tolerance are suitability; the hobby is not. A/B/C are suitability information."
    },
    "es": {
      "question": "La información de idoneidad que un agente debe recabar antes de recomendar una anualidad incluye todo lo siguiente EXCEPTO:",
      "answers": [
        {
          "id": "s6q8-a1",
          "text": "Edad e ingresos del cliente"
        },
        {
          "id": "s6q8-a2",
          "text": "Objetivos financieros y horizonte de tiempo"
        },
        {
          "id": "s6q8-a3",
          "text": "Tolerancia al riesgo y necesidades de liquidez"
        },
        {
          "id": "s6q8-a4",
          "text": "El pasatiempo favorito del cliente"
        }
      ],
      "explanation": "Edad, ingresos, objetivos, liquidez y tolerancia al riesgo son idoneidad; el pasatiempo no. A/B/C sí son información de idoneidad."
    },
    "correctAnswerId": "s6q8-a4"
  },
  {
    "id": "s6q9",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "Before being able to sell annuities in Texas, an agent MUST complete:",
      "answers": [
        {
          "id": "s6q9-a1",
          "text": "A real-estate exam"
        },
        {
          "id": "s6q9-a2",
          "text": "An initial 4-hour “Best Interest” course"
        },
        {
          "id": "s6q9-a3",
          "text": "40 hours of ethics"
        },
        {
          "id": "s6q9-a4",
          "text": "Nothing additional"
        }
      ],
      "explanation": "Texas requires the 4-hour Best Interest course before selling annuities. A/C/D are not annuity requirements."
    },
    "es": {
      "question": "Antes de poder vender anualidades en Texas, un agente DEBE completar:",
      "answers": [
        {
          "id": "s6q9-a1",
          "text": "Un examen de bienes raíces"
        },
        {
          "id": "s6q9-a2",
          "text": "Un curso inicial de mejor interés de 4 horas"
        },
        {
          "id": "s6q9-a3",
          "text": "40 horas de ética"
        },
        {
          "id": "s6q9-a4",
          "text": "Nada adicional"
        }
      ],
      "explanation": "Texas exige el curso mejor interés de 4 horas antes de vender anualidades. A/C/D no son requisitos para anualidades."
    },
    "correctAnswerId": "s6q9-a2"
  },
  {
    "id": "s6q10",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent convinces a client to replace their policy using its accumulated values, solely to generate a new commission. This practice is known as:",
      "answers": [
        {
          "id": "s6q10-a1",
          "text": "Suitability"
        },
        {
          "id": "s6q10-a2",
          "text": "Churning"
        },
        {
          "id": "s6q10-a3",
          "text": "Field underwriting"
        },
        {
          "id": "s6q10-a4",
          "text": "Free look"
        }
      ],
      "explanation": "Replacing using existing values for commission = churning. A: suitability is the right thing, not this. C: field underwriting is gathering info. D: free look is something else."
    },
    "es": {
      "question": "Un agente convence a un cliente de reemplazar su póliza usando los valores acumulados de esta, solo para generar una nueva comisión. Esta práctica se conoce como:",
      "answers": [
        {
          "id": "s6q10-a1",
          "text": "Idoneidad"
        },
        {
          "id": "s6q10-a2",
          "text": "Reemplazo abusivo"
        },
        {
          "id": "s6q10-a3",
          "text": "Evaluación inicial de campo"
        },
        {
          "id": "s6q10-a4",
          "text": "Periodo de revisión gratuita"
        }
      ],
      "explanation": "Reemplazar usando los valores existentes por comisión = reemplazo abusivo. A: idoneidad es lo correcto, no esto. C: evaluación inicial de campo es reunir info. D: periodo de revisión gratuita es otra cosa."
    },
    "correctAnswerId": "s6q10-a2"
  },
  {
    "id": "s6q11",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "When evaluating the suitability of an annuity for a retiree, what is the MOST important factor?",
      "answers": [
        {
          "id": "s6q11-a1",
          "text": "The color of the brochure"
        },
        {
          "id": "s6q11-a2",
          "text": "That the product fits their objectives, liquidity, and risk tolerance"
        },
        {
          "id": "s6q11-a3",
          "text": "The agent’s commission"
        },
        {
          "id": "s6q11-a4",
          "text": "The insurer’s brand"
        }
      ],
      "explanation": "The MOST important thing is the fit to objectives, liquidity, and risk. A/C/D are irrelevant to suitability."
    },
    "es": {
      "question": "Al evaluar la idoneidad de una anualidad para un jubilado, ¿cuál es el factor MÁS importante?",
      "answers": [
        {
          "id": "s6q11-a1",
          "text": "El color del folleto"
        },
        {
          "id": "s6q11-a2",
          "text": "Que el producto se ajuste a sus objetivos, liquidez y tolerancia al riesgo"
        },
        {
          "id": "s6q11-a3",
          "text": "La comisión del agente"
        },
        {
          "id": "s6q11-a4",
          "text": "La marca de la aseguradora"
        }
      ],
      "explanation": "Lo MÁS importante es el ajuste a objetivos, liquidez y riesgo. A/C/D son irrelevantes para la idoneidad."
    },
    "correctAnswerId": "s6q11-a2"
  },
  {
    "id": "s6q12",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "Using a misleading “senior specialist” designation to gain an older client’s trust is:",
      "answers": [
        {
          "id": "s6q12-a1",
          "text": "Good marketing"
        },
        {
          "id": "s6q12-a2",
          "text": "A prohibited consumer-protection practice"
        },
        {
          "id": "s6q12-a3",
          "text": "Required by the TDI"
        },
        {
          "id": "s6q12-a4",
          "text": "Part of field underwriting"
        }
      ],
      "explanation": "A misleading “senior” designation is a prohibited consumer-protection practice. A: it’s not good marketing, it’s deception. C: the TDI doesn’t require it. D: it’s not field underwriting."
    },
    "es": {
      "question": "Usar una designación engañosa de “especialista en seniors” para ganarse la confianza de un cliente mayor es:",
      "answers": [
        {
          "id": "s6q12-a1",
          "text": "Una buena práctica de marketing"
        },
        {
          "id": "s6q12-a2",
          "text": "Una práctica prohibida de protección al consumidor"
        },
        {
          "id": "s6q12-a3",
          "text": "Requerido por el TDI"
        },
        {
          "id": "s6q12-a4",
          "text": "Parte de la evaluación inicial de campo"
        }
      ],
      "explanation": "Una designación engañosa de “senior” es práctica prohibida de protección al consumidor. A: no es buen marketing, es engaño. C: el TDI no lo exige. D: no es evaluación inicial de campo."
    },
    "correctAnswerId": "s6q12-a2"
  },
  {
    "id": "s6q13",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent exaggerates, with false information, the flaws of a client’s current policy so they replace it. This is:",
      "answers": [
        {
          "id": "s6q13-a1",
          "text": "Churning"
        },
        {
          "id": "s6q13-a2",
          "text": "Twisting"
        },
        {
          "id": "s6q13-a3",
          "text": "Suitability"
        },
        {
          "id": "s6q13-a4",
          "text": "Rebating"
        }
      ],
      "explanation": "Inducing replacement with false information = twisting. A: churning uses values, not deception. C: suitability is the right thing. D: rebating is an inducement."
    },
    "es": {
      "question": "Un agente exagera con información falsa los defectos de la póliza vigente de un cliente para que la reemplace. Esto es:",
      "answers": [
        {
          "id": "s6q13-a1",
          "text": "Reemplazo abusivo"
        },
        {
          "id": "s6q13-a2",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s6q13-a3",
          "text": "Idoneidad"
        },
        {
          "id": "s6q13-a4",
          "text": "Rebaja indebida"
        }
      ],
      "explanation": "Inducir el reemplazo con información falsa = inducción engañosa al reemplazo. A: reemplazo abusivo usa valores, no engaño. C: idoneidad es lo correcto. D: rebaja indebida es un incentivo."
    },
    "correctAnswerId": "s6q13-a2"
  },
  {
    "id": "s6q14",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "Under the best interest standard, if the agent receives a higher commission for recommending a certain product, they MUST:",
      "answers": [
        {
          "id": "s6q14-a1",
          "text": "Hide it"
        },
        {
          "id": "s6q14-a2",
          "text": "Disclose the conflict of interest"
        },
        {
          "id": "s6q14-a3",
          "text": "Cancel the sale"
        },
        {
          "id": "s6q14-a4",
          "text": "Pay the commission to the client"
        }
      ],
      "explanation": "Best interest requires disclosing the conflict of interest. A: hiding it violates it. C: it doesn’t force a cancellation. D: you don’t “pay” the commission to the client."
    },
    "es": {
      "question": "Bajo el estándar de mejor interés, si el agente recibe una comisión mayor por recomendar cierto producto, DEBE:",
      "answers": [
        {
          "id": "s6q14-a1",
          "text": "Ocultarlo"
        },
        {
          "id": "s6q14-a2",
          "text": "Divulgar el conflicto de interés"
        },
        {
          "id": "s6q14-a3",
          "text": "Cancelar la venta"
        },
        {
          "id": "s6q14-a4",
          "text": "Pagar la comisión al cliente"
        }
      ],
      "explanation": "El mejor interés exige divulgar el conflicto de interés. A: ocultarlo lo viola. C: no obliga a cancelar. D: no se “paga” la comisión al cliente."
    },
    "correctAnswerId": "s6q14-a2"
  },
  {
    "id": "s6q15",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "The PRIMARY purpose of replacement regulation is:",
      "answers": [
        {
          "id": "s6q15-a1",
          "text": "To increase the agent’s commissions"
        },
        {
          "id": "s6q15-a2",
          "text": "To protect the client from losing benefits and from unnecessary charges when changing policies"
        },
        {
          "id": "s6q15-a3",
          "text": "To eliminate the grace period"
        },
        {
          "id": "s6q15-a4",
          "text": "To speed up underwriting"
        }
      ],
      "explanation": "Replacement is regulated to protect the client from losses and charges. A: the opposite. C/D: not its purpose."
    },
    "es": {
      "question": "El propósito PRINCIPAL de la regulación de reemplazos es:",
      "answers": [
        {
          "id": "s6q15-a1",
          "text": "Aumentar las comisiones del agente"
        },
        {
          "id": "s6q15-a2",
          "text": "Proteger al cliente de perder beneficios y de cargos innecesarios al cambiar de póliza"
        },
        {
          "id": "s6q15-a3",
          "text": "Eliminar el periodo de gracia"
        },
        {
          "id": "s6q15-a4",
          "text": "Acelerar la evaluación de riesgo"
        }
      ],
      "explanation": "El reemplazo se regula para proteger al cliente de pérdidas y cargos. A: lo contrario. C/D: no es su propósito."
    },
    "correctAnswerId": "s6q15-a2"
  },
  {
    "id": "s6q16",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent recommends that a 75-year-old put all their savings into a single long-term deferred annuity. The BEST observation is:",
      "answers": [
        {
          "id": "s6q16-a1",
          "text": "It is suitable to concentrate everything in one product"
        },
        {
          "id": "s6q16-a2",
          "text": "It is not suitable: it ties up all their liquidity in a long-term product"
        },
        {
          "id": "s6q16-a3",
          "text": "It reduces their risk to zero"
        },
        {
          "id": "s6q16-a4",
          "text": "It is mandatory"
        }
      ],
      "explanation": "Concentrating all liquidity in a long-term product is not suitable. A: concentrating isn’t prudent here. C: it doesn’t eliminate risk. D: it’s not mandatory."
    },
    "es": {
      "question": "Un agente recomienda a una persona de 75 años colocar todos sus ahorros en una sola anualidad diferida de largo plazo. La MEJOR observación es:",
      "answers": [
        {
          "id": "s6q16-a1",
          "text": "Es idóneo concentrar todo en un producto"
        },
        {
          "id": "s6q16-a2",
          "text": "No es idóneo: compromete toda su liquidez en un producto de largo plazo"
        },
        {
          "id": "s6q16-a3",
          "text": "Reduce su riesgo a cero"
        },
        {
          "id": "s6q16-a4",
          "text": "Es obligatorio"
        }
      ],
      "explanation": "Concentrar toda la liquidez en un producto de largo plazo no es idóneo. A: concentrar no es prudente aquí. C: no elimina el riesgo. D: no es obligatorio."
    },
    "correctAnswerId": "s6q16-a2"
  },
  {
    "id": "s6q17",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A client receives their life policy on Monday and returns it eight days later, with no claim. Under the Texas free look, the insurer MUST:",
      "answers": [
        {
          "id": "s6q17-a1",
          "text": "Refuse, because the deadline has passed"
        },
        {
          "id": "s6q17-a2",
          "text": "Refund the premium paid (it is within the 10 days)"
        },
        {
          "id": "s6q17-a3",
          "text": "Charge a penalty"
        },
        {
          "id": "s6q17-a4",
          "text": "Convert the policy into an annuity"
        }
      ],
      "explanation": "Eight days is within the 10 of the free look: the insurer refunds. A: the deadline hasn’t passed. C: no penalty. D: it doesn’t convert."
    },
    "es": {
      "question": "Un cliente recibe su póliza de vida el lunes y la devuelve ocho días después, sin reclamo. Bajo el periodo de revisión gratuita de Texas, la aseguradora DEBE:",
      "answers": [
        {
          "id": "s6q17-a1",
          "text": "Negarse, porque ya pasó el plazo"
        },
        {
          "id": "s6q17-a2",
          "text": "Reembolsar la prima pagada (está dentro de los 10 días)"
        },
        {
          "id": "s6q17-a3",
          "text": "Cobrar una penalidad"
        },
        {
          "id": "s6q17-a4",
          "text": "Convertir la póliza en anualidad"
        }
      ],
      "explanation": "Ocho días está dentro de los 10 del periodo de revisión gratuita: la aseguradora reembolsa. A: no ha pasado el plazo. C: no hay penalidad. D: no se convierte en nada."
    },
    "correctAnswerId": "s6q17-a2"
  },
  {
    "id": "s6q18",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An insurer unjustifiably delays payment of a valid claim beyond the legal deadline. What MUST it generally do?",
      "answers": [
        {
          "id": "s6q18-a1",
          "text": "Nothing"
        },
        {
          "id": "s6q18-a2",
          "text": "Pay penalty interest (18%) and attorney’s fees"
        },
        {
          "id": "s6q18-a3",
          "text": "Cancel the policy"
        },
        {
          "id": "s6q18-a4",
          "text": "Double the benefit"
        }
      ],
      "explanation": "Unjustified delay → 18% interest and fees. A: there is a consequence. C/D: do not apply."
    },
    "es": {
      "question": "Una aseguradora retrasa injustificadamente el pago de una reclamación válida más allá del plazo legal. ¿Qué DEBE hacer, generalmente?",
      "answers": [
        {
          "id": "s6q18-a1",
          "text": "Nada"
        },
        {
          "id": "s6q18-a2",
          "text": "Pagar interés de penalización (18%) y honorarios de abogado"
        },
        {
          "id": "s6q18-a3",
          "text": "Cancelar la póliza"
        },
        {
          "id": "s6q18-a4",
          "text": "Duplicar el beneficio"
        }
      ],
      "explanation": "Demora injustificada → 18% de interés y honorarios. A: sí hay consecuencia. C/D: no aplican."
    },
    "correctAnswerId": "s6q18-a2"
  },
  {
    "id": "s6q19",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An insured divorces and dies months later without updating their ex-spouse beneficiary. Under Texas law, the MOST likely outcome is:",
      "answers": [
        {
          "id": "s6q19-a1",
          "text": "The ex-spouse collects anyway"
        },
        {
          "id": "s6q19-a2",
          "text": "The exspouse’s designation was automatically revoked (with exceptions)"
        },
        {
          "id": "s6q19-a3",
          "text": "The insurer decides who to pay"
        },
        {
          "id": "s6q19-a4",
          "text": "The benefit is lost"
        }
      ],
      "explanation": "Divorce revocation (§9.301): the ex-spouse is automatically revoked. A: by default they don’t collect. C: the insurer doesn’t decide. D: it passes to the contingent/estate, it isn’t “lost.”"
    },
    "es": {
      "question": "Un asegurado se divorcia y muere meses después sin actualizar a su excónyuge como beneficiario. Bajo la ley de Texas, lo MÁS probable es que:",
      "answers": [
        {
          "id": "s6q19-a1",
          "text": "El excónyuge cobre igualmente"
        },
        {
          "id": "s6q19-a2",
          "text": "La designación del excónyuge se haya revocado automáticamente (con excepciones)"
        },
        {
          "id": "s6q19-a3",
          "text": "La aseguradora decida a quién pagar"
        },
        {
          "id": "s6q19-a4",
          "text": "El beneficio se pierda"
        }
      ],
      "explanation": "Divorce revocation (§9.301): el excónyuge se revoca automáticamente. A: por defecto no cobra. C: no decide la aseguradora. D: pasa al contingente/patrimonio, no se “pierde”."
    },
    "correctAnswerId": "s6q19-a2"
  },
  {
    "id": "s6q20",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A licensed agent wants to start selling for a new insurer. What is needed FIRST?",
      "answers": [
        {
          "id": "s6q20-a1",
          "text": "A new state exam"
        },
        {
          "id": "s6q20-a2",
          "text": "An appointment from that insurer (reported to the TDI)"
        },
        {
          "id": "s6q20-a3",
          "text": "The client’s approval"
        },
        {
          "id": "s6q20-a4",
          "text": "A second license"
        }
      ],
      "explanation": "First they need an appointment from that insurer. A: no repeat exam. C: the client doesn’t authorize. D: no second license needed."
    },
    "es": {
      "question": "Un agente con licencia quiere empezar a vender para una nueva aseguradora. ¿Qué se necesita PRIMERO?",
      "answers": [
        {
          "id": "s6q20-a1",
          "text": "Un nuevo examen estatal"
        },
        {
          "id": "s6q20-a2",
          "text": "Un appointment de esa aseguradora (notificado al TDI)"
        },
        {
          "id": "s6q20-a3",
          "text": "La aprobación del cliente"
        },
        {
          "id": "s6q20-a4",
          "text": "Una segunda licencia"
        }
      ],
      "explanation": "Primero necesita un appointment de esa aseguradora. A: no repite examen. C: el cliente no autoriza. D: no necesita otra licencia."
    },
    "correctAnswerId": "s6q20-a2"
  },
  {
    "id": "s6q21",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A Texas resident’s insurer is declared insolvent. TLHIGA covers the death benefit of their life policy up to:",
      "answers": [
        {
          "id": "s6q21-a1",
          "text": "$100,000"
        },
        {
          "id": "s6q21-a2",
          "text": "$250,000"
        },
        {
          "id": "s6q21-a3",
          "text": "$300,000"
        },
        {
          "id": "s6q21-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA death benefit = $300,000. A: $100k is cash value. B: $250k is annuity. D: $500k is health."
    },
    "es": {
      "question": "La aseguradora de un residente de Texas es declarada insolvente. La TLHIGA cubre el beneficio por muerte de su póliza de vida hasta:",
      "answers": [
        {
          "id": "s6q21-a1",
          "text": "$100,000"
        },
        {
          "id": "s6q21-a2",
          "text": "$250,000"
        },
        {
          "id": "s6q21-a3",
          "text": "$300,000"
        },
        {
          "id": "s6q21-a4",
          "text": "$500,000"
        }
      ],
      "explanation": "TLHIGA beneficio por muerte = $300,000. A: $100k es valor en efectivo. B: $250k es anualidad. D: $500k es salud."
    },
    "correctAnswerId": "s6q21-a3"
  },
  {
    "id": "s6q22",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent offers a client a $200 gift card to sign today. Regarding rebating:",
      "answers": [
        {
          "id": "s6q22-a1",
          "text": "Only the agent can be penalized"
        },
        {
          "id": "s6q22-a2",
          "text": "Both the agent and the client who accepts can be penalized"
        },
        {
          "id": "s6q22-a3",
          "text": "It is legal in Texas"
        },
        {
          "id": "s6q22-a4",
          "text": "Only the client is penalized"
        }
      ],
      "explanation": "Rebating penalizes agent and client. A/D: not just one. C: it’s not legal."
    },
    "es": {
      "question": "Un agente ofrece a un cliente una tarjeta de regalo de $200 por firmar hoy. Respecto del rebaja indebida:",
      "answers": [
        {
          "id": "s6q22-a1",
          "text": "Solo el agente puede ser sancionado"
        },
        {
          "id": "s6q22-a2",
          "text": "Tanto el agente como el cliente que acepta pueden ser sancionados"
        },
        {
          "id": "s6q22-a3",
          "text": "Es legal en Texas"
        },
        {
          "id": "s6q22-a4",
          "text": "Solo el cliente es sancionado"
        }
      ],
      "explanation": "El rebaja indebida sanciona a agente y cliente. A/D: no es solo uno. C: no es legal."
    },
    "correctAnswerId": "s6q22-a2"
  },
  {
    "id": "s6q23",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A Texas agent is going to renew their life license. They MUST complete, per 2-year period:",
      "answers": [
        {
          "id": "s6q23-a1",
          "text": "12 hours, 1 of ethics"
        },
        {
          "id": "s6q23-a2",
          "text": "24 hours, 3 of ethics"
        },
        {
          "id": "s6q23-a3",
          "text": "40 hours, 5 of ethics"
        },
        {
          "id": "s6q23-a4",
          "text": "None"
        }
      ],
      "explanation": "CE in Texas = 24 hours, 3 of ethics. A/C/D do not match."
    },
    "es": {
      "question": "Un agente de Texas va a renovar su licencia de vida. DEBE completar, por periodo de 2 años:",
      "answers": [
        {
          "id": "s6q23-a1",
          "text": "12 horas, 1 de ética"
        },
        {
          "id": "s6q23-a2",
          "text": "24 horas, 3 de ética"
        },
        {
          "id": "s6q23-a3",
          "text": "40 horas, 5 de ética"
        },
        {
          "id": "s6q23-a4",
          "text": "Ninguna"
        }
      ],
      "explanation": "CE en Texas = 24 horas, 3 de ética. A/C/D no corresponden."
    },
    "correctAnswerId": "s6q23-a2"
  },
  {
    "id": "s6q24",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent spreads, without proof, that a rival insurer “is going bankrupt” to steal its clients. They commit:",
      "answers": [
        {
          "id": "s6q24-a1",
          "text": "Rebating"
        },
        {
          "id": "s6q24-a2",
          "text": "Defamation"
        },
        {
          "id": "s6q24-a3",
          "text": "Twisting"
        },
        {
          "id": "s6q24-a4",
          "text": "Sliding"
        }
      ],
      "explanation": "Defaming another insurer’s solvency = defamation. A: rebating is an inducement. C: twisting is replacement by deception. D: sliding is a charge without permission."
    },
    "es": {
      "question": "Un agente difunde, sin pruebas, que una aseguradora rival “está quebrando” para robarle clientes. Comete:",
      "answers": [
        {
          "id": "s6q24-a1",
          "text": "Rebaja indebida"
        },
        {
          "id": "s6q24-a2",
          "text": "Defamation"
        },
        {
          "id": "s6q24-a3",
          "text": "Inducción engañosa al reemplazo"
        },
        {
          "id": "s6q24-a4",
          "text": "Venta agregada no autorizada"
        }
      ],
      "explanation": "Difamar la solvencia de otra aseguradora = defamation. A: rebaja indebida es un incentivo. C: inducción engañosa al reemplazo es reemplazo por engaño. D: venta agregada no autorizada es cargo sin permiso."
    },
    "correctAnswerId": "s6q24-a2"
  },
  {
    "id": "s6q25",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent deposits client premiums into their personal bank account “for a few days.” This is:",
      "answers": [
        {
          "id": "s6q25-a1",
          "text": "Acceptable"
        },
        {
          "id": "s6q25-a2",
          "text": "Commingling, a breach of fiduciary duty"
        },
        {
          "id": "s6q25-a3",
          "text": "Rebating"
        },
        {
          "id": "s6q25-a4",
          "text": "Field underwriting"
        }
      ],
      "explanation": "Mixing premiums with personal funds = commingling. A: not acceptable. C/D: do not apply."
    },
    "es": {
      "question": "Un agente deposita las primas de sus clientes en su cuenta bancaria personal “por unos días”. Esto es:",
      "answers": [
        {
          "id": "s6q25-a1",
          "text": "Aceptable"
        },
        {
          "id": "s6q25-a2",
          "text": "Mezcla indebida de fondos, una violación del deber fiduciario"
        },
        {
          "id": "s6q25-a3",
          "text": "Rebaja indebida"
        },
        {
          "id": "s6q25-a4",
          "text": "Evaluación inicial de campo"
        }
      ],
      "explanation": "Mezclar primas con fondos personales = mezcla indebida de fondos. A: no es aceptable. C/D: no aplican."
    },
    "correctAnswerId": "s6q25-a2"
  },
  {
    "id": "s6q26",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "To obtain a Texas life license, a candidate MUST score at least:",
      "answers": [
        {
          "id": "s6q26-a1",
          "text": "60%"
        },
        {
          "id": "s6q26-a2",
          "text": "65%"
        },
        {
          "id": "s6q26-a3",
          "text": "70%"
        },
        {
          "id": "s6q26-a4",
          "text": "80%"
        }
      ],
      "explanation": "Passing the Texas license = 70%. A/B/D are not the threshold."
    },
    "es": {
      "question": "Para obtener la licencia de vida de Texas, un candidato DEBE obtener una calificación de al menos:",
      "answers": [
        {
          "id": "s6q26-a1",
          "text": "60%"
        },
        {
          "id": "s6q26-a2",
          "text": "65%"
        },
        {
          "id": "s6q26-a3",
          "text": "70%"
        },
        {
          "id": "s6q26-a4",
          "text": "80%"
        }
      ],
      "explanation": "Aprobar la licencia de Texas = 70%. A/B/D no son el umbral."
    },
    "correctAnswerId": "s6q26-a3"
  },
  {
    "id": "s6q27",
    "topic": "calculation",
    "simulator": 6,
    "en": {
      "question": "A client invested $100,000 in an annuity whose total expected return is $200,000. What percentage of each payment is excluded from tax (exclusion ratio)?",
      "answers": [
        {
          "id": "s6q27-a1",
          "text": "25%"
        },
        {
          "id": "s6q27-a2",
          "text": "50%"
        },
        {
          "id": "s6q27-a3",
          "text": "75%"
        },
        {
          "id": "s6q27-a4",
          "text": "100%"
        }
      ],
      "explanation": "Exclusion ratio = investment ÷ expected return = 100,000 ÷ 200,000 = 50%. The others don’t result from that ratio."
    },
    "es": {
      "question": "Un cliente invirtió $100,000 en una anualidad cuyo rendimiento esperado total es $200,000. ¿Qué porcentaje de cada pago está excluido de impuestos (exclusion ratio)?",
      "answers": [
        {
          "id": "s6q27-a1",
          "text": "25%"
        },
        {
          "id": "s6q27-a2",
          "text": "50%"
        },
        {
          "id": "s6q27-a3",
          "text": "75%"
        },
        {
          "id": "s6q27-a4",
          "text": "100%"
        }
      ],
      "explanation": "Exclusion ratio = inversión ÷ rendimiento esperado = 100,000 ÷ 200,000 = 50%. Las demás no resultan de esa razón."
    },
    "correctAnswerId": "s6q27-a2"
  },
  {
    "id": "s6q28",
    "topic": "calculation",
    "simulator": 6,
    "en": {
      "question": "An owner surrenders their policy. They paid $25,000 in premiums (no dividends) and the cash value is $40,000. How much is taxable?",
      "answers": [
        {
          "id": "s6q28-a1",
          "text": "$40,000"
        },
        {
          "id": "s6q28-a2",
          "text": "$25,000"
        },
        {
          "id": "s6q28-a3",
          "text": "$15,000"
        },
        {
          "id": "s6q28-a4",
          "text": "$0"
        }
      ],
      "explanation": "Taxable = cash value − basis = 40,000 − 25,000 = $15,000. A: taxing all ignores basis. B: that’s the basis. D: there is gain."
    },
    "es": {
      "question": "Un dueño rescata su póliza. Pagó $25,000 en primas (sin dividendos) y el valor en efectivo es $40,000. ¿Cuánto es gravable?",
      "answers": [
        {
          "id": "s6q28-a1",
          "text": "$40,000"
        },
        {
          "id": "s6q28-a2",
          "text": "$25,000"
        },
        {
          "id": "s6q28-a3",
          "text": "$15,000"
        },
        {
          "id": "s6q28-a4",
          "text": "$0"
        }
      ],
      "explanation": "Gravable = valor en efectivo − base = 40,000 − 25,000 = $15,000. A: gravar todo ignora la base. B: es la base. D: sí hay ganancia."
    },
    "correctAnswerId": "s6q28-a3"
  },
  {
    "id": "s6q29",
    "topic": "taxes",
    "simulator": 6,
    "en": {
      "question": "An employer provides $90,000 of group term life insurance to an employee. On what amount is the imputed (taxable) income calculated?",
      "answers": [
        {
          "id": "s6q29-a1",
          "text": "$90,000"
        },
        {
          "id": "s6q29-a2",
          "text": "$50,000"
        },
        {
          "id": "s6q29-a3",
          "text": "$40,000"
        },
        {
          "id": "s6q29-a4",
          "text": "$0"
        }
      ],
      "explanation": "Tax-free up to $50,000; imputed income is calculated on the $40,000 excess. A: not all. B: that portion is free. D: there is excess."
    },
    "es": {
      "question": "Un empleador proporciona $90,000 de seguro de vida grupal de término a un empleado. ¿Sobre qué monto se calcula el ingreso imputado (gravable)?",
      "answers": [
        {
          "id": "s6q29-a1",
          "text": "$90,000"
        },
        {
          "id": "s6q29-a2",
          "text": "$50,000"
        },
        {
          "id": "s6q29-a3",
          "text": "$40,000"
        },
        {
          "id": "s6q29-a4",
          "text": "$0"
        }
      ],
      "explanation": "Libre hasta $50,000; el ingreso imputado se calcula sobre el exceso de $40,000. A: no todo. B: ese tramo es libre. D: sí hay exceso."
    },
    "correctAnswerId": "s6q29-a3"
  },
  {
    "id": "s6q30",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A traditional IRA holder meets the age requirements under current rules. At what age MUST they begin taking RMDs?",
      "answers": [
        {
          "id": "s6q30-a1",
          "text": "59½"
        },
        {
          "id": "s6q30-a2",
          "text": "70½"
        },
        {
          "id": "s6q30-a3",
          "text": "72"
        },
        {
          "id": "s6q30-a4",
          "text": "73"
        }
      ],
      "explanation": "RMD at 73 (SECURE 2.0). A: early penalty. B: old rule. C: no longer applies."
    },
    "es": {
      "question": "Un titular de IRA tradicional cumple los requisitos de edad bajo las reglas vigentes. ¿A qué edad DEBE comenzar a tomar sus RMD?",
      "answers": [
        {
          "id": "s6q30-a1",
          "text": "59½"
        },
        {
          "id": "s6q30-a2",
          "text": "70½"
        },
        {
          "id": "s6q30-a3",
          "text": "72"
        },
        {
          "id": "s6q30-a4",
          "text": "73"
        }
      ],
      "explanation": "RMD a los 73 (SECURE 2.0). A: penalidad temprana. B: regla antigua. C: ya no aplica."
    },
    "correctAnswerId": "s6q30-a4"
  },
  {
    "id": "s6q31",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A beneficiary chooses to receive $1,000 monthly until the benefit runs out. Which settlement option did they choose, and which variable is determined?",
      "answers": [
        {
          "id": "s6q31-a1",
          "text": "Fixed period; the amount is determined"
        },
        {
          "id": "s6q31-a2",
          "text": "Fixed amount; the time (how long it lasts) is determined"
        },
        {
          "id": "s6q31-a3",
          "text": "Interest only; principal is retained"
        },
        {
          "id": "s6q31-a4",
          "text": "Life only; for life"
        }
      ],
      "explanation": "Fixed amount until depleted = fixed amount; the time is determined. A: fixed period fixes time and computes the amount. C: retains principal. D: it’s for life."
    },
    "es": {
      "question": "Un beneficiario elige recibir $1,000 mensuales hasta agotar el beneficio. ¿Qué opción de liquidación eligió, y qué variable se determina?",
      "answers": [
        {
          "id": "s6q31-a1",
          "text": "Periodo fijo; se determina el monto"
        },
        {
          "id": "s6q31-a2",
          "text": "Monto fijo; se determina el tiempo (cuánto durará)"
        },
        {
          "id": "s6q31-a3",
          "text": "Interest only; se retiene el capital"
        },
        {
          "id": "s6q31-a4",
          "text": "Solo vida; de por vida"
        }
      ],
      "explanation": "Monto fijo hasta agotarse = fixed amount; se determina el tiempo. A: el fixed period fija el tiempo y calcula el monto. C: retiene capital. D: es de por vida."
    },
    "correctAnswerId": "s6q31-a2"
  },
  {
    "id": "s6q32",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A client paid $30,000 in premiums and received $5,000 in dividends. What is their cost basis?",
      "answers": [
        {
          "id": "s6q32-a1",
          "text": "$35,000"
        },
        {
          "id": "s6q32-a2",
          "text": "$30,000"
        },
        {
          "id": "s6q32-a3",
          "text": "$25,000"
        },
        {
          "id": "s6q32-a4",
          "text": "$5,000"
        }
      ],
      "explanation": "Basis = premiums − dividends = 30,000 − 5,000 = $25,000. A: adds instead of subtracts. B: ignores the dividends. D: only the dividends."
    },
    "es": {
      "question": "Un cliente pagó $30,000 en primas y recibió $5,000 en dividendos. ¿Cuál es su base de costo (cost basis)?",
      "answers": [
        {
          "id": "s6q32-a1",
          "text": "$35,000"
        },
        {
          "id": "s6q32-a2",
          "text": "$30,000"
        },
        {
          "id": "s6q32-a3",
          "text": "$25,000"
        },
        {
          "id": "s6q32-a4",
          "text": "$5,000"
        }
      ],
      "explanation": "Base = primas − dividendos = 30,000 − 5,000 = $25,000. A: suma en vez de restar. B: ignora los dividendos. D: solo los dividendos."
    },
    "correctAnswerId": "s6q32-a3"
  },
  {
    "id": "s6q33",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A policy has a $250,000 death benefit and an outstanding loan of $20,000 plus interest at the insured’s death. The beneficiary receives:",
      "answers": [
        {
          "id": "s6q33-a1",
          "text": "$250,000"
        },
        {
          "id": "s6q33-a2",
          "text": "$270,000"
        },
        {
          "id": "s6q33-a3",
          "text": "$250,000 minus the loan and its interest"
        },
        {
          "id": "s6q33-a4",
          "text": "$0"
        }
      ],
      "explanation": "The outstanding loan reduces the benefit by the balance plus interest. A: ignores the loan. B: not added. D: not voided."
    },
    "es": {
      "question": "Una póliza tiene un beneficio por muerte de $250,000 y un préstamo pendiente de $20,000 más intereses al morir el asegurado. El beneficiario recibe:",
      "answers": [
        {
          "id": "s6q33-a1",
          "text": "$250,000"
        },
        {
          "id": "s6q33-a2",
          "text": "$270,000"
        },
        {
          "id": "s6q33-a3",
          "text": "$250,000 menos el préstamo y sus intereses"
        },
        {
          "id": "s6q33-a4",
          "text": "$0"
        }
      ],
      "explanation": "El préstamo pendiente reduce el beneficio por el saldo más intereses. A: ignora el préstamo. B: no se suma. D: no se anula."
    },
    "correctAnswerId": "s6q33-a3"
  },
  {
    "id": "s6q34",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "Which of the following 1035 exchanges can be done WITHOUT recognizing taxable gain?",
      "answers": [
        {
          "id": "s6q34-a1",
          "text": "Annuity to life"
        },
        {
          "id": "s6q34-a2",
          "text": "Life to annuity"
        },
        {
          "id": "s6q34-a3",
          "text": "Annuity to health"
        },
        {
          "id": "s6q34-a4",
          "text": "Health to life"
        }
      ],
      "explanation": "1035 allows life → annuity tax-free. A: annuity→life NO. C/D: health doesn’t participate this way."
    },
    "es": {
      "question": "¿Cuál de los siguientes intercambios 1035 puede hacerse SIN reconocer ganancia gravable?",
      "answers": [
        {
          "id": "s6q34-a1",
          "text": "Anualidad a vida"
        },
        {
          "id": "s6q34-a2",
          "text": "Vida a anualidad"
        },
        {
          "id": "s6q34-a3",
          "text": "Anualidad a salud"
        },
        {
          "id": "s6q34-a4",
          "text": "Salud a vida"
        }
      ],
      "explanation": "1035 permite vida → anualidad sin impuesto. A: anualidad→vida NO. C/D: salud no participa así."
    },
    "correctAnswerId": "s6q34-a2"
  },
  {
    "id": "s6q35",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A client under 59½ withdraws $10,000 of gain from a non-qualified annuity. How is it taxed under LIFO?",
      "answers": [
        {
          "id": "s6q35-a1",
          "text": "Tax-free"
        },
        {
          "id": "s6q35-a2",
          "text": "As taxable gain, plus a 10% penalty"
        },
        {
          "id": "s6q35-a3",
          "text": "As a return of basis, tax-free"
        },
        {
          "id": "s6q35-a4",
          "text": "Not permitted"
        }
      ],
      "explanation": "Non-qualified annuity: LIFO gain taxable + 10% if under 59½. A/C: the gain is taxed. D: it is permitted."
    },
    "es": {
      "question": "Un cliente menor de 59½ retira $10,000 de ganancia de una anualidad no calificada. ¿Cómo se grava bajo LIFO?",
      "answers": [
        {
          "id": "s6q35-a1",
          "text": "Libre de impuesto"
        },
        {
          "id": "s6q35-a2",
          "text": "Como ganancia gravable, más penalidad del 10%"
        },
        {
          "id": "s6q35-a3",
          "text": "Como retorno de base, libre"
        },
        {
          "id": "s6q35-a4",
          "text": "No está permitido"
        }
      ],
      "explanation": "Anualidad no calificada: ganancia LIFO gravable + 10% si <59½. A/C: la ganancia sí se grava. D: sí está permitido."
    },
    "correctAnswerId": "s6q35-a2"
  },
  {
    "id": "s6q36",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A 50-year-old client withdraws funds from a qualified plan with no applicable exception. In addition to ordinary income tax, they pay a penalty of:",
      "answers": [
        {
          "id": "s6q36-a1",
          "text": "5%"
        },
        {
          "id": "s6q36-a2",
          "text": "10%"
        },
        {
          "id": "s6q36-a3",
          "text": "20%"
        },
        {
          "id": "s6q36-a4",
          "text": "50%"
        }
      ],
      "explanation": "Early withdrawal from a qualified plan = 10% penalty. A/C/D are not the penalty."
    },
    "es": {
      "question": "Un cliente de 50 años retira fondos de un plan calificado sin excepción aplicable. Además del impuesto ordinario, paga una penalidad de:",
      "answers": [
        {
          "id": "s6q36-a1",
          "text": "5%"
        },
        {
          "id": "s6q36-a2",
          "text": "10%"
        },
        {
          "id": "s6q36-a3",
          "text": "20%"
        },
        {
          "id": "s6q36-a4",
          "text": "50%"
        }
      ],
      "explanation": "Retiro temprano de plan calificado = penalidad del 10%. A/C/D no son la penalidad."
    },
    "correctAnswerId": "s6q36-a2"
  },
  {
    "id": "s6q37",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A client wants a Universal Life whose death benefit GROWS along with the cash value. Which option is MOST appropriate?",
      "answers": [
        {
          "id": "s6q37-a1",
          "text": "Option A (level)"
        },
        {
          "id": "s6q37-a2",
          "text": "Option B (face amount + cash value)"
        },
        {
          "id": "s6q37-a3",
          "text": "Decreasing term"
        },
        {
          "id": "s6q37-a4",
          "text": "Single premium"
        }
      ],
      "explanation": "DB growing with the cash value = Option B. A: A is level. C/D: do not apply."
    },
    "es": {
      "question": "Un cliente quiere una Universal Life cuyo beneficio por muerte CREZCA junto con el valor en efectivo. ¿Qué opción es la MÁS apropiada?",
      "answers": [
        {
          "id": "s6q37-a1",
          "text": "Opción A (nivelada)"
        },
        {
          "id": "s6q37-a2",
          "text": "Opción B (suma asegurada + valor en efectivo)"
        },
        {
          "id": "s6q37-a3",
          "text": "Término decreciente"
        },
        {
          "id": "s6q37-a4",
          "text": "Prima única"
        }
      ],
      "explanation": "DB creciente con el valor en efectivo = Opción B. A: la A es nivelada. C/D: no aplican."
    },
    "correctAnswerId": "s6q37-a2"
  },
  {
    "id": "s6q38",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "The insured dies. The primary beneficiary had died earlier; there is a living contingent. Who collects FIRST?",
      "answers": [
        {
          "id": "s6q38-a1",
          "text": "The primary’s estate"
        },
        {
          "id": "s6q38-a2",
          "text": "The contingent beneficiary"
        },
        {
          "id": "s6q38-a3",
          "text": "The insured’s estate"
        },
        {
          "id": "s6q38-a4",
          "text": "The insurer"
        }
      ],
      "explanation": "The contingent collects (the primary didn’t survive). A/C: don’t apply if a contingent is alive. D: the insurer doesn’t collect."
    },
    "es": {
      "question": "El asegurado muere. El beneficiario primario había fallecido antes; hay un contingente vivo. ¿Quién cobra PRIMERO?",
      "answers": [
        {
          "id": "s6q38-a1",
          "text": "El estate del primario"
        },
        {
          "id": "s6q38-a2",
          "text": "El beneficiario contingente"
        },
        {
          "id": "s6q38-a3",
          "text": "El estate del asegurado"
        },
        {
          "id": "s6q38-a4",
          "text": "La aseguradora"
        }
      ],
      "explanation": "Cobra el contingente (el primario no sobrevivió). A/C: no aplican si hay contingente vivo. D: no cobra la aseguradora."
    },
    "correctAnswerId": "s6q38-a2"
  },
  {
    "id": "s6q39",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "In the application process, who acts as the FIRST underwriter?",
      "answers": [
        {
          "id": "s6q39-a1",
          "text": "The actuary"
        },
        {
          "id": "s6q39-a2",
          "text": "The agent (field underwriting)"
        },
        {
          "id": "s6q39-a3",
          "text": "The MIB"
        },
        {
          "id": "s6q39-a4",
          "text": "The reinsurer"
        }
      ],
      "explanation": "The agent is the first underwriter (field underwriting). A/C/D act later or don’t evaluate at the start."
    },
    "es": {
      "question": "En el proceso de solicitud, ¿quién actúa como el PRIMER underwriter?",
      "answers": [
        {
          "id": "s6q39-a1",
          "text": "El actuario"
        },
        {
          "id": "s6q39-a2",
          "text": "El agente (evaluación inicial de campo)"
        },
        {
          "id": "s6q39-a3",
          "text": "El MIB"
        },
        {
          "id": "s6q39-a4",
          "text": "El reasegurador"
        }
      ],
      "explanation": "El agente es el primer underwriter (evaluación inicial de campo). A/C/D actúan después o no evalúan al inicio."
    },
    "correctAnswerId": "s6q39-a2"
  },
  {
    "id": "s6q40",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A client pays a large single premium and the policy fails the 7-pay test. The PRIMARY consequence is:",
      "answers": [
        {
          "id": "s6q40-a1",
          "text": "They lose the death benefit"
        },
        {
          "id": "s6q40-a2",
          "text": "It is classified as a MEC and its in-life distributions are taxed LIFO (+10% if under 59½)"
        },
        {
          "id": "s6q40-a3",
          "text": "It becomes term"
        },
        {
          "id": "s6q40-a4",
          "text": "The premium goes up"
        }
      ],
      "explanation": "Failing the 7-pay test → MEC, distributions LIFO (+10% if under 59½). A: it keeps the DB. C/D: that doesn’t happen."
    },
    "es": {
      "question": "Un cliente paga una prima única grande y la póliza falla el 7-pay test. La consecuencia PRINCIPAL es:",
      "answers": [
        {
          "id": "s6q40-a1",
          "text": "Pierde el beneficio por muerte"
        },
        {
          "id": "s6q40-a2",
          "text": "Se clasifica como MEC y sus distribuciones en vida se gravan LIFO (+10% si es menor de 59 1/2)"
        },
        {
          "id": "s6q40-a3",
          "text": "Se convierte en término"
        },
        {
          "id": "s6q40-a4",
          "text": "Sube la prima"
        }
      ],
      "explanation": "Fallar el 7-pay test → MEC, distribuciones LIFO (+10% si <59½). A: conserva el DB. C/D: no ocurre eso."
    },
    "correctAnswerId": "s6q40-a2"
  },
  {
    "id": "s6q41",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An insured with a terminal illness wants to access part of their benefit while alive. Which rider allows this, reducing the final benefit?",
      "answers": [
        {
          "id": "s6q41-a1",
          "text": "Accidental Death Benefit"
        },
        {
          "id": "s6q41-a2",
          "text": "Accelerated Death Benefit"
        },
        {
          "id": "s6q41-a3",
          "text": "Waiver of Premium"
        },
        {
          "id": "s6q41-a4",
          "text": "Return of Premium"
        }
      ],
      "explanation": "Collecting while alive for terminal illness, reducing the DB = Accelerated Death Benefit. A: for accident. C: waives premiums. D: refunds premiums."
    },
    "es": {
      "question": "Un asegurado con enfermedad terminal quiere acceder en vida a parte de su beneficio. ¿Qué rider lo permite, reduciendo el beneficio final?",
      "answers": [
        {
          "id": "s6q41-a1",
          "text": "Beneficio por muerte accidental"
        },
        {
          "id": "s6q41-a2",
          "text": "Beneficio acelerado por muerte"
        },
        {
          "id": "s6q41-a3",
          "text": "Exención de prima"
        },
        {
          "id": "s6q41-a4",
          "text": "Devolución de prima"
        }
      ],
      "explanation": "Cobrar en vida por enfermedad terminal, reduciendo el DB = beneficio acelerado por muerte. A: es por accidente. C: exime primas. D: devuelve primas."
    },
    "correctAnswerId": "s6q41-a2"
  },
  {
    "id": "s6q42",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "The PRIMARY purpose of an annuity is to protect against the risk of:",
      "answers": [
        {
          "id": "s6q42-a1",
          "text": "Dying prematurely"
        },
        {
          "id": "s6q42-a2",
          "text": "Living longer than one’s savings last (longevity)"
        },
        {
          "id": "s6q42-a3",
          "text": "Disability"
        },
        {
          "id": "s6q42-a4",
          "text": "Fire"
        }
      ],
      "explanation": "The annuity protects against living too long (longevity). A: that’s life insurance. C/D: not its purpose."
    },
    "es": {
      "question": "El propósito PRINCIPAL de una anualidad es proteger contra el riesgo de:",
      "answers": [
        {
          "id": "s6q42-a1",
          "text": "Morir prematuramente"
        },
        {
          "id": "s6q42-a2",
          "text": "Vivir más de lo que duran los ahorros (longevidad)"
        },
        {
          "id": "s6q42-a3",
          "text": "Discapacidad"
        },
        {
          "id": "s6q42-a4",
          "text": "Incendio"
        }
      ],
      "explanation": "La anualidad protege contra vivir demasiado (longevidad). A: eso es el seguro de vida. C/D: no son su propósito."
    },
    "correctAnswerId": "s6q42-a2"
  },
  {
    "id": "s6q43",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An applicant pays the premium and receives a conditional receipt. They die before issue, but were insurable as applied. The insurer MOST likely:",
      "answers": [
        {
          "id": "s6q43-a1",
          "text": "Does not pay"
        },
        {
          "id": "s6q43-a2",
          "text": "Pays the benefit"
        },
        {
          "id": "s6q43-a3",
          "text": "Refunds only the premium"
        },
        {
          "id": "s6q43-a4",
          "text": "Pays half"
        }
      ],
      "explanation": "Conditional receipt + insurable = pays. A: it pays if they were insurable. C/D: do not apply."
    },
    "es": {
      "question": "Un solicitante paga la prima y recibe un recibo condicional. Muere antes de la emisión, pero era asegurable como se solicitó. La aseguradora MÁS probablemente:",
      "answers": [
        {
          "id": "s6q43-a1",
          "text": "No paga"
        },
        {
          "id": "s6q43-a2",
          "text": "Paga el beneficio"
        },
        {
          "id": "s6q43-a3",
          "text": "Devuelve solo la prima"
        },
        {
          "id": "s6q43-a4",
          "text": "Paga la mitad"
        }
      ],
      "explanation": "Conditional receipt + asegurable = paga. A: sí paga si era asegurable. C/D: no corresponde."
    },
    "correctAnswerId": "s6q43-a2"
  },
  {
    "id": "s6q44",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent wants to recommend a variable annuity. In addition to a life license, they MUST have:",
      "answers": [
        {
          "id": "s6q44-a1",
          "text": "A health license"
        },
        {
          "id": "s6q44-a2",
          "text": "A securities registration"
        },
        {
          "id": "s6q44-a3",
          "text": "Nothing"
        },
        {
          "id": "s6q44-a4",
          "text": "A property license"
        }
      ],
      "explanation": "Variable = security → securities registration in addition to the life license. A/D: other lines. C: something more is required."
    },
    "es": {
      "question": "Un agente quiere recomendar una anualidad variable. Además de su licencia de vida, DEBE tener:",
      "answers": [
        {
          "id": "s6q44-a1",
          "text": "Una licencia de salud"
        },
        {
          "id": "s6q44-a2",
          "text": "Un registro de valores (securities)"
        },
        {
          "id": "s6q44-a3",
          "text": "Nada"
        },
        {
          "id": "s6q44-a4",
          "text": "Una licencia de propiedad"
        }
      ],
      "explanation": "Variable = security → registro de valores además de la licencia de vida. A/D: otras líneas. C: sí requiere algo más."
    },
    "correctAnswerId": "s6q44-a2"
  },
  {
    "id": "s6q45",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An insured becomes totally disabled and cannot work. The rider they would MOST benefit from having purchased is:",
      "answers": [
        {
          "id": "s6q45-a1",
          "text": "Accidental Death Benefit"
        },
        {
          "id": "s6q45-a2",
          "text": "Waiver of Premium"
        },
        {
          "id": "s6q45-a3",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s6q45-a4",
          "text": "Return of Premium"
        }
      ],
      "explanation": "Total disability → Waiver of Premium. A: for accidental death. C: future purchase. D: refunds premiums."
    },
    "es": {
      "question": "Un asegurado queda totalmente discapacitado y no puede trabajar. El rider que MÁS le conviene haber adquirido es:",
      "answers": [
        {
          "id": "s6q45-a1",
          "text": "Beneficio por muerte accidental"
        },
        {
          "id": "s6q45-a2",
          "text": "Exención de prima"
        },
        {
          "id": "s6q45-a3",
          "text": "Guaranteed Insurability"
        },
        {
          "id": "s6q45-a4",
          "text": "Devolución de prima"
        }
      ],
      "explanation": "Discapacidad total → Waiver of prima. A: por muerte accidental. C: compra futura. D: devuelve primas."
    },
    "correctAnswerId": "s6q45-a2"
  },
  {
    "id": "s6q46",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "After death it is discovered that the insured stated a lower age and paid too little. The insurer MOST likely:",
      "answers": [
        {
          "id": "s6q46-a1",
          "text": "Voids the policy"
        },
        {
          "id": "s6q46-a2",
          "text": "Adjusts the benefit to what the premium would have bought at the correct age"
        },
        {
          "id": "s6q46-a3",
          "text": "Pays double"
        },
        {
          "id": "s6q46-a4",
          "text": "Refunds the premiums"
        }
      ],
      "explanation": "Misstatement of age → adjust the benefit. A: not void. C/D: do not apply."
    },
    "es": {
      "question": "Tras la muerte se descubre que el asegurado declaró una edad menor y pagó de menos. La aseguradora MÁS probablemente:",
      "answers": [
        {
          "id": "s6q46-a1",
          "text": "Anula la póliza"
        },
        {
          "id": "s6q46-a2",
          "text": "Ajusta el beneficio a lo que la prima habría comprado a la edad correcta"
        },
        {
          "id": "s6q46-a3",
          "text": "Paga el doble"
        },
        {
          "id": "s6q46-a4",
          "text": "Devuelve las primas"
        }
      ],
      "explanation": "Misstatement of age → ajustan el beneficio. A: no anulan. C/D: no aplican."
    },
    "correctAnswerId": "s6q46-a2"
  },
  {
    "id": "s6q47",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An insurer discovers, 3 years after the policy was issued, a non-fraudulent error in the application. It MAY:",
      "answers": [
        {
          "id": "s6q47-a1",
          "text": "Void the policy"
        },
        {
          "id": "s6q47-a2",
          "text": "Not void it: the 2-year contestable period has passed"
        },
        {
          "id": "s6q47-a3",
          "text": "Double the premium"
        },
        {
          "id": "s6q47-a4",
          "text": "Cancel without payment"
        }
      ],
      "explanation": "At 3 years (>2) they can no longer void for the application (incontestability). A/D: they cannot. C: does not apply."
    },
    "es": {
      "question": "Una aseguradora descubre, a los 3 años de emitida la póliza, un error no fraudulento en la solicitud. PUEDE:",
      "answers": [
        {
          "id": "s6q47-a1",
          "text": "Anular la póliza"
        },
        {
          "id": "s6q47-a2",
          "text": "No anularla: ya pasó el periodo contestable de 2 años"
        },
        {
          "id": "s6q47-a3",
          "text": "Duplicar la prima"
        },
        {
          "id": "s6q47-a4",
          "text": "Cancelar sin pago"
        }
      ],
      "explanation": "A los 3 años (>2) ya no pueden anular por la solicitud (incontestability). A/D: no pueden. C: no aplica."
    },
    "correctAnswerId": "s6q47-a2"
  },
  {
    "id": "s6q48",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "A mother designates her 3 children “per stirpes.” One child dies before her, leaving 2 grandchildren. When the mother dies, what do those 2 grandchildren receive TOGETHER?",
      "answers": [
        {
          "id": "s6q48-a1",
          "text": "Nothing"
        },
        {
          "id": "s6q48-a2",
          "text": "One-third of the benefit (their parent’s share)"
        },
        {
          "id": "s6q48-a3",
          "text": "Half"
        },
        {
          "id": "s6q48-a4",
          "text": "All"
        }
      ],
      "explanation": "Per stirpes: the 2 grandchildren share their parent’s portion (one-third). A: they do receive. C/D: not half nor all."
    },
    "es": {
      "question": "Una madre designa a sus 3 hijos “per stirpes”. Un hijo muere antes que ella, dejando 2 nietos. Al morir la madre, ¿qué reciben esos 2 nietos EN CONJUNTO?",
      "answers": [
        {
          "id": "s6q48-a1",
          "text": "Nada"
        },
        {
          "id": "s6q48-a2",
          "text": "Un tercio del beneficio (la porción del hijo fallecido)"
        },
        {
          "id": "s6q48-a3",
          "text": "La mitad"
        },
        {
          "id": "s6q48-a4",
          "text": "Todo"
        }
      ],
      "explanation": "Per stirpes: los 2 nietos comparten la porción de su padre (un tercio). A: sí reciben. C/D: no es la mitad ni todo."
    },
    "correctAnswerId": "s6q48-a2"
  },
  {
    "id": "s6q49",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent recommends replacing an annuity with another that has higher charges and no clear benefit to the client, solely for commission. This primarily violates:",
      "answers": [
        {
          "id": "s6q49-a1",
          "text": "The suitability / best interest standard"
        },
        {
          "id": "s6q49-a2",
          "text": "No rule"
        },
        {
          "id": "s6q49-a3",
          "text": "The grace period"
        },
        {
          "id": "s6q49-a4",
          "text": "The free look"
        }
      ],
      "explanation": "Replacement with no client benefit, solely for commission, violates suitability/best interest. B: it does violate a rule. C/D: not the relevant ones."
    },
    "es": {
      "question": "Un agente recomienda reemplazar una anualidad por otra con mayores cargos y sin beneficio claro para el cliente, solo por comisión. Esto viola principalmente:",
      "answers": [
        {
          "id": "s6q49-a1",
          "text": "El estándar de idoneidad / mejor interés"
        },
        {
          "id": "s6q49-a2",
          "text": "Ninguna regla"
        },
        {
          "id": "s6q49-a3",
          "text": "El periodo de gracia"
        },
        {
          "id": "s6q49-a4",
          "text": "El periodo de revisión gratuita"
        }
      ],
      "explanation": "Reemplazo sin beneficio para el cliente, solo por comisión, viola la idoneidad/mejor interés. B: sí viola una regla. C/D: no son lo relevante."
    },
    "correctAnswerId": "s6q49-a1"
  },
  {
    "id": "s6q50",
    "topic": "general",
    "simulator": 6,
    "en": {
      "question": "An agent meets with an 80-year-old couple interested in an annuity. What should be their FIRST step to act in the couple’s best interest?",
      "answers": [
        {
          "id": "s6q50-a1",
          "text": "Close the sale immediately"
        },
        {
          "id": "s6q50-a2",
          "text": "Gather and document their financial situation, objectives, and liquidity needs"
        },
        {
          "id": "s6q50-a3",
          "text": "Recommend the highestcommission product"
        },
        {
          "id": "s6q50-a4",
          "text": "Skip the disclosure of charges"
        }
      ],
      "explanation": "The FIRST step is to gather and document the couple’s situation. A/C/D put the sale or commission before the client."
    },
    "es": {
      "question": "Una agente se reúne con un matrimonio de 80 años interesado en una anualidad. ¿Cuál debe ser su PRIMER paso para actuar en el mejor interés de ellos?",
      "answers": [
        {
          "id": "s6q50-a1",
          "text": "Cerrar la venta de inmediato"
        },
        {
          "id": "s6q50-a2",
          "text": "Recabar y documentar su situación financiera, objetivos y necesidades de liquidez"
        },
        {
          "id": "s6q50-a3",
          "text": "Recomendar el producto de mayor comisión"
        },
        {
          "id": "s6q50-a4",
          "text": "Omitir la divulgación de cargos"
        }
      ],
      "explanation": "El PRIMER paso es recabar y documentar la situación del matrimonio. A/C/D anteponen la venta o la comisión al cliente."
    },
    "correctAnswerId": "s6q50-a2"
  }
];
