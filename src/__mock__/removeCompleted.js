const removeCompleted = (list) => {
  const nonComplete = list.filter((task) => {
    if (!task.completed) { return true; }
    return false;
  });

  for (let i = 0; i < nonComplete.length; i += 1) {
    nonComplete[i].index = i;
  }
  return nonComplete;
};

export default removeCompleted;