import updateComplation from './updateStatus.js';
import mainPage from './__mock__/dom.js';

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