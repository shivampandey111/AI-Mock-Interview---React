# AI Mock Interviewer — React

An AI-powered mock interview web app built with React, Vite, and Tailwind CSS. Ask questions based on your selected track, answer them, and get structured AI feedback instantly — powered by the Gemini API.

**Live Demo → [ai-mock-interview-in-react.vercel.app](https://ai-mock-interview-in-react.vercel.app)**

> This is the React rebuild of my [original vanilla JS version](https://ai-mock-interview-gamma-five.vercel.app/). Same product, completely different architecture.

---

## What it does

- Select an interview track (e.g. CN, Web Dev, DSA)
- AI generates a relevant interview question via Gemini API
- You type your answer
- AI evaluates your answer and returns structured feedback:
  - What you got right
  - What was missing
  - What the ideal answer looks like
- Skip questions, track session stats, move to the next question

---

## Why I rebuilt it in React

The vanilla JS version worked, but the code was a mess of `getElementById`, `classList.toggle`, and manual DOM updates spread across the file. Every UI state change meant searching for the right element and hiding or showing it manually.

In React, UI is a function of state. Instead of writing:

```js
document.getElementById('feedback').classList.remove('hidden')
document.getElementById('loader').classList.add('hidden')
```

I write:

```jsx
{isLoading ? <Loader /> : <FeedbackCard feedback={feedback} />}
```

Once that mental model clicked, building UI became significantly faster and less error-prone. The component structure also made it easy to isolate concerns, the selection section, interview section, and stat section are all independent components.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| AI | Google Gemini API |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── Components/
│   ├── InterView Section/
|       ├── InterViewSection.jsx
|   ├── Landing Section/
|       ├── LandingSection.jsx
|   ├── Shared/
|       ├── PopUp.jsx
|   ├── Stats Section/
|       ├── StatsSection.jsx
├── Utils/
|   ├── api.js
├── App.jsx
└── main.jsx
```

---

## Key React concepts used

- `useState` — managing question, answer, feedback, loading, and session state
- `useEffect` — triggering API calls on state change
- Conditional rendering with ternary operators: showing/hiding UI based on state
- Props and callbacks: passing data down, events up
- Component composition: breaking UI into focused, reusable pieces

---

## Running locally

```bash
git clone https://github.com/shivampandey111/ai-mock-interviewer-react
cd ai-mock-interviewer-react
npm install
```

Create a `.env` file:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

```bash
npm run dev
```

Get your free Gemini API key at [aistudio.google.com](https://aistudio.google.com)

---

## Previous version

Vanilla JS version (built first): [github.com/shivampandey111/AI-Mock-Interviewer](https://github.com/shivampandey111/AI-Mock-Interviewer.git) — [Live](https://ai-mock-interviewer-henna.vercel.app/)

---

Built by [Shivam Pandey](https://www.linkedin.com/in/shivampandey111)
