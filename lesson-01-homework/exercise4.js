const employeesInfo = [
  { name: "David", workingTime: 98, salary: 10 },
  { name: "Luiz", workingTime: 78, salary: 20 },
  { name: "Silva", workingTime: 165, salary: 25 },
  { name: "Santos", workingTime: 215, salary: 30 },
  { name: "Alex", workingTime: 143, salary: 28 },
];

function getTotalSalaryOfCompany(employeesInfo) {
  let totalSalary = 0;

  for (let i = 0; i < employeesInfo.length; i++) {
    const { workingTime, salary } = employeesInfo[i];
    totalSalary += workingTime * salary;
  }

  return totalSalary;
}

function getTotalSalaryOfEmployee(name) {
  let foundEmployee = false;
  let totalSalaryofEmployee = 0;

  for (let i = 0; i < employeesInfo.length; i++) {
    if (employeesInfo[i].name === name) {
      foundEmployee = true;
      const workingTime = employeesInfo[i].workingTime;
      const salary = employeesInfo[i].salary;

      if (workingTime < 50) {
        totalSalaryofEmployee = workingTime * salary + 50;
      } else if (workingTime < 100) {
        totalSalaryofEmployee = workingTime * salary + 100;
      } else if (workingTime < 150) {
        totalSalaryofEmployee = workingTime * salary + 150;
      } else {
        totalSalaryofEmployee = workingTime * salary + 200;
      }

      break;
    }
  }

  if (!foundEmployee) {
    console.log("Nhân viên không tồn tại");
  }

  return totalSalaryofEmployee;
}

//Test casae
console.log(getTotalSalaryOfCompany(employeesInfo));
console.log(getTotalSalaryOfEmployee("Lenin"));
console.log(getTotalSalaryOfEmployee("Alex"));
console.log(getTotalSalaryOfEmployee("Luiz"));
