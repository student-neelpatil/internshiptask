import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";
import Card from "./components/card";
import CardContent from "./components/cardcontent";
import { Trash2, CheckCircle } from "lucide-react";


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 font-serif">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <Card key={index} className="mb-2 flex justify-between items-center p-2">
            <CardContent
              className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
              onClick={() => toggleTask(index)}
            >
              {task.text}
            </CardContent>
            <div className="flex gap-2">
              <CheckCircle
                className="text-green-500 cursor-pointer"
                onClick={() => toggleTask(index)}
              />
              <Trash2
                className="text-red-500 cursor-pointer"
                onClick={() => removeTask(index)}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TodoList;