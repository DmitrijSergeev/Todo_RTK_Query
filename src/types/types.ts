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