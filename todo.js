const fs = require("fs");

const addTask = (title, description) => {
  const data = loadData();

  const isDuplicate = chkDuplicate(title, data);
  if (isDuplicate) {
    console.log("the task is already added in the database ");
  } else {
    const newTask = { title, description };
    const tmpData = [...data, newTask];

    saveToDataBase(tmpData, title);
    console.log(`Todo task added with the title : ${title} into database`);
  }
};

const deleteTask = (title) => {
  const data = loadData();
  const filteredData = data.filter((d) => d.title !== title);
  if (filteredData.length !== data.length) {
    saveToDataBase(filteredData);
    console.log(`todo task ${title} is removed`);
  } else {
    console.log(`there is no task with the name of ${title}`);
  }
};

const listTasks = () => {
  const data = loadData();
  data.map((element) => console.log(element.title));
};

const getTask = (title) => {
  const data = loadData();
  const requiredTask = data.find((element) => element.title == title);
  if (requiredTask) {
    console.log(requiredTask);
  } else {
    console.log("no task found");
  }
};

const saveToDataBase = (dataToAdd) => {
  const jsonData = JSON.stringify(dataToAdd);
  fs.writeFileSync("data.txt", jsonData);
};

const chkDuplicate = (title, data) => {
  const dataFound = data.filter((element) => element.title === title);
  return dataFound.length === 0 ? false : true;
};

const loadData = () => {
  try {
    const rawData = fs.readFileSync("data.txt");
    const parsedData = JSON.parse(rawData);
    return parsedData;
  } catch (e) {
    return [];
  }
};

module.exports = {
  addTask,
  deleteTask,
  listTasks,
  getTask,
};
