
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

// const ActionTypes: { Submit_Task: string, Delete_Task: string } {
//   Submit_Task = "Submit Task",
//   Delete_Task = "Delete Task",
// }
// const action

enum ActionTypes {
  Submit_Task = "Submit Task",
  Delete_Task = "Delete Task",
}

const submitTask = (submit:submit_Task)=> ({
	type: ActionTypes.Submit_Task,
	payload: { submit },
});

interface DeleteTask {
  type : string,
  id : number,

}

 const deleteTask = (deleteTask:DeleteTask) => ({
	type: ActionTypes.Delete_Task,
	payload: {deleteTask},
});

interface submit_Task {
 type : string,
} 

const addToTaskReducer = (state = initialState, action: any) : stateInterface=> {
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
  reducer:  addToTaskReducer,
  
});

export default store;