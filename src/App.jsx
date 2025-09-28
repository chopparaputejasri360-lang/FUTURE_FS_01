import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) ?? [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setTodos(prev => [
      ...prev,
      { id: crypto.randomUUID(), title: t, completed: false }
    ]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(td => (td.id === id ? { ...td, completed: !td.completed } : td))
    );
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(td => td.id !== id));
  }

  function clearCompleted() {
    setTodos(prev => prev.filter(td => !td.completed));
  }

  const remaining = todos.filter(t => !t.completed).length;

  return (
    <div className="container">
      <h1>✅ Todo App</h1>

      <form onSubmit={addTodo} className="row">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <p className="muted">No tasks yet. Add your first one!</p>
      ) : (
        <ul className="list">
          {todos.map(todo => (
            <li key={todo.id} className="item">
              <label className={todo.completed ? "done" : ""}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.title}
              </label>
              <button className="danger" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="footer">
        <span>{remaining} left</span>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
}