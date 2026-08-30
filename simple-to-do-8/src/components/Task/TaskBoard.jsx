import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = [
    {
      id: crypto.randomUUID(),
      title: "Learn react",
      description: "i want to learn react",
      tags: ["web", "js", "react"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Learn js",
      description: "i want to learn js",
      tags: ["js", "react"],
      priority: "High",
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Learn css",
      description: "i want to learn css",
      tags: ["js", "react"],
      priority: "High",
      isFavorite: false,
    },
  ];

  const [tasks, setTasks] = useState(defaultTask);
  const [showModal, setShowModal] = useState(false);
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

    setShowModal(false);
  };

  const handleEditTask = (task) => {
    setShowModal(true);
    setTaskToUpdate(task);
  };
  const handleClose = () => {
    setTaskToUpdate(null);
    setShowModal(false);
  };

  const handleFavorite = (taskId) => {
    const favorite = tasks.findIndex((task) => task.id === taskId);
    const newArr = [...tasks];
    newArr[favorite].isFavorite = !newArr[favorite].isFavorite;
    setTasks(newArr);
  };

  const handleDeleteTask = (taskId) => {
    const deletedTask = tasks.filter((task) => task.id != taskId);
    setTasks(deletedTask);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          onAddTask={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onClose={handleClose}
        />
      )}
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTask={() => setShowModal(true)} />
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
