const updateLocalStr = (list) => {
  localStorage.setItem('localTasks', JSON.stringify(list));
};

export default updateLocalStr;