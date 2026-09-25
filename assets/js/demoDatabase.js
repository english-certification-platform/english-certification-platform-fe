const STORAGE_KEY = "aptisprep-demo-database-v1";

export const demoDatabaseSeed = {
  users: [
    { id: 1, fullName: "Alex Morgan", email: "student@aptisprep.demo", role: "STUDENT", status: "ACTIVE", createdAt: "2026-08-12T08:00:00Z" },
    { id: 2, fullName: "Linh Nguyen", email: "linh@aptisprep.demo", role: "STUDENT", status: "ACTIVE", createdAt: "2026-08-18T09:30:00Z" },
    { id: 3, fullName: "Admin User", email: "admin@aptisprep.demo", role: "ADMIN", status: "ACTIVE", createdAt: "2026-08-01T07:00:00Z" },
  ],
  lessons: [
    { id: 1, title: "Verb forms and tense", description: "Review present, past and perfect verb forms.", component: "GRAMMAR", videoPath: null, status: "PUBLISHED", position: 1 },
    { id: 2, title: "Vocabulary in context", description: "Choose words using sentence-level context clues.", component: "VOCABULARY", videoPath: null, status: "PUBLISHED", position: 2 },
    { id: 3, title: "Reading cohesion", description: "Identify links that create a coherent text.", component: "READING", videoPath: null, status: "PUBLISHED", position: 3 },
    { id: 4, title: "Speaking part one", description: "Answer personal questions clearly within 30 seconds.", component: "SPEAKING", videoPath: null, status: "PUBLISHED", position: 4 },
  ],
  lessonProgress: [
    { id: 1, userId: 1, lessonId: 1, completedAt: "2026-09-08T10:25:00Z", lastAccessedAt: "2026-09-11T09:10:00Z" },
    { id: 2, userId: 1, lessonId: 2, completedAt: "2026-09-09T11:05:00Z", lastAccessedAt: "2026-09-11T09:20:00Z" },
    { id: 3, userId: 1, lessonId: 3, completedAt: null, lastAccessedAt: "2026-09-11T09:30:00Z" },
  ],
  flashcards: [
    { id: 1, lessonId: 2, term: "allocate", definition: "to distribute something for a particular purpose", example: "The teacher allocated ten minutes to the task.", position: 1 },
    { id: 2, lessonId: 2, term: "coherent", definition: "logical and easy to understand", example: "Her explanation was clear and coherent.", position: 2 },
    { id: 3, lessonId: 3, term: "however", definition: "used to introduce a contrasting statement", example: "The task was difficult; however, we completed it.", position: 1 },
  ],
  questions: [
    {
      id: 1,
      component: "GRAMMAR",
      partNo: 1,
      questionType: "SINGLE_CHOICE",
      content: "By the time we arrived at the station, the train _____.",
      difficulty: "MEDIUM",
      status: "ACTIVE",
      correctOptionId: 2,
      explanation: "Past perfect describes an action completed before another past action.",
    },
    {
      id: 2,
      component: "VOCABULARY",
      partNo: 1,
      questionType: "MATCHING",
      content: "Match each word to the closest meaning.",
      difficulty: "MEDIUM",
      status: "ACTIVE",
      correctOptionId: null,
      explanation: null,
    },
    {
      id: 3,
      component: "READING",
      partNo: 2,
      questionType: "ORDERING",
      content: "Order the sentences to make a coherent story.",
      difficulty: "MEDIUM",
      status: "ACTIVE",
      correctOptionId: null,
      explanation: null,
    },
    {
      id: 4,
      component: "WRITING",
      partNo: 2,
      questionType: "TEXT_RESPONSE",
      content: "Write 20-30 words explaining why you want to join a travel club.",
      difficulty: "MEDIUM",
      status: "ACTIVE",
      correctOptionId: null,
      explanation: null,
    },
    {
      id: 5,
      component: "SPEAKING",
      partNo: 1,
      questionType: "AUDIO_RESPONSE",
      content: "Please tell me about your hometown or city.",
      difficulty: "EASY",
      status: "ACTIVE",
      correctOptionId: null,
      explanation: null,
    },
  ],
  questionOptions: [
    { id: 1, questionId: 1, content: "has already left", position: 1 },
    { id: 2, questionId: 1, content: "had already left", position: 2 },
    { id: 3, questionId: 1, content: "already leaves", position: 3 },
    { id: 4, questionId: 2, content: "distribute", position: 1 },
    { id: 5, questionId: 2, content: "select", position: 2 },
    { id: 6, questionId: 2, content: "improve", position: 3 },
  ],
  questionItems: [
    { id: 1, questionId: 2, content: "allocate", correctOptionId: 4, correctPosition: null, displayPosition: 1 },
    { id: 2, questionId: 2, content: "choose", correctOptionId: 5, correctPosition: null, displayPosition: 2 },
    { id: 3, questionId: 3, content: "She checked the train schedule.", correctOptionId: null, correctPosition: 1, displayPosition: 3 },
    { id: 4, questionId: 3, content: "She bought a ticket online.", correctOptionId: null, correctPosition: 2, displayPosition: 1 },
    { id: 5, questionId: 3, content: "She arrived at the station early.", correctOptionId: null, correctPosition: 3, displayPosition: 2 },
  ],
  mockExams: [
    { id: 7, title: "Aptis General Mock 07", description: "Objective practice with Writing and Speaking samples.", version: 1, status: "PUBLISHED", durationMinutes: 50, publishedAt: "2026-09-01T08:00:00Z" },
  ],
  mockExamQuestions: [
    { id: 1, mockExamId: 7, questionId: 1, position: 1 },
    { id: 2, mockExamId: 7, questionId: 2, position: 2 },
    { id: 3, mockExamId: 7, questionId: 3, position: 3 },
    { id: 4, mockExamId: 7, questionId: 4, position: 4 },
    { id: 5, mockExamId: 7, questionId: 5, position: 5 },
  ],
  examAttempts: [
    {
      id: 101,
      userId: 1,
      mockExamId: 7,
      startedAt: "2026-09-11T08:00:00Z",
      submittedAt: "2026-09-11T08:38:00Z",
      status: "COMPLETED",
      grammarVocabularyScore: 38,
      readingScore: 36,
      listeningScore: 37,
      writingScore: 35,
      speakingScore: 34,
      finalScaleScore: 142,
      estimatedCefr: "B2",
    },
  ],
  userAnswers: [
    { id: 1, examAttemptId: 101, questionId: 1, selectedOptionId: 2, answerText: null, audioAnswerPath: null, recordingDurationSeconds: null, aiScore: null, aiFeedback: null, aiGradingStatus: "NOT_REQUESTED" },
    { id: 2, examAttemptId: 101, questionId: 2, selectedOptionId: null, answerText: null, audioAnswerPath: null, recordingDurationSeconds: null, aiScore: null, aiFeedback: null, aiGradingStatus: "NOT_REQUESTED" },
    { id: 3, examAttemptId: 101, questionId: 4, selectedOptionId: null, answerText: "I enjoy discovering new places and learning about different cultures with other travellers.", audioAnswerPath: null, recordingDurationSeconds: null, aiScore: 35, aiFeedback: "Clear response with relevant reasons. Add more detail and varied linking words.", aiGradingStatus: "COMPLETED" },
    { id: 4, examAttemptId: 101, questionId: 5, selectedOptionId: null, answerText: null, audioAnswerPath: "/demo/audio/speaking-attempt-101.webm", recordingDurationSeconds: 27, aiScore: 34, aiFeedback: "The response is understandable and relevant. Improve fluency and sentence variety.", aiGradingStatus: "COMPLETED" },
  ],
  userAnswerDetails: [
    { id: 1, userAnswerId: 2, questionItemId: 1, selectedOptionId: 4, userPosition: null },
    { id: 2, userAnswerId: 2, questionItemId: 2, selectedOptionId: 5, userPosition: null },
  ],
};

const clone = value => JSON.parse(JSON.stringify(value));

export function loadDemoDatabase() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // Private browsing or storage policies can disable localStorage.
  }
  return clone(demoDatabaseSeed);
}

export function saveDemoDatabase(database) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(database));
}

export function resetDemoDatabase() {
  const database = clone(demoDatabaseSeed);
  try {
    saveDemoDatabase(database);
  } catch {
    // The in-memory demo remains usable when storage is unavailable.
  }
  return database;
}

