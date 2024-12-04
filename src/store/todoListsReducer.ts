import {DomainTodoLists, TodoLists} from "../types/types";
import {Dispatch} from "redux";
import {todoListsAPI} from "../api/api";

const initialState: DomainTodoLists[] = []

export const todoListsReducer = (state = initialState, action: ActionsType): DomainTodoLists[] => {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todoLists.map((tl) => ({...tl, filter: 'all'}))
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setTodoLists>

export const setTodoLists = (todoLists: TodoLists[]) => ({
        type: 'SET-TODOLISTS',
        todoLists
    } as const
)

export const setTodoListsTC = () => (dispatch: Dispatch) => {
    todoListsAPI.getTodoLists().then((res) => {
        dispatch(setTodoLists(res.data))
    })
}