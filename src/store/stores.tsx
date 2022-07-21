
import { configureStore } from "@reduxjs/toolkit";

interface tasksType {
  id: number;
}

interface stateInterface {
  tasks: Array<tasksType>;
}

const initialState: stateInterface = {
  tasks: [],
};

//made changes for interface

interface Payload {
  title ?: string,
  desc ?: string,
  id: number
}

interface  Action{
  type:string
  payload : Payload
}

const addToTaskReducer = (state = initialState, action: Action) : stateInterface=> {
  console.log("before entering switch case", action, state);
  switch (action.type) {
    case "submit_task": {
      console.log("entered in switch case submit task");
      return { tasks: [...state.tasks, action.payload] };
    }

    case "delete_task": {
      const updatedTasks = [] as Array<tasksType>;
      console.log("entered switch case delete task before if condition")
      state.tasks.forEach((task: tasksType) => {
        if (task.id !== action.payload.id) {
          updatedTasks.push(task);
        }
      });
      console.log("entered in switch case delete task after if condition")
      return { tasks: updatedTasks };
    }

   
    default:
      return state;
  }
};

const store = configureStore({
  reducer: addToTaskReducer,
  
});

export default store;