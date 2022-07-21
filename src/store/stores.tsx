
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
  console.log("before entering switch case")
  switch (action.type) {
    case submitTask: {
      console.log("entered in switch case submit_task")
      return { tasks: [...state.tasks, action.submit_task] };
    }

    case deleteTask: {
      const updatedTasks = [] as Array<tasksType>;
      state.tasks.forEach((task: tasksType) => {
        if (task.id !== action.delete_task.id) {
          updatedTasks.push(task);
        }
      });

      return { tasks: updatedTasks };
    }

   
    default:
      return state;
  }
};



const store = configureStore({
  reducer: {
    addToTaskReducer,
  },
});

export default store;







//.........................................

// import { configureStore } from "@reduxjs/toolkit";

// interface tasksType {
//   id: number;
//   // title: string;
// }

// interface stateInterface {
//   tasks: Array<tasksType>;
// }

// const initialState: stateInterface = {
//   tasks: [],
// };
 
// interface ActionA {
//   type: "submit_task";
//   submit_task: string;
// }
// interface deleteInt {
//   id: number;
// }
// interface ActionB {
//   type: "delete_task";
//   delete_task: deleteInt;
// }

// type Action = ActionA | ActionB;

// const addToTaskReducer = (state = initialState, action: Action) => {
//   switch (action.type) {
//     case "submit_task": {
//       return { tasks: [...state.tasks, action.submit_task] };
//     }

//     case "delete_task": {
//       const updatedTasks = [] as Array<tasksType>;
//       state.tasks.forEach((task: tasksType) => {
//         if (task.id !== action.delete_task.id) {
//           updatedTasks.push(task);
//         }
//       });

//       return { tasks: updatedTasks };
//     }

//     // case 'update_task':{
//     //     return {tasks: [...state.tasks[action.payload],action.payload]};

//     // }

//     default:
//       return state;
//   }
// };

// interface reducerAct {

//   // type : "submit_task"



// }

// export const actions = addToTaskReducer.actions;

// const store = configureStore({
//   reducer: {
//     addToTaskReducer,
//   },
// });

// export default store;



