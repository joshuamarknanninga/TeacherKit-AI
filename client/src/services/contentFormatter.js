const gptStyleMap = {
  lesson: 'Lesson Plan Architect',
  parent: 'Homeschool Mastermind Plus',
  substitute: 'Educational Tutor',
  grading: 'STAAR Assistant',
  behavior: 'Inclusive Education Assistant',
  bellRinger: 'TEKS Mastery Coach',
  rubric: 'Homeschool Helper',
  procedure: "The Playwright's Scholar"
};

const dateStamp = () => new Date().toLocaleString();

export function formatGeneratedContent(formData) {
  const { type, title, subject, grade, objective, notes } = formData;
  const coach = gptStyleMap[type] || 'TeacherKit AI Core Coach';
  const baseTitle = title?.trim() || `${subject} ${type} Plan`;

  const sections = {
    lesson: [
      `Warm-Up: Prompt students with a 5-minute entry task connected to ${objective || subject}.`,
      `Mini-Lesson: Model one clear skill step using think-aloud strategies and board visuals.`,
      `Guided Practice: Pair students to complete one scaffolded task and discuss reasoning.`,
      `Independent Practice: Assign a short task with differentiated support options.`,
      `Exit Ticket: 2-question check for understanding and next-step reteach notes.`
    ],
    parent: [
      `Greeting: Hi families, here is a quick update from our ${subject} class.`,
      `Focus: This week we are learning ${objective || 'a key classroom standard'}.`,
      `Progress: Students are practicing through collaborative and independent activities.`,
      `Support at Home: Ask your learner to explain one strategy they used today.`,
      `Closing: Thank you for partnering with us—please reach out with any questions.`
    ],
    substitute: [
      `Class Snapshot: ${grade} ${subject} with routines posted and seating chart available.`,
      `Schedule: Bell ringer, mini-lesson recap, guided activity, independent work, closure.`,
      `Behavior Expectations: Respectful voice levels, accountable talk, task completion.`,
      `Emergency Plan: Office extension noted and student helpers identified.`,
      `End-of-Day Notes: Record attendance, unfinished work, and behavior highlights.`
    ],
    grading: [
      `Strength Highlight: Student demonstrates progress in ${objective || subject} foundations.`,
      `Evidence: Work shows consistency with class expectations and standards-aligned thinking.`,
      `Growth Area: Improve explanation depth and academic vocabulary usage.`,
      `Next Step: Practice with targeted feedback cycle and revision checklist.`
    ],
    behavior: [
      `Observation: During ${subject}, student struggled to follow procedure expectations.`,
      `Action Taken: Teacher provided redirect, choice options, and calm reset support.`,
      `Student Response: Student re-engaged after restorative check-in conversation.`,
      `Follow-Up: Monitor next class with proactive cue and positive reinforcement.`
    ],
    bellRinger: [
      `Prompt 1: Quick recall question tied to prior ${subject} lesson.`,
      `Prompt 2: One challenge extension for advanced learners.`,
      `Discussion Cue: Turn-and-talk using evidence-based sentence stems.`
    ],
    rubric: [
      `Criteria 1: Content mastery and standards alignment.`,
      `Criteria 2: Organization, clarity, and academic language.`,
      `Criteria 3: Creativity, application, and reflection quality.`,
      `Scoring Bands: 4-Exceeds, 3-Meets, 2-Developing, 1-Beginning.`
    ],
    procedure: [
      `Routine Name: ${baseTitle}`,
      `Teach It: Explicitly model with visuals and student-friendly language.`,
      `Practice It: Rehearse with role-play and immediate corrective feedback.`,
      `Reinforce It: Celebrate consistency and reset when needed.`,
      `Reflect It: Weekly class check-in to refine and sustain expectations.`
    ]
  };

  return {
    id: crypto.randomUUID(),
    type,
    title: baseTitle,
    subject,
    grade,
    objective,
    notes,
    coach,
    createdAt: dateStamp(),
    body: (sections[type] || sections.lesson).join('\n')
  };
}
