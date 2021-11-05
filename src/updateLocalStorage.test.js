import updateLocalStr from "./updateLocalStorage";

test("Should  return true if the the storage is the same as list", () => {
  const list = [ {
    key: "value"
  }];

  updateLocalStr(list);
  const storage = JSON.parse(localStorage.getItem('localTasks'));
  expect(storage).toHaveLength(1);
});