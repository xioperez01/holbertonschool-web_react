interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: "Angie",
  lastName: "Perez",
  age: 25,
  location: "Tunja",
};

const stud2: Student = {
  firstName: "Freddie",
  lastName: "Mercury",
  age: 45,
  location: "Kensington",
};

const studentsList: Array<Student> = [stud1, stud2];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const trHead: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableHeaderCellElement = document.createElement('th');
const th2: HTMLTableHeaderCellElement = document.createElement('th');

th1.innerHTML = 'firstName';
th2.innerHTML = 'location';

table.append(thead);
table.append(tbody);
thead.append(trHead);
trHead.append(th1);
trHead.append(th2);

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    tbody.append(row);
    const cell: HTMLTableCellElement = row.insertCell();
    const text: Text = document.createTextNode(student.firstName);
    cell.appendChild(text);

    const cell2: HTMLTableCellElement = row.insertCell();
    const text2: Text = document.createTextNode(student.location);
    cell2.appendChild(text2);
})
document.body.appendChild(table)