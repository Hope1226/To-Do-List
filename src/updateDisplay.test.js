import mainPage from './__mock__/dom.js';
import updateDis from './updateDisplay.js';

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