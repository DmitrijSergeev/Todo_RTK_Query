import {combineReducers, legacy_createStore} from "redux";
import {tasksReducer} from "../store/tasksReducer";
import {todoListsReducer} from "../store/todoListsReducer";

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store;