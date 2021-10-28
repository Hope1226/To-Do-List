import './style.css';
import updateComplation from './updateStatus.js';
import updateLocalStr from './updateLocalStorage.js';
import addTasks from './addTask.js';

const taskCont = document.querySelector('.taskContainer');
const localData = localStorage.getItem('localTasks');
const form = document.querySelector('#addTaskForm');
const intTask = document.querySelector('#inputTask');

const taskList = [

];

const display = () => {
  // if (localData) {
  //   const localList = JSON.parse(localData);
  //   for (let i = 0; i < localList.length; i += 1) {
  //     if (localList[i].completed) {
  //       taskCont.innerHTML += `
  //       <div class="task checked">
  //       <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion" checked>
  //         <p class="taskTitle">${localList[i].description}</p>
  //       </div>`;
  //     } else {
  //       taskCont.innerHTML += `
  //       <div class="task">
  //       <input type="checkbox" class="checkbox" name="completion" id="${i}" value="completion">
  //         <p class="taskTitle">${localList[i].description}</p>
  //       </div>`;
  //     }
  //   }
  // } else {
      taskCont.innerHTML += `
        <div class="task">
        <input type="checkbox" class="checkbox" name="completion" id="${taskList[taskList.length - 1]}" value="completion">
          <p class="taskTitle">${taskList[taskList.length - 1].description}</p>
        </div>`;
};

addTasks(form, intTask, taskList, display);

// const checkboxes = document.querySelectorAll('.checkbox');

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', (e) => {
//     updateComplation(taskList, checkbox, e.target.id);
//     updateLocalStr(taskList);
//   });
// });