import axios from "axios";
import {TodoLists} from "../types/types";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        'API-KEY': process.env.REACT_APP_API_KEY,
    }
})

export const todoListsAPI = {
    getTodoLists(){
       return instance.get<TodoLists>('todo-lists')
    },
    postTodoLists(title: string){
        return instance.post(`todo-lists${title}`)
    }
}