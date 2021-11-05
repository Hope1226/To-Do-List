import updateLocalStr from './updateLocalStorage.js';
import updateComplation from './updateStatus.js';
import mainPage from './__mock__/dom.js';
import updateDis from './updateDisplay.js';

describe('Pure functions', () => {
  test('Update display', () => {
    const page = mainPage.window.document.body;
    const container = page.querySelector('.taskContainer');
    const list = [{
      index: 1,
      description: 'some text',
    }];
    updateDis(list, container);
    const tasks = container.querySelectorAll('.task');
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
  gitexpect(list[0].completed).toBeTruthy();
  });
});