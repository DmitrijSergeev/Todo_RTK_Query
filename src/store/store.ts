import {applyMiddleware, combineReducers, legacy_createStore, UnknownAction} from "redux";
import {tasksReducer} from "../store/tasksReducer";
import {todoListsReducer} from "../store/todoListsReducer";
import {thunk, ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer, {},applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>

// @ts-ignore
window.store = store;