import React, {useEffect} from 'react';
import './App.css';
import {TodoList} from "./components/todoLists";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {setTodoListsTC} from "./store/todoListsReducer";
import {setTasksTC} from "./store/tasksReducer";
import {TaskStatus} from "./types/types";

// export type TodolistsType = {
//     todoId: string,
//     title: string,
//     filter: FilterType
// }
// export type TaskType = {
//     id: string,
//     title: string,
//     isDone: boolean,
// }
// export type TaskStateType = Record<string, TaskType[]>

// const todoId_1 = v1()
// const todoId_2 = v1()

function App() {

    // const [todoLists, setTodolists] = useState<TodolistsType[]>([
    //     {todoId: todoId_1, title: 'What to learn?', filter: 'all'},
    //     {todoId: todoId_2, title: 'What to buy?', filter: 'all'},
    // ])
    //
    // const [tasks, setTasks] = useState<TaskStateType>({
    //     [todoId_1]:[
    //         {id: v1(), title: 'HTML', isDone: true},
    //         {id: v1(), title: 'React', isDone: false},
    //         {id: v1(), title: 'Redux', isDone: false},
    //     ],
    //     [todoId_2]:[
    //         {id: v1(), title: 'Milk', isDone: true},
    //         {id: v1(), title: 'Fruit', isDone: true},
    //         {id: v1(), title: 'Book', isDone: false},
    //     ],
    // })

    const todoLists = useAppSelector(state => state.todoLists)
    const tasks = useAppSelector(state => state.tasks);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setTodoListsTC())
    }, [dispatch]);

    useEffect(() => {
        dispatch(setTasksTC(todoLists[0].id))
    }, [dispatch, todoLists]);

    // const changeFilterStatus = (todoId: string, filter: FilterType) => {
    //     setTodolists(todoLists.map(tl => (
    //         tl.todoId === todoId ? {...tl, filter} : tl
    //     )))
    // }

    return (
        <div className="App">
            {todoLists.map((tl) => {
                const allTodolistTasks = tasks[tl.id]
                let tasksForTodolist = allTodolistTasks
                if (tl.filter === 'active') {
                    tasksForTodolist = allTodolistTasks.filter(t => t.status === TaskStatus.New)
                }
                if (tl.filter === 'completed') {
                    tasksForTodolist = allTodolistTasks.filter(t => t.status === TaskStatus.Completed)
                }

                return (
                    <TodoList
                        key={tl.id}
                        tasks={tasksForTodolist}
                        filter={tl.filter}
                        title={tl.title}
                        todoId={tl.id}
                    />
                )
            })}

        </div>
    );
}

export default App;
