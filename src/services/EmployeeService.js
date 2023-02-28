import axios from "axios";

const EMP_API_BASE_API = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMP_API_BASE_API, employee);
  }

  getEmployees() {
    return axios.get(EMP_API_BASE_API);
  }

  deleteEmployee(id) {
    return axios.delete(EMP_API_BASE_API + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(EMP_API_BASE_API + "/" + id);
  }

  updateEmployee(employee, id) {
    return axios.put(EMP_API_BASE_API + "/" + id, employee);
  }
}

export default new EmployeeService();
