import React from 'react';

const Show = (props) => {
  const { task, settask, updater } = props;

      let printed = <h1 className="text-2xl font-semibold text-center mt-6 mb-4">You have nothing to do 😄</h1>;

  if (task.length > 0) {
    printed = task.map((elem, idx) => (
      <div key={idx} className="bg-white p-4 mb-4 rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <div >
            <h2 className="text-lg font-semibold mb-2 ">{elem.taskname}</h2>
            <p className="text-gray-600">{elem.description}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => {
                deleter(idx);
              }}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              Delete
            </button>
            <button
              onClick={() => {
                updater(idx);
              }}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    ));
  }

  function deleter(idx) {
    const filtered = task.filter((elem, i) => i !== idx);
    settask(filtered);
  }

  return (
    <div className=" relative min-h-screen md:ml-[35vw] md:w-auto w-screen overflow-y-auto p-4">
      <div className="flex justify-center items-center p-5 font-mono">
      <h1 className="text-4xl font-lighter text-center"> Your tasklist </h1>
    </div>
      {printed}
    </div>
  );
};

export default Show;
