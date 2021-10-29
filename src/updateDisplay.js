const updateDis = (list, cont) => {
  cont.innerHTML = '';
  for (let i = 0; i < list.length; i += 1) {
    cont.innerHTML += `
        <div class="task">
          <input type="checkbox" class="checkbox" name="completion" id="${list[i].index}" value="completion">
          <p class="taskTitle">${list[i].description}</p>
        </div> `;
  }
};

export default updateDis;