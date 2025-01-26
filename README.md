# React Todo List App

## Overview

A simple and intuitive Todo List application built with React, featuring add, edit, delete, and mark complete functionality.

## Features

- Add new todos
- Edit existing todos
- Delete individual todos
- Mark todos as complete/incomplete
- Mark all todos complete/incomplete
- Delete all todos

## Project Structure

```
todo-app/
├── src/
│   ├── assets/
│   │   ├── todo_icon.png
│   │   ├── edit.svg
│   │   ├── delete.png
│   │   ├── not_tick.png
│   │   └── tick.png
│   ├── components/
│   │   ├── Todo.jsx
│   │   └── TodoItem.jsx
```

## Key Components

### Todo.jsx

Main component managing the todo list state and operations:

- State management for todos
- Add todo functionality
- Edit todo functionality
- Delete todo functionality
- Mark todos complete/incomplete

### TodoItem.jsx

Renders individual todo items with:

- Completion status toggle
- Edit button
- Delete button

## Technologies Used

- React
- React Hooks (useState, useEffect)
- Tailwind CSS for styling

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`

## Styling

Utilizes Tailwind CSS for responsive and clean UI design with:

- Orange and red themed buttons
- Slate background
- Hover effects
- Responsive layout

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss proposed changes.
