import axios from "axios";

const EMP_API_BASE_API = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMP_API_BASE_API, employee);
  }
}

export default new EmployeeService();