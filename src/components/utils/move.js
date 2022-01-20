const draggStartHandler = (e) => {
  const element = e.target;
  element.classList.add("dragging");
};

const draggEndHandler = (e) => {
  const element = e.target;
  element.classList.remove("dragging");
};

export { draggStartHandler, draggEndHandler };
