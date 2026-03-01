
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Set the maximum number of new tasks to be added
const maxInitialTasks = 2;

// Counter to keep track of how many tasks are added
let addTask = 0;

// Determine the highest current task ID to assign new unique IDs
let newId = Math.max(...initialTasks.map((tasks) => tasks.id));

// Loop to add new tasks, runs until maxInitialTasks (2) are added
for (let i = 0; i <= maxInitialTasks; i++) {
  // Prompt user to enter the title for the new task
  const taskTitle = prompt("Enter task  title:");
  
  // Prompt user to enter the description for the new task
  const taskDescription = prompt("Enter task  description:");

  // Prompt user to specify the status of the task, convert input to lowercase for consistency
  let taskStatus = prompt(
    "Enter task  status (todo, doing, done):",
  ).toLowerCase();

  // Validate that the entered status is one of the accepted values
  while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  ) {
    // Alert user if the status is invalid and prompt again
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt(
      "Enter task  status (todo, doing, done):",
    ).toLowerCase();
  }

  // Increment the count of tasks added
  addTask++;
  
  // Generate a new unique ID for the task
  newId++;

  // Notify user when enough tasks have been added
  if (addTask === 3) {
    alert(
      "There are enough tasks on your board, please check them in the console.",
    );
  }

  // Add the new task object to the initialTasks array
  initialTasks.push({
    id: newId,
    title: taskTitle,
    description: taskDescription,
    status: taskStatus,
  });
}

// Filter the tasks to get only those marked as 'done'
const filteredTasks = initialTasks.filter((tasks) => {
  return tasks.status === "done";
});

// Log the list of completed tasks
console.log(`Completed Tasks : `, filteredTasks);

// Log the full list of tasks including the initial and newly added ones
console.log(`All tasks`, initialTasks);





