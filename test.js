// modules/employee.js

class Employee {
  constructor(id, salary) {
    this.id = id;
    this.salary = salary;
  }

  static compareSalary(employee1, employee2) {
    if (employee1.salary > employee2.salary) {
      return `User with id ${employee1.id} has greater salary`;
    } else if (employee1.salary < employee2.salary) {
      return `User with id ${employee2.id} has greater salary`;
    } else {
      return "salaries are equal";
    }
  }
}

export { Employee };

// modules/dev.js
import { Employee } from "./employee.js";

class Dev extends Employee {
  constructor(id, salary) {
    super(id, salary);
    this.jobType = "Dev";
  }

  getJobType() {
    return `I am a ${this.jobType}`;
  }
}

export { Dev };

// modules/pm.js
import { Employee } from "./employee.js";

class PM extends Employee {
  constructor(id, salary) {
    super(id, salary);
    this.jobType = "PM";
  }

  getJobType() {
    return `I am a ${this.jobType}`;
  }
}

export { PM };

// helpers/sorter.js

function compareSalary(employee1, employee2) {
  if (employee1.salary > employee2.salary) {
    return `User with id ${employee1.id} has greater salary`;
  } else if (employee1.salary < employee2.salary) {
    return `User with id ${employee2.id} has greater salary`;
  } else {
    return "salaries are equal";
  }
}

export default compareSalary;

// main.js

import { Dev } from "./modules/dev.js";
import { PM } from "./modules/pm.js";
import { Employee } from "./modules/employee.js";
import compareSalary from "./helpers/sorter.js";

const dev = new Dev(1, 2000);
const pm = new PM(2, 2500);
const dev2 = new Dev(3, 2000);

console.log(dev.getJobType()); // виведе I am a Dev
console.log(pm.getJobType()); // виведе I am a PM
console.log(Employee.compareSalary(dev, pm)); // виведе User with id 2 has greater salary
console.log(compareSalary(dev, dev2)); // виведе salaries are equal

//друга частина 
// modules/dev.js
import { Employee } from "./employee.js";

class Dev extends Employee {
  constructor(id, salary) {
    super(id, salary);
    this.jobType = "Dev";
    Object.defineProperty(this, "id", {
      value: id,
      writable: false, // Заборонити зміну властивості id
      enumerable: true,
      configurable: false, // Заборонити видалення властивості id
    });
  }

  getJobType() {
    return `I am a ${this.jobType}`;
  }
}

export { Dev };
const newDev = new Dev(1, 3000);

// Намагаємося змінити id (повинно викинути помилку):
// newDev.id = 2; // Помилка: Cannot assign to read-only property 'id'

// Намагаємося видалити id (повинно викинути помилку):
// delete newDev.id; // Помилка: Cannot delete property 'id' of #<Dev>
newDev.id = 15; // видасть помилку TypeError: Cannot assign to read only property 'id' of object '#<Dev>'
delete newDev.id; // видасть помилку TypeError: Cannot delete property 'id' of #<Dev>
for (let key in newDev) {
  console.log(newDev[key]); // виведе почергово 1 та 3000
}
// третя частина

// helpers/helpers.js

function sortBySalary(users) {
  return users.sort((a, b) => {
    if (a.salary !== b.salary) {
      return a.salary - b.salary;
    } else {
      return a.id - b.id;
    }
  });
}

export { sortBySalary };

// main.js
import { Dev } from "./modules/dev.js";
import { Employee } from "./modules/employee.js";
import { sortBySalary } from "./helpers/helpers.js";

const user1 = new Dev(1, 2000);
const user2 = new Dev(2, 1500);
const user3 = new Dev(3, 1000);
const user4 = new Dev(4, 2000);
const user5 = new Dev(6, 2500);
const user6 = new Dev(5, 2500);
const user7 = new Employee(7, 3500); // Змінив на Employee, так як у вас немає класу PM
const user8 = new Employee(8, 1000);  // Змінив на Employee, так як у вас немає класу PM

const users = Dev.returnArrayOfDevs(
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8
);

console.log(sortBySalary(users));

