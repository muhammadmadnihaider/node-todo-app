const yargs = require("yargs");
const { addTask, deleteTask, listTasks, getTask } = require("./todo");
yargs.command({
  command: "add",
  describe: "adding a task",
  builder: {
    title: {
      describe: "title for todo task",
      alias: "t",
      type: "string",
      demandOption: true,
    },
    description: {
      describe: "title for todo task",
      alias: "d",
      type: "string",
      demandOption: true,
    },
  },
  handler: ({ title, description }) => {
    // call add method here
    addTask(title, description);
  },
});

yargs.command({
  command: "delete",
  description: "to delete a particular task",
  builder: {
    title: {
      alias: "t",
      type: "string",
      demandOption: true,
      describe: "to remove a particular task",
    },
  },
  handler: ({ title }) => {
    deleteTask(title);
  },
});
yargs.command({
  command: "list",
  description: "list all the tasks",
  builder: {
    title: {
      alias: "t",
      type: "string",
      demandOption: false,
      describe: "list all the tasks we entered",
    },
  },
  handler: () => {
    listTasks();
  },
});
yargs.command({
  command: "get",
  description: "get a particular task",
  builder: {
    title: {
      alias: "t",
      type: "string",
      demandOption: true,
      describe: "list all the tasks we entered",
    },
  },
  handler: ({ title }) => {
    getTask(title);
  },
});

yargs.parse();
