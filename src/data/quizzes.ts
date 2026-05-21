export type QuizQuestion = {id: string; question: string; options: string[]; answer: string; explanation: string};

export const quizzes: Record<string, QuizQuestion[]> = {
  "setup": [
    {"id": "setup-1", "question": "What should students confirm before Module 1?", "options": ["Node, npm, Git, GitHub, Antigravity, Figma, MongoDB Atlas", "Only Gmail", "Only React", "Only a portfolio link"], "answer": "Node, npm, Git, GitHub, Antigravity, Figma, MongoDB Atlas", "explanation": "Review the module section above for the reasoning."},
    {"id": "setup-2", "question": "What is the purpose of a setup check?", "options": ["To reduce tool blockers later", "To skip modules", "To deploy immediately", "To avoid GitHub"], "answer": "To reduce tool blockers later", "explanation": "Review the module section above for the reasoning."},
  ],
  "intro": [
    {"id": "intro-1", "question": "What is the course learning model?", "options": ["Plan, build, verify, document, reflect", "Watch videos only", "Copy code only", "Deploy first"], "answer": "Plan, build, verify, document, reflect", "explanation": "Review the module section above for the reasoning."},
    {"id": "intro-2", "question": "What evidence matters most?", "options": ["Docs, screenshots, GitHub, tests, reflection", "Only chat messages", "Only final screenshot", "Only certificate"], "answer": "Docs, screenshots, GitHub, tests, reflection", "explanation": "Review the module section above for the reasoning."},
  ],
  "module1": [
    {"id": "module1-1", "question": "What should Antigravity do before editing?", "options": ["List planned files and approach", "Auto-install everything", "Delete old files", "Deploy"], "answer": "List planned files and approach", "explanation": "Review the module section above for the reasoning."},
    {"id": "module1-2", "question": "What does quota-smart work mean?", "options": ["Small scoped tasks with saved docs", "One giant prompt", "No docs", "Skip verification"], "answer": "Small scoped tasks with saved docs", "explanation": "Review the module section above for the reasoning."},
  ],
  "module2": [
    {"id": "module2-1", "question": "What is spec-first development?", "options": ["Planning PRD/API/schema before code", "Coding without docs", "Only UI animation", "Only deployment"], "answer": "Planning PRD/API/schema before code", "explanation": "Review the module section above for the reasoning."},
    {"id": "module2-2", "question": "What must API contracts include?", "options": ["Method, endpoint, access, request, response, errors", "Only colors", "Only logos", "Only database name"], "answer": "Method, endpoint, access, request, response, errors", "explanation": "Review the module section above for the reasoning."},
  ],
  "module3": [
    {"id": "module3-1", "question": "What is the purpose of architecture docs?", "options": ["Align frontend, backend, data, auth, errors before coding", "Replace testing", "Avoid Git", "Pick font"], "answer": "Align frontend, backend, data, auth, errors before coding", "explanation": "Review the module section above for the reasoning."},
    {"id": "module3-2", "question": "What should data flow explain?", "options": ["How user action moves through UI, API, DB, and response", "Only colors", "Only screenshots", "Only YouTube notes"], "answer": "How user action moves through UI, API, DB, and response", "explanation": "Review the module section above for the reasoning."},
  ],
  "module4": [
    {"id": "module4-1", "question": "What is the main file in an Agent Skill?", "options": ["SKILL.md", "index.html", "logo.svg", "package-lock.json"], "answer": "SKILL.md", "explanation": "Review the module section above for the reasoning."},
    {"id": "module4-2", "question": "Why is description important?", "options": ["It helps the agent choose when to use the skill", "It changes CSS", "It deploys backend", "It stores password"], "answer": "It helps the agent choose when to use the skill", "explanation": "Review the module section above for the reasoning."},
  ],
  "module5": [
    {"id": "module5-1", "question": "Before coding from Figma, what should be extracted?", "options": ["Tokens, layout, components, assets, responsive notes", "Only screenshot", "Only logo", "Only lorem ipsum"], "answer": "Tokens, layout, components, assets, responsive notes", "explanation": "Review the module section above for the reasoning."},
    {"id": "module5-2", "question": "If MCP is unavailable, what should students do?", "options": ["Manual handoff with screenshots and inspect values", "Stop working", "Guess all values", "Skip UI"], "answer": "Manual handoff with screenshots and inspect values", "explanation": "Review the module section above for the reasoning."},
  ],
  "module6": [
    {"id": "module6-1", "question": "Why use mock data first?", "options": ["Build frontend before backend dependency", "Avoid TypeScript", "Skip UI", "Deploy faster only"], "answer": "Build frontend before backend dependency", "explanation": "Review the module section above for the reasoning."},
    {"id": "module6-2", "question": "Where should reusable UI components live?", "options": ["components/", "inside every page only", ".env", "database"], "answer": "components/", "explanation": "Review the module section above for the reasoning."},
  ],
  "module7": [
    {"id": "module7-1", "question": "What should never be stored?", "options": ["Plain text password", "Hashed password", "User role", "Order total"], "answer": "Plain text password", "explanation": "Review the module section above for the reasoning."},
    {"id": "module7-2", "question": "Admin routes should check what?", "options": ["Authenticated user and admin role server-side", "Hidden frontend button only", "No auth", "Only URL"], "answer": "Authenticated user and admin role server-side", "explanation": "Review the module section above for the reasoning."},
  ],
  "module8": [
    {"id": "module8-1", "question": "What does TanStack Query manage?", "options": ["Server state, queries, mutations, invalidation", "Figma frames", "Git commits only", "CSS variables only"], "answer": "Server state, queries, mutations, invalidation", "explanation": "Review the module section above for the reasoning."},
    {"id": "module8-2", "question": "What header sends a bearer token?", "options": ["Authorization", "Content-Type", "Accept-Language", "Cache-Control"], "answer": "Authorization", "explanation": "Review the module section above for the reasoning."},
  ],
  "module9": [
    {"id": "module9-1", "question": "What is Supertest used for?", "options": ["Testing Express HTTP endpoints", "Creating logos", "Deploying frontend", "Writing Tailwind"], "answer": "Testing Express HTTP endpoints", "explanation": "Review the module section above for the reasoning."},
    {"id": "module9-2", "question": "What should you do when tests fail?", "options": ["Classify cause, then fix relevant issue", "Delete tests", "Disable auth", "Ignore build"], "answer": "Classify cause, then fix relevant issue", "explanation": "Review the module section above for the reasoning."},
  ],
  "module10": [
    {"id": "module10-1", "question": "What env prefix does Vite expose to frontend?", "options": ["VITE_", "SECRET_", "MONGO_", "JWT_"], "answer": "VITE_", "explanation": "Review the module section above for the reasoning."},
    {"id": "module10-2", "question": "What should README include?", "options": ["Live links, setup, features, screenshots, demo credentials, limitations", "Only title", "Only code", "Only screenshots"], "answer": "Live links, setup, features, screenshots, demo credentials, limitations", "explanation": "Review the module section above for the reasoning."},
  ],
  "final": [
    {"id": "final-1", "question": "What does final assignment simulate?", "options": ["A real company assignment", "A random tutorial", "Only quiz", "Only landing page"], "answer": "A real company assignment", "explanation": "Review the module section above for the reasoning."},
    {"id": "final-2", "question": "What is a minimum pass condition?", "options": ["Working app, GitHub, README, demo credentials, verification evidence", "Only idea", "Only design", "Only video"], "answer": "Working app, GitHub, README, demo credentials, verification evidence", "explanation": "Review the module section above for the reasoning."},
  ],
  "advanced": [
    {"id": "advanced-1", "question": "What is the App Router default model?", "options": ["Server-first, client only when needed", "Everything client", "No server rendering", "Only Express"], "answer": "Server-first, client only when needed", "explanation": "Review the module section above for the reasoning."},
    {"id": "advanced-2", "question": "What must protected Server Actions verify?", "options": ["Auth and authorization server-side", "Only hidden button", "Only CSS", "Nothing"], "answer": "Auth and authorization server-side", "explanation": "Review the module section above for the reasoning."},
  ],
};
