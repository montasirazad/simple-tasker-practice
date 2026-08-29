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
      // console.log(newTask);
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

  const handleEditTask = (updatedTask) => {
    setShowModal(true);
    setTaskToUpdate(updatedTask);
  };
  const handleClose = () => {
    setTaskToUpdate(null);
    setShowModal(false);
  };

  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    console.log(taskIndex);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTasks(newTask);
    // setTasks(
    //   tasks.map((task) => {
    //     if (task.id === taskId) {
    //       return { ...task, isFavorite: !task.isFavorite };
    //     } else {
    //       return task;
    //     }
    //   }),
    // );
  };

  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          onAddNewTask={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onclose={handleClose}
        />
      )}
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddTask={() => setShowModal(true)}
            onAllDelete={handleDeleteAll}
          />
          <div className="overflow-auto">
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onFavorite={handleFavorite}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
