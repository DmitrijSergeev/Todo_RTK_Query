import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'API-KEY': process.env.REACT_APP_API_KEY,
    }
})

instance.interceptors.request.use(function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("sn-token")}`

    return config
})

export const todoListsAPI = {
    getTodoLists(){
        return instance.get('todo-lists')
    }
}

export const tasksApi = {
    getTasks(taskId: string){
        return instance.get(`todo-lists/${taskId}/tasks`)
    }
}
