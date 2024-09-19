/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const TaskList = ({ tasks, onFab, onDeleteTask, onEdit, filteredSearch }) => {
  const randomColor = () => {
    const red = Math.ceil(Math.random() * 100);
    const green = Math.ceil(Math.random() * 100);
    const blue = Math.ceil(Math.random() * 100);
    const color = `rgb(${red},${green},${blue})`;
    return color;
  };

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              {" "}
              Title{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              {" "}
              Description{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              {" "}
              Tags{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Priority{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredSearch.length > 0
            ? filteredSearch.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                >
                  <td>
                    <button onClick={() => onFab(task.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke={task.isFavorite ? "yellow" : "gray"}
                        fill={task.isFavorite ? "yellow" : "gray"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                      </svg>
                    </button>
                  </td>
                  <td>{task.title}</td>
                  <td>
                    <div>{task.description}</div>
                  </td>
                  <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                      {task.tags.map((tag) => (
                        <li key={tag}>
                          <span
                            style={{ backgroundColor: randomColor() }}
                            className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]"
                          >
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="text-center">{task.priority}</td>
                  <td>
                    <div className="flex items-center justify-center space-x-3">
                      <button
                        className="text-red-500"
                        onClick={() => onDeleteTask(task.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-blue-500"
                        onClick={() => onEdit(task)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                >
                  <td>
                    <button onClick={() => onFab(task.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke={task.isFavorite ? "yellow" : "gray"}
                        fill={task.isFavorite ? "yellow" : "gray"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                      </svg>
                    </button>
                  </td>
                  <td>{task.title}</td>
                  <td>
                    <div>{task.description}</div>
                  </td>
                  <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                      {task.tags.map((tag) => (
                        <li key={tag}>
                          <span
                            style={{ backgroundColor: randomColor() }}
                            className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]"
                          >
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="text-center">{task.priority}</td>
                  <td>
                    <div className="flex items-center justify-center space-x-3">
                      <button
                        className="text-red-500"
                        onClick={() => onDeleteTask(task.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-blue-500"
                        onClick={() => onEdit(task)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
