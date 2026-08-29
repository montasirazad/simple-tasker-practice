import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = [
    {
      id: crypto.randomUUID(),
      title: "Learn React Native",
      description:
        "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Learn React Native",
      description:
        "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Learn React Native",
      description:
        "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: false,
    },
  ];

  const [tasks, setTasks] = useState(defaultTask);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (newTask) => {
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal onAddTask={handleAddTask} />}
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTask={() => setShowModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
