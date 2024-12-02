import {TodoLists} from "../types/types";

export const todoListsReducer = (state: any, action: any) => {
    return state
}

export const setTodolistAC = (todoLists: TodoLists[]) => ({
    type: 'SET_TOOLIST_AC',
    todoLists
})