/* eslint-disable no-unused-vars */
import { useState } from "react";
import { initialData } from "../Data/data";
import AddTaskModal from "./Tasks/AddTaskModal";
import SearchTask from "./Tasks/SearchTask";
import TaskAction from "./Tasks/TaskAction";
import TaskList from "./Tasks/TaskList";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [search, setSearch] = useState("");
  const handleAddEditTask = (isAdd, newTask) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    handleCloseClick();
    console.log(newTask);
  };
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowModal(true);
  }
  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
    console.log(taskId);
  };

  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFab = (taskId) => {
    setTasks([
      ...tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      }),
    ]);
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleSearchText = (txt) => {
    setSearch(txt);
    filteredSearch.length = 0;
    setFilteredSearch(filteredSearch);
  };
  const handleSearchTask = () => {
    const filteredTask = tasks.filter((task) =>
      task.title.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
    setFilteredSearch(filteredTask);

    console.log(search);
  };
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          {showModal && (
            <AddTaskModal
              onSave={handleAddEditTask}
              onCloseClick={handleCloseClick}
              taskToUpdate={taskToUpdate}
            />
          )}
          {/* <!-- Search Box --> */}
          <SearchTask
            onSearch={handleSearchText}
            onSearchClick={handleSearchTask}
          />
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddClick={() => setShowModal(true)}
              onDeleteAllTask={handleDeleteAllTask}
            />
            <TaskList
              tasks={tasks}
              onFab={handleFab}
              onDeleteTask={handleDeleteTask}
              onEdit={handleEditTask}
              filteredSearch={filteredSearch}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
