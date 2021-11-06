import updateLocalStr from './updateLocalStorage.js';
import mainPage from './__mock__/dom.js';
import removeCompleted from './__mock__/removeCompleted.js';
import addTasks from './addTask.js';

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
});