import React from 'react';

const Create = (props) => {
  const { task, settask, taskname, description, setdescription, settaskname, updateTask, setupdateTask } = props;

  function submitter(e) {
    e.preventDefault();

    if (taskname.trim() === "" || description.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newTask = { taskname, description };

    settask([...task, newTask]);

    settaskname("");
    setdescription("");
  }

  function updateHandler() {
    const originalcopy = [...task];

    const oldTask = { ...originalcopy[updateTask] };
    const updatedTask = { taskname, description };

    originalcopy[updateTask] = { ...oldTask, ...updatedTask };

    settask(originalcopy);

    setupdateTask(null);

    settaskname("");
    setdescription("");
  }

  return (
    <div className="md:fixed left-0 top-0 h-full w-auto md:w-[35vw] p-4 rounded-l-lg shadow-md">
      <div className="w-full mx-auto">
        <form className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Create Task</h2>
          <div className="mb-4">
            <input
              onChange={(e) => settaskname(e.target.value)}
              value={taskname}
              type="text"
              name="taskname"
              placeholder="Task"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              type="text"
              name="description"
              placeholder="Description"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {updateTask !== null ? (
            <button
              type="button"
              onClick={updateHandler}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              onClick={submitter}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Create;
