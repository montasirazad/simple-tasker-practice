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
      title: "Learn vue",
      description:
        "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "vue", "js"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Learn Next js",
      description:
        "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "NextJS", "js"],
      priority: "High",
      isFavorite: false,
    },
  ];

  const [tasks, setTasks] = useState(defaultTask);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        }),
      );
    }
    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleFavorite = (taskId) => {
    const favorite = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[favorite].isFavorite = !newTask[favorite].isFavorite;
    setTasks(newTask);
  };
  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id != taskId);
    setTasks(taskAfterDelete);
  };
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onFav={handleFavorite}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
