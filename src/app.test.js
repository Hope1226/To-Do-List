import updateLocalStr from './updateLocalStorage.js';
import removeCompleted from './__mock__/removeCompleted.js';
import mainPage from './__mock__/dom.js';
import addTasks from './addTask.js';
import updateComplation from './updateStatus.js';
import updateDis from './updateDisplay.js';

describe('Pure functions', () => {
  test('Add taskt', () => {
    const dom = mainPage.window.document.body;
    dom.innerHTML = `
    <form class="item" id="addTaskForm">
        <input  type="text" id="inputTask" name="inputTask" placeholder="Add to your list...">
        <button id="addBtn" type="submit"><img src="./enter-icon.svg" alt="enterIcon"></button>
    </form>`;
    const form = dom.querySelector('#addTaskForm');
    const input = dom.querySelector('#inputTask');
    input.value = 'some text';
    const list = [];
    const updateDply = (par) => par;
    const updateStorage = (par) => par;
    const updateStatus = (par) => par;
    addTasks(form, input, list, updateDply, updateStatus, updateStorage);
    form.submit();
    expect(list).toHaveLength(1);
  });
  test('Remove completed', () => {
    const list = [{
      key: 'value',
      completed: false,
    },
    {
      key: 'value',
      completed: true,
    },
    ];
    updateLocalStr(list);
    const storage = JSON.parse(localStorage.getItem('localTasks'));
    expect(storage).toHaveLength(2);
    const output = removeCompleted(list, updateLocalStr);
    updateLocalStr(output);
    const updatedStorage = JSON.parse(localStorage.getItem('localTasks'));
    expect(updatedStorage).toHaveLength(1);
  });
  test('Update display', () => {
    const dom = mainPage.window.document.body;
    dom.innerHTML = `
    <div class="item taskContainer"></div>`;
    const container = dom.querySelector('.taskContainer');
    console.log(container)
    const list = [{
      index: 1,
      description: 'some text',
    }];
    updateDis(list, container);
    const tasks = dom.querySelectorAll('.task')
    expect(tasks).toHaveLength(1);
  });
  test('Should  return true if the the storage is the same as list', () => {
    const list = [{
      key: 'value',
    }];
    updateLocalStr(list);
    const storage = JSON.parse(localStorage.getItem('localTasks'));
    expect(storage).toHaveLength(1);
  });
  test('Update Complation', () => {
    const dom = mainPage.window.document.body;
    dom.innerHTML = `
    <div class="task">
        <input type="checkbox" class="checkbox" name="completion" id="0" value="completion" checked>
          <p class="taskTitle">Some text</p>
    </div>`;
    const checkbox = dom.querySelector('.checkbox');
    const list = [
      {
        index: 1,
        completed: false,
      },
    ];
    updateComplation(list, checkbox, 0);
    expect(list[0].completed).toBeTruthy();
  });
});