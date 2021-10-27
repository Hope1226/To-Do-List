const updateComplation = (list, checkbox, index) => {
  if (checkbox.checked === true) {
    list[index].completed = true;
    checkbox.parentElement.classList.add('checked');
  } else {
    list[index].completed = false;
    checkbox.parentElement.classList.remove('checked');
  }
};

export default updateComplation;