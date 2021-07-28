import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface taskState {
  idCount: number;
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  selectTask: {
    id: number;
    title: string;
    completed: boolean;
  };
  isModalOpen: boolean;
  filterSwitch: 'all' | 'fin' | 'no-fin';
}

const initialState: taskState = {
  idCount: 0,
  tasks: [],
  selectTask: {
    id: 0,
    title: '',
    completed: false,
  },
  isModalOpen: false,
  filterSwitch: 'all',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    modalSwitch: (state, action) => {
      state.isModalOpen = action.payload;
    },
    mountTask: (state, action) => {
      state.selectTask = action.payload;
    },
    editTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter((t) => t.id !== action.payload.id);
      state.tasks = [...newTasks];
    },
  },
});

export const {
  createTask,
  modalSwitch,
  mountTask,
  editTask,
  completeTask,
  deleteTask,
} = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const tasks = (state: RootState): taskState['tasks'] => state.task.tasks;
export const isModalOpen = (state: RootState): taskState['isModalOpen'] =>
  state.task.isModalOpen;
export const selectTask = (state: RootState): taskState['selectTask'] =>
  state.task.selectTask;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default taskSlice.reducer;
