import {DomainTask} from "../types/types";
import {Dispatch} from "redux";
import {tasksApi} from "../api/api";

export type TaskStateType = Record<string, DomainTask[]>

const initialState: TaskStateType = {}

export const tasksReducer = (state = initialState, action: ActionType): TaskStateType => {
    //debugger
    switch (action.type) {
        case 'SET_TASKS': {
            const stateCopy = {...state}
            console.log(stateCopy, 'stateCopy')
            // @ts-ignore,
            stateCopy[action.payload.todolistId] = action.payload.tasks
            console.log(action.payload.todolistId, 'todolistId')
            console.log(action.payload.tasks, 'tasks')
            console.log(action.payload, 'payload')
            return stateCopy
        }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setTasks>

// export const setTasks = (payload: { todolistId: string; tasks: DomainTask[] }) => ({
//
//         type: 'SET_TASKS',
//         payload
//     } as const
// )

export const setTasks = (payload: {todolistId: string; tasks: DomainTask[]})=> {

    return {
        type: 'SET_TASKS',
        payload
    } as const
}

export const setTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
    tasksApi.getTasks(todolistId).then((res) => {
        //debugger
        dispatch(setTasks({todolistId , tasks: res.data.items})) // items =  [{}]
    })
        .catch(e =>{
            console.warn(e)
        })
}