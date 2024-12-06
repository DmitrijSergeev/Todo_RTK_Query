import React, {useEffect} from 'react';
import {DomainTodoLists, TaskStatus} from "../../../../types/types";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {setTasksTC} from "../../../../store/tasksReducer";
import {Task} from "../../../../components/todolists/todolist/tasks/task/task";

type TasksProps = {
    todoList: DomainTodoLists
}

export const Tasks = ({todoList}: TasksProps) => {
    //console.log(todoList)
    const tasks = useAppSelector(state => state.tasks)
    console.log(tasks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log(2)
        dispatch(setTasksTC(todoList.id))
    }, [dispatch, todoList]);

    const allTodolistTasks = tasks[todoList.id]
    let tasksForTodolist = allTodolistTasks
    if (todoList.filter === 'active') {
        tasksForTodolist = allTodolistTasks.filter(t => t.status === TaskStatus.New)
    }
    if (todoList.filter === 'completed') {
        tasksForTodolist = allTodolistTasks.filter(t => t.status === TaskStatus.Completed)
    }

    return (
        <div>
            {tasksForTodolist?.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <div>
                    {tasksForTodolist?.map((task) => {
                        return <Task key={task.id} task={task} todoList={todoList} />
                    })}
                </div>
            )}

            {/*{tasksForTodolist?.map( (task)=>{*/}
            {/*    return (*/}
            {/*        <Task key={task.id} task={task} todoList={todoList}/>*/}
            {/*    )*/}
            {/*} )}*/}
        </div>
    );
};
