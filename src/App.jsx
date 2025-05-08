import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "javascript",
      completed: false,
    },
    {
      id: 2,
      text: "java",
      completed: false,
    },
  ]);

  return (
    <div className="border border-black w-[50%] p-3 bg-blue-800 m-4 rounded-lg text-white">
      <input
        className="border rounded-md p-3 bg-blue-200 text-black"
        type="text"
        placeholder="Enter the Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="border border-black bg-blue-400 p-3 m-3 rounded-md">
        ADD
      </button>
      <ul className="mt-4">
        {todo.map((item) => (
          <li key={item.id} className="mb-2">
            {item.text} - {item.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
