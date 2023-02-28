import React from "react";

const UpdateEmployee = () => {
  return (
    <div className="flex max-w-2xl h-96 mx-auto shadow border-b">
      <div className="px-8 py-8 mx-auto">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee:</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(event) => handleChange(event)}
            placeholder="Enter First Name Here"
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(event) => handleChange(event)}
            placeholder="Enter Last Name Here"
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
          <label className="block text-gray-600 text-sm font-normal">
            E-Mail
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(event) => handleChange(event)}
            placeholder="Enter E-Mail Here"
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 pt-36 space-x-2">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-600 px-2 p-1 hover:bg-green-800"
          >
            Update
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-600 px-2 p-1 hover:bg-red-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
