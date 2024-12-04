import {DomainTask} from "../types/types";
import {Dispatch} from "redux";
import {tasksApi} from "../api/api";

export type TaskStateType = Record<string, DomainTask[]>

const initialState: TaskStateType = {}

export const tasksReducer = (state = initialState, action: ActionType): TaskStateType => {
    switch (action.type) {
        case 'SET_TASKS': {
            const stateCopy = { ...state }
            stateCopy[action.payload.todolistId] = action.payload.tasks
            return stateCopy
        }
    }
}

type ActionType = ReturnType<typeof setTasks>

export const setTasks = (payload: { todolistId: string; tasks: DomainTask[] }) => ({
        type: 'SET_TASKS',
        payload
    } as const
)

export const setTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
    tasksApi.getTasks(todolistId).then( (res)=>{
        dispatch(setTasks(res.data))
    } )
}