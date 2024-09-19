/* eslint-disable no-unused-vars */
import { useState } from "react";
import { defaultTask } from "../../data/data";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(defaultTask);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setShowAddModal(true);
    setTaskToUpdate(task);
    console.log(task);
  };

  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  };

  const handleFav = (taskId) => {
    // This portion of the commented code is not fully perfect. Here
    // we are not doing the deep cloning of the tasks array. The tasks array has
    // objects inside, while using the spread operator, it will only make the shallow copy.
    // But we need to do the deep copy.

    // We are not removing this commented code as it was part of the recording.
    // But the same code is now made better and written below.
    /*
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
        setTasks(newTasks);
        */

    // The better way of managing updates in the object within an array as a
    // state in react.
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  };

  const handleAllDelete = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleSearchText = (txt) => {
    setSearchText(txt);
    filtered.length = 0;
    setFiltered(filtered);
  };

  const handleFilteredTask = () => {
    setFiltered(
      tasks.filter((task) =>
        task.title
          .trim()
          .toLowerCase()
          .includes(searchText.trim().toLowerCase())
      )
    );
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          onSave={handleAddTask}
          onClose={handleCloseClick}
        />
      )}
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTask
          onSearch={handleSearchText}
          handleFilteredTask={handleFilteredTask}
        />
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() => setShowAddModal(true)}
            onDeleteAllClick={handleAllDelete}
          />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFab={handleFav}
            filtered={filtered}
            searchText={searchText}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
