import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setEmployee({ ...employee, [event.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (event) => {
    event.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((res) => {
        navigate("/employeeList");
      })
      .catch((err) => console.error(err));
  };

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
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-600 px-2 p-1 hover:bg-green-800"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
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
