const updateLocalStr = (list) => {
  localStorage.clear();
  localStorage.setItem('localTasks', JSON.stringify(list));
};

export default updateLocalStr;