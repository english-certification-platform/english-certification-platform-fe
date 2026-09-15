import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        login: resolve(import.meta.dirname, "index.html"),
        register: resolve(import.meta.dirname, "register.html"),
        studentDashboard: resolve(import.meta.dirname, "student/dashboard.html"),
        studentCertifications: resolve(import.meta.dirname, "student/certifications.html"),
        studentTopics: resolve(import.meta.dirname, "student/topics.html"),
        studentMockTest: resolve(import.meta.dirname, "student/mock-test.html"),
        studentReview: resolve(import.meta.dirname, "student/review.html"),
        studentHistory: resolve(import.meta.dirname, "student/history.html"),
        adminOverview: resolve(import.meta.dirname, "admin/index.html"),
        adminQuestions: resolve(import.meta.dirname, "admin/questions.html"),
        adminTests: resolve(import.meta.dirname, "admin/tests.html"),
        adminUsers: resolve(import.meta.dirname, "admin/users.html"),
        adminAnalytics: resolve(import.meta.dirname, "admin/analytics.html"),
      },
    },
  },
  server: { host: "0.0.0.0", port: 5173 },
  preview: { host: "0.0.0.0", port: 4173 },
});
