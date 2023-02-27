import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8 max-w-4xl">
      <div className="h-12 ">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                First Name
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                Last Name
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                E-Mail ID
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-4">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employee.firstName}
                    </div>
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employee.lastName}
                    </div>
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employee.emailId}
                    </div>
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-red-600 hover:text-red-800 px-2"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
