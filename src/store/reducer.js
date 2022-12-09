
const json = window.localStorage.getItem("todos");
const loadedTodos = JSON.parse(json);
const isHideInitial = window.localStorage.getItem("isHide") || false;


let defaultState = {
  inputValue: '',
  tasks: loadedTodos || [],
  hasError: false,
  openModal: false,
  clicked: false,
  taskIndex: '',
  taskId: '',
  isHide: Boolean(isHideInitial),
  disabled: true
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_INPUT_VALUE':
      if (action.value !== '') {
        state.disabled = false
      } else {
        state.disabled = true
      }

      if (action.value.length >= 54) {
        action.input.style.borderColor = 'red';
        state.hasError = true

      } else {
        action.input.style.borderColor = '#FFCD04';
        state.hasError = false
      }
      return {
        ...state,
        inputValue: action.value,
        element: action.input
      }

    case 'ADD_TASK':
      if (state.hasError === false && state.inputValue !== '') {
        const newTasks = [...state.tasks, { title: state.inputValue, id: Math.random(), isCompleted: false }];
        localStorage.setItem("todos", JSON.stringify(newTasks));
        return {
          ...state,
          tasks: newTasks,
          inputValue: '',
          disabled: true

        }
      }; break;


    case 'OPEN_MODAL':
      return {
        ...state,
        openModal: !state.openModal,
        taskId: action.id
      }; break;


    case 'DELETE_TASK':
      const newTasks = state.tasks.filter(obj => obj.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
        openModal: false
      }; break;


    case 'ONCHECK_TASK':
      let tasksCopy = [...state.tasks];
      state.taskIndex = state.tasks.findIndex(obj => obj.id == action.task_id);
      tasksCopy[state.taskIndex].isCompleted = !tasksCopy[state.taskIndex].isCompleted;
      localStorage.setItem("todos", JSON.stringify(tasksCopy));
      return {
        ...state,
        tasks: tasksCopy,
        taskIndex: state.taskIndex
      }; break;


    case 'HIDE_COMPLETED_TASKS':
      localStorage.setItem("isHide", JSON.stringify(!state.isHide));
      return {
        ...state,
        isHide: !state.isHide
      }; break;

    default:
      return state;
  }
}

export { reducer }