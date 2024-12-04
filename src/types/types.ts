export type TodoLists = {
    addedDate: string
    id: string
    order: number
    title: string
}

export type FilterType = 'all'|'completed'|'active'

export type DomainTodoLists = TodoLists & {
    filter: FilterType
}

export type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: DomainTask[]
}

export type DomainTask = {
    description: string
    title: string
    status: TaskStatus
    priority: TaskPriority
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export enum TaskStatus {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3,
}

export enum TaskPriority {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4,
}

export enum ResultCode {
    Success = 0,
    Error = 1,
    CaptchaError = 10,
}