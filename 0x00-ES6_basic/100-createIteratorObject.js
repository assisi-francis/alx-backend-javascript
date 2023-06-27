export default function createIteratorObject(report) {
  const departments = Object.entries(report.allEmployees).filter(([_, employees]) => employees.length > 0);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const [departmentName, employees] = departments[currentDepartmentIndex];

      if (currentEmployeeIndex < employees.length) {
        const employee = employees[currentEmployeeIndex];
        currentEmployeeIndex++;

        return {
          value: employee,
          done: false,
          department: departmentName,
        };
      }

      currentDepartmentIndex++;
      currentEmployeeIndex = 0;

      return this.next();
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
