# Voting App UI

A simple voting application interface built with HTML, TypeScript, and Tailwind CSS. The app lets users enter their name, choose a candidate, submit a vote, and view the current result in a modal.

## Features

- Vote submission form
- Candidate selection
- Live vote counter
- Result modal with winner and total votes
- Tailwind CSS styling using the Tailwind CLI

## Tech Stack

- HTML
- TypeScript
- Tailwind CSS v4
- Bun

## Requirements

- Node.js
- Bun

## Installation

From the project root, install dependencies:

```bash
bun install
```

## Build Tailwind CSS

To generate the CSS output file:

```bash
bunx tailwindcss -i ./src/input.css -o ./src/output.css --minify
```

To watch for changes while developing:

```bash
bunx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Run the App

Start a local development server:

```bash
bunx vite
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Project Structure

```text
src/
  input.css        # Tailwind source file
  output.css       # Generated Tailwind CSS
  main.ts          # App logic
  logic.ts         # Voting logic
  types.ts         # Type definitions
index.html         # Main page
```

## Notes

- The app uses the Tailwind CLI to build CSS from `src/input.css`.
- If you make changes to the Tailwind styles, rebuild the CSS so the changes appear in the browser.
