import { JSDOM } from 'jsdom';

const mainPage = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hope's To do list</title>
</head>
<body>
  <section class="todo-container">
    <div class="item headline">
      <h1>Today's To Do</h1>
    </div>
    <form class="item" id="addTaskForm">
      <input  type="text" id="inputTask" name="inputTask" placeholder="Add to your list...">
      <button id="addBtn" type="submit"><img src="./enter-icon.svg" alt="enterIcon"></button>
    </form>
    <div class="item taskContainer"></div>
    <button class="item centered" type="button" id="clearBtn">Clear all completed</button>
  </section>
</body>
</html>
`);

export default mainPage;