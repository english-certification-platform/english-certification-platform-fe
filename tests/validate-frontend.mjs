import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const requiredPages = [
  "index.html",
  "register.html",
  "student/dashboard.html",
  "student/certifications.html",
  "student/topics.html",
  "student/mock-test.html",
  "student/review.html",
  "student/history.html",
  "admin/index.html",
  "admin/questions.html",
  "admin/tests.html",
  "admin/users.html",
  "admin/analytics.html",
];

for (const page of requiredPages) {
  const html = await readFile(path.join(root, page), "utf8");
  assert.match(html, /<html[^>]+lang="en"/i, `${page} must declare its language`);
  assert.match(html, /<meta[^>]+name="viewport"/i, `${page} must be responsive`);
  assert.match(html, /<h1[\s>]/i, `${page} must have one primary heading`);
  assert.doesNotMatch(html, /fetch\s*\(|axios|react/i, `${page} must not depend on an API or React`);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (["node_modules", "dist", ".git"].includes(entry.name)) continue;
    const target = path.join(directory, entry.name);
    files.push(...(entry.isDirectory() ? await walk(target) : [target]));
  }
  return files;
}

for (const file of await walk(root)) {
  if (!/\.(?:html|js|css)$/.test(file)) continue;
  const content = await readFile(file, "utf8");
  assert.doesNotMatch(content, /fetch\s*\(|axios/i, `${path.relative(root, file)} initiates an API request`);
}

console.log(`Validated ${requiredPages.length} MVC-ready frontend pages.`);
